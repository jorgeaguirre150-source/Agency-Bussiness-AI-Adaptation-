# Caso de uso 3 — Automatización de propuestas comerciales

> Activación: **mes 9+**, tras 5 implementaciones de bot WhatsApp Y 3 generador contenidos.
> Pitch: "Tu propuesta comercial personalizada lista en 5 minutos, no medio día."
>
> **Pricing oficial**: Implementación $3.500 (default) — $5.000 (variantes premium). Mantenimiento desde $200/mes (Basic) hasta $800/mes (Scale). Ver `/PRICING.md`.

---

## Por qué este caso (tercero, B2B)

| Criterio | Score | Razón |
|---|---|---|
| Dolor agudo | 🟢 9/10 | B2B mid-market tarda 2-4 horas en cada propuesta. ROI clarísimo |
| Resultado medible | 🟢 9/10 | Cliente mide: nº propuestas/mes × tiempo ahorrado |
| Ticket de venta más alto | 🟢 9/10 | Implementación $3.500-$5.000, mantenimiento Pro/Scale ($400-$800/mes) |
| Cliente paga rápido | 🟢 8/10 | B2B con presupuesto comercial estructurado |
| Complejidad técnica | 🟡 7/10 | Más compleja que bot WhatsApp (PDF generation, datos) |
| Margen | 🟢 9/10 | $3.500 / 18h cliente 1 → 8h cliente 5+ |

---

## Lo que entregamos al cliente

### Funcionalidad

**Flujo del comercial del cliente**:

1. Comercial recibe consulta de prospecto (por web, email, llamada)
2. **Rellena formulario interno** (Notion o web) con:
   - Datos del prospecto (empresa, contacto, sector, tamaño)
   - Necesidad concreta (servicio que quiere, alcance, plazos)
   - Información competitiva (si nos comparan con alguien)
   - Notas adicionales (urgencia, restricciones)
3. **Click "Generar propuesta"**
4. **5 minutos después**: PDF de 4-8 páginas listo en su email/Notion con:
   - Carta personalizada al prospecto
   - Análisis del problema en sus palabras
   - Solución propuesta con servicios concretos
   - Pricing calculado según parámetros
   - Caso de éxito relevante (matching automático con BD interna)
   - Términos comerciales y CTA

### El sistema "aprende" de propuestas pasadas

- Carga inicial: 20-50 propuestas pasadas del cliente
- Cada nueva propuesta + outcome (ganada/perdida) → mejora el sistema
- Mes 3+: propuestas ganadas se usan como templates dinámicos

### Lo que NO incluye

- Negociación posterior (humano)
- Firma electrónica (DocuSign aparte si lo quiere)
- Reuniones de venta (humano)
- CRM completo (esto se integra con HubSpot/Pipedrive si tiene, no lo reemplaza)
- Cotización automatizada de productos físicos con stock variable (caso especial)

---

## Stack técnico

```
┌──────────────────────────────────────────────────────────────┐
│                                                               │
│   Comercial del cliente → Formulario Notion/Web              │
│             ↓                                                 │
│   n8n recibe trigger                                         │
│             ↓                                                 │
│   Step 1: Enriquecimiento de datos                           │
│     - LinkedIn API: datos empresa prospecto                  │
│     - Apollo API: datos contacto                             │
│     - Web scraping rápido: sitio del prospecto              │
│             ↓                                                 │
│   Step 2: Matching con casos pasados                         │
│     - Embedding similitud con propuestas ganadas             │
│     - Selección top 3 casos relevantes                       │
│             ↓                                                 │
│   Step 3: Claude API (contexto largo)                        │
│     - System prompt: estilo + framework + ejemplos           │
│     - User prompt: datos del prospecto + servicios + casos   │
│     - Output: estructura JSON con todas las secciones        │
│             ↓                                                 │
│   Step 4: Generación PDF                                     │
│     - n8n + plantilla HTML del cliente                       │
│     - Render a PDF con CSS pro                               │
│             ↓                                                 │
│   Step 5: Entrega                                            │
│     - Email al comercial con PDF adjunto                     │
│     - Notion: propuesta archivada en database                │
│     - HubSpot/Pipedrive: deal creado (si conecta)            │
│                                                               │
└──────────────────────────────────────────────────────────────┘
```

**Componentes**:
- n8n (mismo VPS Hetzner compartido)
- Claude API (modelo Opus 4.7 para tareas complejas, ~$15-40/mes por cliente activo)
- LinkedIn/Apollo APIs (opcional, $30-50/mes según volumen)
- Plantilla HTML→PDF (libreria pdfmake o playwright)
- Notion + opcional HubSpot/Pipedrive

**Coste operacional por cliente activo**: $20-80/mes. Cobras $400/mes (Pro) — $800/mes (Scale) en mantenimiento. Margen 80-95%.

---

## Cómo se vende

### Pitch corto (15 seg)

> "¿Cuánto tarda tu comercial en hacer una propuesta? Si son más de 30 min, monto un sistema que la deja lista en 5 — personalizada, con cifras correctas y casos de éxito relevantes."

### Pitch llamada (2 min)

> "Mira, en B2B la diferencia entre 'gano la venta' o 'pierdo la venta' suele ser:
> a) **Velocidad de respuesta** (las 24h primeras son críticas)
> b) **Personalización real** (no template genérico)
> c) **Estudio del prospecto** (mencionar su negocio, su situación)
>
> Si tu comercial tarda 3-4 horas en hacer cada propuesta, no llega a las 24h salvo en el primer prospecto del día. Y la personalización profunda no la hace, copy-pastea plantilla.
>
> Mi sistema: tu comercial rellena un formulario de 10 campos (3 min), pulsa generar, y en 5 minutos tiene un PDF de 6 páginas con análisis del prospecto (sacado de LinkedIn + web), 3 casos de éxito relevantes seleccionados automáticamente, y pricing calculado según tus reglas.
>
> Implementación $3.500-$5.000 según complejidad (depende de cuántos servicios manejas y si conecto con CRM). Antes diagnóstico de $500-$700 (caso B2B complejo) para mapear bien tus servicios y casos.
>
> Mantenimiento desde $400/mes (Pro) según volumen."

### Demo durante diagnóstico

1. Cliente comparte 3 propuestas pasadas (ganadas)
2. Tú extraes patrón: secciones, longitud, tono
3. Pides al cliente datos de un prospecto real que tenga ahora mismo
4. **En vivo**, en el Workbench, generas la propuesta
5. Cliente compara: "esto tarda mi comercial 3h, lo has hecho en 5 min y es mejor de lo que él suele hacer"

Cierre.

---

## Cómo se construye

### Cliente 1 (15-20h)

**Día 1-3 (5h)**: Análisis de patrones
- 20-50 propuestas pasadas del cliente (las que ganaron + 5 perdidas)
- Mapeo: estructura común, secciones obligatorias, tono, longitud típica
- Identificación de variables (lo que cambia entre propuestas)
- Catálogo de servicios del cliente con precios y pricing rules

**Día 4-6 (5h)**: Sistema prompt master + templates
- Prompt sistema con manual de estilo del cliente
- 3-5 ejemplos en few-shot (propuestas ganadas resumidas)
- Estructura JSON output que coincide con plantilla PDF

**Día 7-9 (4h)**: Plantilla PDF + workflow
- Plantilla HTML profesional con CSS print
- Workflow n8n: formulario → enriquecimiento → Claude → PDF → entrega
- Integración con Notion para archivo

**Día 10-12 (3h)**: Test real con propuestas históricas
- Re-generar 5-10 propuestas pasadas con el sistema
- Comparar output vs original ganada
- Iterar hasta que el comercial diga "este es mi estilo"

**Día 13-14**: Onboarding + bug fixes

### Cliente 2-5 (12-15h)

Con templates de plantilla HTML reutilizables (5 estilos catalogados):
- Análisis tono: 2h (más rápido con experiencia)
- Prompt + few-shot: 3h
- Plantilla: 2h (clonar y ajustar)
- Test: 3h
- Onboarding: 2h

### Cliente 6+ (8-10h)

- Catálogo de "industrias" con prompts pre-construidos
- Cliente solo rellena su catálogo de servicios y precios
- Margen: $3.500/9h = $389/h

---

## Mantenimiento mensual ($400-$800/mes, tiers Pro y Scale)

> Este caso B2B mid-market suele NO encajar con Basic ($200). Default: Pro ($400).

### 2-4 horas (según tier)

**Tier Pro $400/mes** (5h):
- Análisis propuestas generadas
- Identificar % editadas mucho por comercial → ajustar prompt
- Update catálogo precios si cambió
- Reporte mensual

**Tier Scale $800/mes** (10h):
- Todo lo anterior +
- Análisis ganadas vs perdidas → identificar patrones
- Aprender de cierres reales → actualizar few-shot examples
- 1 nueva sección o variante de propuesta/mes

---

## Variantes y add-ons

| Variante | Precio | Cuándo aplica |
|---|---|---|
| **Básico** (este doc) | $3.500 + $400/mes Pro | Default B2B mid-market |
| Con integración CRM (HubSpot/Pipedrive) | +$700 implementación | Cliente tiene CRM |
| Multi-idioma | +$500 implementación | Cliente internacional |
| Múltiples plantillas (por línea de servicio) | +$400 implementación | Cliente con >3 líneas distintas |
| Sistema de aprendizaje continuo (feedback loop) | +$300/mes mantenimiento | Cliente quiere optimización constante |

---

## Métricas

### KPIs cliente (en reporte mensual)

- **Propuestas generadas**: nº
- **Tiempo medio comercial**: target <15 min (vs 3h sin sistema)
- **% aceptadas por comercial sin editar**: target ≥50%
- **% editadas ligeramente**: target ~40%
- **Conversión propuesta → cierre**: target ≥25% (cliente debe medirlo)
- **Velocidad media respuesta a prospecto**: target <4h (vs >24h sin sistema)

### KPIs internos

- **Coste API por propuesta**: <$1
- **Tiempo soporte/mes**: target ≤2h Basic, ≤4h Pro
- **Churn**: target <3%/mes (B2B típicamente más sticky)

---

## ICP de este caso

| Atributo | Perfil |
|---|---|
| Tipo de empresa | B2B, 5-50 empleados, ticket medio prospect ≥$5k |
| Sectores ideales | Agencias (marketing, dev, design), consultorías, servicios profesionales, software |
| Volumen propuestas/mes | ≥15 (si <10/mes, ROI menor) |
| Estructura comercial | 1+ persona dedicada a ventas |
| Madurez digital | Tiene CRM o al menos Excel/Notion de leads |

**Anti-fit**: B2C, comercio físico, servicios estandarizados (gimnasio, peluquería).

---

## Roadmap evolución del caso

| Mes | Versión | Mejora |
|---|---|---|
| 9 | v1 | Generación texto + PDF + Notion archivo |
| 11 | v1.1 | Catálogo 5 industrias pre-construidas |
| 12 | v2 | Integración HubSpot/Pipedrive nativa |
| Año 2 | v2.1 | Sistema aprendizaje: ganadas vs perdidas |
| Año 2 | v3 | Generación de slides PowerPoint además del PDF |

---

## Por qué este caso es game-changer en mes 9-12

**Es el primer caso con ticket ≥$3.500 y MRR ≥$400**.

Con 5 clientes activos = $2.000 MRR de un solo caso (Pro). Combinado con bot WhatsApp + generador contenidos = MRR L2 a >$5K/mes muy realista en mes 12.

Es también el caso que pone tu agencia en el **mapa B2B**, no solo PYME local. Cliente que paga $3.500+$400/mes (o $5.000+$800/mes Scale) son los que te llevan a Linkedin posts compartidos por sus colegas, conferencias, etc.
