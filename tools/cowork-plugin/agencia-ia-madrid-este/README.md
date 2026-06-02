# Plugin — Agencia IA Madrid Este

Plugin de Cowork que empaqueta los flujos de trabajo de la agencia de auditoría e
implementación de IA. Convierte todo el conocimiento del negocio en capacidades que
puedes invocar mientras trabajas.

## Qué incluye (4 skills)

| Skill | Qué hace | La activas diciendo... |
|---|---|---|
| **Prospectar clientes** | Busca clientes potenciales por nicho + zona en Google Maps | "busca abogados en Torrejón", "necesito leads de clínicas" |
| **Generar outreach** | Redacta email o guion de llamada personalizado por nicho | "escribe el email para esta clínica", "guion para llamar al concesionario" |
| **Preparar diagnóstico** | Monta la propuesta de diagnóstico ($300-700) para un cliente | "prepara la propuesta para X", "cuánto le cobro" |
| **Auditar negocio** | Identifica procesos automatizables con IA priorizados por ROI | "audita esta tienda", "qué puede automatizar este abogado" |

## El modelo de negocio que codifica

```
Diagnóstico ($300-700) → Implementación ($1.500-5.000) → Mantenimiento ($200+/mes)
```

Nichos: abogados · clínicas · tiendas físicas · venta de vehículos · restaurantes.

## Flujo completo de uso

```
1. Prospectar clientes   →  lista de negocios de un nicho/zona
2. Generar outreach      →  contactas a los prospectos (email/llamada)
3. (cliente acepta)      →  videollamada de venta
4. Auditar negocio       →  identificas qué automatizar
5. Preparar diagnóstico  →  vendes el diagnóstico $300-700
```

## Dependencia

La skill de prospección usa la herramienta `tools/prospector/` del repo web-agency-ia
(requiere clave gratuita de Google Places API). El resto de skills funcionan de forma autónoma.

## Conocimiento de referencia (en el repo)

- `agencia-ia/scripts-outreach/` — embudo de captación y guiones completos
- `agencia-ia/casos-uso/` — casos de uso con stack técnico
- `agencia-ia/propuesta-diagnostico.md` y `contrato-*.md` — plantillas de venta
- Landing pública: https://propio-agencia-ia.vercel.app
