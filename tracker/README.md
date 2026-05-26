# Tracker de Outreach

Dos formatos del mismo tracker — usa el que mejor te encaje:

| Archivo | Para qué |
|---|---|
| `prospectos.csv` | Importar a Notion (drag&drop al sidebar), Google Sheets o Airtable. Cabeceras ya listas. |
| `prospectos.md` | Ver en VSCode / Obsidian / GitHub. Útil si quieres tracking en local sin cloud. |
| `pipeline-resumen.md` | Resumen semanal: cuántos DMs, respuestas, llamadas, cierres. Lo rellenas tú cada domingo. |

## Estados del pipeline (usa estos exactos)

1. **prospectado** — identificado en Google Maps / IG, datos volcados
2. **enviado** — primer DM mandado
3. **respondido** — contestó al primer DM (interés bajo, medio o alto)
4. **propuesta** — le has enviado la propuesta-comercial.md en PDF
5. **llamada-agendada** — Calendly confirmado
6. **negociacion** — post-llamada, decidiendo opción A o B
7. **cerrado-ganado** — firmó contrato y pagó 50%
8. **cerrado-perdido** — dijo no o ghosting >14 días
9. **descartado** — no encaja (cadena, sin presupuesto evidente, etc)

## Métricas que debes mirar cada domingo

- **Total DMs enviados esta semana** (objetivo: ≥150)
- **Tasa de respuesta** (objetivo: ≥15%)
- **Tasa conversación-a-llamada** (objetivo: ≥30% de los que responden)
- **Tasa llamada-a-cierre** (objetivo: ≥25%)
- **Total facturado esta semana** y **MRR acumulado**

Si una métrica baja del objetivo 2 semanas seguidas → revisar:
- Tasa respuesta baja → mejorar Mensaje 1 del script (más personalización, hook más fuerte)
- Tasa conversación-a-llamada baja → revisar Mensaje 2 (demo, precio expuesto demasiado pronto)
- Tasa cierre baja → revisar llamada (¿pitch demasiado, escucha demasiado poco?)

## Cómo importar a Notion

1. Abre Notion → New page → "/database" → "Table - Full page"
2. Click en `···` arriba a la derecha → Merge with CSV
3. Selecciona `prospectos.csv` de este directorio
4. Notion crea las columnas automáticamente. Convierte "estado" en tipo Select para colores.
5. Crea vistas: por estado, por fecha último contacto, por sub-nicho.
