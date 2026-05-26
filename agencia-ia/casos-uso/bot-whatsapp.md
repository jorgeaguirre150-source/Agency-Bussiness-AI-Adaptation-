# Caso de uso pilar — Bot WhatsApp Business con IA

> El primer caso que dominamos. 5 implementaciones de éste antes de abrir otros casos.

---

## Por qué este caso primero

| Criterio | Score | Razón |
|---|---|---|
| Dolor universal | 🟢 9/10 | Todo negocio PYME tiene saturación WhatsApp |
| Resultado visible | 🟢 10/10 | Cliente lo ve funcionando en su propio móvil al día 1 |
| Tiempo de venta | 🟢 8/10 | Pitch fácil: "te respondo el 70% de los WhatsApp solo" |
| Stack manejable | 🟢 9/10 | WhatsApp Business + Claude + n8n. 3 piezas conocidas. |
| Replicabilidad | 🟢 10/10 | Mismo template, distintos prompts → 5x más rápido del 2º cliente en adelante |
| Margen | 🟢 8/10 | $1.500-$2.500 / 12-18h cliente 1, → / 6-8h cliente 5+ |
| Mantenimiento real | 🟢 9/10 | 2h/mes ajustando prompts según feedback → $200/mes justos |

---

## Pricing oficial de este caso

> Ver `/PRICING.md` para detalles.

| Tier | Precio | Cuándo aplica |
|---|---|---|
| **Bot WhatsApp básico** | $1.500 | Default arranque (fase 0) |
| **Bot WhatsApp + integración CRM** | $2.000 | Cliente con HubSpot/Pipedrive |
| **Bot WhatsApp bilingüe ES/EN** | $1.800 | Negocios con turismo |
| **Bot WhatsApp + voz** | $2.500 | Audios procesados (avanzado) |

Mantenimiento: $200/mes (Basic, default) → $400/mes (Pro) → $800/mes (Scale).

## Lo que entregamos al cliente

### Funcionalidad

**Entrante** (cliente recibe mensaje WhatsApp):
1. Bot detecta intención del mensaje
2. Si es **pregunta frecuente** → responde directamente con info estructurada
3. Si es **interés de compra/reserva** → captura datos (nombre, contacto, qué quiere) y registra lead
4. Si es **algo complejo** → mensaje al dueño "atención requerida" + contexto

**Saliente** (bot envía):
- Confirmación de recepción al cliente final
- Respuesta de hasta 1.500 caracteres en el tono de marca
- Si captura lead, mensaje cordial pidiendo info adicional

### Dashboard (Notion del cliente)

- Log de conversaciones (cliente puede revisar cualquier chat)
- Métricas: total mensajes, % autoresueltos, leads capturados
- Filtros: por fecha, por tipo, por estado

### Configuración inicial

- 30 preguntas frecuentes pre-entrenadas con respuestas en tono del cliente
- 3 flujos de captura de leads (ej: reserva, info producto, contacto general)
- 1 flujo de derivación humana con criterio configurable

---

## Stack técnico (lo que usa el cliente sin verlo)

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│   Cliente final → WhatsApp Business (móvil del cliente)     │
│                          ↓                                   │
│             Meta WhatsApp Cloud API                          │
│                          ↓                                   │
│              n8n self-hosted (Hetzner)                       │
│                  ↓                  ↓                        │
│         Claude API (Sonnet)    Notion / Sheets               │
│         (entiende y genera)    (logs y leads)                │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Coste mensual operacional**:
- Hetzner VPS: €5/mes (compartido entre todos los clientes)
- WhatsApp Business API: gratis primeras 1.000 conversaciones/mes (Meta)
- Claude API: $5-25/mes por cliente típico (con prompt caching)
- Notion: gratis (free tier suficiente)
- **Total para servir 10 clientes**: ~€60/mes

---

## Cómo se vende

### Pitch corto (10 segundos)

> "¿Cuántos WhatsApp respondes al día? Si son más de 30, hay un 70% de ellos que un bot con IA respondería igual o mejor que tú, dejándote tiempo para los que sí importan."

### Pitch en llamada (2 min)

> "Mira, te explico cómo funciona. Tu equipo recibe X mensajes/día por WhatsApp. La mayoría son preguntas repetidas: horario, ubicación, si tenéis menú sin gluten, si admitís perros, cómo reservar.
>
> Si yo entreno un bot con tus 30 preguntas más típicas y tu tono de marca, ese bot responde el 70% solo. El 30% restante, te avisa para que lo cojas tú con contexto.
>
> Lo monto en 2 semanas, te lo dejo funcionando, $1.500. Después si quieres que esté monitoreado y ajustado cada mes, $200/mes — la mayoría se queda con el mantenimiento porque cuando el bot toca cosa nueva (carta nueva, promoción) tienes que actualizar prompts.
>
> Antes te hago un diagnóstico de $300 para asegurarme de que en tu caso concreto es la mejor jugada (a veces hay otra automatización con más ROI). El diagnóstico viene con un quick-win demo en vivo con tus mensajes reales."

### Demo del quick-win durante el diagnóstico

Durante la videollamada de cierre del diagnóstico (sesión 30 min):

1. Cliente comparte pantalla con 10-15 WhatsApp típicos que reciben
2. Tú abres tu **playground Claude API pre-configurado** con un prompt genérico de "asistente de [tipo de negocio]"
3. Pasas el primer mensaje del cliente literalmente al playground
4. Cliente ve cómo Claude responde "en tiempo real" de forma sensata
5. Iteras 3-4 mensajes adaptando el prompt al tono del cliente
6. Cliente ve la magia y dice "ok, hagámoslo"

**Esto es el momento de cierre**. Sin demo en vivo, la conversión cae 50%. **Tienes que tener el playground pre-armado** (te lo dejo en `plantillas-implementacion/playground-demo-cliente.md`).

---

## Cómo se construye (proceso técnico)

### Cliente 1 (12-18h tu tiempo)

**Día 1 (3h)**: Setup técnico
- Crear Meta Business Account si no tiene
- Conectar WhatsApp Business API
- Setup n8n workflow base (clonar desde tu repo template)
- Configurar Claude API key en n8n con prompt caching

**Día 2-3 (4h)**: Configuración cliente-específica
- Procesar 30 FAQs del cliente: estructurar en sistema prompt
- Definir 3 flujos de captura (ej: reserva, info producto, contacto)
- Test con 20 mensajes simulados → ajustar

**Día 4-5 (2h)**: Logging y dashboard
- Notion del cliente con tabla logs + métricas
- Workflow n8n escribe cada conversación al Notion
- Vista cliente: filtros + métricas mensuales

**Día 6-7 (2h)**: Testing real
- Test con 50 mensajes reales del histórico del cliente
- Ajustar prompts hasta que % autoresolución ≥70%

**Día 8 (1h)**: Handover
- Videollamada 45 min con cliente
- Le enseñas Notion + cómo cambiar respuestas básicas
- Documento de 2 páginas en su carpeta

**Día 9-14**: Bug fixes / ajustes post-entrega (2 rondas incluidas)

### Cliente 2-5 (8-12h, con template propio refinado)

Setup técnico baja a 30 min (clonas tu n8n workflow). Lo que sigue ocupando tiempo:
- Personalización 30 FAQs (irreductible, requiere conversación con cliente)
- Tono de voz (irreductible)
- Testing con mensajes reales (irreductible)

### Cliente 6+ (5-8h, con template + librería de tonos)

A los 5 clientes tienes:
- 5 variantes de tono de marca catalogadas
- Patrones recurrentes de FAQs (las 10 más comunes son universales)
- Scripts de testing automatizado

Aquí el margen explota: $1.500 / 6h = **$250/h**.

---

## Mantenimiento mensual (lo que justifica los $200/mes)

### Cada mes, 2h:

**Hora 1** (revisión):
- Análisis logs del mes: % autorresolución, % derivaciones, errores
- Identificación 3-5 patrones de mensajes que el bot NO supo manejar
- Actualización de prompts para cubrir esos patrones

**Hora 2** (mejoras según feedback):
- Cliente menciona "cuando preguntan X yo prefiero respuesta Y" → ajustar
- Cambio menor (carta nueva, promoción, horarios especiales) → actualizar
- Verificar costes API y optimizar prompt caching si aplica

**Entregable mensual** (15 min):
- Email/PDF al cliente con métricas + 3 mejoras aplicadas + sugerencia próximo mes

---

## Métricas de éxito post-entrega

### KPIs cliente (lo que le muestras en reporte mensual)

- **Volumen procesado**: X mensajes recibidos
- **% autoresueltos** sin intervención humana (target: ≥70% mes 1, ≥85% mes 3)
- **Tiempo medio de respuesta**: <30 segundos (vs hora humana)
- **Leads capturados** activamente
- **NPS bot**: opcional, encuesta 1/mes a 10 clientes finales

### KPIs internos (los que tú vigilas)

- **Coste real API**: $/cliente/mes (target: <$15)
- **Tiempo soporte real**: h/cliente/mes (target: <2h)
- **Churn**: % clientes que cancelan/mes (target: <5%)

---

## Variantes del caso pilar (cuándo ofrecemos qué)

| Variante | Cuándo | Sobrecoste |
|---|---|---|
| **Bot básico** (este doc) | Default | $1.500 |
| Bot + integración CRM (HubSpot, Pipedrive) | Cliente ya tiene CRM | +$500 |
| Bot bilingüe ES/EN | Negocios con turismo | +$300 |
| Bot + voz (audios procesados) | Casos avanzados | +$700 |
| Bot multi-canal (WhatsApp + IG DM + email) | A los 3 meses de WhatsApp | +$1.000 |

**Regla**: en fase 0 (mes 4-6), solo vendemos el básico. Variantes desde mes 7+.

---

## Lo que NO ofrecemos (límites del caso pilar)

- **Atención al cliente "humana" 24/7**: el bot deriva, el cliente atiende
- **Resolución de quejas/reclamaciones**: el bot detecta y deriva siempre
- **Pagos/transacciones**: nunca, riesgo legal/técnico
- **Información en tiempo real cambiante** (stock, precios variables): solo si conecta con su sistema (cotizar aparte)
- **Análisis de sentimiento avanzado**: feature posterior

---

## Roadmap de evolución del caso pilar

| Mes | Versión | Mejoras |
|---|---|---|
| 4 | v1 | Bot básico WhatsApp + FAQ + leads (este doc) |
| 6 | v1.1 | Plantilla cliente afinada, librería 5 tonos de marca |
| 8 | v2 | Multi-canal (WhatsApp + IG DM) opcional |
| 10 | v2.1 | Integración CRM lite (HubSpot free) |
| 12 | v3 | Dashboard cliente con analítica avanzada |

Versión = lo que ofrecemos por default. Mejoras anteriores ya son opcionales para clientes nuevos.
