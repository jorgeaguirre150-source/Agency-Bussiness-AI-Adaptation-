# ☀️ MAÑANA — Empieza por aquí (0 €)

> Todo está armado. Solo ejecuta estos 3 pasos. Objetivo del día: **10-15 WhatsApp enviados.**

---

## Paso 1 — Deploy la demo (5 min, gratis)

```powershell
npm install -g vercel    # solo la primera vez
vercel login             # solo la primera vez
cd "C:\Users\Aguir\Desktop\Jorge\Documentos Varios\Code\web-agency-ia\clientes\_demo-trattoria-mario"
vercel --prod
```
→ Copia la URL que te da (tipo `https://demo-trattoria-mario.vercel.app`).

## Paso 2 — Mete la URL real en los mensajes (10 seg)

Avísale a Claude con la URL → la inyecta en `MENSAJES-LISTOS.md`.
(O cámbiala tú: editar `DEMO_URL` en `tools/prospector/gen-mensajes.mjs` y volver a ejecutar.)

## Paso 3 — Enviar (horario óptimo: martes-viernes 10:00-12:00)

1. Abre WhatsApp Web.
2. Abre `tools/prospector/output/MENSAJES-LISTOS.md`.
3. Por cada prospecto: copia el bloque, pega en su chat, envía.
4. Marca `[x] enviado`. Para a los 15-20 (no más, riesgo de baneo).

---

## Si responden
- **"¿qué necesitas?"** → manda la URL de la demo + "$400 únicos, 72h, reservas+WhatsApp. ¿Te llamo 10 min?"
- **"es caro"** → script en `02-captacion/scripts-outreach/whatsapp.md` (mensaje 4).
- **"sí, quiero"** → cobras 50% por Bizum → `.\scripts\onboard-cliente.ps1 -Nombre "x"` → personalizas → `deploy-cliente.ps1` → entregas → cobras resto.

---

## Recordatorio estratégico
- Hoy: restaurantes ($400) = arranque y soltura.
- Tras 2-3 cierres: saltar a **clínicas/abogados** (ticket $1.5-5K) = el motor de los 10K.
- **Regla:** 1 frente a la vez. Vender > construir.

✅ Estado: sistema operativo, build blindado, 30 mensajes cargados. Coste 0 €.
