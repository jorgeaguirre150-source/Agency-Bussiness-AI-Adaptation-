# Modelo de negocio — Visión unificada

> **El destino es la imagen.** Construir una agencia de automatización con IA para PYMEs locales, con el embudo Diagnóstico → Implementación → Mantenimiento.
> **web-agency-ia es la táctica de arranque** para generar cashflow inicial mientras se construye el destino.

---

## El destino (lo que vendemos en mes 12)

> **Modelo oficial**: ver `PRICING.md` para detalles + reglas de pricing.

```
                    ┌─────────────────────────────────────────────┐
                    │   AGENCIA DE AUTOMATIZACIÓN IA PARA PYMEs   │
                    │              (Madrid Este)                   │
                    └─────────────────────────────────────────────┘

  DIAGNÓSTICO          →          IMPLEMENTACIÓN          →     MANTENIMIENTO
  $300 — $700                     $1.500 — $5.000              $200+/mes
  3-5 días                        2-4 semanas                   continuo
  Auditoría + roadmap             Una automatización IA         Monitoring + ajustes
  + 1 quick-win demo              entregada y en producción     + 2h soporte/mes
  100% upfront                    50% anticipo / 50% entrega    suscripción mensual

  X diags/mes                     1 impl/mes                    10 clientes activos
  = $600 - $1.400                 = $1.500 - $5.000             = $2.000+/mes
```

**Fase de lanzamiento (primeros 5 clientes)**: arrancamos en el mínimo de cada rango ($300 / $1.500 / $200). Subimos por hitos documentados en `PRICING.md`.

**Por qué este modelo gana**:
- El **diagnóstico barato** elimina la barrera de entrada (cliente entra sin miedo a comprometerse)
- La **implementación con precio fijo** elimina el miedo a presupuestos abiertos
- El **mantenimiento mensual** construye MRR predecible y el verdadero negocio
- Conversión diagnóstico → implementación: **40-60% post-diagnóstico** (vs 5% cold)

---

## Las dos líneas y cómo se conectan

```
┌──────────────────────────────────┐         ┌──────────────────────────────────┐
│  LÍNEA 1 (TÁCTICA DE ARRANQUE)   │ ──────► │  LÍNEA 2 (DESTINO ESTRATÉGICO)   │
│  web-agency-ia                   │ feeder  │  agencia-ia/                     │
│  Webs $400 + RRSS $400/mes       │         │  Diag $300 / Impl $1.500 / $200  │
│  Restaurantes Torrejón           │         │  PYMEs Madrid Este               │
└──────────────────────────────────┘         └──────────────────────────────────┘
        ↓ genera                                    ↑ recibe leads via
   - Cashflow mes 1                            - Cross-sell clientes L1
   - Casos de éxito visibles                   - Casos de éxito L1 como prueba
   - Pipeline calificado                       - Pipeline calificado (ratio 3:1)
   - Confianza local                           - Outreach LinkedIn + asociaciones
```

### El flujo natural de un cliente

```
Cliente nuevo restaurante en Torrejón
   ↓
[Mes 1] Te contacta tras ver tu DM Instagram
   ↓
[Mes 1] Web $400 + Mantenimiento $400/mes (LÍNEA 1)
   ↓
[Mes 3-4] Durante reportes mensuales, mencionas que automatizas WhatsApp con IA
   ↓
[Mes 4] Diagnóstico $300 (LÍNEA 2)
   ↓
[Mes 4-5] Implementación bot WhatsApp $1.500 (LÍNEA 2)
   ↓
[Mes 5+] Mantenimiento IA $200/mes (LÍNEA 2)

LTV total cliente: $400 + (12 × $400) + $300 + $1.500 + (8 × $200) = $8.800 año 1
```

---

## Por qué L1 antes de L2 (la secuencia importa)

| Razón | Detalle |
|---|---|
| **Cashflow inmediato** | L1 cierra en 1-2 semanas. L2 requiere caso de éxito previo. Sin L1, no comes mes 1-2. |
| **Caso de éxito para L2** | Un cliente L1 entregado es la prueba social que vendes L2. "Mira lo que monté para [restaurante X]". |
| **CAC=0 para L2** | Cross-sell L1→L2 no requiere outreach nuevo. Tu cliente confía, te paga, escucha tu pitch. |
| **Aprendizaje del cliente** | En llamadas L1 escuchas dolores reales que se convierten en oferta L2 calibrada. |
| **Sistema operativo afilado** | Las webs L1 te enseñan a delegar, sistematizar, contratar — músculos que necesitas para L2. |

**Regla dura**: NO arrancar venta directa L2 (LinkedIn outbound, etc.) hasta mes 4-5. Hasta entonces, solo cross-sell de clientes L1 ya pagadores.

---

## Roadmap 12 meses unificado

```
MES 1-2 ─── FOUNDATION L1                      Cash: $1-2K   MRR: $400-800
            • 4-6 webs cerradas, 2-3 mantenimientos
            • Sistema afinado tras 5 entregas
            • Primer caso de estudio documentado

MES 3-4 ─── PRIMER FICHAJE + CROSS-SELL L2     Cash: $3-4K   MRR: $2K
            • Junior RRSS contratado (palanca de tiempo)
            • Primer diagnóstico L2 ($300) a cliente L1 existente
            • Bot WhatsApp template construido en fin de semana

MES 5-6 ─── PIPELINE PRO L2 + ASOCIACIÓN       Cash: $5-7K   MRR: $4-5K
            • 3 diagnósticos L2 vendidos (2 cross-sell, 1 outbound)
            • 1 implementación L2 entregada ($1.500)
            • Asociación hosteleros Torrejón → 5-10 leads L1
            • Outreach LinkedIn profesional para L2 arrancado

MES 7-9 ─── SALIDA MERCEDES + AGENCIA IA       Cash: $8-12K  MRR: $7-10K
            • MRR cubre sueldo + colchón → te vas de Mercedes
            • 2º fichaje: junior dev (libera tu tiempo entrega)
            • L2 ya tiene 4-5 clientes en mantenimiento ($800-1K MRR L2)
            • Caso de estudio L2 público (LinkedIn + propio sitio)

MES 10-12 ── AGENCIA IA DOMINANTE              Cash: $15-25K MRR: $15-20K
            • L2 supera L1 en facturación mensual
            • Vertical 2 (dental) en preparación
            • Equipo 3 personas
            • Posicionamiento público: "Agencia IA Madrid Este"
            • L1 sigue activo como filtro de leads premium
```

---

## Estructura de archivos del negocio

```
web-agency-ia/                    ← directorio raíz (legacy name, todo el negocio dentro)
│
├── MODELO-NEGOCIO.md             ← este archivo (visión unificada)
├── EJECUCION.md                  ← guía operativa día a día
├── README.md                     ← visión general legacy
│
├── 01-producto/                  ╮
├── 02-captacion/                 │  L1: web-agency-ia (táctica arranque)
├── 03-venta/                     │  Cashflow rápido + caso de éxito
├── 04-operacion-rrss/            │
├── 05-aprendizaje/               ╯
│
├── agencia-ia/                   ╮
│   ├── README.md                 │
│   ├── propuesta-diagnostico.md  │  L2: AGENCIA IA (destino estratégico)
│   ├── contrato-diagnostico.md   │  Modelo de la imagen
│   ├── contrato-implementacion.md│  El negocio principal mes 12+
│   ├── contrato-mantenimiento.md │
│   ├── casos-uso/                │
│   └── scripts-outreach/         ╯
│
├── clientes/                     ← entregas (L1 y L2 juntos)
├── scripts/                      ← toolkit técnico
├── tracker/                      ← pipeline (L1 y L2)
└── mi-instagram/                 ← marca personal
```

---

## Métricas del destino

### Métrica norte año 1

**MRR × densidad geográfica × % línea 2**

Fórmula: `MRR mensual × (% clientes en Madrid Este) × (% MRR procedente de L2)`

Objetivo mes 12: `$18.000 × 90% × 30% = índice 4.860`

### Hitos compuestos

| Mes | MRR L1 | MRR L2 | % L2 | Índice |
|---|---|---|---|---|
| 3 | $1.600 | $200 | 11% | 178 |
| 6 | $4.000 | $1.000 | 20% | 900 |
| 9 | $7.000 | $3.000 | 30% | 2.700 |
| 12 | $12.000 | $6.000 | 33% | **5.940** |

**El éxito estratégico = % L2 sube cada trimestre**. El día en que % L2 ≥ 50% → eres oficialmente una agencia IA, no una agencia de webs.

---

## Posicionamiento público (cómo nos describimos)

### Pitch corto (10 seg)

> "Ayudo a PYMEs de Madrid Este a automatizar procesos manuales con IA. En 5 días te audito qué automatizar primero, en 2 semanas lo entrego funcionando."

### Pitch largo (60 seg)

> "Las PYMEs locales saben que tienen que automatizar pero no saben por dónde. He construido un servicio en 3 pasos: diagnóstico de $300 en 5 días, implementación con precio fijo en 2 semanas, mantenimiento mensual desde $200. Mi diferencial: vengo de arquitectura cloud en Mercedes-Benz, no soy un consultor más reciclado. Mis primeros casos son de hostelería en Torrejón, ahora abriendo a despachos y clínicas."

### Lo que NO somos

- ❌ Agencia de marketing digital
- ❌ Agencia de webs
- ❌ Consultoría "estrategia transformación digital"
- ❌ Reseller de SaaS de IA

### Lo que SÍ somos

- ✅ Operadores de automatización IA aplicada
- ✅ Entrega técnica real, no PowerPoints
- ✅ Especializados en PYMEs locales (Madrid Este)
- ✅ Hospitalidad ahora, dental año 2, otras verticales año 3+

---

## El cliente ideal de L2 (post mes 5)

Aprovechamos los datos reales de los 30-40 llamadas L1 para calibrar. Hipótesis a validar:

| Atributo | Perfil |
|---|---|
| Tipo de negocio | PYME 3-20 empleados, B2C o B2B local |
| Sectores prioritarios | Hostelería (mes 5-8) → Dental (mes 9-12) → Asesorías (año 2) |
| Geografía | Torrejón → Madrid Este → Madrid Centro selectivamente |
| Decisor | Dueño/Gerente (no comité) |
| Dolor visible | Procesos manuales >10h/semana de alguien |
| Presupuesto disponible | $300-3.000 trimestrales sin comité de gasto |
| Trigger compra | Saturación operativa, miedo a quedarse atrás en IA, queja recurrente del equipo |

Mes 6 actualizamos esta tabla con datos reales de las primeras 5 llamadas L2.

---

## Cómo encajan las decisiones que ya tomaste

| Decisión previa | Cómo encaja con el destino IA |
|---|---|
| **CEO mode** | Necesario. El operario hace webs. El CEO construye agencia IA con equipo. |
| **Mercedes-out mes 6-9** | Necesario. La agencia IA requiere foco completo. L1 sola es lifestyle, L2 requiere CEO full-time. |
| **Densidad geográfica Torrejón → Madrid Este** | Acelera L2: los gremios locales (hosteleros, dentistas) son canal de venta. |
| **Background técnico Mercedes** | Moat principal de L2. La razón por la que cobras $1.500 cuando otros cobran $500. |
| **Precios mínimos del rango imagen** | Fase 0. Subimos cuando tengamos 5 implementaciones con NPS>8. |

---

## La próxima jugada inmediata

1. **Mes 1-2**: foco brutal L1 outreach restaurantes. NO empezar L2.
2. **Mes 3**: con 4-5 clientes L1, ofrecer primer diagnóstico L2 a tu mejor cliente. Material listo en `agencia-ia/` (esperándote).
3. **Mes 4-5**: primera implementación L2 entregada. Caso de estudio público.
4. **Mes 6**: outreach LinkedIn directo a L2 con caso de éxito en mano.

**El destino se construye sin tocarlo durante los primeros 60 días.** L1 da el combustible, L2 es el cohete. Si arrancas el cohete antes de tener combustible, se cae.
