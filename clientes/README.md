# Clientes — Flujo DEV → STAGING → PROD

Cada subcarpeta es un cliente (real o demo). Convención:

- `_demo-*` con underscore inicial → demos públicas, agnósticas, parte de tu portfolio
- `[nombre-cliente]` sin prefijo → cliente real pagador

## Ciclo de vida de una web

```
        crear              dev               auditar              deploy
[ onboard-cliente ] → [ dev-cliente ] → [ lighthouse-check ] → [ deploy-cliente ]
                          ↑                    ↑                    ↑
                      hot-reload          score 90+?         preview → prod
                      localhost           desktop+mobile     URL Vercel
```

## Scripts disponibles

| Script | Cuándo | Comando |
|---|---|---|
| `onboard-cliente.ps1` | Tras cerrar contrato | `.\scripts\onboard-cliente.ps1 -Nombre "trattoria-mario"` |
| `dev-cliente.ps1` | Iterando con Claude Code | `.\scripts\dev-cliente.ps1 -Nombre "trattoria-mario"` |
| `dev-all-demos.ps1` | Comparar las 3 demos | `.\scripts\dev-all-demos.ps1` |
| `lighthouse-check.ps1` | Antes de entregar | `.\scripts\lighthouse-check.ps1 -Nombre "trattoria-mario"` |
| `deploy-cliente.ps1` (sin flag) | Preview para el cliente | `.\scripts\deploy-cliente.ps1 -Nombre "trattoria-mario"` |
| `deploy-cliente.ps1 -Prod` | Aprobado, URL final | `.\scripts\deploy-cliente.ps1 -Nombre "trattoria-mario" -Prod` |

## Las tres fases

### 1. DEV — Tú iterando, nadie más mira

- Comando: `.\scripts\dev-cliente.ps1 -Nombre [X]`
- URL: `http://localhost:4321` (cambia con `-Port`)
- Hot-reload: editas `src/pages/index.astro` y se actualiza el navegador solo
- Aquí pegas el BRIEF del cliente + corres prompt-maestro.md con Claude Code
- Iteras textos, fotos, paleta, hasta que se vea bien

**No avanzas a STAGING hasta**: ningún `<!-- TODO -->` queda, fotos del cliente sustituyen Unsplash, datos personales (tel, email, dirección, horario) verificados con el cliente.

### 2. STAGING — Cliente revisa antes de aprobar

- Comando: `.\scripts\deploy-cliente.ps1 -Nombre [X]` (sin `-Prod`)
- Vercel da URL tipo `https://[cliente]-abc123-tu-equipo.vercel.app`
- Mandas esa URL al cliente para revisar
- Cliente pide cambios → vuelves a DEV, iteras, redeploy preview
- Máximo 2 rondas según contrato — más allá se factura

**No avanzas a PROD hasta**: cliente aprueba por WhatsApp/email + Lighthouse mobile 90+ verificado + checklist 🔴 de `01-producto/checklist-entrega.md` cumplido + cobrado el 50% restante.

### 3. PROD — La web del cliente, en su dominio

- Comando: `.\scripts\deploy-cliente.ps1 -Nombre [X] -Prod`
- URL definitiva: `https://[cliente].vercel.app` o el dominio que ha comprado
- Configurar DNS en Vercel apuntando al dominio del cliente (5 min)
- SSL automático
- Mensaje de entrega al cliente (texto listo al final de `01-producto/checklist-entrega.md`)

## Convenciones de naming

```
clientes\
├── _demo-trattoria-mario/              ✓ demo pública (italiano)
├── _demo-asador-elbrasa/               ✓ demo pública (asador)
├── _demo-brunch-veredillascoffee/      ✓ demo pública (brunch)
├── trattoria-roma-torrejon/            ← cliente real (si fuera otro italiano)
├── la-casona-asador/                   ← cliente real
└── _archived\                          ← clientes pasados que cancelaron
```

**Reglas**:
- Slug en minúsculas, separadores con guión
- Si dos clientes tienen nombre parecido, añade ciudad: `latrattoria-torrejon` vs `latrattoria-alcala`
- Cuando un cliente cancela mantenimiento, mueve la carpeta a `_archived/` para no perder el código

## Detalles técnicos por demo

| Demo | Schema.org | Sub-nicho | Paleta | Coordenadas |
|---|---|---|---|---|
| `_demo-trattoria-mario` | `Restaurant` italiano | italiano/pizzería | Naranja cálido | 40.4555, -3.4823 (Plaza Mayor Torrejón) |
| `_demo-asador-elbrasa` | `BarbecueRestaurant` | asador/steakhouse | Marrón cuero + dorado | 40.4730, -3.4655 (Soto del Henares) |
| `_demo-brunch-veredillascoffee` | `CafeOrCoffeeShop` | brunch/cafetería especialidad | Verde salvia | 40.4598, -3.4630 (Parque Cataluña) |

## Cuándo ampliar el portfolio de demos

A los 5 clientes reales cerrados, considera añadir una 4ª demo en:
- **Tapas / bar de menú diario** — mucho volumen en Torrejón
- **Hamburguesería gourmet** — alto upsell RRSS
- **Sushi / asiático** — ticket más alto en hostelería

Cada demo extra te da otro frente de outreach + otra paleta para enseñar.
