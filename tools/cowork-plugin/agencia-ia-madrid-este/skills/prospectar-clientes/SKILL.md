---
name: prospectar-clientes
description: Genera listas de clientes potenciales para la agencia buscando negocios por nicho y zona en Google Maps. Úsala cuando el usuario diga "busca clientes", "prospecta abogados en X", "necesito leads de clínicas", "encuentra restaurantes en mi zona", "genera una lista de prospectos" o similar.
---

# Prospectar clientes por nicho y zona

Genera una lista de negocios reales (clientes potenciales) de un nicho concreto en una zona,
clasificándolos por oportunidad. Es el primer eslabón del embudo de captación.

## Nichos objetivo y su dolor IA

| Nicho | Dolor que resuelve la IA |
|---|---|
| **abogados** | Documentos repetitivos y consultas básicas → asistente que responde 24/7 y redacta borradores |
| **clinicas** | Recepción saturada con citas y recordatorios → bot que gestiona reservas y reduce no-shows |
| **tiendas** | Atención manual sin presencia digital → IA que responde WhatsApp y recupera clientes |
| **vehiculos** | Leads que se enfrían sin respuesta rápida → IA que califica al instante y agenda pruebas |
| **restaurantes** | WhatsApp/redes saturados → bot que gestiona reservas y responde el 70% de mensajes |

## Cómo ejecutar la prospección

La herramienta vive en el repo del usuario: `tools/prospector/` (script Node con Google Places API).

1. Pregunta al usuario (si no lo dijo): **qué nicho** y **qué zona**.
2. Ejecuta vía Bash, desde la carpeta de la herramienta:
   ```bash
   cd <ruta-repo>/tools/prospector && node prospector.mjs --nicho <nicho> --zona "<zona>" --max 40
   ```
   - Nichos predefinidos: `abogados`, `clinicas`, `tiendas`, `vehiculos`, `restaurantes` (o texto libre).
   - La ruta típica del repo: `C:\Users\Aguir\Desktop\Jorge\Documentos Varios\Code\web-agency-ia`
3. El script genera un CSV en `tools/prospector/output/` con: nombre, teléfono, web (o 🎯 SIN WEB), rating, reseñas, link Maps.
4. Resume al usuario: cuántos prospectos, cuántos SIN web (oportunidad oro), y recuérdale el dolor IA del nicho.

## Requisito previo

Necesita la clave `GOOGLE_PLACES_API_KEY` en `tools/prospector/.env`.
Si falla por falta de clave, guía al usuario al `tools/prospector/README.md` (sección Setup, clave gratis de Google).

## Siguiente paso tras prospectar

Una vez tengas la lista, enlaza con la skill de outreach: ofrece generar el email o guion de
llamada personalizado para empezar a contactar a los prospectos más prometedores (los SIN web primero).
