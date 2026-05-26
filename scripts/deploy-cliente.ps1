# Deploy Cliente — npm install + build + deploy a Vercel
# Uso:   .\scripts\deploy-cliente.ps1 -Nombre "trattoria-mario"
# Asume: Vercel CLI instalado (npm i -g vercel) y sesión iniciada (vercel login)

param(
    [Parameter(Mandatory=$true)]
    [string]$Nombre,

    [switch]$Prod
)

$ErrorActionPreference = "Stop"

$Nombre = $Nombre.ToLower() -replace '\s+', '-' -replace '[^a-z0-9\-_]', ''
$base = Split-Path -Parent $PSScriptRoot
$dir = Join-Path $base "clientes\$Nombre"

if (-not (Test-Path $dir)) {
    Write-Host "ERROR: No existe clientes\$Nombre. Crealo primero con onboard-cliente.ps1" -ForegroundColor Red
    exit 1
}

Push-Location $dir
try {
    Write-Host "Instalando dependencias..." -ForegroundColor Cyan
    npm install

    Write-Host "Construyendo (npm run build)..." -ForegroundColor Cyan
    npm run build

    Write-Host "Verificando Vercel CLI..." -ForegroundColor Cyan
    $vercelCmd = Get-Command vercel -ErrorAction SilentlyContinue
    if (-not $vercelCmd) {
        Write-Host "Vercel CLI no instalado. Ejecuta: npm install -g vercel" -ForegroundColor Yellow
        Write-Host "Despues: vercel login" -ForegroundColor Yellow
        exit 1
    }

    if ($Prod) {
        Write-Host "Deploy PRODUCCION (vercel --prod)..." -ForegroundColor Green
        vercel --prod --yes
    } else {
        Write-Host "Deploy PREVIEW (vercel)..." -ForegroundColor Green
        Write-Host "Tip: Anade -Prod cuando este aprobado por el cliente" -ForegroundColor Gray
        vercel --yes
    }

    Write-Host ""
    Write-Host "OK." -ForegroundColor Green
    Write-Host "Si tiene dominio propio: configura DNS en Vercel apuntando al cliente." -ForegroundColor Cyan
} finally {
    Pop-Location
}
