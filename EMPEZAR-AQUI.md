# EMPEZAR AQUÍ — Tu guía de principiante

> Léeme primero. Antes que cualquier otro archivo del repo.
> Aquí está la idea entera, sin jerga, paso a paso.
> Tiempo de lectura: 15 minutos.

---

## La idea de negocio en 1 frase

> **Ayudas a negocios pequeños (restaurantes, clínicas, despachos) a usar IA y herramientas digitales para ahorrarles horas y conseguirles más clientes — cobrándoles una cuota inicial y luego un fijo mensual.**

Eso es todo. Sin más vueltas.

---

## La idea en 1 dibujo

```
        TU NEGOCIO
              │
   ┌──────────┴──────────┐
   │                      │
LÍNEA 1                LÍNEA 2
(empezar aquí)         (más adelante)
   │                      │
Webs +                Automatizaciones
Redes sociales        con IA
para restaurantes     para PYMEs
   │                      │
$400 web              $300-$700 diagnóstico
+ $400/mes            + $1.500-$5.000 implementación
mantenimiento         + $200+/mes mantenimiento
                      
                      (Modelo oficial en PRICING.md.
                       Arrancamos en el mínimo del rango
                       los primeros 5 clientes.)
```

**Las dos líneas se complementan**:
- Línea 1 te da dinero rápido y clientes con los que practicar
- Línea 2 es el destino más rentable, pero llega cuando ya tienes algo de base

**No abras Línea 2 antes de tener 3-4 clientes de Línea 1**.

---

## Las preguntas que probablemente tienes

### "¿Por qué restaurantes primero?"

Porque:
- Hay miles cerca de tu casa en Torrejón
- El dueño decide solo (no comité)
- Pagan rápido
- Es fácil ver si tienen web mala o no tienen → señal clara
- Si haces uno bien, te recomiendan a otros del gremio

### "¿Y si no me responden los DMs?"

Es lo NORMAL los primeros 7-10 días. La tasa de respuesta a un DM es del 5-15%. Es decir: mandas 100, te responden 5-15. Te interesan profundamente 1-3. Cierras 0-1 al principio.

**Es un trabajo de números, no de magia**. No funciona el primer día, funciona el día 30.

### "¿Yo soy capaz de hacer una web?"

Ya tienes la plantilla hecha en `01-producto/plantillas/restaurante/`. Tu trabajo es:

1. Hablar con el cliente 45 min (con el documento `01-producto/brief-cliente.md`)
2. Personalizar la plantilla cambiando textos, fotos y colores (Claude Code te ayuda con el `prompt-maestro.md`)
3. Subirla a Vercel (es gratis, son 4 clicks)
4. Cobrar

**Tiempo real**: 4-6 horas la primera vez. 2 horas la décima.

### "¿Y si el cliente me pide algo raro?"

Le dices: "Eso no entra en lo que firmamos. Si lo quieres, te lo cotizo aparte". No bajas el precio. No regalas cosas.

El contrato lo tienes hecho en `03-venta/contrato-web.md`. Lo firmas ANTES de empezar.

### "¿Tengo que ser autónomo legal?"

Para vender legalmente sí. Es:
- 30 minutos online en Hacienda
- 87€/mes el primer año (tarifa plana)
- Tu primera factura ya la haces legalmente

No es opcional. Es lo primero que harás esta semana.

### "¿Cuánto voy a ganar realmente al principio?"

**Mes 1**: probablemente 1 cliente = $400 facturados.
**Mes 2**: 3 clientes web + 1 mantenimiento = $1.600.
**Mes 3**: 5 clientes web + 3 mantenimientos = $2.800.

De cada factura, **el 55% NO es tuyo** (impuestos + reservas). Te queda el 45%.

**Es poco**. Lo sé. Es el precio de empezar. Crece exponencialmente si lo haces bien:

```
Mes 6:  ~$5.000-7.000/mes facturado
Mes 12: ~$15.000-20.000/mes facturado
```

---

## Tu estrategia para conseguir el PRIMER cliente

Olvídate de todo el material complicado. Esto es lo que harás:

### Paso 1 — Esta semana, antes de hacer nada de ventas

**Lo legal y financiero (1 día)**:

1. Te das de alta como autónomo en Hacienda (Modelo 036, online, 30 min)
2. Abres una cuenta bancaria nueva (separada de la personal)
3. Abres 3 cuentas adicionales:
   - "IVA" → guardas 20% de cada cobro
   - "IRPF" → guardas 15% de cada cobro
   - "Colchón" → guardas 20% de cada cobro (para dejar Mercedes algún día)
4. Contratas una gestoría online (~$70/mes, Declarando o Quipu — busca en Google)

**Lo digital (1 día)**:

5. Creas una cuenta Instagram profesional (puede ser nueva, o renombras una que ya tengas)
6. Foto tuya, profesional
7. Bio que diga: *"Hago webs para restaurantes que aún no tienen — Entrega en 72h — $400 — Torrejón de Ardoz · DM para ver ejemplo"*
8. Publicas 4-8 posts (los tienes redactados en `mi-instagram/posts-iniciales.md`)

**Lo técnico (medio día)**:

9. Instalas Node.js y Vercel CLI en tu ordenador
10. Subes la demo del restaurante italiano (`clientes/_demo-trattoria-mario/`) a Vercel con un comando: te genera una URL pública
11. Esa URL es la que vas a mandar a los prospectos cuando te pidan ver un ejemplo

**Total tiempo esta semana**: 2-3 días de trabajo distribuidos (puedes hacerlo en tardes/fines de semana).

### Paso 2 — Semana 2, encontrar los 50 primeros restaurantes

**Lo que vas a hacer**:

1. Abres Google Maps en Torrejón de Ardoz
2. Buscas "restaurante" o "pizzería" o "tapas"
3. Por cada uno, miras en su ficha de Google: **¿tiene web o no?**
4. Si NO tiene web → **anótalo en una hoja Excel/Notion** (tienes la plantilla en `tracker/prospectos.csv`)
5. Para anotarlo, necesitas:
   - Nombre del restaurante
   - Su Instagram (busca el handle en su ficha de Google)
   - Un detalle bonito que viste (ej: "tienen terraza muy grande", "su foto de la pasta del 15 de mayo tiene una pinta increíble")

**Meta**: 50 restaurantes anotados. Tardarás 2-3 horas en una tarde.

### Paso 3 — Semana 2 también, mandar los primeros 50 mensajes

**Importante**: NO copias y pegas el mismo mensaje a todos. Lo personalizas mínimo en 2 cosas.

**El mensaje base** (lo tienes en `02-captacion/scripts-outreach/instagram-dm.md`):

```
Hola [nombre del restaurante o dueño]!

Acabo de pasar por vuestro perfil y me han enamorado las fotos del 
[plato concreto que viste, ej: "tagliatelle al ragú"]. Tiene una pinta brutal.

Me he dado cuenta de que no tenéis web propia y justo me dedico a 
montar webs para restaurantes como el vuestro: quedan modernas, salen 
en Google y meten reservas directamente.

¿Os interesa que os mande un ejemplo de cómo podría quedar la vuestra?
Sin compromiso ninguno.

Jorge
```

**Importante para no quemar la cuenta**:
- Máximo 30 mensajes al día (la primera semana). Después 50.
- Mejor horario: entre 10:30-12:30 o 16:30-18:00
- Después de cada mensaje, actualizas tu hoja con "Enviado, [fecha]"

### Paso 4 — Cuando alguien responda interesado

**Le mandas el ejemplo (la URL de la demo Vercel)**.

Algo como:

```
Genial! Aquí va una web que hice para enseñar cómo quedaría:

https://demo-trattoria-mario.vercel.app

Está pensada para móvil, con reserva y WhatsApp directo.

Coste: $400 una vez. Tiempo: 72 horas.
Y si quieres después gestiono también tus redes por $400/mes.

¿Quieres que te llame 10 minutos para verlo? ¿Cuándo te viene bien?
```

### Paso 5 — La llamada (10-15 min)

**Importante**: NO vendas. Escucha.

Preguntas que haces:

1. "Cuéntame del restaurante: ¿cuánto lleváis abiertos? ¿cuánto sois en el equipo?"
2. "¿De dónde os llegan los clientes ahora? ¿WhatsApp? ¿gente que pasa? ¿reservas online?"
3. "Si tuvierais más reservas, ¿hay sitio? ¿o ya vais llenos?"
4. "Sobre la web, ¿qué te parece más importante: que salga en Google, que haya reservas online, o que se vea profesional?"

**Después** le explicas tu oferta:

- Web por $400 (50% al firmar / 50% al entregar) en 72 horas
- O Web + $400/mes (gestión redes incluida): la mayoría coge esto

Si dice que sí → le pasas el contrato (`03-venta/contrato-web.md`) por WhatsApp + link de pago Stripe.

Si dice "lo pienso" → le das 7 días y luego un follow-up.

### Paso 6 — Entrega de la web

**Cuando hayas cobrado los $200 iniciales**:

1. Haces una videollamada de 30-45 min con el cliente
2. Rellenas el documento `01-producto/brief-cliente.md` con sus datos
3. Le pides fotos (que las mande por WhatsApp)
4. Abres Claude Code en una carpeta de cliente nueva (te lo crea el script `scripts/onboard-cliente.ps1`)
5. Pegas el brief y le aplicas el `prompt-maestro.md` → Claude te hace la web en 1 hora
6. Revisas, ajustas
7. Subes a Vercel (`scripts/deploy-cliente.ps1`)
8. Le mandas la URL al cliente
9. Si le gusta → cobras los otros $200
10. Le ofreces el plan de $400/mes (la mayoría dice que sí ahí)

### Paso 7 — Después del primer cliente

**El primer cliente es el más difícil**. Cuando lo cierres:

1. Le pides un testimonio en vídeo de 60 segundos
2. Lo publicas en tu Instagram y LinkedIn
3. Le pides 2-3 referidos: "¿Conoces a otros dueños de restaurante con webs viejas?"
4. Sigues haciendo 30-50 DMs al día durante el mes 2

A los 3 meses tendrás 5 clientes y el ritmo se vuelve más natural.

---

## Las 5 cosas que NO debes hacer

1. **NO bajar el precio para "asegurar" el primer cliente**. Un cliente barato es un cliente que se queja por todo.
2. **NO regalar cosas para cerrar**. Si tu oferta no se vende a $400, no se vende a $300.
3. **NO trabajar sin contrato firmado y sin cobrar el 50%**. Sale mal el 80% de las veces.
4. **NO aceptar clientes fuera de tu zona los primeros 6 meses**. Necesitas dominar Torrejón antes de Murcia.
5. **NO empezar la Línea 2 (agencia IA) antes de tener 3-4 clientes web cerrados**. Te dispersas.

---

## La verdad incómoda

Los primeros 30 días no vas a recibir aplausos ni validación externa. Vas a mandar DMs en silencio, alguien no te va a responder, otro te va a decir que no, y vas a sentirte tonto.

Es **normal**. Le pasa a todo el mundo que empieza un negocio. La diferencia entre los que llegan al cliente 1 y los que abandonan está en si **eres capaz de mandar los 30 DMs el día 12 igual que el día 1**.

No hay truco. Es disciplina.

---

## Glosario rápido (para entender el resto del material)

Voy a traducir los términos que he usado en otros archivos:

| Término que vi | Qué significa en cristiano |
|---|---|
| **MRR** | Ingreso mensual recurrente. Si tienes 5 clientes pagándote $400/mes, tu MRR es $2.000. |
| **ARR** | Lo mismo pero al año (MRR × 12). |
| **CAC** | Cuánto te cuesta conseguir un cliente. Si gastas $0 (solo DMs), tu CAC es 0. |
| **LTV** | Cuánto te paga un cliente en total durante toda su vida contigo. |
| **Churn** | % de clientes que cancelan por mes. Si tienes 10 y se va 1, churn = 10%. |
| **B2B / B2C** | B2B = vendes a otras empresas. B2C = vendes a personas/consumidores finales. Restaurantes son B2C tirando a B2B. |
| **ICP** | El cliente ideal que defines como objetivo. En tu caso: restaurantes de Torrejón con 5-20 empleados. |
| **Cross-sell** | Vender un servicio EXTRA a un cliente que ya tienes. Ej: tu cliente web pasa a bot WhatsApp. |
| **Upsell** | Convencer a un cliente de que coja una versión más cara/completa. |
| **ROI** | Lo que el cliente recupera vs lo que paga. Si paga $1.500 y ahorra $5.000 en horas, ROI es 3.3x. |
| **Scope** | El alcance EXACTO de lo que entregas. "Scope cerrado" = está escrito y no se cambia sin pagar más. |
| **Pipeline** | Lista de clientes potenciales en distintos estados (recién contactado, llamada agendada, propuesta enviada, cerrado, etc.). |
| **Outreach** | Contactar activamente a clientes potenciales (mandar DMs, emails, etc.). |
| **Cold / Frío** | Contactar a alguien que no te conoce. Lo opuesto: "warm/caliente" = ya hubo contacto previo. |
| **A/B test** | Probar 2 versiones (de un mensaje, una web) y ver cuál convierte mejor. |
| **Moat** | "Foso defensivo". Lo que hace que tu negocio sea difícil de copiar. |
| **NPS** | Encuesta de 1-10: "¿recomendarías esto a un amigo?". >8 = buen cliente. |
| **Stack** | Conjunto de herramientas que usas. "Mi stack es Astro + Tailwind + Vercel". |
| **Hosting** | Donde vive una web en internet. Vercel es tu hosting (gratis). |
| **Schema.org** | Etiquetas en una web que Google entiende para mostrar tu negocio mejor en buscador. |
| **Lighthouse** | Herramienta de Google que mide cómo de buena es una web (velocidad, móvil, SEO). |

---

## Tu hoja de ruta de los próximos 90 días, simplificada

```
SEMANA 1-2   →  Setup legal + perfil Instagram + demo subida
SEMANA 3-4   →  Listar 50 restaurantes + 30 DMs/día
SEMANA 5-6   →  1-2 llamadas con prospectos
SEMANA 7-8   →  Cierre del 1er cliente + entrega web
MES 3        →  3-5 clientes web + 1-2 mantenimientos
MES 4-6      →  Más outreach + mantenimientos crecen
MES 6+       →  Pensar en Línea 2 (agencia IA)
```

---

## Tu mantra para los próximos 30 días

> **"30 DMs al día. Todos los días laborables. No me importa si me responden o no."**

Pega esta frase en tu escritorio.

A los 30 días tendrás más claridad que en cualquier libro de negocio que leas.

---

## Lo último que tienes que saber

Todo el material que he construido (los 40+ archivos de este repo) NO tienes que leerlo entero ni dominarlo. Es **biblioteca de referencia**:

- Cuando alguien te ponga objeción de precio → lees `03-venta/faq-y-objeciones.md`
- Cuando vayas a entregar la web → sigues `01-producto/checklist-entrega.md`
- Cuando pidas un caso de éxito → sigues `agencia-ia/casos-estudio/template-testimonio.md`
- Cuando vayas a contratar junior (mes 4-5) → relees `agencia-ia/onboarding-cliente.md`
- Cuando dudes con tu agenda → vas a `PLAN-CEO-DIARIO.md`

**Pero esto, este archivo `EMPEZAR-AQUI.md`, es el único que tienes que entender ahora.**

---

## Tu primera acción concreta

Cuando termines de leer esto:

1. Cierras este archivo
2. Abres Google: "alta autónomo Hacienda online modelo 036"
3. Haces el alta esta semana
4. Próxima semana: instalas Vercel y subes la primera demo

Si llegas a final de mes con cuenta de autónomo + demo subida + perfil Instagram con 4 posts + 50 restaurantes en hoja Excel → ya has ganado.

El cliente vendrá. Pero solo si haces este trabajo previo.

Suerte. Estoy aquí cuando vuelvas.
