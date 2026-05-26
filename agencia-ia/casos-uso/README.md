# Casos de uso — Roadmap de productización

> Cada caso de uso = una "implementación tipo" que vendes con scope cerrado y entrega replicable.
> Filosofía: **dominar un caso antes de añadir el siguiente**. Especialización > diversificación en fase 0.

## Orden de activación

| # | Caso | Activación | Por qué este orden |
|---|---|---|---|
| 1 | **Bot WhatsApp** (`bot-whatsapp.md`) | Mes 3-6 | Dolor universal, resultado visible, stack manejable, replicable |
| 2 | **Agente generador contenidos** (`agente-generador-contenidos.md`) | Mes 7-9 | Cliente lo entiende fácil, ROI claro, complementa L1 |
| 3 | **Automatización propuestas comerciales** (`automatizacion-propuestas.md`) | Mes 9-12 | Ticket alto, dolor agudo, B2B |
| 4 | Workflow onboarding interno | Año 2 | A medida, ticket alto, requiere relación de confianza |
| 5 | Integraciones específicas (CRM, Glovo, etc.) | Año 2 | Custom, alta complejidad técnica |

## Regla dura de activación

**NO añadas el caso N+1 hasta tener 5 implementaciones del caso N entregadas con NPS≥8**.

Razón: cada caso requiere ~30h de optimización del template + librería de prompts antes de ser rentable. Si abres 3 casos a la vez con cliente 1, estás en 90h sin templates, sin margen, sin sistema.

## Estructura común de cada caso de uso

Cada documento `casos-uso/[nombre].md` sigue esta plantilla:

```
1. Por qué este caso (scoring criterios)
2. Lo que entregamos (funcionalidad)
3. Stack técnico (componentes + costes)
4. Cómo se vende (pitch corto, largo, demo)
5. Cómo se construye (proceso paso a paso, horas cliente 1 vs cliente 5)
6. Mantenimiento mensual (qué cubre las 2h)
7. Métricas (KPIs cliente + KPIs internos)
8. Variantes (con/sin extras)
9. Lo que NO incluye (límites blindados)
10. Roadmap evolución del caso
```

## Pricing por caso de uso (modelo oficial — ver `PRICING.md`)

Todos siguen el embudo común con **rangos**:

- **Diagnóstico**: **$300 — $700** (5 días, identifica qué caso aplicar). Default arranque: $300.
- **Implementación**: **$1.500 — $5.000** según caso (tabla debajo)
- **Mantenimiento**: **$200+/mes** (3 tiers: Basic $200 · Pro $400 · Scale $800)

### Precio por caso dentro del rango Implementación

| Caso | Precio default arranque | Rango completo |
|---|---|---|
| Bot WhatsApp básico | $1.500 | $1.500 — $2.500 |
| Agente generador contenidos | $2.500 | $2.500 — $3.500 |
| Automatización propuestas comerciales | $3.500 | $3.500 — $5.000 |
| Workflow multi-sistema custom | $5.000 | $5.000+ (cotización aparte) |

Hitos de subida (después de 5 clientes en cada tier con NPS≥8): el "default arranque" sube al siguiente nivel del rango.

## Casos NO activos (descartados conscientemente)

| Caso | Por qué NO ahora |
|---|---|
| **Chatbot atención cliente full** (resolver todo) | Riesgo legal alto, requiere madurez técnica |
| **Análisis sentimiento masivo redes** | Cliente no entiende valor, difícil pitch |
| **Recomendador productos e-commerce** | Stack complejo, ticket bajo |
| **Voice agents** (audios procesados) | Tecnología joven 2026, alto riesgo |
| **Análisis financiero predictivo** | Liability + regulación |

Reevaluamos año 2.

## Cómo identificar dolor para vender el caso correcto

Durante el **diagnóstico ($300)**, mapeas los 5 procesos manuales del cliente. Luego matching a casos:

| Dolor mencionado por cliente | Caso recomendado |
|---|---|
| "Recibimos X WhatsApp/día y nos satura" | Bot WhatsApp |
| "Tardamos en publicar en redes / publicamos poco" | Agente generador contenidos |
| "Cada propuesta nos lleva medio día" | Automatización propuestas |
| "Onboarding nuevos clientes es manual" | Workflow onboarding (año 2) |
| "Quiero integrar X con Y" | Cotización custom (año 2) |
| **Múltiples dolores** | Empieza por el de mayor ROI/menor complejidad |

Si el cliente tiene múltiples dolores y todos son aptos, el **bot WhatsApp gana siempre** (mes 4-6) — es el "ancla" para entrar en el cliente.
