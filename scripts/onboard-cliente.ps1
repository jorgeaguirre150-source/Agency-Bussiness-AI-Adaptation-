# Onboard Cliente — clona la plantilla restaurante a una nueva carpeta de cliente
# Uso:   .\scripts\onboard-cliente.ps1 -Nombre "trattoria-mario"
# Crea:  clientes\trattoria-mario\  (copia limpia de la plantilla, lista para personalizar con Claude Code)

param(
    [Parameter(Mandatory=$true)]
    [string]$Nombre
)

$ErrorActionPreference = "Stop"

# Normaliza el nombre (lowercase, sin espacios)
$Nombre = $Nombre.ToLower() -replace '\s+', '-' -replace '[^a-z0-9\-_]', ''

$base = Split-Path -Parent $PSScriptRoot
$origen = Join-Path $base "01-producto\plantillas\restaurante"
$destino = Join-Path $base "clientes\$Nombre"

if (Test-Path $destino) {
    Write-Host "ERROR: Ya existe clientes\$Nombre. Borra primero si quieres regenerar." -ForegroundColor Red
    exit 1
}

if (-not (Test-Path $origen)) {
    Write-Host "ERROR: No se encuentra la plantilla en $origen" -ForegroundColor Red
    exit 1
}

Write-Host "Clonando plantilla a clientes\$Nombre ..." -ForegroundColor Cyan
Copy-Item -Recurse -Force $origen $destino

# Limpia node_modules si vinieron en la copia
$nodeMods = Join-Path $destino "node_modules"
if (Test-Path $nodeMods) {
    Remove-Item -Recurse -Force $nodeMods
}

# Crea archivo BRIEF.md vacío en el cliente para que rellenes la entrevista ahí
$briefPath = Join-Path $destino "BRIEF.md"
$briefContent = @"
# BRIEF — Cliente: $Nombre

Pega aquí el contenido rellenado de ``01-producto/brief-cliente.md`` tras la videollamada de descubrimiento.
Después, abre Claude Code en esta carpeta y aplica ``01-producto/prompt-maestro.md`` apuntando a este BRIEF.

---

## Estado del proyecto

- [ ] Brief recibido y completo
- [ ] Fotos del cliente en ``public/img/``
- [ ] index.astro personalizado (Claude Code)
- [ ] Layout.astro Schema.org actualizado
- [ ] astro.config.mjs con dominio real
- [ ] Tailwind con colores marca (si aplica)
- [ ] Lighthouse mobile >=90
- [ ] Checklist pre-entrega (01-producto/checklist-entrega.md) completado
- [ ] Deployado en Vercel
- [ ] Dominio apuntado y SSL activo
- [ ] Entregado al cliente con mensaje en checklist-entrega.md
- [ ] Cobrado 50% restante

---

## Datos de contacto del cliente

- Nombre del responsable:
- WhatsApp:
- Email:
- Fecha primer DM:
- Fecha llamada cierre:
- Fecha entrega prevista:
- Dominio (quien compra):
"@
Set-Content -Path $briefPath -Value $briefContent -Encoding UTF8

Write-Host ""
Write-Host "OK." -ForegroundColor Green
Write-Host "Carpeta cliente lista en: clientes\$Nombre" -ForegroundColor Yellow
Write-Host ""
Write-Host "Siguientes pasos:" -ForegroundColor Cyan
Write-Host "  1. cd clientes\$Nombre"
Write-Host "  2. Rellena BRIEF.md tras la videollamada con el cliente"
Write-Host "  3. Abre Claude Code aqui y aplica 01-producto/prompt-maestro.md"
Write-Host "  4. npm install"
Write-Host "  5. npm run dev (verifica en http://localhost:4321)"
Write-Host "  6. .\..\..\scripts\deploy-cliente.ps1 -Nombre $Nombre"
