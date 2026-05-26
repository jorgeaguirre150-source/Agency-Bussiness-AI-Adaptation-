# Web Agency IA — Sistema operativo de negocio

> **Sistema personal para construir una agencia de automatización con IA para PYMEs de Madrid Este.**
> Plantillas, scripts, contratos, landing pública y operativa día a día — todo versionado.

[![Stack](https://img.shields.io/badge/Stack-Astro%20%2B%20Tailwind%20%2B%20Vercel-indigo)](https://astro.build)
[![IA](https://img.shields.io/badge/IA-Claude%20Sonnet%204.6-orange)](https://www.anthropic.com)
[![Geo](https://img.shields.io/badge/Geo-Madrid%20Este-emerald)](https://www.google.com/maps/place/Torrej%C3%B3n+de+Ardoz)
[![Estado](https://img.shields.io/badge/Estado-Fase%200%20%C2%B7%20Arrancando-yellow)]()

---

## Por dónde empezar

Si entras al repo por primera vez:

1. **Lee `EMPEZAR-AQUI.md`** — La idea entera explicada sin jerga, en 15 minutos.
2. **Lee `MODELO-NEGOCIO.md`** — La visión unificada de las dos líneas.
3. **Lee `PRICING.md`** — La referencia oficial de precios (modelo de rangos).

Si vuelves cada día:

- **`EJECUCION.md`** — Qué hacer cada día de la primera semana.
- **`PLAN-CEO-DIARIO.md`** — Tu agenda como CEO (día/semana/mes/fase).
- **`PLAN-FINANCIERO.md`** — Reservas + cashflow + decisiones críticas.

---

## El modelo de negocio en 1 diagrama

```
┌──────────────────────────────────────────────────────────────┐
│              TU NEGOCIO — Web Agency IA                       │
├──────────────────────────────────────────────────────────────┤
│                                                                │
│    LÍNEA 1                            LÍNEA 2                 │
│    (táctica de arranque)              (destino estratégico)   │
│                                                                │
│    Webs restaurantes                  Automatizaciones IA     │
│    + RRSS mensual                     para PYMEs              │
│                                                                │
│    $400 web one-shot      ─────►      $300-$700 diagnóstico   │
│    + $400/mes mantenimiento           + $1.500-$5.000 impl    │
│                                       + $200+/mes mantenim.   │
│                                                                │
│    Hostelería Torrejón                Madrid Este completo    │
│                                                                │
│    Mes 1-6 foco                       Mes 4+ activación       │
│                                                                │
└──────────────────────────────────────────────────────────────┘
```

Cross-sell L1 → L2: cada cliente web puede convertirse en cliente IA tras 3-4 meses de mantenimiento.

---

## Estructura del repo

```
web-agency-ia/
│
├── EMPEZAR-AQUI.md              ← Léeme primero (15 min, sin jerga)
├── MODELO-NEGOCIO.md            ← Visión unificada L1 + L2
├── PRICING.md                   ← Referencia oficial de precios
├── EJECUCION.md                 ← Qué hacer cada día primera semana
├── PLAN-CEO-DIARIO.md           ← Agenda CEO día/semana/mes/fase
├── PLAN-FINANCIERO.md           ← Reservas + cashflow + decisiones
│
├── 01-producto/                 ╮ L1: web-agency-ia
│   ├── brief-cliente.md         │ Webs Astro para restaurantes
│   ├── prompt-maestro.md        │ Entrega en 72h con Claude Code
│   ├── checklist-entrega.md     │
│   └── plantillas/restaurante/  │ Plantilla Astro funcional
│
├── 02-captacion/                │ Outreach L1 (Instagram, Maps, WhatsApp, email)
│   ├── nicho-restaurantes.md    │
│   └── scripts-outreach/        │
│
├── 03-venta/                    │ Propuesta + contratos L1
│   ├── propuesta-comercial.md   │
│   ├── contrato-web.md          │
│   ├── contrato-mantenimiento.md│
│   └── faq-y-objeciones.md      │
│
├── 04-operacion-rrss/           │ Sistema de RRSS mensual ($400/mes)
│   ├── calendario-editorial.md  │
│   ├── prompt-generar-posts.md  │
│   ├── plantillas-posts/        │
│   └── reporte-mensual.md       │
│
├── 05-aprendizaje/              ╯ Roadmap personal IA
│
├── agencia-ia/                  ╮ L2: Agencia de automatización IA
│   ├── README.md                │ Modelo de la imagen-mentor
│   ├── propuesta-diagnostico.md │ $300-$700 diagnóstico
│   ├── contrato-diagnostico.md  │
│   ├── contrato-implementacion.md     │ $1.500-$5.000 implementación
│   ├── contrato-mantenimiento.md      │ Tiers Basic/Pro/Scale
│   ├── onboarding-cliente.md    │
│   ├── casos-uso/               │ Bot WhatsApp, contenidos, propuestas
│   ├── casos-estudio/           │ Templates para documentar éxitos
│   ├── scripts-outreach/        │ Cross-sell + LinkedIn + email frío
│   └── plantillas-implementacion/     │
│       └── bot-whatsapp/        ╯ Workflow n8n + prompts + Notion schema
│
├── clientes/                    ← Entregas reales (no se commitean)
│   ├── _demo-trattoria-mario/   ← Demo pública italiana
│   ├── _demo-asador-elbrasa/    ← Demo pública asador
│   ├── _demo-brunch-veredillascoffee/   ← Demo pública brunch
│   └── _propio-agencia-ia/      ← Landing pública de la agencia
│
├── scripts/                     ← PowerShell helpers
│   ├── onboard-cliente.ps1      ← Clona plantilla a nuevo cliente
│   ├── dev-cliente.ps1          ← Modo desarrollo local
│   ├── dev-all-demos.ps1        ← Las 3 demos en paralelo
│   ├── lighthouse-check.ps1     ← Auditoría pre-entrega
│   └── deploy-cliente.ps1       ← Deploy a Vercel
│
├── tracker/                     ← Pipeline outreach (CSV importable a Notion)
├── mi-instagram/                ← Canal L1 (bio + 8 posts iniciales + 16 mes 1)
└── mi-linkedin/                 ← Canal L2 (bio + 8 posts iniciales + 36 12 sem)
```

---

## Stack técnico

| Componente | Tecnología | Coste mensual |
|---|---|---|
| Frontend | Astro 4 + Tailwind CSS | Gratis |
| Hosting | Vercel free tier | Gratis |
| Backend IA | Claude API (Sonnet 4.6) | $5-25 por cliente con prompt caching |
| Orquestación | n8n self-hosted Hetzner | €5/mes compartido entre clientes |
| Mensajería | Meta WhatsApp Business Cloud API | Gratis hasta 1.000 conv/mes |
| Base datos cliente | Notion + Supabase free | Gratis |
| Tracking outreach | Notion / Google Sheets | Gratis |
| Email outbound | Instantly + Apollo (mes 6+) | $70/mes |
| LinkedIn outbound | Sales Navigator (mes 6+) | $80/mes |
| Facturación | Holded / Quaderno | $15/mes |
| Gestoría | Declarando / Quipu | $60-100/mes |

**Coste operacional total mes 1**: ~$15. **Mes 6+**: ~$300/mes.

---

## Empezar localmente

Si quieres ver la landing pública o cualquier demo en tu navegador:

```powershell
# Clonar repo
git clone https://github.com/jorgeaguirre150-source/web-agency-ia.git
cd web-agency-ia

# Ver la landing pública de la agencia IA
cd clientes\_propio-agencia-ia
npm install
npm run dev
# Abre http://localhost:4321

# Ver las 3 demos simultáneamente
cd ..\..
.\scripts\dev-all-demos.ps1
```

---

## Estado actual del proyecto

- **Fase**: 0 (Arrancando — primeros 5 clientes objetivo)
- **Geo objetivo**: Torrejón de Ardoz · Coslada · Alcalá de Henares · San Fernando
- **Línea activa**: L1 (web-agency-ia, hostelería)
- **Línea en preparación**: L2 (Agencia IA) — activa mes 3-4
- **MRR objetivo mes 12**: $13.000-$19.000

Ver `PLAN-FINANCIERO.md` para proyección detallada mes a mes.

---

## Filosofía del repo

1. **Sistema sobre talento**: cada decisión documentada → cliente 5 tarda 50% menos que cliente 1.
2. **Densidad geográfica**: dominar Madrid Este antes de pensar en otra ciudad.
3. **Precios cerrados, scope blindado**: cero "depende", todo cotizado pre-implementación.
4. **MRR > facturación**: el negocio se mide por recurrencia, no por proyectos puntuales.
5. **Línea 1 financia Línea 2**: webs hostelería dan cashflow + casos para vender IA después.

---

## Licencia y uso

Este repo es un **sistema personal de Jorge Aguirre** para construir su negocio. Si encuentras valor en cualquier parte y quieres adaptarlo, eres libre de hacerlo. No es producto comercial, no hay soporte oficial.

Contacto: vía LinkedIn (cuando esté activo) o el WhatsApp documentado en `mi-instagram/README.md`.

---

## Inspiración

El modelo de embudo (Diagnóstico → Implementación → Mantenimiento) viene de una mentoría de negocio de IA recibida el 2026-05-24. La imagen-mentor original se encuentra documentada conceptualmente en `MODELO-NEGOCIO.md`.

Background técnico: 8 años de arquitectura cloud enterprise (Mercedes-Benz).
