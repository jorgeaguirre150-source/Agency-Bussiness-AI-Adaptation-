# Posts iniciales LinkedIn (8) — Publica ANTES de empezar outbound L2

> Objetivo: que cuando un prospecto reciba tu invitación de LinkedIn y entre a tu perfil, vea 8 posts que demuestren autoridad técnica + visión de mercado.
> Frecuencia: 1 post/2 días durante 16 días, o 2/semana durante 4 semanas.

---

## Post 1 · Manifiesto fundacional

**Hook**: "Esto es lo que la mayoría de 'agencias IA' está haciendo mal."

**Cuerpo**:

```
Esto es lo que la mayoría de "agencias IA" está haciendo mal en 2026:

1) Venden la tecnología, no el resultado
   "Implementamos GPT-4 turbo con RAG y vectorización"
   → al cliente le da igual

2) PowerPoints de 40 slides para vender
   → cliente quiere ver algo funcionando, no una promesa

3) Precios "a partir de" sin compromiso
   → genera más dudas que las que resuelve

4) Casos de uso genéricos
   → no aplicables al negocio del cliente concreto

Yo monto al revés:

✓ $300 fijos de diagnóstico → te entrego un quick-win en VIVO con tus datos reales
✓ $1.500 fijos de implementación → en producción en 2 semanas, sin sorpresas
✓ $200/mes mantenimiento → cancelable con 15 días de aviso

Si no aporta valor el diagnóstico, devolución 100%, sin preguntas.

Vengo de 8 años de arquitectura cloud enterprise (Mercedes-Benz). El mismo rigor que aplico a sistemas que mueven millones, ahora a PYMEs locales.

¿Tienes un proceso manual que te quema horas? DM.

#AutomatizacionIA #PYMEs #Madrid #IAaplicada
```

---

## Post 2 · Caso técnico aplicado (sin tener caso real aún)

**Hook**: "Por qué un bot WhatsApp con IA bien hecho responde el 70%, no el 30%."

**Cuerpo**:

```
Por qué un bot WhatsApp con IA bien hecho responde el 70%, no el 30%:

La diferencia entre un chatbot que la gente odia y uno que el cliente
considera "casi humano" está en 3 cosas técnicas que el 90% de
implementaciones se saltan:

1) TONO DE MARCA REAL

No es "responde en español". Es:
- Cargar 50 mensajes pasados del cliente al system prompt
- Extraer patrones específicos: vocabulario, estructura, emojis
- Probar con 20 mensajes reales históricos antes de activar

Un bot que dice "Estimado cliente, le confirmamos su consulta..." es
un bot muerto. Uno que dice "¡Hola María! Vale, te apunto la reserva
del sábado" es un bot que funciona.

2) PROMPT CACHING

Anthropic Claude (mi modelo de elección) permite cachear el system prompt.
El system prompt en estos casos suele ser 2.000-4.000 tokens (las 30 FAQs
del cliente + manual de tono + instrucciones).

Sin caching: cuesta $25-40/mes en API por cliente activo
Con caching: cuesta $3-5/mes por cliente activo

90% reducción de coste. Habilita escalado real.

3) ARQUITECTURA DE DERIVACIÓN

El bot no debe intentar resolver el 100%. Debe:
- Resolver lo repetitivo (horarios, ubicación, FAQs)
- Capturar leads con datos estructurados
- DETECTAR cuando es queja/urgencia y derivar a humano CON CONTEXTO

Los bots que intentan resolverlo todo generan el resentimiento del cliente
final hacia la marca. Los que saben cuándo decir "te paso con un humano"
generan confianza.

Stack que uso: Meta WhatsApp Cloud API + Claude Sonnet + n8n + Notion.
Coste operacional total para servir 10 clientes: ~€60/mes.

Próximo post: cómo se ve un diagnóstico de $300.

#Claude #IA #Automatizacion #PYMEs
```

---

## Post 3 · Cómo es un diagnóstico

**Hook**: "Cómo es un diagnóstico de automatización con IA de $300, paso a paso."

**Cuerpo**:

```
Cómo es un diagnóstico de automatización con IA de $300, paso a paso.

DÍA 0 - Cliente firma + paga (100% upfront).

DÍA 1 - Kickoff de 45 min (videollamada).
   Mapeo de los 5 procesos manuales más dolorosos.
   Pregunta clave: "¿Cuánto tiempo a la semana dedica tu equipo a esto?"
   Respuesta típica: "uf, no sé, mucho" → ahí está el dolor.

DÍA 2 - Auditoría escrita (yo, en mi lado, 4 horas).
   Por cada proceso: tiempo invertido, coste real, complejidad técnica
   de automatizar, ROI estimado.

DÍA 3 - Preparo el quick-win demo.
   El proceso de mayor ROI/menor complejidad → lo construyo parcialmente
   con datos reales del cliente en el playground de Claude.

DÍA 4 - Sesión de cierre (videollamada 30 min).
   Comparto pantalla. El cliente envía 10 mensajes/casos reales que
   estuvo guardando. El sistema responde EN VIVO con sus datos, en su
   tono.

   El "wow moment" típico: "joder, sí, este es mi tono perfectamente".

DÍA 5 - Documento entregable.
   3-5 procesos priorizados, recomendación de cuál implementar primero,
   propuesta concreta de implementación adjunta.

Después el cliente decide:
- Avanzar a implementación ($1.500, 2 semanas, scope cerrado)
- O no avanzar (50% lo descartan, y está bien)

Garantía dura: si tras el día 5 considera que ninguna recomendación
es útil, devolución 100%. Sin preguntas.

Próximo post: por qué la implementación cuesta $1.500 fijos y no
"depende".

#Diagnóstico #Automatización #IA
```

---

## Post 4 · Pricing fijo vs "depende"

**Hook**: "Por qué cobro $1.500 fijos por implementación y no 'depende'."

**Cuerpo**:

```
Por qué cobro $1.500 fijos por implementación y no "depende".

El cliente típico ya ha sido quemado por:

- "Consultora dijo $5K, terminó cobrando $18K"
- "Agencia prometió 6 semanas, entregaron en 4 meses con cosas a medias"
- "Freelancer cobró por horas y nunca terminaba"

Con scope abierto, el cliente nunca sabe cuánto va a pagar al final.
Y yo nunca tengo presión sana para entregar rápido y bien.

Con scope cerrado:

✓ El cliente sabe EXACTAMENTE qué paga, cuándo, y qué recibe
✓ Yo tengo presión sana para sistematizar y optimizar
✓ Cliente 1 me come 18h. Cliente 5 me come 8h. Cliente 10 me come 5h.
  → Margen escala con templates, no con cobrar más al cliente.

Cómo lo blindo:

1) Diagnóstico previo OBLIGATORIO
   Sin diagnóstico → no implemento. Esto evita que un cliente "no apto"
   me arrastre a scope tóxico.

2) Anexo I detallado en contrato
   Por cada implementación, anexo con exactamente lo que incluye + lo
   que NO incluye. Si cliente pide algo fuera de anexo durante el
   desarrollo → "Change Request" facturado aparte con su precio.

3) Plazo cerrado de 14 días hábiles
   Si yo me retraso por mi culpa → reembolso parcial. Si cliente se
   retrasa entregando información → el plazo se mueve.

4) 2 rondas de revisiones incluidas (no infinitas)
   Después, $60/hora con presupuesto previo.

¿Resultado? En lugar de discusiones sobre dinero al final → conversaciones
sobre cómo mejorar la solución durante el proyecto. Distinta vibra
completamente.

Es lo que aprendí en 8 años de cloud enterprise: contratos buenos
generan colaboraciones buenas.

¿Te interesa esta forma de trabajar para tu negocio? DM.

#Pricing #Consultoría #IA
```

---

## Post 5 · Mito sobre IA

**Hook**: "Mito: 'mi negocio es muy pequeño / muy especial para automatizar con IA'."

**Cuerpo**:

```
Mito: "mi negocio es muy pequeño / muy especial para automatizar con IA"

Lo escucho 2 veces por semana.

Realidad: cuanto más pequeño/especializado tu negocio, MÁS aprovechable
es la IA. Porque:

1) En empresas grandes, automatizar requiere comités, compliance, IT.
   En tu negocio: una decisión tuya, un sprint de 2 semanas, listo.

2) Tu volumen es manejable
   No necesitas infraestructura para 10.000 mensajes/segundo. Necesitas
   IA bien afinada para 500 mensajes/mes. Eso cabe en €60/mes de coste.

3) Tu tono de marca es identificable
   En una multinacional, "el tono" es una guía de estilo de 50 páginas
   resultado de comités. En tu negocio, tu tono es CÓMO TÚ HABLAS. Y
   eso una IA bien entrenada lo replica perfecto.

4) Tu cliente real es local
   No necesitas IA en 47 idiomas. Necesitas IA que entienda los giros
   de tu zona, los nombres de tus platos/servicios, las referencias
   locales.

Lo "especial" es ventaja, no obstáculo.

Lo "pequeño" es velocidad, no limitación.

Hostelería barrio Torrejón. Clínica dental Madrid Este. Asesoría fiscal.
Todos perfectamente automatizables con la IA actual.

¿Qué proceso te quema más horas en tu negocio?

#IAaplicada #PYME #MadridEste
```

---

## Post 6 · Stack técnico (autoridad)

**Hook**: "El stack técnico exacto con el que monto automatizaciones con IA para PYMEs."

**Cuerpo**:

```
El stack técnico exacto con el que monto automatizaciones con IA para PYMEs.

Lo comparto porque la transparencia mata el FUD (fear, uncertainty, doubt)
que genera "esto es muy técnico para tu negocio".

ORQUESTACIÓN:
→ n8n self-hosted en Hetzner VPS (€5/mes, compartido entre clientes)
→ Sin SaaS cerrado: el cliente puede llevarse el sistema si me voy
→ Workflows visuales = el cliente puede entender qué hace el sistema

INTELIGENCIA:
→ Anthropic Claude Sonnet 4.6 (principal)
→ Claude Opus 4.7 (casos complejos: propuestas comerciales, etc.)
→ Prompt caching obligatorio → reduce coste 90%

CANALES:
→ Meta WhatsApp Business Cloud API (gratis hasta 1.000 conversaciones/mes)
→ Twilio (SMS de respaldo si aplica)
→ Email vía Postmark o SendGrid

ALMACENAMIENTO Y UI CLIENTE:
→ Notion como base de datos visual + UI cliente
→ Supabase free tier para datos sensibles
→ Google Sheets como fallback

OBSERVABILIDAD:
→ Logflare (free tier) para logs
→ Dashboards en Notion compartidos con cliente

INFRAESTRUCTURA WEB (si necesita frontend):
→ Astro + Tailwind, deploy en Vercel free tier
→ Mismo stack que uso para webs L1

Coste total operacional para servir 10 clientes simultáneamente:
≈ €60/mes (€6/cliente).

Lo que cobro cada cliente en mantenimiento: $200/mes.

Margen 97%. Permite escalar sin recapitalizar.

¿Por qué este stack y no Make / Zapier / OpenAI?

→ n8n vs Make: n8n self-hosted da control total + sin dependencia de SaaS
→ Claude vs OpenAI: prompt caching + ventana contexto + tono español natural
→ Supabase vs Firebase: open source + Postgres real (cliente puede llevarse datos)

Stack pensado para 5 años, no para un quarter.

#TechStack #IA #Claude #n8n
```

---

## Post 7 · Tu mercado / posicionamiento

**Hook**: "PYMEs de Madrid Este: no necesitáis 'transformación digital'. Necesitáis 1 automatización bien hecha."

**Cuerpo**:

```
PYMEs de Madrid Este: no necesitáis "transformación digital". Necesitáis 1 automatización bien hecha.

Llevo 6 semanas hablando con dueños de PYMEs por Torrejón, Alcalá, Coslada.

El patrón se repite:

→ Saben que hay que "hacer algo con IA"
→ Han visto a competencia "implementando IA" (a veces con palabras
  marketing-speak vacías)
→ Han recibido cotizaciones de €10K-50K de agencias grandes para
  "estrategia de transformación digital"
→ NO han hecho nada porque les parece caro / complejo / lejano

Mi propuesta diferente:

NO necesitas estrategia digital de 50 páginas.
NO necesitas auditoría de 6 meses.
NO necesitas un comité de transformación.

Necesitas:

1) UN proceso identificado que te coma 10-20 horas/semana de equipo
   (esto se ve en 5 días, $300)

2) UNA automatización entregada que reduzca ese tiempo en 70%
   (esto se construye en 2 semanas, $1.500)

3) MANTENIMIENTO mensual para que no se degrade
   ($200/mes, cancelable)

3 pasos. 1 mes. $2.000 total. ROI típico: 6-8 semanas.

Esto es lo que mueve PYMEs reales. No "transformaciones" abstractas
de 18 meses.

Si tu negocio es en Madrid Este y tienes un proceso que te quema horas,
agenda un diagnóstico → DM.

#PYME #MadridEste #Automatización
```

---

## Post 8 · Lanzamiento "abierto a 3 primeros clientes"

**Hook**: "Abro 3 huecos esta semana para diagnósticos con descuento de lanzamiento."

**Cuerpo**:

```
Abro 3 huecos esta semana para diagnósticos con descuento de lanzamiento.

CONTEXTO

Estoy buscando los primeros 3 casos de éxito reales en hostelería /
clínicas dentales / asesorías de Madrid Este.

A cambio de:

- Permiso para documentar el caso (con métricas reales)
- Aparecer en mi sitio web como cliente fundacional
- Testimonio en vídeo de 60 seg

OFREZCO

✓ Diagnóstico GRATIS (vs $300 normales)
✓ Implementación a $1.000 (vs $1.500 normales) → ahorro $500
✓ 1 mes de mantenimiento GRATIS (vs $200 normales)

Total ahorro: $700. Es un 35% de descuento sobre el ciclo completo.

CONDICIÓN

Solo aplica a:
→ PYMEs de Torrejón, Alcalá, Coslada, San Fernando, Mejorada
→ Sectores: restaurantes, hostelería, dental, asesorías, despachos
→ Compromiso de testimonio en vídeo (60 seg)

POR QUÉ HAGO ESTO

Tener 3 casos públicos reales = pasa el negocio de "promesa" a
"evidencia". Vale más que esos $700 que dejo de cobrar.

SI TE INTERESA

DM con:
- Nombre del negocio
- Sector
- Tu rol (dueño / gerente / socio)
- 1-2 líneas: ¿cuál es el proceso que más horas te come hoy?

Respondo a TODOS los DMs en 4h hábiles. Primero responder → primero
elegir hueco.

Cierro la oferta cuando los 3 estén firmados.

#Lanzamiento #Madrid #IA #Hostelería
```

---

## Reglas de oro para que estos posts funcionen

1. **NO los publiques todos seguidos en 1 semana**. Espacia 1 cada 2 días.

2. **Personaliza fechas y números en el momento**. Ej: en Post 7, "6 semanas" sustituye por las que realmente lleves.

3. **Imágenes**: cada post necesita 1 imagen.
   - Post 1: gráfica de "lo que la mayoría hace mal" vs "lo que hago yo"
   - Post 2: screenshot del playground Claude (sin datos sensibles)
   - Post 3: diagrama de los 5 días del diagnóstico
   - Post 4: comparativa scope cerrado vs abierto
   - Post 5: foto tuya (humanizar tras 4 posts técnicos)
   - Post 6: diagrama del stack (puedes copiar el del README del bot)
   - Post 7: foto/captura de Madrid Este (mapa, restaurantes, etc.)
   - Post 8: gráfico con "3 huecos" tachándose visualmente

4. **CTA cada post**: termina con pregunta abierta o invitación a DM.

5. **Hashtags**: 3-5 por post. Mezcla:
   - 1-2 nicho específico (#AutomatizaciónIA, #PYME)
   - 1-2 geo (#Madrid, #MadridEste)
   - 1 más amplio (#IA, #Tecnología)

6. **Engagement orgánico**: cada post, los primeros 30 min son críticos. Comparte el post en tu WhatsApp con 5 amigos para que les den like → activa el algoritmo.

7. **Responde TODOS los comentarios** en las primeras 24h. Algoritmo LinkedIn premia engagement post-publicación.
