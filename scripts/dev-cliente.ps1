# Dev Cliente — arranca un cliente en modo desarrollo local (hot-reload)
# Uso:   .\scripts\dev-cliente.ps1 -Nombre "trattoria-mario"
#        .\scripts\dev-cliente.ps1 -Nombre "_demo-asador-elbrasa" -Port 4322
#
# Hace: npm install (si no hay node_modules) + npm run dev en el puerto indicado.
# El navegador NO se abre automaticamente — mira la URL en la consola.

param(
    [Parameter(Mandatory=$true)]
    [string]$Nombre,

    [int]$Port = 4321,

    [switch]$NoInstall
)

$ErrorActionPreference = "Stop"

# Normaliza nombre (lowercase, sin espacios) pero preserva underscore inicial (para _demo-*)
$Nombre = $Nombre.ToLower() -replace '\s+', '-'
$Nombre = $Nombre -replace '[^a-z0-9\-_]', ''

$base = Split-Path -Parent $PSScriptRoot
$dir = Join-Path $base "clientes\$Nombre"

if (-not (Test-Path $dir)) {
    Write-Host "ERROR: No existe clientes\$Nombre" -ForegroundColor Red
    Write-Host ""
    Write-Host "Clientes disponibles:" -ForegroundColor Yellow
    Get-ChildItem -Directory (Join-Path $base "clientes") -ErrorAction SilentlyContinue |
        ForEach-Object { Write-Host "  - $($_.Name)" -ForegroundColor Gray }
    exit 1
}

Push-Location $dir
try {
    $nodeMods = Join-Path $dir "node_modules"
    if ((-not (Test-Path $nodeMods)) -and (-not $NoInstall)) {
        Write-Host "node_modules no existe. Instalando dependencias..." -ForegroundColor Cyan
        npm install
    } elseif ($NoInstall) {
        Write-Host "(saltando npm install por -NoInstall)" -ForegroundColor Gray
    }

    Write-Host ""
    Write-Host "Arrancando dev server en puerto $Port..." -ForegroundColor Green
    Write-Host "URL:  http://localhost:$Port" -ForegroundColor Yellow
    Write-Host "Cliente: $Nombre" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Tip: edita src\pages\index.astro y veras los cambios en vivo." -ForegroundColor Gray
    Write-Host "Para parar: Ctrl+C" -ForegroundColor Gray
    Write-Host ""

    npx astro dev --port $Port
}
finally {
    Pop-Location
}
