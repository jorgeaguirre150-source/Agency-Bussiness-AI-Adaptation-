# Bot WhatsApp Template — Caso pilar L2

> Toda la infraestructura técnica del caso pilar lista para clonar y personalizar al primer cliente L2.

## Qué contiene esta carpeta

| Archivo | Para qué |
|---|---|
| `workflow-blueprint.md` | Arquitectura completa del workflow n8n con descripción nodo a nodo. Importable manualmente en cualquier n8n. |
| `system-prompts.md` | Prompts modulares con variables `{{cliente}}`. Cliente 1: copy-paste con sus datos. |
| `notion-schema.md` | Estructura de bases de datos Notion para logs + leads + métricas. Importable como template. |
| `playground-demo.md` | Guion para hacer el quick-win demo en VIVO durante el diagnóstico — el momento de cierre. |
| `cliente-checklist.md` | Lo que pides al cliente antes de empezar (accesos, FAQs, tono). |

## Flujo de implementación cliente (8-12h con esta plantilla)

```
1. Onboard-cliente.ps1 -Nombre "[cliente]" (no en agencia-ia, en raíz scripts/)
2. Clientes recibe BRIEF + checklist técnica (cliente-checklist.md)
3. Cliente entrega: 30 FAQs + tono + accesos WhatsApp Business
4. Tu trabajo:
   3.1 Importar workflow-blueprint.md a n8n (1h)
   3.2 Personalizar system-prompts.md con datos cliente (2h)
   3.3 Crear estructura Notion del cliente (notion-schema.md, 1h)
   3.4 Conectar WhatsApp Business API (Meta, 1h primera vez, 15min después)
   3.5 Conectar Claude API key con prompt caching (15min)
   3.6 Test con 50 mensajes reales del histórico cliente (2h)
   3.7 Iterar prompts hasta % autoresolución ≥ 70% (1-2h)
5. Handover videollamada 45min + manual 2 páginas
6. 14 días de bug fixes/ajustes incluidos
7. Activación contrato mantenimiento $200/mes
```

## Stack técnico final

```
Cliente final → WhatsApp Business (móvil del cliente)
                       ↓
        Meta WhatsApp Cloud API
                       ↓
         n8n self-hosted (Hetzner, €5/mes compartido)
              ↓                    ↓
       Claude API            Notion Workspace
       (Sonnet 4.6,          (logs + leads del cliente)
       prompt caching)
              ↓
         Email/SMS al cliente
         si requiere humano
```

## Costes operativos por cliente típico

| Concepto | Coste mes |
|---|---|
| Hetzner VPS | €0.50 (compartido entre 10 clientes) |
| Meta WhatsApp API | $0 hasta 1.000 conversaciones/mes |
| Claude API (con caching) | $5-25 según volumen |
| Notion | $0 (free tier suficiente) |
| **Total tu coste** | **~$6-26/mes por cliente** |
| **Lo que cobras** | **$200/mes** |
| **Margen mantenimiento** | **87-97%** |
