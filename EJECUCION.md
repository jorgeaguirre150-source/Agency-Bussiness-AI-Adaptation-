# EJECUCIÓN — Lo que tienes que hacer mañana

> Tu sistema está construido. La única razón por la que no facturas todavía es que no has tirado del gatillo.
> Esta guía te dice exactamente qué hacer cada día de la primera semana.

> **Contexto estratégico (lee `MODELO-NEGOCIO.md` para detalle)**: El destino es la **Agencia IA** (modelo de la imagen: Diagnóstico $300 → Implementación $1.500 → Mantenimiento $200/mes). **web-agency-ia es la táctica de arranque** para generar cashflow + casos de éxito en los primeros 60 días. Línea 2 (agencia IA) se activa mes 3-4 con cross-sell. NO tocar L2 antes de tener tracción en L1.

---

## Antes de empezar — checklist 30 minutos (HOY)

- [ ] Cuenta Instagram con foto pro + bio nueva (copia plantilla en `mi-instagram/README.md`)
- [ ] Calendly o Cal.com con slots 30 min "Llamada exploratoria web restaurante"
- [ ] Stripe Payment Links creados (3): $200 (anticipo web), $200 (resto), $400 (mes 1 mantenimiento)
- [ ] Notion o Google Sheets con `tracker/prospectos.csv` importado
- [ ] Vercel CLI instalado: `npm install -g vercel` + `vercel login`
- [ ] Demo deployada (sigue paso a paso abajo, 10 minutos)

---

## Día 1 — Deployar la demo (10 min)

```powershell
cd "C:\Users\Aguir\Desktop\Jorge\Documentos Varios\Code\web-agency-ia\clientes\_demo-trattoria-mario"
npm install
npm run build
vercel --prod
```

Cuando te pregunte:
- Set up and deploy? → `Y`
- Which scope? → tu cuenta
- Link to existing project? → `N`
- Project name? → `demo-trattoria-mario`
- Directory? → `.` (enter)
- Override settings? → `N`

Te dará una URL tipo `https://demo-trattoria-mario.vercel.app`. **Esa es la URL que vas a mandar en el Mensaje 2 del script de IG.**

Pruébala en móvil. Reserva ficticia. Click en WhatsApp. Verifica que el menú scrollea bien. Si algo está roto, lo arreglas, redeploy.

---

## Día 1 (tarde) — Publicar los primeros 8 posts de tu IG (1.5h)

Abre `mi-instagram/posts-iniciales.md` y publica los 8. Programa 2 por día durante 4 días si prefieres, o publica todos hoy si tienes margen. Antes de mandar el primer DM, tu perfil tiene que tener mínimo 4 publicados.

---

## Día 2 — Scrapear 50 prospectos en Torrejón de Ardoz (1.5h)

Abre Google Maps centrado en Torrejón de Ardoz. Sub-nicho del primer batch: **italiano/pizzería de barrio** (el más fácil de cierre según tu doc `02-captacion/nicho-restaurantes.md`).

### Zonas concretas de Torrejón que debes barrer (en este orden)

| Zona | Por qué empezar aquí | Volumen aproximado |
|---|---|---|
| **Casco antiguo** (Plaza Mayor, Calle Mayor, Plaza España, Calle Cristo) | Densidad alta de restaurantes familiares + dueños que llevan años → muchos sin web propia | 30-40 locales |
| **Avenida de la Constitución** | Eje comercial principal, mezcla franquicia + independientes | 15-20 locales |
| **Soto del Henares** (zona nueva) | Restaurantes recién abiertos, perfil más joven, suelen entender la importancia de web | 10-15 locales |
| **Parque Cataluña / Veredillas** | Restaurantes de barrio puro, presupuestos ajustados pero deciden rápido | 10-15 locales |
| **Avenida Madrid (salida A2)** | Mix con restaurantes de carretera/menú diario | 10-15 locales |

**Salta de momento**: cadenas (Foster's, 100 Montaditos, etc), restaurantes de hotel, food trucks/dark kitchens.

### Por cada prospecto (3-4 min)

1. Filtro Google Maps "Sitio web" = "Añadir un sitio web" → 🎯 oro puro
2. Si tiene web pero parece de 2014 (sin móvil, sin SSL, diseño Flash) → segundo objetivo
3. Si tiene web moderna → descartar (no perder tiempo)
4. Volcar al CSV: nombre, sub-nicho (italiano/tapas/asador/etc), zona (casco antiguo/Soto/etc), IG handle, teléfono, web actual ("no-tiene" o URL), 1 detalle personalizable real (plato destacado en feed, foto del local, año apertura visible en bio, etc)

### Meta del día

**50 prospectos en CSV con detalle personalizable real (no "tiene buena pinta", sino "la foto del cordero al horno del 12 de mayo se ve increíble" — específico, fechado, verificable).**

Si te faltan, sigue al día 3 — los DMs solo arrancan con la lista ya cargada.

---

## Día 3 — Empieza outreach (30 DMs)

Apertura: 10:30-12:30. Cierre: 16:30-18:00.

Por cada DM (3-4 min cada uno):
1. Abre el perfil del restaurante
2. Mira 2-3 publicaciones recientes → identifica un detalle real
3. Copia el Mensaje 1 de `02-captacion/scripts-outreach/instagram-dm.md`
4. Personaliza con: nombre del restaurante + 1 detalle visto
5. Manda
6. Actualiza el CSV: estado → `enviado`, fecha DM1

**Meta del día**: 30 DMs enviados.

**NO te frustres si nadie responde el día 1.** Tasa de respuesta a 24h es ~5%. La mayoría tarda 2-5 días.

---

## Día 4 — 30 DMs más + responder

- 30 DMs nuevos a otros 30 restaurantes del CSV (los que aún están como `prospectado`)
- Revisa DMs del día anterior: si alguien respondió, sigue con Mensaje 2 del script (manda el link a tu demo)

---

## Día 5 — 30 DMs más + agendar primera llamada

- 30 DMs más
- Si tienes 1 conversación caliente: ofrécele Calendly directo. Mensaje tipo: "Mira, mejor te llamo 10 min y te enseño la web en vivo. ¿Te viene bien martes o miércoles?"

---

## Día 6-7 (fin de semana) — Mantenimiento

- Sin DMs nuevos los sábados/domingos
- Responder a quien te haya respondido
- Programar los DMs del lunes (10-15 que dejas listos)
- Revisar tracker
- Rellenar `tracker/pipeline-resumen.md` semana 1

---

## Hábito semanal a partir de la semana 2

| Día | Actividad | Tiempo |
|---|---|---|
| Lun-Vie | 30-50 DMs + responder + agendar llamadas | 1.5h |
| Mar-Mier-Jue | 1-2 llamadas con prospectos | 30-60min cada una |
| Mier-Vie | Entrega de webs cerradas (cuando lleguen) | 2h por web |
| Domingo | Pipeline-resumen + plan próxima semana | 30 min |

**Total tiempo activo**: 8-10h/semana en mes 1, 12-15h/semana cuando tengas clientes en entrega + mantenimiento.

---

## Scripts disponibles

```powershell
# Crear carpeta nueva para un cliente (clona la plantilla limpia)
.\scripts\onboard-cliente.ps1 -Nombre "trattoria-mario"

# Deploy preview (cuando estás iterando)
.\scripts\deploy-cliente.ps1 -Nombre "trattoria-mario"

# Deploy producción (cuando el cliente lo aprueba)
.\scripts\deploy-cliente.ps1 -Nombre "trattoria-mario" -Prod
```

---

## Punto de control — semana 2

Si después de 150-250 DMs no tienes NI 1 llamada agendada:
- **NO es el nicho** (hay 280.000 restaurantes en España)
- Es el **script** o la **personalización**

Revisa: ¿estás personalizando 2 datos reales por DM o pegas plantilla? ¿estás mandando en horario óptimo? ¿tu perfil tiene mínimo 4 posts pro?

Si llegas a 500 DMs sin llamada → cambia sub-nicho dentro de restauración (de italiano a brunch, por ejemplo) y prueba otro mensaje 1.

---

## Cuando cierres el primer cliente

```powershell
.\scripts\onboard-cliente.ps1 -Nombre "nombre-real-cliente"
cd clientes\nombre-real-cliente
# Rellena BRIEF.md tras la videollamada
# Abre Claude Code aquí y aplica 01-producto/prompt-maestro.md con BRIEF.md pegado
# npm install
# npm run dev → revisa
# Aplica checklist 01-producto/checklist-entrega.md (los puntos 🔴 son bloqueantes)
.\..\..\scripts\deploy-cliente.ps1 -Nombre "nombre-real-cliente" -Prod
# Cobra 50% restante con Stripe Payment Link
# Manda mensaje de entrega (está en 01-producto/checklist-entrega.md al final)
# Ofrece contrato-mantenimiento.md formal si dijo "lo pensaré" antes
```

---

## Estructura del repo (actualizada)

```
web-agency-ia/                         ← directorio raíz del negocio completo
│
├── MODELO-NEGOCIO.md                  ← visión unificada L1 + L2 (LEE PRIMERO)
├── EJECUCION.md                       ← este archivo (operativo día a día)
├── README.md                          ← visión general legacy
│
├── 01-producto/                       ╮
├── 02-captacion/                      │ L1: web-agency-ia (táctica de arranque)
├── 03-venta/                          │ Restaurantes Torrejón
│   ├── propuesta-comercial.md         │ $400 web + $400/mes RRSS
│   ├── contrato-web.md                │
│   ├── contrato-mantenimiento.md      │
│   └── faq-y-objeciones.md            │
├── 04-operacion-rrss/                 │
├── 05-aprendizaje/                    ╯
│
├── agencia-ia/                        ╮ L2: AGENCIA IA (destino estratégico)
│   ├── README.md                      │ Modelo Diagnóstico $300 / Impl $1.500 / Mant $200
│   ├── propuesta-diagnostico.md       │ PYMEs Madrid Este
│   ├── contrato-diagnostico.md        │
│   ├── contrato-implementacion.md     │
│   ├── contrato-mantenimiento.md      │
│   ├── casos-uso/                     │
│   │   └── bot-whatsapp.md            │ Caso pilar mes 4-6
│   ├── scripts-outreach/              │
│   │   ├── cross-sell-l1.md           │ Canal #1 mes 4-6
│   │   ├── linkedin-outbound-l2.md    │ Canal #2 mes 6+
│   │   └── email-cold-l2.md           │ Canal #3 mes 6+
│   └── plantillas-implementacion/     │
│       └── bot-whatsapp/              │ Template técnico reutilizable
│           ├── README.md              │
│           ├── workflow-blueprint.md  │ Arquitectura n8n nodo a nodo
│           ├── system-prompts.md      │ Prompt master con variables
│           ├── notion-schema.md       │ Estructura DB cliente
│           ├── playground-demo.md     │ Guión quick-win en vivo
│           └── cliente-checklist.md   ╯ Lo que pides al cliente
│
├── clientes/                          ← carpetas por cliente real + demos
│   ├── _demo-trattoria-mario/         italiano · Plaza Mayor Torrejón
│   ├── _demo-asador-elbrasa/          asador · Soto del Henares
│   ├── _demo-brunch-veredillascoffee/ brunch · Parque Cataluña
│   └── README.md                      ciclo DEV→STAGING→PROD
│
├── scripts/                           ← PowerShell helpers L1+L2
│   ├── onboard-cliente.ps1            crear carpeta cliente nueva
│   ├── dev-cliente.ps1                modo DEV local (1 cliente)
│   ├── dev-all-demos.ps1              modo DEV local (las 3 demos)
│   ├── lighthouse-check.ps1           auditoría pre-entrega
│   └── deploy-cliente.ps1             preview o producción Vercel
│
├── tracker/                           ← Pipeline outreach
│   ├── prospectos.csv                 importable Notion/Sheets
│   ├── prospectos.md                  vista markdown
│   ├── pipeline-resumen.md            12 semanas pre-estructurado
│   └── README.md                      estados + métricas
│
└── mi-instagram/                      ← marca personal
    ├── README.md                      bio Torrejón + highlights
    ├── posts-iniciales.md             8 posts antes del primer DM
    └── calendario-4-semanas.md        16 posts mes 1
```

---

## Recordatorios duros

1. **No vas a recibir validación externa los primeros 10 días.** Nadie te va a aplaudir por mandar 30 DMs. Confía en el sistema.
2. **El primer cliente paga el resto.** Es el más difícil. Cuando lo cierres, todo se vuelve rutina.
3. **No abras la línea 2 (agencia IA premium) hasta semana 7.** Si la abres ahora, procrastinas el outreach planificando.
4. **El tracker es sagrado.** Si dejas de rellenarlo, pierdes la única señal de qué funciona.
```
