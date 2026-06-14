// gen-mensajes.mjs — Genera mensajes WhatsApp listos por nicho
// Uso: node gen-mensajes.mjs <csv> [max] [nicho]
// Ejemplos:
//   node gen-mensajes.mjs output/restaurantes-xxx.csv 20 restaurantes
//   node gen-mensajes.mjs output/clinicas-xxx.csv 15 clinicas

import { readFileSync, writeFileSync } from "node:fs";

const csvPath = process.argv[2];
const MAX = Number(process.argv[3]) || 20;
const NICHO = (process.argv[4] || "restaurantes").toLowerCase();

const TU_NOMBRE = "Jorge";
const ZONA = "Madrid Este";

// Mensajes y follow-ups por nicho
const COPY = {
  restaurantes: {
    titulo: "Restaurantes",
    msg1: (nombre) =>
`Buenas! Soy ${TU_NOMBRE}, de la zona.

Llevo unos meses haciendo webs a restaurantes de aquí y vi que ${nombre} no tiene web propia. ¿Os interesaría que os mandara un ejemplo de cómo podría quedar la vuestra? Sin compromiso.

Es un mensaje real, no es publicidad masiva 👌`,
    siResponde: (url) => `Mándale: ${url} + "Web completa: $400 únicos, lista en 72h, con reservas y WhatsApp directo. ¿Te llamo 10 min?"`,
  },
  clinicas: {
    titulo: "Clínicas",
    msg1: (nombre) =>
`Buenas, soy ${TU_NOMBRE}.

Vi que ${nombre} no tiene web propia o está desactualizada. Para clínicas de la zona estoy montando webs con citas online automáticas — el paciente reserva solo, sin llamar a recepción.

¿Te mando un ejemplo de cómo quedaría? Sin compromiso ninguno.`,
    siResponde: (_url) => `"Web clínica con citas online: $400 únicos, lista en 72h. Reduce llamadas a recepción desde el día 1. ¿Hablamos 10 min esta semana?"`,
  },
  abogados: {
    titulo: "Abogados / Despachos",
    msg1: (nombre) =>
`Hola, soy ${TU_NOMBRE}.

Vi el despacho ${nombre} y quería preguntaros si tenéis web propia con formulario de consulta. La mayoría de despachos de la zona pierden clientes porque no aparecen en Google o no tienen forma de contacto directa.

¿Os interesa que os muestre cómo queda una web profesional para despachos? Sin compromiso.`,
    siResponde: (_url) => `"Web despacho con formulario de consulta: $400 únicos, 72h. Aparecéis en Google y captáis clientes 24/7. ¿Hablamos?"`,
  },
  vehiculos: {
    titulo: "Concesionarios / Vehículos",
    msg1: (nombre) =>
`Buenas, soy ${TU_NOMBRE}.

Vi ${nombre} en Maps y me fijé que no tenéis web propia para mostrar el stock. Los leads que llegan por Google y no encuentran web se van a la competencia directamente.

¿Os mando un ejemplo de cómo quedaría vuestra web con el catálogo? Sin compromiso.`,
    siResponde: (_url) => `"Web con catálogo de vehículos: $400 únicos, 72h. Captáis leads cualificados desde Google. ¿Te llamo 10 min?"`,
  },
};

const copy = COPY[NICHO] || COPY["restaurantes"];

// --- Parse CSV ---
const txt = readFileSync(csvPath, "utf8").replace(/^﻿/, "");
function parseCSV(line) {
  const out = []; let cur = "", q = false;
  for (const c of line) {
    if (c === '"') q = !q;
    else if (c === "," && !q) { out.push(cur); cur = ""; }
    else cur += c;
  }
  out.push(cur); return out;
}
const lines = txt.split(/\r?\n/).filter(Boolean);
const H = parseCSV(lines[0]);
const idx = (n) => H.indexOf(n);
let rows = lines.slice(1).map(parseCSV);

rows = rows.filter((r) => {
  const tel = (r[idx("telefono")] || "").split(";")[0].trim();
  const web = (r[idx("tiene_web_propia")] || "");
  return /^\+34[\d ]{7,}$/.test(tel) && /no|false/i.test(web);
});

const top = rows.slice(0, MAX);

// --- Generar MD ---
const DEMO_URL = "⚠️ PON-AQUI-TU-URL-DE-DEMO (vercel --prod)";

let md = `# 📲 Mensajes WhatsApp listos — ${copy.titulo} · ${ZONA}\n\n`;
md += `> Coste: 0 € · Fuente: OpenStreetMap\n`;
md += `> ⚠️ Sustituye DEMO_URL por tu URL real de Vercel antes de enviar.\n`;
md += `> Regla: máx 20-25 mensajes/día. Varía algún detalle entre mensajes.\n\n---\n\n`;

top.forEach((r, n) => {
  const nombre = r[idx("nombre")];
  const tel = r[idx("telefono")].split(";")[0].trim();
  const maps = r[idx("maps_url")] || "";
  md += `## ${n + 1}. ${nombre}\n`;
  md += `- **Tel:** ${tel}\n`;
  if (maps) md += `- **Maps:** ${maps}\n`;
  md += `- **Estado:** [ ] enviado · [ ] respondió · [ ] llamada · [ ] cerrado\n\n`;
  md += "**Mensaje 1 (copiar-pegar):**\n```\n";
  md += copy.msg1(nombre);
  md += "\n```\n\n";
  md += `**Si responde:** ${copy.siResponde(DEMO_URL)}\n\n---\n\n`;
});

const outName = csvPath.replace(/[^\\/]+$/, `MENSAJES-${NICHO.toUpperCase()}.md`);
writeFileSync(outName, md, "utf8");
console.log(`✅ ${top.length} mensajes → ${outName}`);
console.log(`   Total prospectos con tel+sin web: ${rows.length}`);
