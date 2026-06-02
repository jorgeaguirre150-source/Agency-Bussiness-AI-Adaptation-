#!/usr/bin/env node
// =============================================================
// PROSPECTOR GRATIS — Clientes potenciales SIN coste, SIN tarjeta,
// SIN API key. Usa OpenStreetMap (Nominatim + Overpass), 100% abierto.
//
// Uso:
//   node prospector-gratis.mjs --nicho abogados --zona "Torrejón de Ardoz"
//   node prospector-gratis.mjs --nicho restaurantes --zona "Alcalá de Henares"
//
// Trade-off honesto: OSM es gratis total pero tiene MENOS cobertura que
// Google (algunos negocios pequeños no están, o no tienen tel/web cargados).
// Para arrancar a coste 0 es perfecto. Cuando tengas ingresos, la versión
// Google (prospector.mjs) da datos más completos.
// =============================================================

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { resolverNicho } from "./nichos.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ---------- Mapeo nicho -> etiquetas OpenStreetMap ----------
const TAGS_OSM = {
  abogados:     ['"office"="lawyer"', '"office"="notary"'],
  clinicas:     ['"amenity"="clinic"', '"amenity"="dentist"', '"amenity"="doctors"', '"healthcare"="clinic"', '"healthcare"="dentist"', '"healthcare"="centre"'],
  tiendas:      ['"shop"="clothes"', '"shop"="jewelry"', '"shop"="shoes"', '"shop"="optician"', '"shop"="furniture"', '"shop"="gift"'],
  vehiculos:    ['"shop"="car"', '"shop"="car_repair"', '"shop"="motorcycle"'],
  restaurantes: ['"amenity"="restaurant"', '"amenity"="cafe"', '"amenity"="bar"', '"amenity"="fast_food"']
};

// ---------- Args ----------
function parseArgs(argv) {
  const a = {};
  for (let i = 2; i < argv.length; i++) {
    if (argv[i].startsWith("--")) {
      const k = argv[i].slice(2);
      a[k] = argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[++i] : "true";
    }
  }
  return a;
}
const args = parseArgs(process.argv);

if (!args.nicho || !args.zona) {
  console.log(`
PROSPECTOR GRATIS (OpenStreetMap) — sin tarjeta, sin API key

Uso:
  node prospector-gratis.mjs --nicho <nicho> --zona "<zona>"

Nichos: abogados, clinicas, tiendas, vehiculos, restaurantes
Ejemplo:
  node prospector-gratis.mjs --nicho abogados --zona "Torrejón de Ardoz"
`);
  process.exit(0);
}

const nicho = resolverNicho(args.nicho);
const zona = args.zona;
const tagsOSM = TAGS_OSM[nicho.key] || [`"name"~".",i`]; // fallback genérico
const UA = "prospector-agencia-ia/1.0 (prospeccion comercial)";

// ---------- 1. Geocodificar la zona (Nominatim) -> bounding box ----------
async function geocodificar(zona) {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(zona)}&format=json&limit=1`;
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`Nominatim ${res.status}`);
  const data = await res.json();
  if (!data.length) throw new Error(`No encuentro la zona "${zona}". Prueba a ser más específico (ej: "Torrejón de Ardoz, Madrid").`);
  // boundingbox: [south, north, west, east]
  const [s, n, w, e] = data[0].boundingbox.map(Number);
  return { s, n, w, e, nombre: data[0].display_name };
}

// ---------- 2. Construir y lanzar query Overpass ----------
// Varios servidores espejo: si uno está saturado (504), prueba el siguiente.
const OVERPASS_MIRRORS = [
  "https://overpass-api.de/api/interpreter",
  "https://overpass.kumi.systems/api/interpreter",
  "https://overpass.private.coffee/api/interpreter",
  "https://maps.mail.ru/osm/tools/overpass/api/interpreter"
];

async function buscarOverpass(tags, bbox) {
  const { s, w, n, e } = bbox;
  const clausulas = tags.flatMap(t => [
    `  node[${t}](${s},${w},${n},${e});`,
    `  way[${t}](${s},${w},${n},${e});`
  ]).join("\n");
  const query = `[out:json][timeout:60];\n(\n${clausulas}\n);\nout center tags;`;

  let ultimoError = "";
  for (const endpoint of OVERPASS_MIRRORS) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded", "User-Agent": UA },
        body: "data=" + encodeURIComponent(query)
      });
      if (!res.ok) { ultimoError = `${endpoint} → ${res.status}`; continue; }
      const data = await res.json();
      return data.elements || [];
    } catch (e) {
      ultimoError = `${endpoint} → ${e.message}`;
    }
  }
  throw new Error(`Todos los servidores Overpass ocupados. Último: ${ultimoError}. Reintenta en 1-2 min.`);
}

// ---------- 3. Detector de necesidad (adaptado a datos OSM) ----------
// Nota: OSM tiene datos de contacto incompletos, así que el score se basa en la
// señal MÁS FIABLE que sí refleja realidad: tener (o no) web propia.
// El teléfono/email solo se muestran como info, no penalizan el score (evita falsos positivos).
function analizarNecesidad(tags) {
  const web = tags.website || tags["contact:website"] || "";
  const esWebSocial = /facebook\.|instagram\.|linktr\.|tiktok\.|wa\.me|business\.site/i.test(web);
  const sinWeb = !web;

  let score = 0;
  const motivos = [];
  if (sinWeb) { score += 60; motivos.push("sin web propia (según OpenStreetMap)"); }
  else if (esWebSocial) { score += 45; motivos.push("solo redes sociales"); }
  else { score += 10; motivos.push("tiene web propia"); }

  if (score > 100) score = 100;
  let nivel = score >= 50 ? "🔥 ALTA" : score >= 30 ? "🟡 MEDIA" : "🟢 BAJA";
  return { score, nivel, sinWebReal: sinWeb || esWebSocial, porque: motivos.join(" · ") };
}

function csvCampo(v) {
  if (v === null || v === undefined) return "";
  const s = String(v).replace(/"/g, '""');
  return /[",\n;]/.test(s) ? `"${s}"` : s;
}

function direccionDe(t) {
  const p = [t["addr:street"], t["addr:housenumber"], t["addr:postcode"], t["addr:city"]].filter(Boolean);
  return p.join(", ");
}

// ---------- 4. Ejecución ----------
console.log(`\n🔎 Prospección GRATIS (OpenStreetMap): ${nicho.label}  ·  ${zona}\n`);

let bbox;
try {
  process.stdout.write("   Localizando zona... ");
  bbox = await geocodificar(zona);
  console.log("OK");
} catch (e) {
  console.error(`\n[ERROR] ${e.message}\n`);
  process.exit(1);
}

let elementos;
try {
  process.stdout.write("   Buscando negocios en OpenStreetMap... ");
  elementos = await buscarOverpass(tagsOSM, bbox);
  console.log(`${elementos.length} encontrados`);
} catch (e) {
  console.error(`\n[ERROR] ${e.message}\n   (Overpass a veces va lento; reintenta en 1 min.)\n`);
  process.exit(1);
}

const vistos = new Set();
const filas = [];
for (const el of elementos) {
  const t = el.tags || {};
  if (!t.name) continue;                       // sin nombre = ruido
  const idkey = t.name.toLowerCase().trim();
  if (vistos.has(idkey)) continue;
  vistos.add(idkey);

  const web = t.website || t["contact:website"] || "";
  const tel = t.phone || t["contact:phone"] || t["contact:mobile"] || "";
  const lat = el.lat || el.center?.lat;
  const lon = el.lon || el.center?.lon;
  const n = analizarNecesidad(t);

  filas.push({
    nivel_necesidad: n.nivel,
    score_necesidad: n.score,
    por_que_necesita: n.porque,
    nombre: t.name,
    nicho: nicho.key,
    zona,
    direccion: direccionDe(t),
    telefono: tel,
    web,
    tiene_web_propia: n.sinWebReal ? "NO" : "sí",
    // Link a Google Maps SIEMPRE: por coords si las hay, si no por nombre+zona,
    // para que puedas completar teléfono/web reales que OSM no tenga.
    maps_url: lat && lon
      ? `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`
      : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t.name + " " + zona)}`,
    estado_contacto: "nuevo",
    canal: "",
    fecha_contacto: "",
    notas: ""
  });
}

if (filas.length === 0) {
  console.log(`
⚠️  Sin resultados en OpenStreetMap para este nicho/zona.
   OSM tiene menos cobertura que Google. Prueba:
   - Una zona más amplia (ej: "Madrid" en vez de un barrio)
   - Otro nicho
   - O usa la versión Google (prospector.mjs) para más cobertura.
`);
  process.exit(0);
}

filas.sort((a, b) => (b.score_necesidad - a.score_necesidad) || a.nombre.localeCompare(b.nombre));

// ---------- 5. CSV ----------
const columnas = Object.keys(filas[0]);
const csv = [columnas.join(","), ...filas.map(f => columnas.map(c => csvCampo(f[c])).join(","))].join("\n");
const outDir = join(__dirname, "output");
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
const fecha = new Date().toISOString().slice(0, 10);
const slug = `${nicho.key}-${zona.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${fecha}-osm`;
const outPath = join(outDir, `${slug}.csv`);
writeFileSync(outPath, "﻿" + csv, "utf8");

// ---------- 6. Resumen ----------
const alta = filas.filter(f => f.nivel_necesidad.includes("ALTA")).length;
const media = filas.filter(f => f.nivel_necesidad.includes("MEDIA")).length;
const baja = filas.filter(f => f.nivel_necesidad.includes("BAJA")).length;
const top = filas.slice(0, 5);

console.log(`
✅ ${filas.length} prospectos · ordenados por NECESIDAD de asistencia

   🔥 ${alta} ALTA   🟡 ${media} MEDIA   🟢 ${baja} BAJA

🏆 TOP 5 que más necesitan tu ayuda:`);
top.forEach((f, i) => {
  console.log(`   ${i + 1}. ${f.nivel_necesidad}  ${f.nombre}`);
  console.log(`      → ${f.por_que_necesita}`);
  console.log(`      ${f.telefono || "(sin tel)"}  ·  ${f.direccion || "(sin dirección)"}`);
});

console.log(`
💡 Gancho de venta del nicho:
   ${nicho.dolor_ia}

📄 CSV en: ${outPath}

➡️  Contacta primero a los 🔥 ALTA. Guiones en agencia-ia/scripts-outreach/.
   Nota: OSM da menos tel/web que Google. Lo que falte, lo completas mirando
   su ficha de Google Maps (el maps_url te lleva).
`);
