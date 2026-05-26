# Contrato — Implementación de Automatización con IA

> Basado en `03-venta/contrato-web.md` adaptado a L2. Scope blindado. $1.500 fijo. 50/50 split.

---

## CONTRATO DE DISEÑO Y DESARROLLO DE AUTOMATIZACIÓN CON IA

**En [Ciudad], a [Fecha]**

### REUNIDOS

**De una parte**:
[Tu nombre completo], con NIF nº [NIF], domicilio en [...], email [email]. En adelante, **"EL CONSULTOR"**.

**De otra parte**:
[Nombre del responsable], con NIF/CIF nº [...], representante de [Nombre del negocio], domicilio social en [...], email [email cliente]. En adelante, **"EL CLIENTE"**.

### EXPONEN

I. EL CLIENTE recibió previamente un Diagnóstico de Automatización con IA realizado por EL CONSULTOR (Contrato de Diagnóstico de fecha [...]).

II. EL CLIENTE decide proceder a la implementación de la automatización priorizada en el Anexo I de este contrato.

III. Ambas partes acuerdan suscribir el presente contrato conforme a las siguientes cláusulas:

### CLÁUSULAS

**PRIMERA — OBJETO**

EL CONSULTOR se compromete a diseñar, construir, desplegar y documentar la automatización detallada en el Anexo I, dejándola en funcionamiento productivo en el entorno técnico del CLIENTE.

**SEGUNDA — ALCANCE (SCOPE BLINDADO)**

La presente implementación incluye estrictamente lo definido en el Anexo I. Cambios al alcance solicitados después de la firma se considerarán **Change Requests** y se presupuestarán aparte.

Quedan expresamente fuera del alcance:
- Automatización de procesos no detallados en Anexo I
- Integración con sistemas no previstos en Anexo I
- Migraciones de datos masivas (>10.000 registros)
- Formación extensiva al equipo del cliente (incluida solo 1h de handover)

**TERCERA — PRECIO Y PAGO**

Precio total: **[IMPORTE_EN_LETRA] EUROS / DÓLARES ($[IMPORTE])**, impuestos no incluidos.

> El precio concreto se fija dentro del rango oficial del servicio ($1.500 — $5.000) según scope detallado en Anexo I, derivado del Diagnóstico previo. El precio es **fijo y cerrado** una vez firmado este contrato.

Forma de pago:
- **50%** al firmar el presente contrato, en concepto de reserva y arranque
- **50%** a la entrega del sistema automatizado en producción y validado por EL CLIENTE

Medio de pago: transferencia bancaria, Bizum, PayPal o Stripe Payment Link.

**CUARTA — PLAZO DE ENTREGA**

EL CONSULTOR entregará la automatización funcional en un plazo máximo de **14 días hábiles** desde:
1. Firma del contrato
2. Recepción del 50% inicial
3. Entrega por EL CLIENTE de los accesos técnicos necesarios listados en Anexo II

Si EL CLIENTE retrasa la entrega de accesos, el plazo se contará desde la fecha de recepción del último elemento necesario.

**QUINTA — REVISIONES**

Se incluyen **2 rondas de revisiones** sobre la implementación entregada, dentro de los 14 días siguientes a la entrega.

Cambios adicionales o solicitados después de los 14 días se facturarán a razón de $60/hora con presupuesto previo aprobado.

**SEXTA — INFRAESTRUCTURA TÉCNICA**

- La automatización se desplegará en infraestructura del CLIENTE o en hosting compartido del CONSULTOR (a elección del CLIENTE).
- Los costes de APIs (Claude, WhatsApp Business, etc.) son por cuenta del CLIENTE desde el día 1.
- Si se usa hosting compartido del CONSULTOR durante el primer mes, está incluido. Después, $20-50/mes adicionales o migración a infraestructura propia del CLIENTE.

**SÉPTIMA — PROPIEDAD INTELECTUAL**

A la entrega final y pago completo:
- EL CLIENTE adquiere la titularidad de la configuración, prompts y workflows desarrollados específicamente.
- El código se entregará en una cuenta GitHub/Notion del CLIENTE.
- EL CONSULTOR se reserva el derecho a usar la solución como caso de estudio en su portafolio (sin divulgar datos sensibles), salvo objeción expresa por escrito.

**OCTAVA — GARANTÍA**

EL CONSULTOR garantiza el correcto funcionamiento de la automatización durante **30 días naturales** desde su entrega.

Cualquier bug o error técnico detectado en ese plazo será corregido sin coste. La garantía NO cubre:
- Cambios solicitados no contemplados en Anexo I
- Errores derivados de modificaciones por terceros
- Caídas de servicios externos (Claude, WhatsApp API, hosting)
- Cambios en políticas de APIs de terceros que afecten el funcionamiento (se presupuestará la adaptación aparte)

**NOVENA — CONFIDENCIALIDAD Y DATOS**

Ambas partes se comprometen a confidencialidad sobre información conocida durante la prestación.

Para el tratamiento de datos personales en la automatización, ambas partes firmarán un Acuerdo de Encargado de Tratamiento separado conforme al RGPD.

**DÉCIMA — RESCISIÓN**

EL CLIENTE puede rescindir antes de la entrega abonando el 50% inicial ya pagado en concepto de trabajo realizado, sin derecho a devolución.

EL CONSULTOR puede rescindir si EL CLIENTE incumple plazos de entrega de accesos por más de 30 días, devolviendo el 50% inicial menos $200 de gestión.

**DÉCIMA PRIMERA — LEY APLICABLE**

Para cualquier discrepancia, las partes se someten a la legislación española y los Juzgados y Tribunales de Madrid.

---

**EL CONSULTOR**: ______________________________  Firma + Fecha

**EL CLIENTE**: ______________________________  Firma + Fecha

---

## ANEXO I — Scope detallado de la implementación

> **Rellenar específicamente caso a caso. Ejemplo para caso pilar (Bot WhatsApp):**

### Caso: Bot WhatsApp Business con IA

**Sistema a entregar**:

1. **Bot conversacional** en WhatsApp Business del CLIENTE, respondiendo automáticamente a mensajes entrantes
2. **Lógica de IA**:
   - Responde 70% de preguntas frecuentes en el tono de marca del CLIENTE
   - Captura datos de leads (nombre, contacto, interés) cuando detecta intención de compra
   - Detecta cuando la consulta requiere humano y avisa al CLIENTE por email/WhatsApp interno
3. **Configuración inicial**:
   - Hasta 30 preguntas frecuentes pre-entrenadas (cliente provee)
   - 3 flujos de captura de leads
   - 1 flujo de derivación a humano
4. **Dashboard simple**:
   - Notion o Google Sheet con log de conversaciones
   - Métricas mensuales: nº conversaciones, % autoresueltas, leads capturados

**Stack técnico**:
- WhatsApp Business API (Meta Cloud API)
- Claude API (modelo Sonnet 4.6)
- n8n self-hosted para orquestación
- Google Sheets o Notion para logs

**Lo que NO incluye este Anexo**:
- Atención al cliente real (el bot deriva, el humano del CLIENTE atiende)
- Integración con CRM (incluido en paquete superior, $500 adicional)
- Multi-idioma (solo español incluido; inglés +$300)
- Análisis de sentimiento avanzado
- Voz / audios procesados

---

## ANEXO II — Accesos necesarios del CLIENTE

Para iniciar el trabajo, EL CLIENTE entregará en las primeras 48h:

- [ ] Acceso al **WhatsApp Business** del negocio (admin via Meta Business Suite)
- [ ] Documento con las **30 preguntas frecuentes** + respuestas tipo
- [ ] Tono de voz de marca (formal/cercano/jovial/etc) + ejemplos de cómo se comunica el negocio
- [ ] Email donde recibir alertas de consultas no resueltas
- [ ] Persona de contacto técnico (si aplica)

> Si la entrega tarda más de 7 días: el plazo de 14 días se retrasa día por día. Si tarda más de 30 días: aplica cláusula DÉCIMA de rescisión.
