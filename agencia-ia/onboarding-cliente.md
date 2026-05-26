# Onboarding cliente — Proceso post-firma

> Lo que pasa desde que el cliente firma hasta que el sistema está en producción.
> Aplica a cualquier caso de uso L2 (bot WhatsApp, generador contenidos, propuestas).
> Esta plantilla blindada reduce errores y aumenta NPS.

---

## Por qué un onboarding estructurado

| Sin onboarding claro | Con onboarding claro |
|---|---|
| Cliente confundido, ansioso | Cliente sabe qué esperar |
| Tú perdiendo info por email | Todo en Notion compartido |
| Re-trabajos por malentendidos | Scope blindado desde día 1 |
| NPS 6-7 | NPS 8-10 |
| Cancelación tras entrega | Renovación mantenimiento 70%+ |

**Inversión**: 30 min de setup por cliente + email de bienvenida.

---

## Día 0 — Firma + cobro inicial

### Lo que hace el cliente

1. Firma contrato (PDF firmado o aprobación email explícita)
2. Paga 50% inicial vía Stripe Payment Link

### Lo que haces tú (15 min)

1. Verificas el cobro en Stripe
2. Creas el workspace Notion del cliente (template duplicado)
3. Mandas el email de bienvenida (debajo)
4. Creas el cliente en tu CRM/tracker
5. Bloqueas en tu calendario los hitos del proyecto

### Email de bienvenida (Día 0)

**Asunto**: ¡Bienvenido! Próximos pasos para tu [bot WhatsApp / etc.]

```
Hola [Nombre],

Bienvenido oficial. Acabo de recibir el pago, todo OK.

Te resumo el plan de las próximas 2 semanas:

📅 Día 1-3 (tú)
- Recibes este email con un checklist (adjunto)
- Lo rellenas en los próximos 3-4 días

📅 Día 4 (juntos)
- Videollamada de 30 min para revisar checklist juntos
- Resolvemos dudas
- Confirmamos accesos técnicos
- Agendamos en mi calendario: [link Calendly]

📅 Día 5-10 (yo)
- Construyo tu sistema en mi entorno
- Hago tests con tus datos reales
- Te paso 1-2 capturas/videos de progreso para mantenerte al tanto

📅 Día 11 (juntos)
- Videollamada de test: tú envías 10 mensajes/casos reales
- Iteramos en vivo

📅 Día 12-13 (yo)
- Ajustes finales
- Documentación del manual (PDF 2 páginas)

📅 Día 14 (entrega)
- Videollamada de handover (45 min)
- Te enseño cómo todo funciona
- Recibes contrato de mantenimiento + Stripe Link mensual (opcional pero
  muy recomendado)
- Cobro del 50% restante

📅 Día 15-44 (post-entrega)
- 30 días de garantía
- 2 rondas de revisiones incluidas
- Cualquier bug = arreglo sin coste

Adjunto:
1. Checklist de información que necesito de ti (3 horas tuyas)
2. Contrato firmado (referencia)
3. Mi número WhatsApp directo: +34 XXX XXX XXX

Cualquier duda que tengas en los próximos días, escríbeme directo. Mejor
mientras está fresco.

Un abrazo,
[Tu nombre]
```

**Adjunto checklist**: el doc `cliente-checklist.md` correspondiente al caso de uso (bot WhatsApp en mes 4-6, otros según caso).

---

## Día 1-3 — Cliente prepara material

Tu trabajo: cero. Solo recibes notificaciones de Notion cuando el cliente actualiza.

**Si día 3 no ha rellenado el checklist**: WhatsApp suave:

```
[Nombre], ¿cómo va el checklist? Si hay alguna pregunta atascada, dímela
y la resolvemos rápido — no quiero que se te haga bola.
```

**Si día 7 todavía sin rellenar**: nota interna de bloqueante. Y email formal:

```
Hola [Nombre], quería confirmarte que el plazo de 14 días empieza cuando
recibo el checklist completo. Si necesitas más tiempo, sin problema, pero
dímelo para reagendar.
```

---

## Día 4 — Sesión de revisión checklist (30 min videollamada)

### Estructura

**0-5 min**: Bienvenida + check informal

**5-15 min**: Revisar checklist juntos
- Validar las 30 FAQs (o material equivalente del caso)
- Validar tono (con 5 ejemplos del cliente)
- Validar accesos técnicos

**15-25 min**: Test de demo en vivo
- Re-haces el quick-win demo (más rápido, ya saben qué esperar)
- Cliente ve cómo será el sistema con SUS datos

**25-30 min**: Confirmar siguientes pasos
- Fecha de test (día 11)
- Fecha de handover (día 14)
- Cualquier acceso pendiente

### Resultado de la sesión

Email de seguimiento mismo día:

```
[Nombre], gracias por la sesión.

Resumen:
- Checklist confirmado al 90% (faltan [X cosas menores], me los mandas
  esta semana)
- Próximos hitos: test día [fecha], handover día [fecha]
- Accesos pendientes: [si hay]

Arranco con la construcción mañana. Te paso 1-2 actualizaciones durante
la semana que viene.

Un abrazo.
```

---

## Día 5-10 — Construcción (tu trabajo)

### Updates al cliente (proactivos)

- **Día 6**: WhatsApp con captura del sistema básico funcionando + "Ya tienes el esqueleto, esta semana lo personalizo a tus datos"
- **Día 8**: WhatsApp con captura del cliente "casi listo, voy a hacer la primera prueba con tus FAQs"

**No esperes que el cliente pregunte**. Los updates proactivos generan tranquilidad y reducen ansiedad.

### Bloqueantes posibles

- Cliente no pasó algún acceso → email + WhatsApp diario hasta que pase
- Tú detectas que algo del checklist está mal → email mismo día: "ojo, X dato parece [problema]. ¿Confirmas?"
- Algo técnico falla (API down, etc.) → comunicas al cliente con explicación + nuevo timing

**Regla**: cualquier retraso o problema → cliente se entera por ti, no por preguntar.

---

## Día 11 — Sesión de test (30 min)

### Estructura

**0-5 min**: Setup técnico (compartes pantalla)

**5-25 min**: Cliente envía 10 mensajes/casos reales que estuvo guardando

Por cada uno:
- Bot responde
- Cliente valora: ✓ perfecto / 🟡 ajustable / ❌ falla
- Tú anotas en doc compartido para iterar después

**25-30 min**: Resumen y próximos pasos

### Métrica de éxito de la sesión

- ≥7/10 respuestas perfectas o ajustables → handover en día 14 (a tiempo)
- 4-6/10 → handover día 15-17 (1-3 días extra para iterar)
- <4/10 → problemas serios. Re-evaluar prompt, posible re-build. Comunicar honesto.

---

## Día 12-13 — Ajustes (tu trabajo)

Iteras prompts según feedback. Documentas cambios. Generas manual PDF para el cliente.

---

## Día 14 — Handover (45 min videollamada + cobro)

### Estructura

**0-10 min**: Demostración del sistema funcionando completamente

**10-25 min**: Cómo lo usa el cliente día a día
- Acceso al Notion del cliente
- Cómo cambiar respuestas básicas (FAQs)
- Cómo ver leads capturados
- Cómo entender métricas mensuales
- Casos donde el bot deriva → cómo responder el humano

**25-35 min**: Casos especiales y troubleshooting básico
- "¿Qué hago si el bot dice algo que no me gusta?"
- "¿Cómo desactivo el bot por un día?"
- "¿Y si quiero añadir una FAQ nueva?"

**35-45 min**: Cierre + venta de mantenimiento

```
"Bueno, hasta aquí lo formal del contrato de implementación.

Cuestión de mantenimiento, como te mencioné en la propuesta:

- $200/mes, suscripción Stripe
- Cubre: monitoreo, ajustes prompts, 2h soporte tuyo
- Permanencia 3 meses, después cancelable con 15 días aviso

Mi recomendación honesta: cógelo. El bot se mantiene a 70% solo, pero
necesita ajustes mensuales para no degradar. Sin mantenimiento, dentro
de 3 meses estás peor que ahora. Conmigo, dentro de 3 meses estás mejor.

¿Lo arrancamos para el [día 1 del mes siguiente]?"
```

Conversión target en handover: 70%+ aceptan mantenimiento.

### Tras la sesión

- Cliente paga 50% restante
- Mandas contrato mantenimiento + Stripe suscripción
- Mandas manual PDF 2 páginas
- Mandas certificado/email formal de entrega

---

## Día 15-44 — Periodo de garantía

### Lo que monitorizas (sin que el cliente sepa)

- Logs n8n: ¿hay errores? % éxito?
- Mensajes que el bot deriva a humano: ¿son casos esperados o el bot falla?
- Cliente responde rápido a las derivaciones o tarda?

### Comunicación con el cliente

- **Día 21** (1 sem post-handover): WhatsApp "¿qué tal lo primero días? ¿Algún ajuste que te apetezca?"
- **Día 30** (mes post-entrega): primer reporte mensual con métricas reales
- **Día 35-40**: si firma mantenimiento, primera revisión de ajustes

### Si surge bug

- Respondes en ≤24h hábiles
- Lo arreglas en ≤48h
- Le mandas captura del fix funcionando

---

## Día 45+ — Cliente "en mantenimiento estable"

### Tu cadencia mensual

- **Día 1 de cada mes**: cobro suscripción Stripe (automático)
- **Día 5**: revisión logs del mes (1h)
- **Día 10**: ajustes prompts si hace falta (1h)
- **Día 15**: reporte mensual al cliente (15 min de email + adjunto métricas)

**Tiempo total tuyo/mes**: ~2h. Cobras $200. Margen 87%.

---

## Disparadores de cross-sell L2 (durante mantenimiento)

Cada llamada review mensual, escuchas para detectar el siguiente caso de uso del cliente:

| Trigger en conversación | Caso siguiente para vender |
|---|---|
| "Quiero publicar más en redes" | Agente generador contenidos |
| "Tengo otro proceso manual que me come horas" | Diagnóstico ($300) para mapearlo |
| "Mi equipo no llega a tantas propuestas" | Automatización propuestas |
| "He oído que se puede hacer X con IA" | Diagnóstico, explorar |

**Regla**: en cada cliente activo, intentas vender 1 caso adicional cada 3-4 meses. Conversión típica: 30-40%.

---

## Casos de uso del onboarding según servicio

### Bot WhatsApp (caso 1)
Sigue este doc tal cual.

### Generador contenidos (caso 2)
Mismo flujo. Cambia:
- Checklist incluye "50 posts pasados del cliente" en lugar de "30 FAQs"
- Test día 11: cliente revisa 3 generaciones de prueba
- Handover incluye tutorial de Notion para revisar/aprobar

### Automatización propuestas (caso 3)
Onboarding más largo (3-4 semanas vs 2). Cambia:
- Checklist incluye "20-50 propuestas pasadas con outcome (ganada/perdida)"
- Sesión de revisión más extensa (60 min vs 30)
- Test con 5 propuestas reales en paralelo
- Handover incluye formación del equipo comercial (1-2h)

---

## Indicadores de "este onboarding va bien"

| Indicador | Target |
|---|---|
| Checklist completado por cliente en ≤5 días | ≥80% clientes |
| Sesión de revisión completada día 4 (sin retraso) | ≥80% clientes |
| Test día 11 con ≥70% respuestas OK | ≥70% clientes |
| Handover día 14 sin retraso | ≥70% clientes |
| Conversión a mantenimiento | ≥70% clientes |
| NPS post-handover (encuesta 30 días) | ≥8/10 |

Si alguna métrica cae <60% durante 3 clientes seguidos → revisar el onboarding entero, identificar dónde falla.

---

## Anti-patrones a evitar

| Anti-patrón | Por qué falla |
|---|---|
| No comunicar updates durante construcción | Cliente ansioso, abandona |
| Entregar y desaparecer | Sin venta de mantenimiento |
| No medir el éxito del bot tras entrega | No tienes data para iterar |
| Aceptar scope creep silenciosamente | Tu margen se quema |
| Cobrar 50% restante antes de validar | Genera disputa si algo falla |
| Saltar la sesión de revisión día 4 | Llegas con sorpresas al test |
