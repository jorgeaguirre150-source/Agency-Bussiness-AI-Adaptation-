# Checklist Pre-Entrega — Web Restaurante

> **No envíes al cliente hasta que TODOS los puntos críticos (🔴) estén verificados.**
> Tiempo estimado completar este checklist: 20-30 minutos.

---

## 🔴 Críticos (bloqueantes)

### Contenido
- [ ] Nombre del restaurante correcto en TODAS las apariciones (título, hero, footer, schema, meta)
- [ ] Teléfono funciona al clicarlo en móvil (link `tel:`)
- [ ] WhatsApp abre conversación con mensaje pre-rellenado correcto
- [ ] Email de contacto es válido y el cliente lo monitoriza
- [ ] Dirección coincide con Google Maps
- [ ] Horario refleja la realidad actual (verificar día a día)
- [ ] Precios del menú están actualizados (verificar con cliente últimas 48h)
- [ ] Sin texto placeholder tipo "Lorem ipsum" o `<!-- TODO -->`

### Técnico
- [ ] El formulario de reserva ENVÍA al email del cliente (hacer prueba real)
- [ ] Confirmación de prueba: cliente recibió el email de test
- [ ] Dominio apunta al sitio correcto
- [ ] SSL activo (candado verde en navegador)
- [ ] No hay enlaces rotos (probar todos los CTAs y enlaces del footer)
- [ ] Favicon visible en pestaña del navegador

### Móvil
- [ ] Probado en móvil real (no solo DevTools)
- [ ] WhatsApp flotante no tapa contenido importante
- [ ] Formulario es usable con teclado móvil
- [ ] Imágenes cargan rápido en 4G (no pesan más de 200KB cada una)
- [ ] Texto es legible sin zoom

---

## 🟡 Importantes (mejoran calidad notablemente)

### SEO local
- [ ] `<title>` incluye nombre + tipo cocina + ciudad
- [ ] `<meta description>` tiene 140-160 caracteres y vende
- [ ] H1 único en hero con nombre del restaurante
- [ ] JSON-LD Schema.org Restaurant correcto y validado en [validator.schema.org](https://validator.schema.org)
- [ ] Sitemap generado en `/sitemap-index.xml`
- [ ] Imágenes con `alt` descriptivo (no "imagen1.jpg")
- [ ] Open Graph image (cuando se comparta en redes se ve bonito)

### Rendimiento
- [ ] Lighthouse Mobile: Performance ≥ 90
- [ ] Lighthouse Mobile: SEO ≥ 95
- [ ] Lighthouse Mobile: Accesibilidad ≥ 90
- [ ] LCP (Largest Contentful Paint) < 2.5s en 4G

### Imágenes
- [ ] Hero image comprimido (WebP idealmente, < 200KB)
- [ ] Fotos de platos comprimidas y cuadradas
- [ ] No quedan fotos de Unsplash genéricas
- [ ] Logo del cliente en alta resolución en footer/header (si aplica)

---

## 🟢 Bonus (suben percepción de calidad)

- [ ] Animaciones suaves al scroll (ya incluidas: scroll smooth + bounce flecha)
- [ ] Google Analytics 4 instalado (con consentimiento de cookies si EU)
- [ ] Banner de cookies si territorio EU/UK (CookieYes free tier)
- [ ] Página /404 personalizada con CTA volver al inicio
- [ ] Pixel de Meta (Facebook) instalado si harán anuncios
- [ ] Reseñas de Google Maps embebidas dinámicamente (no estáticas)
- [ ] Botón "Cómo llegar" abre Google Maps con la ruta
- [ ] Enlace a Instagram en footer

---

## Comandos de verificación rápida

```powershell
# Build limpio
npm run build

# Preview del build de producción
npm run preview

# Test Lighthouse (necesita Chrome)
npx lighthouse http://localhost:4321 --view --preset=desktop
npx lighthouse http://localhost:4321 --view --form-factor=mobile --throttling.cpuSlowdownMultiplier=4
```

---

## Mensaje de entrega al cliente (cópialo)

```
Hola [NOMBRE]! Ya tienes tu web online en https://[dominio.com] ✓

Lo que está hecho:
- Web completa con tu carta, horarios, ubicación y formulario de reservas
- Optimizada para Google (deberías empezar a aparecer en búsquedas locales
  en 1-3 semanas)
- WhatsApp directo desde el botón flotante
- Diseño que se adapta a móvil/tablet/PC

Lo que te recomiendo hacer esta semana:
1. Compartir el enlace en tu Instagram y stories
2. Actualizar el enlace de tu ficha de Google My Business apuntando aquí
3. Mandar el enlace por WhatsApp a tus clientes habituales

Cualquier ajuste menor (cambios de texto, precios, fotos), avísame.

Y si quieres dar el siguiente paso, te recuerdo lo que hablamos:
por $400/mes me encargo de:
- Mantenimiento de la web (cambios cuando los necesites)
- 4 publicaciones semanales en Instagram y Facebook
- Respuesta a comentarios y DMs (sin atención al cliente directo)
- Reporte mensual con métricas

Avísame y empezamos el lunes.

Un abrazo,
[TU NOMBRE]
```
