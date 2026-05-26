# Script — Email Frío (Restaurantes)

> Canal con tasa de respuesta más baja (3-8%) pero **escalable** y permite mandar el ejemplo embebido. Útil cuando consigues el email del dueño desde Google Maps, web antigua o LinkedIn.

---

## Reglas básicas

- **Asunto < 6 palabras**. Si supera eso, no lo abren.
- **Email < 120 palabras**. Más, no lo leen.
- **Una sola CTA al final**. No 3.
- **Envía desde dominio propio** ([tunombre]@[tudominio].com) — NUNCA Gmail genérico. Compra dominio $10/año.
- **Configura SPF + DKIM + DMARC** o irá a spam. Usa Mailgun, Resend o SendGrid (gratis hasta 100/día).
- **Máximo 30 emails/día desde un dominio nuevo** las primeras 2 semanas. Luego subes a 50-80.

---

## Email 1 — Apertura (la versión que más responde)

**Asunto** (probar variantes A/B):
- A) "Web para [Nombre Restaurante]"
- B) "[Nombre dueño], idea para tu web"
- C) "Vi una cosa de [Nombre Restaurante]"

**Cuerpo**:

```
Hola [Nombre del dueño o del restaurante],

Pasé por vuestro Instagram y por las reseñas en Google y veo que tenéis
muy buena base de clientes. Pero la web (o la falta de ella) os está
costando reservas — sobre todo en móvil.

Hago webs para restaurantes locales. Quedan así:
[URL ejemplo]

- $400 únicos
- Lista en 72 horas
- Reservas online + WhatsApp + Google Maps + carta digital
- Optimizada para SEO local (apareceréis en "restaurante [vuestra ciudad]")

¿Te interesa que te llame 10 min esta semana para enseñártela en detalle?

Un saludo,
[Tu nombre]
[Teléfono / WhatsApp]
[URL portfolio o tu LinkedIn]
```

---

## Email 2 — Follow-up #1 (a los 4 días si no respondió)

**Asunto**: "RE: Web para [Nombre Restaurante]"

```
Hola de nuevo [Nombre],

Subo este email por si el anterior se perdió.

Te resumo en 3 líneas:
- Web profesional para [Nombre Restaurante] por $400
- Entrega 72 horas
- Aumento de reservas medible o devuelvo el dinero

¿Lo vemos por llamada esta semana?

[Tu nombre]
```

---

## Email 3 — Follow-up #2 (a los 7 días del primero)

**Asunto**: "Última nota — [Nombre Restaurante]"

```
Hola [Nombre],

Última nota por aquí. Cierro tu nombre en mi lista esta semana si no
oigo nada.

Sé que el día a día de un restaurante es brutal. Si ahora no es el
momento, dímelo con un "ahora no" y te dejo en paz.

Si quieres dar el paso, una palabra y arrancamos.

Mucho éxito sea como sea,
[Tu nombre]
```

> El "ahora no" funciona increíblemente bien — la gente prefiere responder eso que ignorar, y eso te da datos: 30% terminan reaccionando cuando reactivas en 3 meses.

---

## Email 4 — Si responden mostrando interés

**Asunto**: "Aquí va lo prometido — [Nombre Restaurante]"

```
Hola [Nombre],

Gracias por responder. Te paso todo lo que necesitas:

📄 Propuesta detallada en PDF: [enlace o adjunto]
🌐 Ejemplo de web de un cliente actual: [URL]
📞 Reserva 30 min en mi calendario: [Calendly o similar]

Pregúntame cualquier cosa por email o directamente cuando hablemos.

Un abrazo,
[Tu nombre]
```

---

## Email 5 — Cierre tras la llamada (cuando ya están casi)

**Asunto**: "Resumen y siguiente paso — [Nombre Restaurante]"

```
[Nombre],

Resumo lo que hablamos hoy:

1. Web profesional con tu carta, reservas, fotos, WhatsApp
2. Entrega en 72 horas desde que reciba tus fotos y el brief firmado
3. Coste: $400 (50% al firmar / 50% a la entrega)
4. Mantenimiento opcional $400/mes (decidimos cuando entregue la web)

Para arrancar necesito 2 cosas:
1. Tu firma en el contrato adjunto (o por email confirmando "acepto")
2. Transferencia de $200 a [tus datos bancarios o Bizum/PayPal]

En cuanto reciba ambos, te paso el formulario del brief y arrancamos.

¿Te encaja arrancar lunes?

Un saludo,
[Tu nombre]
```

---

## Plantilla de firma para todos tus emails

```
[Tu nombre]
Diseñador y desarrollador web · Webs para restaurantes
📞 [Tu WhatsApp]
🌐 [tu-portfolio.com]
📍 [Tu ciudad]
```

---

## Lista de proveedores de email recomendados

| Proveedor | Gratuito | Bueno para... |
|-----------|----------|---------------|
| **Resend** | 100/día | Setup limpio, devs |
| **Mailgun** | 100/día primeros 3 meses | Volumen medio |
| **Gmail con dominio propio (Google Workspace)** | $6/mes | Calidad máxima, deliverability top |
| **Brevo (ex SendinBlue)** | 300/día | Email marketing + transaccional |

> **Recomendación inicial**: Google Workspace $6/mes. Aparecer como `aguirre@webagency.com` triplica la tasa de respuesta vs gmail.com.

---

## Tracking emails

| Restaurante | Email | Fecha email 1 | Abierto? | Respondió? | Fecha FU#1 | FU#2 | Estado |
|-------------|-------|---------------|----------|------------|------------|------|--------|
|             |       |               |          |            |            |      |        |

> Usa Mailtrack (extensión gratis Gmail) o Streak para saber si han abierto.
