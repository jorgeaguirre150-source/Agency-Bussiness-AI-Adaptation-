# Contrato — Mantenimiento de Automatización con IA

> Basado en `03-venta/contrato-mantenimiento.md` adaptado a L2. $200/mes. Permanencia 3 meses.

---

## CONTRATO DE MANTENIMIENTO Y SOPORTE DE AUTOMATIZACIÓN IA

**En [Ciudad], a [Fecha]**

### REUNIDOS

**De una parte**:
[Tu nombre completo], NIF [...], domicilio en [...], email [email]. En adelante, **"EL CONSULTOR"**.

**De otra parte**:
[Nombre del responsable], NIF/CIF [...], representante de [Nombre del negocio], domicilio en [...], email [email cliente]. En adelante, **"EL CLIENTE"**.

### EXPONEN

I. EL CLIENTE dispone de una automatización con IA desarrollada por EL CONSULTOR (Contrato de Implementación de fecha [...]).

II. EL CLIENTE desea contratar el mantenimiento mensual continuo de dicha automatización.

### CLÁUSULAS

**PRIMERA — SERVICIOS INCLUIDOS**

EL CONSULTOR prestará mensualmente:

1. **Monitorización**
   - Uptime y disponibilidad del workflow
   - Logs de errores y alertas
   - Métricas de uso (volumen procesado, % resolución, etc.)

2. **Soporte**
   - **2 horas mensuales** de trabajo del CONSULTOR (acumulables hasta 2 meses)
   - Resolución de bugs reportados
   - Ajustes menores de prompts según feedback del CLIENTE
   - Modificaciones pequeñas de configuración (añadir/editar respuestas, ajustar umbrales)

3. **Reporte mensual breve**
   - Volumen procesado en el mes
   - % de éxito vs derivaciones a humano
   - Recomendaciones de mejora para el mes siguiente

4. **Canal directo**
   - WhatsApp directo con EL CONSULTOR en horario laboral (L-V 10-19h)
   - Respuesta inicial en ≤ 24h hábiles

**SEGUNDA — SERVICIOS NO INCLUIDOS**

Quedan expresamente fuera:
- Nuevas funcionalidades grandes (cotización aparte, mínimo $300)
- Cambios estructurales del workflow (rediseño)
- Migración a otra infraestructura (cotización aparte)
- Atención al cliente directa del CLIENTE (el bot deriva, el CLIENTE responde)
- Costes de APIs externas (Claude, WhatsApp, etc.) — corren por cuenta del CLIENTE
- Horas adicionales a las 2 mensuales (facturadas a $60/h con aprobación previa)

**TERCERA — PRECIO Y PAGO**

Precio mensual del tier contratado: **[IMPORTE_EN_LETRA] EUROS / DÓLARES ($[IMPORTE])**, impuestos no incluidos.

> Tiers oficiales del servicio:
> - **Basic** ($200/mes): 2h soporte mensuales + monitoring + reporte mensual
> - **Pro** ($400/mes): 5h soporte + 1 mejora mensual + ajustes prompts
> - **Scale** ($800/mes): 10h soporte + features nuevas + soporte prioritario
>
> Tier acordado en este contrato: **[TIER]** ($[IMPORTE]/mes).

Forma de pago:
- Pago mensual por adelantado entre los **días 1-5 de cada mes**
- Medio: suscripción Stripe, transferencia recurrente, Bizum o PayPal recurrente

Impago superior a 7 días naturales → EL CONSULTOR suspenderá el servicio sin previo aviso adicional hasta regularización.

**CUARTA — DURACIÓN Y PERMANENCIA**

- **Permanencia mínima de 3 meses** desde la fecha de firma
- Pasado el periodo, renovación mensual automática
- Cancelación con **15 días de preaviso por escrito** (email/WhatsApp válido)

**QUINTA — RESCISIÓN ANTICIPADA**

Si EL CLIENTE rescinde durante los 3 meses de permanencia inicial, deberá abonar las mensualidades restantes hasta completar el plazo.

**SEXTA — COSTES DE APIs (importante)**

Los servicios externos consumidos por la automatización corren por cuenta del CLIENTE:
- Claude API: facturación directa al CLIENTE o reembolso a EL CONSULTOR (típico $5-30/mes según volumen)
- WhatsApp Business API: gratis hasta 1.000 conversaciones/mes, después tarifa Meta
- Otros: a especificar según implementación

EL CONSULTOR proporcionará al inicio una estimación realista del consumo mensual. Si el coste real supera 1.5x la estimación durante 2 meses consecutivos, ambas partes revisarán la implementación para optimizar.

**SÉPTIMA — DOWNGRADE / UPGRADE**

Posibles upgrades del servicio (por solicitud del CLIENTE):

| Tier | Precio | Horas soporte/mes | Extras |
|---|---|---|---|
| **Basic** (este contrato) | $200/mes | 2h | Monitoring + ajustes |
| **Pro** | $400/mes | 5h | + 1 mejora pequeña/mes (4h dev) |
| **Scale** | $800/mes | 10h | + nuevas features pequeñas + soporte prioritario |

Cambio de tier con 15 días de preaviso.

**OCTAVA — CONFIDENCIALIDAD Y DATOS**

EL CONSULTOR accede a datos del CLIENTE solo para fines del mantenimiento. Aplica el Acuerdo de Encargado de Tratamiento firmado en su día con el contrato de Implementación.

**NOVENA — LEY APLICABLE**

Legislación española. Juzgados y Tribunales de Madrid.

---

**EL CONSULTOR**: ______________________________  Firma + Fecha

**EL CLIENTE**: ______________________________  Firma + Fecha

---

## Mensaje recomendado de cierre al pasar Implementación → Mantenimiento

> Enviar al cliente el día de la entrega de la implementación, cuando todo está funcionando y el cliente está contento.

```
Hola [Nombre]!

Ya tienes tu [automatización] funcionando en producción. Veo que ya ha
procesado X mensajes/registros las primeras 24h.

Como hablamos en la propuesta original, te paso el mantenimiento mensual
formal. Te dejo el contrato adjunto:

- $200/mes (suscripción Stripe, cancelable con 15 días de aviso tras 3
  meses iniciales)
- Monitorizo el workflow 24/7
- 2h/mes de mi trabajo para ajustes, bugs, mejoras pequeñas
- Reporte mensual con métricas reales
- WhatsApp directo conmigo en horario laboral

La mayoría de mis clientes lo aceptan porque sin mantenimiento, el día
que algo falla puedes tardar días en arreglarlo solo. Conmigo: en horas.

¿Arrancamos el contrato para el [día 1 del mes siguiente]?

Un abrazo,
[Tu nombre]
```
