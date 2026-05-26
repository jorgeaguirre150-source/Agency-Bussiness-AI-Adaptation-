# Notion Schema — Workspace cliente bot WhatsApp

> Estructura de databases Notion para cada cliente. Replicable con duplicate template.

## Workspace structure

```
[Cliente] Bot WhatsApp/
├── 🤖 Conversaciones (database)
├── 🎯 Leads (database)
├── 📊 Métricas mensuales (database)
└── 📚 FAQs y prompts (database)
```

## Database 1 — Conversaciones

Log completo de mensajes entrantes y salientes. Para que el cliente pueda revisar cualquier chat.

### Properties

| Nombre | Tipo | Ejemplo |
|---|---|---|
| **Mensaje** | Title | "¿Abrís hoy domingo?" |
| **WaId** | Phone number | +34611223344 |
| **Nombre contacto** | Rich text | Juan Pérez |
| **Dirección** | Select (Entrante / Saliente) | Entrante |
| **Timestamp** | Date (with time) | 2026-05-25 14:32 |
| **Intent** | Select (faq / lead_capture / complaint / human_required / saludo) | faq |
| **Requires human** | Checkbox | false |
| **Respuesta del bot** | Rich text | "¡Hola! Sí, domingos 13:00-17:00..." |
| **Resuelto** | Checkbox | true |
| **Notas** | Rich text (opcional) | "" |

### Vistas

- **Hoy**: filter `Timestamp = Today`, sort desc
- **Pendientes humano**: filter `Requires human = true AND Resuelto = false`
- **Por contacto**: group by `WaId`
- **Quejas**: filter `Intent = complaint`

## Database 2 — Leads

Captura de oportunidades comerciales. El cliente debe revisar a diario.

### Properties

| Nombre | Tipo | Ejemplo |
|---|---|---|
| **Nombre** | Title | María González |
| **WaId** | Phone | +34611223344 |
| **Interés** | Rich text | "Reserva sábado 21h para 6 personas" |
| **Fecha mensaje** | Date | 2026-05-25 14:35 |
| **Estado** | Select (Nuevo / Contactado / Confirmado / Cancelado / Cerrado) | Nuevo |
| **Próximo paso** | Rich text | "Confirmar disponibilidad sábado 21h" |
| **Valor estimado** | Number | 180 |
| **Notas** | Rich text | "Cliente recurrente según historial" |
| **Fecha confirmación** | Date | (vacío al inicio) |
| **Atendido por** | Person (cuando equipo grande) | (vacío al inicio) |

### Vistas

- **Pipeline Kanban**: group by `Estado`
- **Nuevos hoy**: filter `Estado = Nuevo AND Fecha mensaje = Today`
- **Sin contestar 24h**: filter `Estado = Nuevo AND Fecha mensaje < Yesterday` → alerta

### Automatización Notion

Cuando un lead pasa a `Estado = Confirmado`:
- Notification al equipo
- Crear evento Google Calendar con `Fecha confirmación`

## Database 3 — Métricas mensuales

Auto-agregado de logs. Lo que muestras al cliente en reporte mensual.

### Properties

| Nombre | Tipo | Cálculo |
|---|---|---|
| **Mes** | Title | "Mayo 2026" |
| **Total mensajes** | Number (formula) | count(Conversaciones.Entrante en mes) |
| **Total respondidos por bot** | Number (formula) | count(Conversaciones.Saliente en mes) |
| **% autoresuelto** | Formula | (Saliente - human_required) / Entrante × 100 |
| **Leads capturados** | Number (formula) | count(Leads.Fecha en mes) |
| **Leads convertidos** | Number (formula) | count(Leads.Estado=Confirmado en mes) |
| **% conversión leads** | Formula | Convertidos / Capturados × 100 |
| **Quejas detectadas** | Number (formula) | count(Conversaciones.Intent=complaint en mes) |
| **Comentarios cliente** | Rich text | (rellenas tú en revisión mensual) |
| **Mejoras aplicadas** | Rich text | (rellenas tú en revisión mensual) |

### Reporte mensual (auto-export)

Vista compacta exportable a PDF con todas estas métricas + 3 highlights del mes.

## Database 4 — FAQs y prompts

Base de conocimiento editable. El cliente puede sugerir cambios sin meterse en el código.

### Properties

| Nombre | Tipo | Ejemplo |
|---|---|---|
| **Pregunta** | Title | "¿Aceptáis tarjeta?" |
| **Respuesta** | Rich text | "Sí, todas las tarjetas y también Bizum." |
| **Categoría** | Select (Horario / Servicios / Pago / Ubicación / Menú / Eventos / Política) | Pago |
| **Activo** | Checkbox | true |
| **Frecuencia uso** | Number | 23 |
| **Última edición** | Last edited time | (auto) |
| **Editado por** | Last edited by | (auto) |

### Workflow de actualización

1. Cliente sugiere cambio → edita directamente en Notion
2. Tú detectas el cambio (Notion webhook → email/Slack)
3. Revisas, ajustas prompt sistema en n8n
4. Test rápido → activate
5. Reportas al cliente "Cambio aplicado"

Esto deja al cliente con sensación de control sin que pueda romper el sistema.

## Crear el workspace para cliente nuevo (15 min)

1. **Duplicate template** del workspace plantilla (uno que mantienes en tu cuenta Notion)
2. Rename: `[Cliente] Bot WhatsApp`
3. Compartir con el cliente como **Editor** en database `FAQs y prompts`, **Comment-only** en el resto
4. Subir las **30 FAQs reales** del cliente a `FAQs y prompts`
5. Copiar IDs de las databases (Conversaciones, Leads, FAQs) → pegar en variables n8n
6. Test: enviar mensaje WhatsApp simulado → verificar aparece en Conversaciones

## Permisos por rol

| Rol | Conversaciones | Leads | Métricas | FAQs |
|---|---|---|---|---|
| **Tú (CONSULTOR)** | Full | Full | Full | Full |
| **Cliente (DUEÑO)** | Read+comment | Edit | Read | Edit |
| **Equipo cliente (CAMARERO/EMPLEADO)** | Read | Edit | – | – |
| **Junior tu (RRSS junior, mes 3+)** | – | – | – | – |

## Backup

Notion tiene exportación automática mensual. Conectarlo a un Google Drive del cliente para que tenga histórico fuera del workspace por si caduca suscripción o algo.
