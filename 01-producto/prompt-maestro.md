# Prompt Maestro — Personalización con Claude Code

> **Cómo usarlo**:
> 1. Copia la plantilla `01-producto/plantillas/restaurante/` a una nueva carpeta `clientes/[NOMBRE-CLIENTE]/`
> 2. Pega las fotos del cliente en `clientes/[NOMBRE-CLIENTE]/public/img/`
> 3. Abre Claude Code en esa carpeta
> 4. Pega el prompt de abajo (con el brief ya completado en la sección `<BRIEF>`)
> 5. Deja que Claude personalice. Revisa, ajusta, deploya.

---

## EL PROMPT (cópialo entero a Claude Code)

```
Actúa como desarrollador frontend senior especializado en webs de alta conversión para
restaurantes. Tienes acceso al código de una plantilla Astro+Tailwind ya construida en
este directorio.

OBJETIVO: Personalizar la plantilla con los datos reales del cliente (sección <BRIEF>
más abajo) para entregar una web profesional en menos de 2 horas.

TAREAS QUE DEBES EJECUTAR (en este orden):

1. ARCHIVO `src/pages/index.astro`:
   - Reemplaza el objeto `datosRestaurante` con los datos reales del brief
     (nombre, tagline, teléfono, whatsapp, email, dirección, imagen hero,
     embed de Google Maps)
   - Reemplaza el array `horario` con los horarios del brief
   - Reemplaza el array `menu` con la carta del brief (mantén la estructura
     de categorías y respeta el formato precio "12€" o "$12" según el país
     del cliente)
   - Reemplaza el array `testimonios` con los 3 testimonios reales del brief
   - Actualiza los datos del componente `<About>` con la historia del brief
     y los datos numéricos (años, platos, reseñas)
   - Si el cliente NO ofrece pizzas (o equivalente), elimina esa categoría
     del menú — NO inventes platos

2. ARCHIVO `src/layouts/Layout.astro`:
   - Actualiza el JSON-LD Schema.org con los datos reales (nombre, dirección
     completa, teléfono, tipo de cocina, rango de precio, horario en formato
     schema.org como "Mo-Su 12:00-23:00")

3. ARCHIVO `astro.config.mjs`:
   - Cambia `site:` por el dominio real del cliente

4. ARCHIVO `tailwind.config.mjs`:
   - Si el cliente especifica colores de marca distintos, ajusta `colors.brand`
     (mantén la escala 50-900 generando tonos coherentes)
   - Si no especifica, mantén la paleta naranja por defecto (funciona para 90%
     de restaurantes)

5. ARCHIVO `public/favicon.svg`:
   - Cambia la letra del favicon por la inicial del restaurante
   - Si el cliente entregó logo, sugiere comando para convertirlo a SVG

6. IMÁGENES:
   - Reemplaza TODAS las URLs de Unsplash por rutas locales a
     `/img/[nombre-archivo].jpg` apuntando a las fotos del cliente
   - Asegúrate de que cada `<img>` tiene `alt` descriptivo en español
   - Para las fotos del menú, si no tenemos imagen, elimina la prop
     `imagen` (el componente lo soporta — solo mostrará texto)

7. SEO:
   - Revisa que <title> y <meta description> incluyan: nombre + tipo cocina
     + ciudad (ej: "La Trattoria de Mario — Restaurante italiano en Madrid")
   - Verifica que las palabras clave del brief aparezcan de forma natural
     en H1, H2 y primer párrafo de "Sobre nosotros"

8. ACCESIBILIDAD Y MÓVIL:
   - Confirma que todos los enlaces tienen texto descriptivo
   - Confirma que los formularios tienen labels o aria-labels
   - Verifica que el contraste de texto sobre imágenes es legible

9. INFORME FINAL:
   Al terminar, devuelve un resumen así:
   - Archivos modificados: [lista]
   - Imágenes pendientes de añadir: [lista de rutas]
   - Cosas que el dueño humano debe revisar antes de deploy: [lista]
   - Comando para arrancar local: `npm run dev`
   - Lighthouse esperado: 95+ mobile

CRITERIOS DE CALIDAD (no negociables):
- NO inventes datos. Si falta algún dato en el brief, deja un comentario
  `<!-- TODO: pedir al cliente: X -->` y sigue
- NO copies textos genéricos tipo "Bienvenidos a nuestro restaurante donde
  la calidad y el sabor se encuentran". Usa lo que dice el brief, con
  vocabulario que el cliente realmente usaría
- El tono de voz debe ajustarse al estilo del cliente (elegante /
  familiar / rústico / moderno). Si dice "elegante", usa un español
  cuidado con verbos suaves. Si dice "familiar", usa "nuestra casa",
  "como en familia", tutea
- Mantén toda la estructura HTML semántica (header, main, section, footer)
- NO añadas dependencias nuevas a package.json salvo que sea estrictamente
  necesario

<BRIEF>
[PEGAR AQUÍ EL CONTENIDO RELLENADO DE brief-cliente.md]
</BRIEF>

Empieza ya con la TAREA 1.
```

---

## Variaciones rápidas (otros nichos sin plantilla específica todavía)

Si el cliente NO es restaurante pero el resto del sistema aplica, puedes adaptar la plantilla añadiendo al prompt:

```
ADAPTACIÓN DE NICHO: Esta plantilla es de restaurante pero el cliente es un
[NICHO: clínica dental / abogado / peluquería / gimnasio / inmobiliaria].

Ajustes adicionales:
- Renombra <Menu> a <Servicios> (lista de servicios en lugar de platos)
- Renombra <Testimonials> mantén igual (siempre funcionan)
- Cambia <Contact> con form: en lugar de "reserva mesa" pon "pedir cita"
- Schema.org: usa LocalBusiness o el tipo más cercano
  (DentalClinic, LegalService, BeautySalon, HealthClub, RealEstateAgent)
- CTA principal: "Reservar cita" / "Pedir presupuesto" / "Llamar ahora"
```

> **Próximas plantillas a construir** (orden de prioridad por demanda + ticket):
> 1. Clínica dental (alto ticket, alto LTV)
> 2. Abogado / Asesoría (alto LTV, decisión rápida)
> 3. Peluquería / Estética (alta frecuencia, refieren mucho)
> 4. Gimnasio / Box CrossFit (community-driven, gran upsell RRSS)
> 5. Inmobiliaria local (ticket alto)

---

## Tiempos esperados con este prompt

| Fase | Sin Claude Code | Con este prompt |
|------|-----------------|-----------------|
| Personalizar plantilla | 6-10 horas | 30-45 min |
| Revisar y ajustar | 2 horas | 30 min |
| Deploy + SSL | 1 hora | 15 min |
| **Total a entrega** | **9-13 horas** | **~1h 30min** |

Eso significa: cobras $400 y dedicas ≤2 horas reales → ratio de **$200/hora**.
