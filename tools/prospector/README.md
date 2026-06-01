# 🔎 Prospector — Generador de clientes potenciales

Herramienta de la agencia. Busca negocios reales por **nicho + zona** en Google Maps
(vía Google Places API oficial) y te devuelve un **CSV listo para prospectar**:
nombre, teléfono, web (o si NO tiene), rating, reseñas, link a Maps.

Es el **primer eslabón del embudo de captación**: sin lista de clientes potenciales,
no hay a quién mandar emails ni a quién llamar.

---

## Qué hace exactamente

1. Busca el nicho que le pidas en la zona que le digas (varias búsquedas por nicho, deduplicadas).
2. Clasifica cada negocio:
   - **🎯 SIN web** = oportunidad oro (necesita presencia digital + IA desde cero)
   - **🌐 Con web** = segundo objetivo (automatización/IA sobre lo que ya tiene)
3. Ordena: oportunidades primero, luego por nº de reseñas (los que más facturan).
4. Exporta CSV con columnas para tu embudo (`estado_contacto`, `canal`, `fecha`, `notas`).
5. Te recuerda el **dolor IA** de ese nicho para tu primer mensaje.

---

## Nichos predefinidos (de la mentoría)

| Nicho | Comando | Ticket |
|---|---|---|
| Abogados / despachos | `--nicho abogados` | alto |
| Clínicas / centros médicos | `--nicho clinicas` | alto |
| Tiendas físicas | `--nicho tiendas` | medio-alto |
| Venta de vehículos | `--nicho vehiculos` | alto |
| Restaurantes / hostelería | `--nicho restaurantes` | medio |

También puedes buscar cualquier nicho libre: `--nicho "gimnasios"`, `--nicho "peluquerías"`, etc.

---

## Setup (una sola vez, ~5 min)

### 1. Conseguir la clave de Google Places API (gratis)

Google da **$200/mes de crédito gratis** = miles de búsquedas. Para tu volumen, es gratis.

1. Entra a **https://console.cloud.google.com/**
2. Crea un proyecto nuevo (botón arriba, "New Project") — nómbralo p.ej. "prospector"
3. Ve a **"APIs y servicios" → "Biblioteca"**, busca **"Places API (New)"** y pulsa **Habilitar**
4. Ve a **"APIs y servicios" → "Credenciales" → "Crear credenciales" → "Clave de API"**
5. Copia la clave (empieza por `AIza...`)
6. (Recomendado) Pulsa "Restringir clave" → en "Restricciones de API" selecciona solo "Places API (New)"
7. Activar facturación: Google pide una tarjeta para verificar, pero **no cobra** mientras estés bajo los $200/mes. Tu uso será céntimos.

### 2. Configurar la herramienta

```bash
cd tools/prospector
copy .env.example .env          # (Windows)   o:  cp .env.example .env  (Mac/Linux)
```

Abre `.env` y pega tu clave:
```
GOOGLE_PLACES_API_KEY=AIza...tu_clave_real
```

---

## Uso

```bash
cd tools/prospector

# Abogados en Torrejón, hasta 40 resultados
node prospector.mjs --nicho abogados --zona "Torrejón de Ardoz" --max 40

# Clínicas en Alcalá de Henares
node prospector.mjs --nicho clinicas --zona "Alcalá de Henares"

# Nicho libre
node prospector.mjs --nicho "gimnasios" --zona "Coslada"
```

El CSV se guarda en `tools/prospector/output/` (no se sube a git — datos privados).

---

## Qué hacer con el CSV

1. Ábrelo en Excel / Google Sheets / Notion.
2. Empieza por las filas marcadas **🎯 ORO (sin web)** — son las que más te necesitan.
3. Por cada una, arranca el embudo de captación:
   - **Email** → plantilla en `agencia-ia/scripts-outreach/email-cold-l2.md`
   - **LinkedIn** → `agencia-ia/scripts-outreach/linkedin-outbound-l2.md`
   - **Llamada en frío** → guion (pendiente de crear)
4. Actualiza la columna `estado_contacto` a medida que avanzas (nuevo → contactado → respondió → reunión → cliente).

---

## Coste real

| Volumen | Coste |
|---|---|
| ~5.000 búsquedas/mes | $0 (dentro del crédito gratis de Google) |
| Tu uso típico (cientos/mes) | $0 |

Cada ejecución de un nicho = 1-4 llamadas API (una por query interna). Prácticamente gratis.

---

## Límites / notas honestas

- Google Places devuelve **hasta ~60 resultados por búsqueda** (límite de la API). Para zonas grandes, divide por barrios: `--zona "Malasaña, Madrid"`, `--zona "Chamberí, Madrid"`.
- El teléfono y la web no siempre están (depende de lo que el negocio haya puesto en Google).
- Respeta el uso legítimo: esto es prospección comercial estándar (datos públicos de negocios), no scraping masivo.

---

## Roadmap de la herramienta (próximas mejoras)

- [ ] Modo batch: varios nichos + zonas de un tirón desde un archivo de config
- [ ] Enriquecer con email (cruzar web → buscar email de contacto)
- [ ] Detectar "web obsoleta" (sin HTTPS, sin móvil) automáticamente
- [ ] Conexión directa a Notion/CRM (en vez de CSV manual)
- [ ] Dashboard web dentro de la landing de la agencia
