# Plantilla — Restaurante

Plantilla Astro lista para personalizar y entregar a un cliente del nicho restauración en menos de 4 horas.

## Stack

- Astro 4 (estático, SEO-friendly)
- Tailwind CSS
- Sitemap automático
- JSON-LD schema Restaurant (SEO local)
- Formulario de reserva con Formspree
- WhatsApp flotante
- Google Maps embebido
- Responsive + dark-friendly

## Instalación

```powershell
npm install
npm run dev
```

Abre `http://localhost:4321`.

## Personalización con Claude Code

1. Completa el brief del cliente (ver `../../brief-cliente.md`)
2. Abre Claude Code en este directorio
3. Pega el `prompt-maestro.md` con el brief relleno
4. Claude personaliza `src/pages/index.astro` y `astro.config.mjs`
5. Reemplaza imágenes de Unsplash por las fotos reales del cliente
6. `npm run build` y deploy a Vercel

## Deploy a Vercel (modo express)

```powershell
npm install -g vercel
vercel --prod
```

O conecta el repo en vercel.com → import. Apunta el dominio del cliente (compra Namecheap ~$10) a Vercel.

## Personalización rápida (puntos de cambio)

| Qué | Dónde |
|-----|-------|
| Nombre, tagline, contacto | `src/pages/index.astro` → `datosRestaurante` |
| Menú completo | `src/pages/index.astro` → `menu` |
| Testimonios | `src/pages/index.astro` → `testimonios` |
| Colores marca | `tailwind.config.mjs` → `colors.brand` |
| Schema JSON-LD | `src/layouts/Layout.astro` |
| Dominio canónico | `astro.config.mjs` → `site` |

## Checklist pre-entrega

- [ ] Fotos reales (no Unsplash)
- [ ] Menú completo y precios actualizados
- [ ] Datos de contacto verificados (teléfono, email, dirección)
- [ ] Google Maps con coordenadas reales
- [ ] Formspree ID configurado y testeado
- [ ] WhatsApp con número del cliente probado en móvil
- [ ] Schema JSON-LD con datos reales (importante para SEO local)
- [ ] Mobile testing (responsive)
- [ ] Lighthouse score >90 en mobile
- [ ] Dominio apuntado y SSL activo
