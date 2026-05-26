# Workflow Blueprint — Bot WhatsApp n8n

> Descripción completa del workflow n8n nodo a nodo. Reconstruible en cualquier instancia n8n importando manualmente.

## Diagrama de alto nivel

```
┌──────────────────┐
│ 1. WhatsApp      │
│    Webhook       │  Entrada: mensaje del cliente final
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ 2. Set Context   │  Extrae: from, body, name, timestamp
│    (Function)    │  Lookup: ¿es cliente nuevo o repetido?
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ 3. Log Inbound   │  Guarda en Notion: mensaje recibido
│    (Notion)      │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ 4. Claude Call   │  Sistema prompt cliente + mensaje
│    (HTTP req)    │  Output: { intent, response, requires_human, lead_data }
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ 5. Switch        │
│    on intent     │
└─┬──────────┬─────┘
  │          │
  ▼          ▼
┌─────┐  ┌──────────┐
│ FAQ │  │ Lead     │
│ Resp│  │ Capture  │
└──┬──┘  └────┬─────┘
   │          │
   │     ┌────▼─────┐
   │     │ Notion:  │  Guarda lead en tabla "Leads"
   │     │ create   │
   │     └────┬─────┘
   │          │
   └────┬─────┘
        ▼
┌──────────────────┐
│ 6. WhatsApp Send │  Respuesta al cliente final
│    (Meta API)    │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ 7. If requires_  │
│    human=true    │
└──┬───────────┬───┘
   │ yes       │ no
   ▼           ▼
┌─────────┐ ┌─────┐
│ Notify  │ │ End │
│ owner   │ └─────┘
│ (email) │
└─────────┘
```

## Nodos detallados

### Node 1 — WhatsApp Webhook

**Tipo**: `n8n-nodes-base.webhook`

**Config**:
- HTTP Method: POST
- Path: `/whatsapp-{{cliente-slug}}`
- Authentication: Header Auth con token de Meta
- Response Mode: Immediately

**Conectar con Meta**:
- En Meta Business Suite → WhatsApp Business Account → Configuration → Webhooks
- Callback URL: `https://n8n.tu-dominio.com/webhook/whatsapp-{{cliente-slug}}`
- Verify token: el que pones en Header Auth
- Subscribe a: `messages`

**Salida ejemplo**:
```json
{
  "entry": [{
    "changes": [{
      "value": {
        "messages": [{
          "from": "34611223344",
          "id": "wamid.HBgN...",
          "timestamp": "1716647600",
          "text": { "body": "Hola, ¿abrís hoy domingo?" },
          "type": "text"
        }],
        "contacts": [{
          "profile": { "name": "Juan Pérez" },
          "wa_id": "34611223344"
        }]
      }
    }]
  }]
}
```

### Node 2 — Set Context (Function)

**Tipo**: `n8n-nodes-base.code` (JavaScript)

**Código**:
```javascript
const message = $input.item.json.entry[0].changes[0].value.messages[0];
const contact = $input.item.json.entry[0].changes[0].value.contacts[0];

return {
  json: {
    waId: message.from,
    messageId: message.id,
    timestamp: new Date(parseInt(message.timestamp) * 1000).toISOString(),
    senderName: contact.profile.name,
    body: message.text?.body || '',
    type: message.type,
    // metadatos para downstream
    clienteSlug: '{{CLIENTE_SLUG}}',
    clienteNombre: '{{CLIENTE_NOMBRE}}',
    clienteTono: '{{CLIENTE_TONO}}'
  }
};
```

Reemplaza `{{CLIENTE_SLUG}}` y demás en el clonado por cliente.

### Node 3 — Log Inbound (Notion)

**Tipo**: `n8n-nodes-base.notion`

**Operation**: `Create Page`

**Resource**: `databasePage`

**Database**: ID de la base "Conversaciones" del workspace cliente

**Properties**:
- `WaId` (title): `{{ $json.waId }}`
- `Nombre` (rich text): `{{ $json.senderName }}`
- `Mensaje` (rich text): `{{ $json.body }}`
- `Timestamp` (date): `{{ $json.timestamp }}`
- `Direccion` (select): `Entrante`
- `Procesado` (checkbox): false

### Node 4 — Claude Call (HTTP Request)

**Tipo**: `n8n-nodes-base.httpRequest`

**Method**: POST
**URL**: `https://api.anthropic.com/v1/messages`

**Headers**:
```
Content-Type: application/json
x-api-key: {{ANTHROPIC_API_KEY}}
anthropic-version: 2023-06-01
anthropic-beta: prompt-caching-2024-07-31
```

**Body** (JSON):
```json
{
  "model": "claude-sonnet-4-5-20250929",
  "max_tokens": 1024,
  "system": [
    {
      "type": "text",
      "text": "{{SYSTEM_PROMPT_CLIENTE}}",
      "cache_control": {"type": "ephemeral"}
    }
  ],
  "messages": [
    {
      "role": "user",
      "content": "Mensaje entrante de {{$json.senderName}} ({{$json.waId}}):\n\n{{$json.body}}\n\nResponde en JSON con estructura: { intent, response, requires_human, lead_data }"
    }
  ]
}
```

**Importante**:
- `cache_control: ephemeral` en el system prompt activa prompt caching → reduce coste ~90% para clientes con mucho volumen
- Los prompts caché expiran tras 5 min de inactividad
- El sistema prompt es lo más largo (FAQs del cliente, tono, instrucciones) → es lo que cacheas

**Parseo de respuesta**:
El campo `content[0].text` viene como string JSON. Lo parsea el siguiente nodo.

### Node 4.5 — Parse Claude Response (Function)

**Código**:
```javascript
const claudeResponse = $input.item.json.content[0].text;
let parsed;
try {
  parsed = JSON.parse(claudeResponse);
} catch (e) {
  // Fallback si Claude responde texto plano
  parsed = {
    intent: "unknown",
    response: claudeResponse,
    requires_human: true,
    lead_data: null
  };
}

return {
  json: {
    ...$input.item.json, // mantén contexto previo
    intent: parsed.intent,
    bot_response: parsed.response,
    requires_human: parsed.requires_human,
    lead_data: parsed.lead_data
  }
};
```

### Node 5 — Switch on intent

**Tipo**: `n8n-nodes-base.switch`

**Mode**: Expression

**Rules**:
- Rule 1: `{{ $json.lead_data !== null }}` → Output 1 (Lead Capture)
- Rule 2: `{{ $json.intent === 'faq' }}` → Output 2 (FAQ Response)
- Rule 3 (else): → Output 2 (FAQ Response como default)

### Node 5a — Lead Capture (Notion)

**Tipo**: `n8n-nodes-base.notion`

**Operation**: Create Page en database "Leads"

**Properties**:
- `Nombre` (title): `{{ $json.lead_data.nombre || $json.senderName }}`
- `WaId` (rich text): `{{ $json.waId }}`
- `Interes` (rich text): `{{ $json.lead_data.interes }}`
- `Mensaje original` (rich text): `{{ $json.body }}`
- `Fecha` (date): `{{ $json.timestamp }}`
- `Estado` (select): `Nuevo`

### Node 6 — WhatsApp Send (Meta API)

**Tipo**: `n8n-nodes-base.httpRequest`

**Method**: POST
**URL**: `https://graph.facebook.com/v18.0/{{WHATSAPP_PHONE_NUMBER_ID}}/messages`

**Headers**:
```
Authorization: Bearer {{WHATSAPP_ACCESS_TOKEN}}
Content-Type: application/json
```

**Body**:
```json
{
  "messaging_product": "whatsapp",
  "to": "{{ $json.waId }}",
  "type": "text",
  "text": {
    "body": "{{ $json.bot_response }}"
  }
}
```

### Node 6.5 — Log Outbound (Notion)

Misma idea que Node 3 pero `Direccion = Saliente`, `Mensaje = bot_response`.

### Node 7 — If requires_human

**Tipo**: `n8n-nodes-base.if`

**Condición**: `{{ $json.requires_human === true }}`

**True branch** → Node 7a (notificar dueño)
**False branch** → fin del workflow

### Node 7a — Notify Owner (Email + opcional WhatsApp interno)

**Tipo**: `n8n-nodes-base.emailSend` (o `httpRequest` para WhatsApp)

**To**: `{{CLIENTE_EMAIL_ALERTAS}}`
**Subject**: `Mensaje requiere tu atención — {{ $json.senderName }}`
**Body**:
```
Mensaje de {{ $json.senderName }} ({{ $json.waId }}) que el bot no pudo resolver:

"{{ $json.body }}"

Mi mejor intento de respuesta automática fue:
"{{ $json.bot_response }}"

Para responder personalmente, abre WhatsApp Business y busca {{ $json.waId }}.

Notion: https://notion.so/{{NOTION_DB_LINK}}
```

## Variables globales a definir por cliente

Cuando clonas el workflow para un cliente nuevo, sustituyes:

| Variable | Ejemplo cliente "La Trattoria" |
|---|---|
| `{{CLIENTE_SLUG}}` | `latrattoria` |
| `{{CLIENTE_NOMBRE}}` | `La Trattoria de Mario` |
| `{{CLIENTE_TONO}}` | `cálido y familiar` |
| `{{SYSTEM_PROMPT_CLIENTE}}` | ver `system-prompts.md` |
| `{{ANTHROPIC_API_KEY}}` | key tuya o del cliente |
| `{{WHATSAPP_PHONE_NUMBER_ID}}` | del cliente, en Meta Business |
| `{{WHATSAPP_ACCESS_TOKEN}}` | del cliente, en Meta Business |
| `{{CLIENTE_EMAIL_ALERTAS}}` | email del dueño |
| `{{NOTION_DB_LINK}}` | URL del workspace Notion del cliente |

## Pasos para clonar para cliente nuevo

```
1. Duplica el workflow en n8n con nombre "WhatsApp Bot - [Cliente]"
2. Busca-reemplaza todas las {{VARIABLES}}
3. Crea Notion workspace del cliente (template en notion-schema.md)
4. Conecta WhatsApp Business API del cliente con webhook URL
5. Test con 10 mensajes simulados
6. Activate workflow
7. Test con mensajes reales del histórico cliente
8. Iterar prompts hasta ≥70% autoresolución
9. Handover al cliente
```

## Métricas a vigilar tras activación

Cada workflow expone vía API de n8n:
- Executions/día (= mensajes procesados)
- Average duration (target <3s)
- Failed executions (target <1%)
- Cost API Claude (estimación con prompt caching)

Conecta n8n con tu Grafana/dashboard interno para tener visibilidad cross-clientes.
