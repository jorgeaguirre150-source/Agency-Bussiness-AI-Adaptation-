# Caso de uso 2 — Agente generador de contenidos

> Activación: **mes 7+**, tras 5 bots WhatsApp entregados.
> Pitch: "Publicas en redes 4 veces/semana en tu tono de marca, sin tocar nada."
>
> **Pricing oficial**: Implementación $2.500 (default) — $3.500 (variantes premium). Mantenimiento desde $200/mes. Ver `/PRICING.md`.

---

## Por qué este caso (segundo)

| Criterio | Score | Razón |
|---|---|---|
| Dolor agudo | 🟢 8/10 | PYMEs saben que tienen que publicar más pero no tienen tiempo |
| Resultado visible | 🟢 8/10 | Cliente ve sus posts publicados cada semana |
| Stack manejable | 🟢 9/10 | Claude + Buffer/Metricool API + Sheets/Notion |
| Complementa L1 | 🟢 10/10 | L1 ya hace 16 posts/mes con freelancer. Este caso lo automatiza al 80% |
| Margen | 🟢 9/10 | $2.500 / 10-15h cliente 1 → 5-7h cliente 5+ |
| Mantenimiento | 🟢 8/10 | 2h/mes ajustando tono, ideas, calendario |

---

## Lo que entregamos al cliente

### Funcionalidad

**Generación semanal**: cada lunes, el agente genera contenido para los 7 días siguientes:

- **4 posts** para Instagram + Facebook (texto + descripción de imagen sugerida + 5 hashtags)
- **1 guión de Reel** de 30-45 segundos con shotlist
- **1 carrusel** de 5-7 slides con copy estructurado
- **1 idea de stories** semanal (formato: pregunta/poll)

**Personalización por el cliente** (panel Notion):
- Tono de marca (cargado al inicio, editable)
- Calendario de eventos especiales (Navidad, Día del Padre, promociones)
- "No tocar": lista de temas/palabras que el agente NUNCA debe mencionar
- Aprobación: cliente revisa lunes y aprueba/edita antes de programar

**Programación automatizada** (opcional, +$200/mes):
- Conexión con Buffer o Metricool del cliente
- Posts aprobados se programan automáticamente para horarios óptimos
- Reportes mensuales con métricas reales (alcance, engagement, clicks)

### Lo que NO incluye

- Diseño de imágenes/vídeos (cliente o su freelance los crea siguiendo el guión)
- Gestión de comentarios/DMs (eso es el bot WhatsApp o un humano)
- Estrategia de marca completa (el agente trabaja sobre la marca que YA tiene el cliente)
- Análisis avanzado de competencia
- Anuncios pagados (Meta Ads, Google Ads)

---

## Stack técnico

```
┌────────────────────────────────────────────────────────────┐
│                                                             │
│  CRON (lunes 6:00 AM) → n8n trigger                        │
│         ↓                                                   │
│  Cargar context cliente (Notion):                          │
│   - Tono de marca + ejemplos                                │
│   - Eventos próxima semana                                  │
│   - "No tocar" list                                         │
│   - Posts últimos 30 días (evitar repetición)               │
│         ↓                                                   │
│  Claude API (Sonnet 4.6, prompt caching obligatorio)       │
│  Genera: 4 posts + 1 reel + 1 carrusel + 1 stories         │
│         ↓                                                   │
│  Guardar en Notion (database "Contenido pendiente revisión")│
│         ↓                                                   │
│  Email/WhatsApp al cliente lunes 9:00 AM:                  │
│   "Tu contenido semanal listo. Revisa antes del miércoles." │
│         ↓                                                   │
│  Cliente aprueba/edita en Notion                           │
│         ↓                                                   │
│  Miércoles 18:00: n8n verifica aprobaciones                │
│         ↓                                                   │
│  Si tiene "Buffer plan": programar en horarios óptimos     │
│  Si no: cliente programa manualmente desde Notion          │
│                                                             │
└────────────────────────────────────────────────────────────┘
```

**Componentes**:
- n8n (mismo VPS Hetzner compartido)
- Claude API (con caching: ~$3-8/mes por cliente)
- Notion (cliente y tú compartidos)
- Buffer API o Metricool API (opcional, $5-15/mes según cliente)

**Coste operacional por cliente**: $3-15/mes. Cobras $200/mes (Basic) → $400 (Pro) → $800 (Scale). Margen 92-98%.

---

## Cómo se vende

### Pitch corto (10 seg)

> "¿Cuántos posts publicas a la semana? Si son menos de 4, estás perdiendo alcance orgánico. Yo monto un agente que genera 4-7 piezas semanales en tu tono, listas para aprobar y publicar."

### Pitch llamada (90 seg)

> "Te explico cómo funciona: cada lunes a las 9 de la mañana recibes en tu Notion (o email) el calendario de contenido de la semana. Son 4 posts, 1 guión de reel, 1 carrusel y 1 stories.
>
> Está todo escrito en TU tono. He cargado al agente con tus últimos 50 posts, tu tipo de negocio, los eventos que tienes próximos. No es genérico — es como si tu mejor copywriter estuviera trabajando 30h/semana para ti.
>
> Tú lo revisas el lunes en 20 minutos. Apruebas, editas, o pides cambios. El agente te genera variantes al instante.
>
> Si quieres, también te lo programo automáticamente en Buffer y se publica en los horarios óptimos. Eso son $200 más al mes — opcional.
>
> Implementación $1.500 en 2 semanas. Antes diagnóstico de $300 para verificar que tu tono y calendario están listos para automatización. Si no, te lo digo claro."

### Demo durante diagnóstico

Misma mecánica que bot WhatsApp pero en vez de mensaje + respuesta:

1. Cliente comparte 10 posts pasados de su Instagram
2. Tú cargas el prompt en Anthropic Workbench con su "tono extraído"
3. Le pides al agente: "Genera 3 posts para esta semana sobre [evento que el cliente menciona]"
4. Claude responde con 3 variantes
5. Cliente lee → **"Vale, este es mi tono perfectamente"**

Cierre.

---

## Cómo se construye

### Cliente 1 (10-15h)

**Día 1-2 (3h)**: Extracción del tono de marca
- Cliente entrega últimos 50 posts (link a IG o copy/paste)
- Tú analizas: vocabulario, estructura, emojis, tipo de hooks
- Documento de "Manual de tono" (2 páginas)

**Día 3-4 (4h)**: Prompt master del cliente
- Sistema prompt con manual de tono cargado
- 3 ejemplos de post bien escrito + 3 ejemplos de "esto NO es mi tono"
- Test con 10 generaciones → ajustar

**Día 5-6 (3h)**: Workflow n8n
- Clonar workflow base "agente-contenidos"
- Personalizar variables del cliente
- Conectar Notion (database "Contenido pendiente")

**Día 7-8 (2h)**: Cliente Notion + onboarding
- Crear estructura Notion en workspace cliente
- Cargar calendario eventos próximos 3 meses
- Sesión 30min con cliente para que sepa revisar/aprobar

**Día 9-10 (2h)**: Test real
- Primera generación con datos reales del cliente
- Iteración con cliente (3-4 vueltas hasta "esto es mi tono")

**Día 11-14**: Buffer post-entrega (2 rondas revisión incluidas)

### Cliente 2-5 (7-10h)

Con librería de "tonos catalogados" (familiar/profesional/joven/premium + variantes), reduces a:
- Extracción tono: 1h (solo identificar arquetipo + 3 ajustes)
- Prompt master: 2h
- Workflow + Notion: 1.5h
- Test: 2h
- Cliente: 1h

### Cliente 6+ (5-7h)

Con todo abstraído + UI de configuración (Notion template estandarizado):
- Cliente rellena él mismo plantilla "Mi tono en 10 frases"
- Tú solo iteras tras primer test
- Margen escala: $1.500/6h = $250/h

---

## Mantenimiento mensual (las 2h justifican $200/mes)

### Primera hora — Análisis

- Revisar generaciones del mes: % aprobadas tal cual vs editadas
- Detectar patrones que el cliente edita siempre → ajustar prompt
- Verificar diversidad de contenidos (no repetir mismas ideas)

### Segunda hora — Mejoras + reporte

- Aplicar ajustes al prompt master
- Actualizar calendario eventos para mes siguiente
- Generar reporte breve: nº posts generados, % aprobados tal cual, métricas redes (si tiene Buffer conectado)
- Sugerir 1-2 mejoras estratégicas

---

## Variantes y add-ons

| Variante | Precio | Cuándo aplica |
|---|---|---|
| **Básico** (este doc) | $2.500 + $200/mes | Default |
| Add-on programación Buffer/Metricool | +$200/mes | Cliente quiere zero-touch |
| Add-on bilingüe ES/EN | +$300 implementación | Cliente con audiencia turística |
| Add-on TikTok scripts | +$300 implementación | Cliente quiere vídeo |
| Add-on email marketing | +$500 implementación | Cliente tiene newsletter |

---

## Métricas

### KPIs cliente (lo que muestras mensual)

- **Contenidos generados**: 28 piezas/mes (4 sem × 7)
- **% aprobados sin editar**: target ≥60%
- **% editados ligeramente**: target ~30%
- **% rechazados**: target <10%
- **Alcance redes (si Buffer)**: comparado vs mes anterior
- **Engagement rate**: idem
- **Tiempo cliente revisión semanal**: target ≤30 min

### KPIs internos

- **Coste API por cliente**: target <$10/mes
- **Tiempo soporte mensual**: target ≤2h
- **Churn**: target <5%/mes

---

## Roadmap evolución del caso

| Mes | Versión | Mejora |
|---|---|---|
| 7 | v1 | Generación texto + plantilla básica Notion |
| 9 | v1.1 | Librería 5 tonos pre-catalogados + onboarding 50% más rápido |
| 11 | v2 | Add-on programación Buffer/Metricool |
| 12 | v2.1 | Multi-canal (IG + FB + LinkedIn) |
| Año 2 | v3 | Generación de imágenes con DALL-E/Midjourney via API (post nuevas plantillas Canva) |

---

## Combinación con L1 (cross-sell estratégico)

Si tu cliente L1 ya tiene mantenimiento RRSS de $400/mes contigo (junior ejecuta), puedes ofrecerle upgrade:

> "Mira, ahora pongo un agente de IA que genera tu contenido automáticamente. Sigues teniendo a [junior] para diseño y publicación, pero el copywriting lo hace IA. Más calidad, más variedad. Por el mismo precio, $400/mes."

Esto convierte tu junior de "creador" a "ejecutor" → escalas a 20 clientes sin contratar más personas. **Brutal económicamente**.
