# 🎯 Embudo de captación — Las 3 vías (mentoría)

Mapa maestro de cómo entra un cliente a la agencia. Todas las vías terminan igual:
**videollamada de venta → onboarding**.

```
┌──────────────────┐   ┌──────────────────┐   ┌──────────────────┐
│  VÍA 1           │   │  VÍA 2           │   │  VÍA 3           │
│  EMAIL FRÍO      │   │  MARCA PERSONAL  │   │  LLAMADA FRÍA    │
│  (prospección)   │   │  (inbound)       │   │  (outbound)      │
└────────┬─────────┘   └────────┬─────────┘   └────────┬─────────┘
         │                      │                       │
         ▼                      ▼                       ▼
  Lista del prospector    YouTube/IG/LinkedIn     Lista del prospector
  (tools/prospector)      contenido de valor      (con teléfono)
         │                      │                       │
         ▼                      ▼                       ▼
  Email personalizado     Lead magnet gratis      Primera llamada
  con dolor del nicho     (auditoría/checklist)   (script abajo)
         │                      │                       │
         ▼                      ▼                       ▼
  Respuesta interesado    Llamada de triaje       Interés → agendar
         │                      │                       │
         └──────────────────────┴───────────────────────┘
                                │
                                ▼
                    📹 VIDEOLLAMADA DE VENTA
                    (presentas diagnóstico $300-$700)
                                │
                                ▼
                         ✅ ONBOARDING
                    (firma + pago + arranque)
```

---

## VÍA 1 — Email frío (la más escalable para empezar)

**De dónde salen los contactos**: `tools/prospector/` → CSV con email/web de cada negocio.

**Flujo**:
1. Generas lista con el prospector (ej: `--nicho abogados --zona "Torrejón"`)
2. Por cada uno, mandas email de prospección personalizado (ver `emails-y-guiones-por-nicho.md`)
3. Secuencia: Email 1 (día 0) → seguimiento (día 3) → valor (día 7) → cierre (día 14)
4. Quien responde interesado → propones videollamada de 20 min
5. En la videollamada presentas el diagnóstico

**Ritmo**: 20-40 emails/día. Conversión típica: 3-8% responden, de esos 30-50% acepta llamada.

**Tiempo a primer cliente**: 2-4 semanas.

---

## VÍA 2 — Marca personal (la más potente a medio plazo)

**Canales** (imagen mentoría): YouTube + Instagram + LinkedIn.

**El secreto** (de la mentoría): publicar contenido de valor que demuestre que sabes,
y ofrecer un **lead magnet gratis** (ej: "Auditoría IA gratuita de 15 min" o
"Checklist: 7 procesos que tu [sector] puede automatizar").

**Flujo**:
1. Publicas contenido educativo (cómo la IA ayuda a abogados/clínicas/etc.)
2. Ofreces lead magnet → la gente interesada te deja sus datos
3. Llamada de triaje (5-10 min): ¿encaja? ¿tiene presupuesto?
4. Si encaja → videollamada de venta
5. Onboarding

**Ritmo**: 3-4 publicaciones/semana por canal. Resultados en 2-4 meses (efecto acumulativo).

**Material ya listo**: `mi-linkedin/` (perfil + 8 posts + calendario 12 sem), `mi-instagram/`.

---

## VÍA 3 — Llamada en frío (la más rápida si te atreves)

**De dónde salen los contactos**: `tools/prospector/` → CSV con teléfono.

**Flujo**:
1. Generas lista (los que tienen teléfono)
2. Llamas con el guion (ver `emails-y-guiones-por-nicho.md`)
3. Objetivo de la primera llamada: NO vender, conseguir la videollamada
4. Videollamada de venta → onboarding

**Ritmo**: 15-30 llamadas/día. Conversión: 5-10% acepta videollamada.

**Tiempo a primer cliente**: 1-3 semanas (la más rápida, la más incómoda).

---

## La videollamada de venta (donde se cierra — común a las 3 vías)

Estructura de 30 min:
1. **(5 min) Rapport + contexto**: "Cuéntame de tu [negocio], ¿cuántos sois? ¿qué os quema más tiempo?"
2. **(10 min) Diagnóstico en vivo**: identificas 2-3 procesos automatizables ahí mismo. El prospecto VE que sabes.
3. **(5 min) Quick-win**: enseñas un ejemplo real (la landing, un mockup de `casos/`).
4. **(5 min) Oferta**: "Te propongo un diagnóstico de $300-700. En 5 días te entrego el mapa exacto + demo con tus datos. Si no aporta valor, te devuelvo el dinero."
5. **(5 min) Cierre**: firma + pago. Si duda → seguimiento en 48h.

**Conversión videollamada → diagnóstico vendido**: 30-50% si el prospecto llegó cualificado.

---

## Qué vía atacar primero (recomendación)

| Si quieres... | Empieza por |
|---|---|
| Dinero rápido, te atreves a llamar | Vía 3 (llamada fría) |
| Dinero rápido, prefieres escribir | Vía 1 (email frío) |
| Construir activo a largo plazo | Vía 2 (marca personal) — en paralelo siempre |

**Plan ideal**: Vía 1 o 3 para caja rápida AHORA + Vía 2 en paralelo (publicar) para que en 3 meses los clientes vengan solos.

---

## Conexión con las herramientas

- **Listas de prospectos** → `tools/prospector/` (genera el CSV)
- **Emails y guiones por nicho** → `emails-y-guiones-por-nicho.md` (este directorio)
- **Posts marca personal** → `mi-linkedin/`, `mi-instagram/`
- **Propuesta diagnóstico** → `agencia-ia/propuesta-diagnostico.md`
- **Contratos** → `agencia-ia/contrato-*.md`
- **Landing (credibilidad)** → https://propio-agencia-ia.vercel.app
