# PRICING — La única referencia oficial de precios

> **Este archivo manda sobre cualquier otro del repo**. Si alguno se contradice, este gana.
> Modelo extraído de la imagen-mentor del 2026-05-24 (`/MODELO-NEGOCIO.md` lo documenta).

---

## El modelo (la imagen)

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                   │
│   DIAGNÓSTICO              IMPLEMENTACIÓN          MANTENIMIENTO  │
│                                                                   │
│   $300 — $700              $1.500 — $5.000         $200+/mes      │
│                                                                   │
│   3-5 días                 2-4 semanas             Continuo       │
│   Pago único upfront       50% / 50%               Suscripción    │
│                                                                   │
│   "Se percibe como        "El margen real         "Por cada       │
│    inversión baja"         está aquí"              cliente que    │
│                                                    implementas    │
│                                                    puedes ofrecer │
│                                                    mantenimiento  │
│                                                    recurrente"    │
│                                                                   │
│   X diags/mes              1 impl/mes              10 clientes en │
│   = $600 - $1.400          = $1.500 - $5.000       mantenimiento  │
│                                                    = $2.000/mes   │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
```

---

## Cómo se determina el precio dentro del rango

Cada cliente nuevo cae en una posición específica del rango según 4 variables. **Esto NO se improvisa** — se calcula durante el Diagnóstico y se ofrece en la Propuesta de Implementación.

### Diagnóstico ($300 — $700)

| Variable | $300 (mínimo) | $700 (máximo) |
|---|---|---|
| Nº de procesos a auditar | 3 | 5+ |
| Complejidad operativa | PYME 3-10 empleados | Equipo 15+ o multi-sede |
| Sector | Hostelería, retail local | B2B mid-market, regulado |
| Profundidad técnica | Stack simple actual | Sistemas legacy, integraciones |

**Default arranque (primeros 5 clientes)**: **$300**.

### Implementación ($1.500 — $5.000)

| Variable | $1.500 | $2.500 | $3.500 | $5.000 |
|---|---|---|---|---|
| Caso | Bot WhatsApp básico | Generador contenidos | Automatización propuestas | Workflow multi-sistema |
| Tu tiempo estimado | 10-15h (cliente 5+) | 15-20h | 25-30h | 35-45h |
| Integraciones externas | 1-2 (WhatsApp + Notion) | 2-3 (+ Buffer) | 3-4 (+ CRM) | 5+ (CRM + ERP + Email) |
| Personalización tono/marca | Estándar | Custom | Custom + few-shot examples | Custom completo |

**Default arranque**: $1.500 (bot WhatsApp). **Tras 5 implementaciones a $1.500 con NPS≥8** → subo a $2.500 default para casos similares.

### Mantenimiento ($200+/mes)

| Tier | Precio | Horas soporte/mes | Para quién |
|---|---|---|---|
| **Basic** | $200/mes | 2h | Default — sistemas estables |
| **Pro** | $400/mes | 5h + 1 mejora mensual | Clientes en evolución activa |
| **Scale** | $800/mes | 10h + features nuevas | Sistemas críticos B2B |

**Default arranque**: $200/mes. La mayoría se queda en Basic los primeros 6 meses.

---

## Reglas operativas

### Regla 1 — Nunca menciones precio antes del Diagnóstico

En llamadas de calificación pre-diagnóstico, si el prospecto pregunta "¿cuánto cuesta?":

> *"Depende del scope. El diagnóstico de $300 nos da los datos para cotizarte algo exacto. Suele ir de $1.500 a $5.000 según complejidad. ¿Hacemos el diagnóstico y lo vemos?"*

### Regla 2 — El precio se acuerda EN la propuesta de implementación

Tras el diagnóstico, entregas propuesta con UN precio concreto del rango (no "depende"). Cliente acepta o rechaza ese precio específico.

### Regla 3 — Una vez firmado, el precio NO se mueve

Si el cliente pide cosa nueva durante implementación → Change Request facturado aparte, no renegociar el contrato firmado.

### Regla 4 — Hitos de subida de precio

Documentado en MODELO-NEGOCIO.md. Resumen:

| Hito | Subida |
|---|---|
| 5 diagnósticos vendidos | Diagnóstico mínimo: $300 → $500 |
| 3 implementaciones cerradas NPS≥8 | Implementación mínima: $1.500 → $2.500 |
| 5 clientes en mantenimiento | Tier Basic: $200 → $350 |

Pasados estos hitos, los rangos se recalibran hacia arriba (la imagen sigue siendo el modelo, pero el "mínimo" sube).

### Regla 5 — Cobro siempre upfront del diagnóstico

100% antes de empezar. Sin excepciones. La garantía de devolución protege al cliente.

---

## Math objetivo (la "X diagnósticos / 1 implementación / 10 mantenimientos")

La imagen propone economía objetivo:

| Mes-objetivo (mes 6+) | Cantidad | Ingreso |
|---|---|---|
| Diagnósticos | 2-3/mes a $300-700 | $600 - $1.400 |
| Implementaciones | 1-2/mes a $1.500-5.000 | $1.500 - $5.000 |
| Mantenimientos activos | 10 a $200-400 | $2.000 - $4.000 |
| **Total mensual mes 6+** | | **$4.100 - $10.400** |

Año 1 final: 25-30 mantenimientos activos + 1-2 implementaciones nuevas/mes = **$8K-15K MRR + facturación variable**.

---

## Cómo aplica esto a la fase de lanzamiento (primeros 5 clientes)

Durante los primeros 5 clientes de la línea L2 (mes 3-6 aprox):

- Diagnóstico: **$300** (mínimo)
- Implementación: **$1.500** (mínimo)
- Mantenimiento: **$200/mes** (mínimo)

**Por qué empezar abajo**:
- Sin casos de éxito públicos = menos pricing power
- Primer cliente vale por validación del proceso, no por margen máximo
- Tras 5 casos documentados → ya tienes evidencia para cobrar en la media del rango

**Comunicación al cliente fase 0**: no menciones que son "precios de lanzamiento" en la propuesta. Mencionas tu precio concreto ($300 / $1.500 / $200) y punto. Si el cliente investiga la landing y ve el rango, simplemente está en la parte baja porque su scope coincide con el mínimo.

---

## Línea L1 (web-agency-ia) — no entra en este modelo

`web-agency-ia` (webs restaurantes + RRSS) tiene su propio pricing independiente:

- Web one-shot: **$400**
- Mantenimiento RRSS: **$400/mes**

Es **táctica de arranque** para cashflow rápido. No mezclar con el modelo agencia IA de esta página.

---

## Cuando un archivo del repo contradice este PRICING.md

Este archivo manda. El otro archivo está desactualizado y hay que corregirlo. Crear issue mental para ajustarlo cuando puedas.

**Archivos que se han actualizado para reflejar este modelo**:
- `clientes/_propio-agencia-ia/src/pages/index.astro` (landing pública) ✓
- `MODELO-NEGOCIO.md` (sección pricing) ✓
- `agencia-ia/README.md` (sección pricing) ✓
- `EMPEZAR-AQUI.md` (sección precios) ✓
- `agencia-ia/propuesta-diagnostico.md` ✓
- `agencia-ia/contrato-diagnostico.md` ✓
- `agencia-ia/contrato-implementacion.md` ✓
- `agencia-ia/contrato-mantenimiento.md` ✓

**Archivos pendientes de revisión** (mencionar precios fijos, debe actualizarse cuando uses):
- `agencia-ia/casos-uso/*.md` (3 archivos)
- `agencia-ia/scripts-outreach/*.md` (3 archivos)
- `agencia-ia/onboarding-cliente.md`
- `agencia-ia/plantillas-implementacion/bot-whatsapp/*.md`
- `PLAN-FINANCIERO.md`
- `PLAN-CEO-DIARIO.md`

No críticos para arrancar — son referencia interna. Se ajustan cuando los uses.
