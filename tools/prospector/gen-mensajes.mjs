import { readFileSync, writeFileSync } from "node:fs";

const csvPath = process.argv[2];
const txt = readFileSync(csvPath, "utf8").replace(/^﻿/, "");

function parseCSV(line) {
  const out = [];
  let cur = "", q = false;
  for (const c of line) {
    if (c === '"') q = !q;
    else if (c === "," && !q) { out.push(cur); cur = ""; }
    else cur += c;
  }
  out.push(cur);
  return out;
}

const lines = txt.split(/\r?\n/).filter(Boolean);
const H = parseCSV(lines[0]);
const i = (n) => H.indexOf(n);
let rows = lines.slice(1).map(parseCSV);

rows = rows.filter((r) => {
  const tel = (r[i("telefono")] || "").split(";")[0].trim();
  const web = (r[i("tiene_web_propia")] || "");
  return /^\+34[\d ]{7,}$/.test(tel) && /no|false/i.test(web);
});

const MAX = Number(process.argv[3]) || 30;
const top = rows.slice(0, MAX);

const DEMO_URL = "https://demo-trattoria-mario.vercel.app"; // <-- cambia por tu URL real tras deploy
const TU_NOMBRE = "Jorge";
const ZONA = "Torrejón de Ardoz";

let md = `# 📲 Mensajes listos para enviar — Restaurantes ${ZONA}\n\n`;
md += `> Generado desde el prospector gratis (OpenStreetMap). Coste: 0 €.\n`;
md += `> ⚠️ Antes de enviar: cambia DEMO_URL por tu URL real de Vercel.\n`;
md += `> Regla: máx 20-30 WhatsApp/día desde el mismo número. Varía algún detalle.\n\n---\n\n`;

top.forEach((r, n) => {
  const nombre = r[i("nombre")];
  const tel = r[i("telefono")].split(";")[0].trim();
  const maps = r[i("maps_url")] || "";
  md += `## ${n + 1}. ${nombre}\n`;
  md += `- **Tel:** ${tel}\n`;
  if (maps) md += `- **Maps:** ${maps}\n`;
  md += `- **Estado:** [ ] enviado  [ ] respondió  [ ] llamada\n\n`;
  md += "```\n";
  md += `Buenas! Soy ${TU_NOMBRE}, de ${ZONA}.\n\n`;
  md += `Llevo unos meses haciendo webs a restaurantes de la zona y vi que ${nombre} `;
  md += `no tiene web propia. ¿Os interesaría que os mandara un ejemplo de cómo podría `;
  md += `quedar la vuestra? Sin compromiso ninguno.\n\n`;
  md += `Es un mensaje real, no es publicidad masiva 👌\n`;
  md += "```\n\n";
  md += `_Si responde "qué necesitas":_ mándale → ${DEMO_URL} + "$400 únicos, lista en 72h, con reservas y WhatsApp. ¿Te llamo 10 min?"\n\n---\n\n`;
});

const outPath = csvPath.replace(/[^\\/]+$/, "MENSAJES-LISTOS.md");
writeFileSync(outPath, md, "utf8");
console.log(`OK -> ${outPath}`);
console.log(`Prospectos con tel limpio y sin web: ${rows.length} (mensajes generados: ${top.length})`);
