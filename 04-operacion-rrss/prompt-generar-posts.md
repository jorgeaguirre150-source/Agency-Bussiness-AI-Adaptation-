# Prompt Maestro — Generar 16 Posts Mensuales con Claude

> Este es el corazón de tu palanca con IA. Con este prompt + 30 minutos al mes, sacas los 16 captions de cada cliente. La diferencia entre cobrar $400/mes con 4h de trabajo o sufrir 30h.

---

## Cómo usarlo

1. Rellena el bloque `<CONTEXTO_CLIENTE>` con datos reales del cliente
2. Pega el prompt completo en Claude (claude.ai, API o Claude Code)
3. Recibes los 16 captions estructurados
4. Copias a Notion/Sheet → ajustas tono final → diseñas en Canva → programas en Metricool

---

## EL PROMPT (cópialo entero)

```
Actúa como Community Manager senior especializado en restauración, con
8+ años de experiencia gestionando cuentas de Instagram y Facebook de
restaurantes locales. Has llevado decenas de cuentas desde 0 a 10k+
seguidores con estrategia editorial orgánica.

TAREA: Generar el calendario editorial COMPLETO de 16 publicaciones para
el mes de [MES] [AÑO] para el cliente descrito en <CONTEXTO_CLIENTE>.

ESTRUCTURA OBLIGATORIA DE LAS 16 PUBLICACIONES:
- 4 posts tipo TIP_DEL_DIA (cada martes 13:00)
- 4 posts tipo PLATO_DESTACADO (cada jueves 19:00)
- 4 posts tipo PROMOCION (cada viernes 12:30)
- 4 posts tipo BEHIND_SCENES (cada domingo 11:30)

CRITERIOS DE CALIDAD INNEGOCIABLES:

1. AUTENTICIDAD: Usa el lenguaje, productos y valores reales del
   cliente. No inventes platos que no estén en su carta. No inventes
   premios ni reconocimientos.

2. VARIEDAD: Cada uno de los 4 posts de un mismo tipo debe tratar un
   tema/ángulo diferente. No repitas el mismo plato como protagonista
   en posts seguidos.

3. HOOKS: Cada caption empieza con una primera línea que pare el scroll.
   Datos concretos, números, preguntas inesperadas. NO empiezos genéricos
   tipo "Hoy os queremos hablar de..." o "En nuestro restaurante nos
   gusta...".

4. LONGITUD: Entre 60 y 150 palabras por caption. Ni telegram ni novela.

5. EMOJIS: Máximo 2-3 por post, uno al inicio del hook + uno funcional
   (no decorativo).

6. HASHTAGS: 5-7 por post. Mezcla:
   - 2 nicho amplio (#PastaFresca #CocinaItaliana)
   - 2 ciudad/barrio (#RestaurantesMadrid #MalasañaEats)
   - 1 marca propia (#NombreRestaurante)
   - 1-2 trending del momento si encajan

7. CTA: Cada post lleva CTA al final:
   - TIP → pregunta abierta
   - PLATO → "Reserva tu mesa" + enlace
   - PROMO → CTA fuerte con fecha límite + enlace + WhatsApp
   - BEHIND → invitación suave, sin venta

8. CONSISTENCIA DE MARCA:
   - Tono: [Cálido / Profesional / Familiar / Premium — definir en
     <CONTEXTO_CLIENTE>]
   - Tutea o usa "vosotros" / "ustedes" según indique el cliente
   - Mantén el mismo "voice" en los 16 posts

FORMATO DE SALIDA — devuelve EXACTAMENTE así (markdown tabla + caption
completo separado):

# Calendario Editorial — [Nombre cliente] — [MES AÑO]

## Resumen del mes (tabla)

| # | Fecha | Día | Hora | Tipo | Hook | Foto sugerida |
|---|-------|-----|------|------|------|---------------|
| 1 | XX/MM | Mar | 13:00 | TIP | ... | ... |
| 2 | XX/MM | Jue | 19:00 | PLATO | ... | ... |
| ... | ... | ... | ... | ... | ... | ... |

## Captions completos

---

### POST 1 — [Fecha] · TIP_DEL_DIA

**Hook**: [primera línea]

**Caption completo**:
[el texto que se publica tal cual]

**Hashtags**: #x #y #z #...

**Foto sugerida**: [descripción concreta para que el cliente busque en
su galería o se la tomemos]

**Diseño Canva**: [breve indicación visual: formato cuadrado, foto
del proceso, texto grande con el hook, color marca]

---

### POST 2 — [Fecha] · PLATO_DESTACADO

[...mismo formato...]

[...continúa hasta POST 16...]

## Notas para el cliente

- Material que necesito que me envíe el cliente: [lista de fotos
  específicas o info pendiente]
- Eventos / fechas señaladas que aún no he confirmado: [lista]
- Sugerencia estratégica del mes: [1-2 frases sobre el enfoque general]

<CONTEXTO_CLIENTE>
- Nombre del restaurante: [NOMBRE]
- Tipo de cocina: [TIPO]
- Ciudad / barrio: [CIUDAD / BARRIO]
- Tono de voz preferido: [Cálido / Profesional / Familiar / Premium]
- Tuteo o vosotros/ustedes: [...]
- Carta principal (lista de 5-10 platos estrella con precio):
  - Plato 1 — descripción — precio
  - Plato 2 — descripción — precio
  - ...
- Eventos / promociones planificados este mes:
  - [Fecha] — [Evento o promoción]
  - ...
- Fotos disponibles en banco (lista de qué hay):
  - [Lista de fotos en el Drive del cliente]
- Hashtags ya validados con el cliente:
  - [Lista]
- Restricciones / cosas que NUNCA hay que mencionar:
  - [Ej: alergenos específicos, política de no-niños, etc.]
- Métricas del mes anterior (si las hay):
  - Mejor post: [tipo + razón]
  - Peor post: [tipo + razón]
  - Aprendizajes clave: [...]
</CONTEXTO_CLIENTE>

Empieza con la TABLA RESUMEN y luego los 16 captions completos en orden
cronológico.
```

---

## Variantes del prompt según el momento

### Variante "Mes de lanzamiento de carta nueva"

Añade al prompt:

```
ENFOQUE DEL MES: ESTE MES LANZAMOS CARTA NUEVA EL [FECHA].

Ajustes:
- 3 de los 4 posts de PLATO_DESTACADO deben ser de platos nuevos de
  la carta
- 1 promoción debe estar dedicada al evento de lanzamiento
- 1 behind-scenes debe mostrar el proceso de creación de la nueva carta
- La narrativa del mes debe construir hype creciente hacia el día de
  lanzamiento
```

### Variante "Mes de baja temporada"

```
ENFOQUE DEL MES: temporada baja, necesitamos generar tráfico.

Ajustes:
- Aumentar promociones de 4 a 6 posts (incluye 2 reels promocionales
  los miércoles)
- Reducir behind-scenes a 2 posts
- Foco en ofertas mid-week (lunes a jueves) para llenar huecos débiles
- Considera promociones específicas para grupos pequeños (mesas de 2-4)
```

### Variante "Mes de evento especial" (San Valentín, Navidad, etc.)

```
ENFOQUE DEL MES: evento [SAN_VALENTIN / NAVIDAD / OTRO] el [FECHA].

Ajustes:
- 2 semanas antes del evento: 4-5 posts construyendo expectativa
- Semana del evento: 3-4 posts vendiendo plazas
- Después del evento: 2 posts de agradecimiento + behind-scenes
- Menú especial siempre destacado con precio claro y reserva con
  prepago
```

---

## Después del prompt — pasos manuales (irrenunciables)

1. **REVISA TODO**. Claude se equivoca. Si menciona un plato que NO está en la carta, corrige. Si el tono no cuadra, ajusta.

2. **AJUSTA HASHTAGS LOCALES**. Claude no conoce los hashtags hiperlocales de tu ciudad. Mete 1-2 reales que solo tú conoces.

3. **VALIDA CON CLIENTE** antes de publicar. Mándale el PDF resumen — espera 48h para feedback — corrige una pasada — programa.

4. **GUARDA EL PROMPT FINAL** que usaste cada mes con cliente concreto. Mes siguiente lo reutilizas cambiando solo `<CONTEXTO_CLIENTE>`.

5. **HISTORIAL DE MÉTRICAS** alimenta el prompt del mes siguiente con "qué funcionó mejor". El sistema se vuelve más preciso con cada iteración.

---

## Tiempo esperado con este prompt

| Paso | Tiempo |
|------|--------|
| Rellenar `<CONTEXTO_CLIENTE>` | 10 min |
| Pasar prompt a Claude | 2 min (espera la respuesta) |
| Revisar y ajustar captions | 25 min |
| Diseñar 16 imágenes en Canva con plantillas | 60 min |
| Programar en Metricool | 20 min |
| **TOTAL** | **~2h por cliente/mes** |

Si llevas 10 clientes → 20h/mes en RRSS → **$4.000 / 20h = $200/hora**.
