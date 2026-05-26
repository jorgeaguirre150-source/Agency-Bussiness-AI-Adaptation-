# Playground Demo — Quick-win en vivo durante el Diagnóstico

> El momento clave del diagnóstico. Cliente VE el bot funcionando con sus propios datos. Sin esto, conversión Diagnóstico → Implementación cae 50%.

## Cuándo y dónde se hace

- **Cuándo**: en la sesión de cierre del diagnóstico (día 5)
- **Duración**: 25-30 min de los 60 min de la sesión
- **Modo**: videollamada con tu pantalla compartida
- **Preparación previa**: 15 min antes de la llamada

## Setup técnico (15 min antes de la llamada)

### Lo que tienes preparado fijo

**Anthropic Console Workbench** (`console.anthropic.com/workbench`):
- Cuenta tuya
- Workbench con prompt pre-cargado en blanco
- Modelo: `claude-sonnet-4-5-20250929`

**Notion**:
- Workspace test "Demo cliente [Nombre]" duplicado del template
- Pestaña abierta a la database `Conversaciones`

**Browser**:
- Tab 1: Anthropic Workbench
- Tab 2: Notion
- Tab 3: WhatsApp Web del cliente (si has accedido durante el diagnóstico)
- Tab 4: vacío (para improvisaciones)

### Personalización del prompt (10 min de prep)

Tomas el prompt master de `system-prompts.md` y rellenas con datos del cliente que YA tienes del kickoff:

- `{{CLIENTE_NOMBRE}}` ← lo sabes
- `{{CLIENTE_TIPO_NEGOCIO}}` ← lo sabes
- `{{CLIENTE_CIUDAD}}` ← lo sabes
- `{{CLIENTE_TONO}}` ← lo viste en sus posts redes, lo ajustas en vivo
- `{{CLIENTE_HORARIO_BLOQUE}}` ← lo sacas de Google Maps
- `{{CLIENTE_SERVICIOS_LISTA}}` ← inferes de su carta/menú
- `{{CLIENTE_FAQS_BLOQUE}}` ← entre 8-10 FAQs típicas del sector (no las 30 reales aún)

**No necesitas las 30 FAQs reales para la demo**. Con 8-10 inferidas del tipo de negocio basta para que el cliente vea el potencial.

## Guion de la demo (en vivo, 25 min)

### Acto 1 — Setup compartido (3 min)

Compartes pantalla. Cliente ve Workbench abierto con prompt cargado.

> "Mira, te voy a enseñar **exactamente** cómo funcionaría tu bot, pero con tus datos. Esto que ves aquí [señala prompt] es como el cerebro del bot: tu información, tu tono, tus servicios. Vamos a probarlo con mensajes que sueles recibir."

### Acto 2 — Mensaje obvio (3 min)

Pides al cliente un mensaje TÍPICO que reciben mucho:

> "Dame un mensaje que recibís 10 veces al día, los más típicos."

Probable respuesta: "¿Tenéis terraza?" / "¿Aceptáis perros?" / "¿Cuánto cuesta el menú del día?"

Lo pegas en Workbench, click Run.

Claude responde en JSON. Tú lees solo el campo `response` en voz alta con énfasis:

> *"¡Hola! Sí, tenemos terraza para 24 personas, climatizada en invierno. Te esperamos."*

Cliente: *"Joder, sí está bien."*

### Acto 3 — Mensaje con captura de lead (4 min)

> "Vale, ahora uno que sea una reserva o cliente interesado."

Cliente sugiere: "Quiero reservar para 8 el viernes a las 22h."

Lo pegas. Claude responde:
```json
{
  "intent": "lead_capture",
  "response": "¡Perfecto! Para reservar 8 personas el viernes a las 22h, ¿me das tu nombre y un número de contacto? Te confirmo en cuanto cuadre la mesa.",
  "requires_human": true,
  "lead_data": { "interes": "reserva viernes 22h para 8 personas" }
}
```

Lees la `response` + abres Notion en Tab 2:

> "Y aquí en Notion, automáticamente, se ha creado el lead." [muestras database Leads con el registro nuevo]

> "Tú al día siguiente entras aquí por la mañana y ves todos los leads de la noche. Decides cuáles confirmas, cuáles llamas. **El bot nunca confirma reservas él solo. Solo captura.**"

### Acto 4 — Mensaje complicado (4 min)

> "Ahora algo que te complica el día. Una queja, o algo raro."

Cliente sugiere algo tipo: "La sopa estaba fría ayer, fatal."

Pegas. Claude responde:
```json
{
  "intent": "complaint",
  "response": "Lamento mucho lo que cuentas, no es lo que queremos para nuestros clientes. Te paso ahora mismo con [Nombre del dueño], que se hará cargo personalmente. Mil gracias por avisar.",
  "requires_human": true
}
```

> "Aquí pasa algo importante: el bot **NO** intenta resolver la queja él. Te avisa a TI por email + WhatsApp interno. Tú decides cómo contestar."

> "Y mira esto: si el bot intentara responder algo así, te haría más daño que solución. Lo importante es que **te lleve la queja sin que se pierda**, que es lo que pasa hoy cuando tu equipo está liado al mediodía."

### Acto 5 — Iteración del tono (5 min)

Ahora la parte mágica que cierra ventas.

> "Espera, ¿el tono te encaja o lo quieres más [X]?"

Si dice "más familiar / más profesional / más jovial", lo cambias EN VIVO:

Editas el campo `{{CLIENTE_TONO}}` en el prompt. Reescribes la descripción del tono. Re-corres el mensaje 1.

Cliente ve cómo el mismo mensaje devuelve respuesta con tono ajustado. Esto es el "wow":

> *"Joder, ahora suena como hablo yo."*

Aquí el cliente entiende que el bot **se adapta a SU marca**, no es genérico.

### Acto 6 — Demo cerrada + pitch (6 min)

> "Vale, lo que has visto en estos 20 minutos es el bot funcionando con menos de la mitad de tu información. Cuando lo implemente con tus 30 FAQs reales y un día de iteración del tono, va a responder el 70-80% de los mensajes solos."

> "Te recuerdo el plan:
> - **Implementación** (1 sola): $1.500 en 2 semanas. Yo monto todo, conectado a tu WhatsApp Business actual.
> - **Mantenimiento** opcional pero MUY recomendado: $200/mes. Yo ajusto prompts mensualmente, te paso reporte, lo mantengo afinado.
> - El **diagnóstico que hiciste** ($300) te lo descuento del implementation si avanzas → quedan $1.200."

> "Te dejo decidirlo en 24h, sin presión. Te paso por email el resumen, el contrato y el Stripe Payment Link. Si dices que sí mañana, arrancamos el lunes y el viernes tendrás el bot básico funcionando."

## Trampas a evitar durante la demo

| Trampa | Por qué pasa | Cómo evitarla |
|---|---|---|
| **Improvisar el prompt** sin tenerlo preparado | Ansiedad del momento | Pre-cargado con 8-10 FAQs antes de la llamada |
| **Hablar mucho del JSON** | Tu sesgo técnico | Cliente ve solo `response`. JSON es invisible. |
| **Defender la respuesta** si Claude se equivoca | Ego | Si Claude falla, lo CONFIRMAS: "ojo, esto está con datos parciales. Con tus 30 FAQs reales esto no falla." |
| **No iterar el tono en vivo** | Falta de práctica | **Esto es el cierre**. Practica con clientes hipotéticos antes del primer real. |
| **Decir el precio al final como cosa molesta** | Mentalidad de "ojalá no me pregunte" | Lo dices con confianza, neutral, como cualquier otro dato técnico. |
| **No descontar el diagnóstico** | Olvido | Es la palanca que cierra el 70% de los casos. **Siempre menciónalo**. |

## Variantes según sector

### Restaurante → bot WhatsApp clásico (este doc)

### Clínica dental → bot WhatsApp con citas

Cambios:
- `intent: cita_capture` (no lead)
- Pregunta: ¿qué tratamiento? ¿primera vez? ¿algún día/hora preferida?
- Sin lead estimado de valor (eso lo hace el clínico)

### Asesoría/Abogado → bot WhatsApp con info inicial

Cambios:
- `intent: consulta_capture`
- Pregunta: ¿de qué tipo es tu consulta (fiscal/laboral/civil)? ¿es urgente?
- Captura datos PROTEGIDOS con frase "no compartas datos sensibles aquí, te llamamos"

### Tienda local → bot WhatsApp con stock

Cambios:
- Integración futura con su Excel/Shopify para responder stock real (no en MVP)
- En MVP: "ese producto suele estar disponible, ¿te lo reservo?"

## Tras la demo: el seguimiento

**Hora 0** (al colgar): mientras está fresco, mandas WhatsApp:

```
[Nombre], gracias por la sesión, ha sido productiva.

Te resumo en 3 puntos:

1. El bot probado funciona, te ahorra ~15-20h/semana del equipo
2. Implementación $1.500 en 2 semanas (te descuento los $300 del diagnóstico → $1.200)
3. Mantenimiento $200/mes opcional pero te lo recomiendo: sin ajustes mensuales decae el rendimiento

Te paso por email contrato + Stripe Link. Si dices sí mañana, arrancamos el lunes.

Sin presión. Decide cuando puedas.

Un abrazo,
[Tu nombre]
```

**Día +1** (24h): email formal con propuesta de implementación firmable.

**Día +3**: si no respondió, follow-up suave: "¿Pudiste mirarlo? ¿Dudas?"

**Día +7**: cierre limpio. "Sin presión. Si cambias de idea, sabes dónde estoy."

## Métricas a vigilar (las primeras 5 demos)

| Métrica | Target |
|---|---|
| % demos que llegan al Acto 5 (iteración tono) | 100% |
| % demos que cliente dice "wow" o equivalente | ≥80% |
| Conversión Demo → Implementación cerrada en 7 días | ≥50% |
| Promedio días desde demo a cierre | <5 días |

Si la conversión es <50% después de 5 demos, NO es el precio. Es el guion. Revisar.
