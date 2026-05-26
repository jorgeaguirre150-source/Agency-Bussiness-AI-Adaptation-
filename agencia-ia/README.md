# Agencia IA — El Negocio Principal

> Modelo de la imagen. Embudo en 3 pasos.
> **Pricing oficial en `/PRICING.md`** (rangos + reglas de cuándo subir).

## El embudo

```
┌────────────────┐    ┌────────────────┐    ┌────────────────┐
│  DIAGNÓSTICO   │    │ IMPLEMENTACIÓN │    │ MANTENIMIENTO  │
│  $300 — $700   │ →  │ $1.500-$5.000  │ →  │   $200+/mes    │
│   3-5 días     │    │  2-4 semanas   │    │    continuo    │
│ 100% upfront   │    │  50/50 split   │    │  suscripción   │
└────────────────┘    └────────────────┘    └────────────────┘

Conversión target: 50% Diag→Impl, 70% Impl→Mantenimiento
Fase lanzamiento (primeros 5 clientes): arrancamos en el mínimo del rango.
```

## Lo que entregamos en cada tier

### Diagnóstico ($300 — $700 según complejidad)
- Llamada kickoff 45 min (mapeo de procesos manuales del cliente)
- 2 días auditoría escrita: 3-5 procesos ranqueados por ROI/esfuerzo
- 1 quick-win en vivo durante la auditoría (ej: agente Claude clasificando emails del cliente)
- Documento entregable de 3-5 páginas con roadmap priorizado
- Propuesta de implementación al final

**Precio según**: nº procesos a auditar (3 = $300, 5+ = $700), tamaño equipo cliente, complejidad técnica de los sistemas actuales. Tu coste: 5-8h. **Default arranque: $300.**

### Implementación ($1.500 — $5.000 según scope)
- Una automatización concreta entregada, documentada, en producción
- 2 rondas de revisión incluidas en los 14 días post-entrega
- Cliente recibe acceso, código (en su cuenta GitHub o Notion), instrucciones

**Rangos por caso de uso**:
| Caso | Precio | Tu tiempo |
|---|---|---|
| Bot WhatsApp básico | $1.500 | 10-15h (con templates) |
| Generador contenidos | $2.500 | 15-20h |
| Automatización propuestas comerciales | $3.500 | 25-30h |
| Workflow multi-sistema custom | $5.000 | 35-45h |

**Caso pilar fase 0**: Bot WhatsApp con FAQ inteligente + captura de leads → $1.500.

### Mantenimiento ($200+/mes según tier)
- Monitoring uptime + logs del workflow
- Reporte mensual breve con métricas reales
- Permanencia mínima 3 meses, luego cancelable con 15 días aviso

**3 tiers disponibles**:
| Tier | Precio | Horas soporte/mes | Para quién |
|---|---|---|---|
| **Basic** | $200/mes | 2h | Default — sistemas estables |
| **Pro** | $400/mes | 5h + 1 mejora/mes | Cliente en evolución activa |
| **Scale** | $800/mes | 10h + features nuevas | Sistemas críticos B2B |

**Tu coste Basic**: 2h/mes. Margen $200/2 = **$100/h** + predictibilidad.

## Stack técnico mínimo viable

| Componente | Herramienta | Coste mensual |
|---|---|---|
| Orquestación | n8n self-hosted en Hetzner | €5/mes (todos los clientes) |
| LLM | Claude API (Sonnet 4.6 default) | Variable, con cache obligatorio reduce 90% |
| Mensajería | WhatsApp Business API (Meta) | Gratis hasta 1k conversaciones/mes |
| Base de datos cliente | Supabase free tier | Gratis (cliente 1-5) |
| Logs/dashboard | Notion o Airtable | Gratis |
| Hosting frontend (si aplica) | Vercel | Gratis |

**Coste total operacional para servir 10 clientes**: ~€30/mes. Margen brutal cuando MRR sube.

## Estrategia de precios — Cuándo subimos

Mantenemos precios mínimos hasta hitos concretos. Cada hito = +50% precio.

| Tier | Precio actual (fase 0) | Hito para subir | Próximo precio |
|---|---|---|---|
| Diagnóstico | $300 | 5 diagnósticos vendidos | $500 |
| Implementación | $1.500 | 3 impl. cerradas con NPS≥8 | $2.500 |
| Mantenimiento | $200/mes | 5 clientes en mantenimiento | $350/mes |

Año 1 objetivo: subir 1 vez los 3 tiers. Año 2: precio referencia $700 / $4.000 / $600.

## Casos de uso fase 0 (los que vendemos los primeros 5 clientes)

Especialización es velocidad. **Un solo caso de uso** durante mes 4-6, hasta dominarlo:

### Caso pilar: **Bot WhatsApp Business** (`casos-uso/bot-whatsapp.md`)
- Cliente sube preguntas frecuentes + procesos comunes
- Bot Claude responde 70% de mensajes en su tono de marca
- Captura leads calificados a CRM
- Avisa al humano cuando es algo no resuelto

Por qué este caso primero:
- **Dolor universal** (todo PYME tiene saturación WhatsApp)
- **Resultado visible al día siguiente** (cliente lo ve funcionando)
- **Stack manejable** (Claude + Meta WhatsApp API + Sheets)
- **Replicable** (mismo template, distintos prompts)

Casos a abrir tras 5 implementaciones del bot WhatsApp:
2. **Agente generador de contenidos** (1 reel + 4 posts/semana con tu tono de marca)
3. **Automatización propuestas comerciales** (template + Claude con datos cliente)
4. **Workflow interno: onboarding cliente nuevo** (n8n + Notion + emails)

## Quién vende a quién

### Mes 4-5: Cross-sell L1 → L2 (90% del pipeline)

Tu cliente restaurante de mantenimiento. Has hecho 2 reportes mensuales. Ya confía.

Trigger de venta: en llamada review menciona dolor relevante. Tú: *"Mira, eso exactamente lo automatizo en mi otra línea con IA. ¿Hacemos un diagnóstico de $300 y vemos si vale la pena?"*

Conversión: 30-40% de tus clientes L1 → diagnóstico L2.

### Mes 6+: Outbound LinkedIn (10% del pipeline → 50% en mes 12)

Ya con 1-2 casos de éxito L2. Cambias el juego.

LinkedIn Sales Navigator + sequence Lemlist:
- 30 invitaciones/día a dueños PYME Madrid Este
- Mensaje 1 personalizado con caso de éxito real
- Sequence 4 mensajes 14 días
- 5% conversión a diagnóstico

Volumen: 600 invits/mes → 30 conversaciones → 3-5 diagnósticos cerrados.

### Mes 8+: Inbound + asociaciones

Caso de éxito público (LinkedIn + sitio propio + reel viral) → 5-10 leads inbound/mes sin esfuerzo.

Asociaciones sectoriales (Colegio Dentistas, Asoc Hosteleros) → eventos + presentaciones → 3-8 leads/evento.

## Roadmap activación

| Mes | Lo que hacemos | Lo que NO hacemos |
|---|---|---|
| 1-2 | Solo L1. Recolectamos señales de dolores L2 en llamadas. | NADA de L2. Ni copy ni outreach. |
| 3 | Bot WhatsApp template construido. Material `agencia-ia/` listo. | Outreach masivo. Solo prep. |
| 4 | Primer diagnóstico cross-sell L1→L2. | LinkedIn outbound aún. |
| 5 | Primera implementación entregada. Caso de estudio documentado. | Diversificar casos de uso. |
| 6 | LinkedIn outbound activo + cross-sell continuo. | Verticalizar a no-hostelería. |
| 7-9 | Mercedes-out. Junior dev contratado. | Cambiar el modelo. |
| 10-12 | Vertical dental abre. Equipo 3. | Olvidar L1 (sigue siendo feeder). |

## Archivos en esta carpeta

| Archivo | Cuándo se usa |
|---|---|
| `propuesta-diagnostico.md` | Enviar como PDF cuando un prospecto interesado pide info |
| `contrato-diagnostico.md` | Firmar antes de cobrar los $300 del diagnóstico |
| `contrato-implementacion.md` | Firmar antes de cobrar el 50% inicial de implementación |
| `contrato-mantenimiento.md` | Firmar al pasar implementación → mantenimiento mensual |
| `casos-uso/bot-whatsapp.md` | Especificación técnica + comercial del caso pilar |
| `scripts-outreach/cross-sell-l1.md` | Guion para ofrecer L2 a clientes L1 existentes |

## Diferencia clave con L1

| Aspecto | L1 (web-agency-ia) | L2 (agencia-ia) |
|---|---|---|
| **Producto** | Web + RRSS recurrente | Automatización IA + mantenimiento |
| **Ticket entrada** | $400 | $300 (diagnóstico) → $1.500 (impl) |
| **Ciclo venta** | 5-10 días | 14-21 días |
| **Tu rol técnico** | Configurar plantilla con Claude Code | Diseñar + construir workflow IA custom-ish |
| **Recurrencia** | $400/mes (RRSS) | $200/mes (monitoring + soporte) |
| **Margen por hora** | $100-200 | $100-250 (escala más con templates) |
| **Escalabilidad delegando** | RRSS → freelancer fácil | Dev → freelancer técnico requiere validación |
| **Moat creado** | Densidad local + boca a boca | Credenciales técnicas + casos de uso |
