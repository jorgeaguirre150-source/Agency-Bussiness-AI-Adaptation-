#!/usr/bin/env node
// =============================================================
// PROSPECTOR — Genera listas de clientes potenciales por nicho+zona
// usando la Google Places API (New). Exporta CSV listo para el embudo
// de captación de la agencia (email / llamada / marca personal).
//
// Uso:
//   node prospector.mjs --nicho abogados --zona "Torrejón de Ardoz" --max 40
//   node prospector.mjs --nicho clinicas --zona "Alcalá de Henares"
//   node prospector.mjs --nicho "gimnasios" --zona "Coslada"   (nicho libre)
//
// Requiere:  .env con GOOGLE_PLACES_API_KEY  (ver README.md)
// =============================================================

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { resolverNicho } from "./nichos.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ---------- 1. Cargar API key (.env simple, sin dependencias) ----------
function cargarEnv() {
  const envPath = join(__dirname, ".env");
  if (!existsSync(envPath)) return {};
  const env = {};
  for (const linea of readFileSync(envPath, "utf8").split("\n")) {
    const m = linea.match(/^\s*([A-Z_]+)\s*=\s*(.*)\s*$/);
    if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, "").trim();
  }
  return env;
}

const env = cargarEnv();
const API_KEY = process.env.GOOGLE_PLACES_API_KEY || env.GOOGLE_PLACES_API_KEY;

// ---------- 2. Parsear argumentos CLI ----------
function parseArgs(argv) {
  const args = {};
  for (let i = 2; i < argv.length; i++) {
    if (argv[i].startsWith("--")) {
      const key = argv[i].slice(2);
      const val = argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[++i] : "true";
      args[key] = val;
    }
  }
  return args;
}

const args = parseArgs(process.argv);

if (!args.nicho || !args.zona) {
  console.log(`
PROSPECTOR — clientes potenciales por nicho + zona

Uso:
  node prospector.mjs --nicho <nicho> --zona "<zona>" [--max <n>]

Nichos predefinidos: abogados, clinicas, tiendas, vehiculos, restaurantes
(o cualquier texto libre, ej: --nicho "gimnasios")

Ejemplos:
  node prospector.mjs --nicho abogados --zona "Torrejón de Ardoz" --max 40
  node prospector.mjs --nicho clinicas --zona "Madrid"
`);
  process.exit(0);
}

if (!API_KEY || API_KEY === "tu_clave_aqui") {
  console.error(`
[ERROR] Falta la clave de Google Places API.
   1. Copia .env.example a .env
   2. Pega tu clave en GOOGLE_PLACES_API_KEY
   3. Cómo conseguir la clave (gratis): lee README.md
`);
  process.exit(1);
}

const nicho = resolverNicho(args.nicho);
const zona = args.zona;
const maxResultados = parseInt(args.max || "60", 10);

// ---------- 3. Llamada a Google Places API (New) — Text Search ----------
async function buscarPagina(textQuery, pageToken = null) {
  const body = { textQuery, languageCode: "es", maxResultCount: 20 };
  if (pageToken) body.pageToken = pageToken;

  const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": API_KEY,
      "X-Goog-FieldMask": [
        "places.id",
        "places.displayName",
        "places.formattedAddress",
        "places.nationalPhoneNumber",
        "places.internationalPhoneNumber",
        "places.websiteUri",
        "places.rating",
        "places.userRatingCount",
        "places.googleMapsUri",
        "places.businessStatus"
      ].join(","),
      "nextPageToken": ""
    },
    body: JSON.stringify(body)
  });

  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`Places API ${res.status}: ${txt}`);
  }
  return res.json();
}

async function buscarNicho(query, zona, max) {
  const textQuery = `${query} en ${zona}`;
  const resultados = [];
  let pageToken = null;

  do {
    const data = await buscarPagina(textQuery, pageToken);
    if (data.places) resultados.push(...data.places);
    pageToken = data.nextPageToken || null;
    // Google exige una pequeña pausa antes de usar el pageToken
    if (pageToken && resultados.length < max) await new Promise(r => setTimeout(r, 2000));
  } while (pageToken && resultados.length < max);

  return resultados.slice(0, max);
}

// ---------- 4. CSV helpers ----------
function csvCampo(v) {
  if (v === null || v === undefined) return "";
  const s = String(v).replace(/"/g, '""');
  return /[",\n;]/.test(s) ? `"${s}"` : s;
}

// ---------- 4b. Detector de NECESIDAD ----------
// Analiza señales públicas que indican que un negocio necesita la agencia.
// Devuelve un score 0-100, un nivel, y el "porqué" (= tu gancho de venta).
function analizarNecesidad(p) {
  const web = p.websiteUri || "";
  const reviews = p.userRatingCount || 0;
  const rating = p.rating || 0;
  const tieneTel = !!(p.nationalPhoneNumber || p.internationalPhoneNumber);

  // ¿La "web" es en realidad una red social / linktree? = no tiene web propia.
  const esWebSocial = /facebook\.|instagram\.|linktr\.|tiktok\.|wa\.me|business\.site|beacons\.|linktree/i.test(web);
  const sinWeb = !web;
  const tieneWebReal = web && !esWebSocial;

  let score = 0;
  const motivos = [];

  // Señal 1 — presencia digital (la más importante)
  if (sinWeb) { score += 45; motivos.push("sin web propia"); }
  else if (esWebSocial) { score += 35; motivos.push("solo redes sociales (sin web propia)"); }

  // Señal 2 — volumen de actividad (muchos clientes = mucha gestión manual = necesita automatizar)
  if (reviews > 100) { score += 25; motivos.push(`${reviews} reseñas (mucho volumen de clientes)`); }
  else if (reviews >= 30) { score += 15; motivos.push(`${reviews} reseñas (negocio activo)`); }
  else if (reviews >= 10) { score += 8; }
  else if (reviews > 0) { score += 3; motivos.push("poca presencia online (pocas reseñas)"); }

  // Señal 3 — reputación mejorable (margen para mejorar atención al cliente con IA)
  if (rating >= 3 && rating <= 4.2 && reviews >= 5) { score += 15; motivos.push(`rating ${rating} (mejorable)`); }
  else if (rating > 4.2 && rating <= 4.6) { score += 8; }
  else if (rating < 3 && reviews >= 5) { score += 5; motivos.push(`rating ${rating} (problemas de reputación)`); }

  // Señal 4 — contactable por teléfono (canal saturable que la IA descarga)
  if (tieneTel) { score += 5; }

  if (score > 100) score = 100;

  let nivel;
  if (score >= 60) nivel = "🔥 ALTA";
  else if (score >= 35) nivel = "🟡 MEDIA";
  else nivel = "🟢 BAJA";

  return {
    score,
    nivel,
    sinWebReal: sinWeb || esWebSocial,
    porque: motivos.join(" · ") || "presencia digital aceptable"
  };
}

// ---------- 5. Ejecución ----------
console.log(`\n🔎 Prospección: ${nicho.label}  ·  ${zona}\n`);

const vistos = new Set();
const filas = [];

for (const query of nicho.queries) {
  process.stdout.write(`   Buscando "${query}"... `);
  try {
    const places = await buscarNicho(query, zona, maxResultados);
    let nuevos = 0;
    for (const p of places) {
      if (vistos.has(p.id)) continue;
      vistos.add(p.id);
      nuevos++;
      const tieneWeb = p.websiteUri ? "sí" : "NO";
      const n = analizarNecesidad(p);
      filas.push({
        // --- prioridad de necesidad (lo primero que miras) ---
        nivel_necesidad: n.nivel,
        score_necesidad: n.score,
        por_que_necesita: n.porque,
        // --- datos del negocio ---
        nombre: p.displayName?.text || "",
        nicho: nicho.key,
        zona,
        direccion: p.formattedAddress || "",
        telefono: p.nationalPhoneNumber || p.internationalPhoneNumber || "",
        web: p.websiteUri || "",
        tiene_web_propia: n.sinWebReal ? "NO" : "sí",
        rating: p.rating ?? "",
        num_reviews: p.userRatingCount ?? "",
        estado_negocio: p.businessStatus || "",
        maps_url: p.googleMapsUri || "",
        // --- columnas para el embudo (las rellenas tú al contactar) ---
        estado_contacto: "nuevo",
        canal: "",
        fecha_contacto: "",
        notas: ""
      });
    }
    console.log(`${nuevos} nuevos`);
  } catch (e) {
    console.log(`ERROR — ${e.message}`);
  }
}

if (filas.length === 0) {
  console.log("\n⚠️  Sin resultados. Revisa nicho/zona o tu API key.\n");
  process.exit(0);
}

// Ordenar por NECESIDAD: los que más requieren asistencia, primero.
filas.sort((a, b) => {
  if (b.score_necesidad !== a.score_necesidad) return b.score_necesidad - a.score_necesidad;
  return (b.num_reviews || 0) - (a.num_reviews || 0);
});

// ---------- 6. Escribir CSV ----------
const columnas = Object.keys(filas[0]);
const csv = [
  columnas.join(","),
  ...filas.map(f => columnas.map(c => csvCampo(f[c])).join(","))
].join("\n");

const outDir = join(__dirname, "output");
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

const fecha = new Date().toISOString().slice(0, 10);
const slug = `${nicho.key}-${zona.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${fecha}`;
const outPath = join(outDir, `${slug}.csv`);
writeFileSync(outPath, "﻿" + csv, "utf8"); // BOM para que Excel abra UTF-8 bien

// ---------- 7. Resumen ----------
const alta = filas.filter(f => f.nivel_necesidad.includes("ALTA")).length;
const media = filas.filter(f => f.nivel_necesidad.includes("MEDIA")).length;
const baja = filas.filter(f => f.nivel_necesidad.includes("BAJA")).length;
const sinWeb = filas.filter(f => f.tiene_web_propia === "NO").length;

// Top 5 de mayor necesidad para verlos en consola al instante
const top = filas.slice(0, 5);

console.log(`
✅ ${filas.length} prospectos encontrados · ordenados por NECESIDAD de asistencia

   🔥 ${alta} ALTA necesidad   → empieza por estos
   🟡 ${media} MEDIA necesidad
   🟢 ${baja} BAJA necesidad
   (${sinWeb} sin web propia)

🏆 TOP 5 que más necesitan tu ayuda:`);

top.forEach((f, i) => {
  console.log(`   ${i + 1}. ${f.nivel_necesidad}  ${f.nombre}`);
  console.log(`      → ${f.por_que_necesita}`);
  console.log(`      ${f.telefono || "(sin tel)"}  ·  ${f.maps_url}`);
});

console.log(`
💡 Gancho de venta del nicho (úsalo en el primer contacto):
   ${nicho.dolor_ia}

📄 CSV completo (ordenado por necesidad) en:
   ${outPath}

➡️  Siguiente paso: contacta a los 🔥 ALTA primero. Cada fila trae su "por_que_necesita"
   = tu ángulo de venta concreto. Guiones en agencia-ia/scripts-outreach/.
`);
