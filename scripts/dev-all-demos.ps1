# Dev All Demos — arranca las 3 demos a la vez en puertos distintos
# Uso:   .\scripts\dev-all-demos.ps1
#
# Hace: instala dependencias en cada demo (si falta), arranca las 3 como jobs background
#       en localhost:4321 (italiano), :4322 (asador), :4323 (brunch).
#       Espera hasta que pulses una tecla, luego mata todos los procesos.
#
# Util para: comparar las 3 estéticas en paralelo, hacer screenshots para tus posts iniciales,
#            decidir cuál demo mandar a cada prospecto segun sub-nicho.

$ErrorActionPreference = "Stop"

$base = Split-Path -Parent $PSScriptRoot
$demos = @(
    @{ Nombre = "_demo-trattoria-mario";      Port = 4321; Subnicho = "italiano" },
    @{ Nombre = "_demo-asador-elbrasa";       Port = 4322; Subnicho = "asador"   },
    @{ Nombre = "_demo-brunch-veredillascoffee"; Port = 4323; Subnicho = "brunch"   }
)

# 1) Verificar que las 3 demos existen
$missing = @()
foreach ($d in $demos) {
    $dir = Join-Path $base "clientes\$($d.Nombre)"
    if (-not (Test-Path $dir)) { $missing += $d.Nombre }
}
if ($missing.Count -gt 0) {
    Write-Host "ERROR: Faltan demos: $($missing -join ', ')" -ForegroundColor Red
    exit 1
}

# 2) Instalar node_modules si falta en alguna
foreach ($d in $demos) {
    $dir = Join-Path $base "clientes\$($d.Nombre)"
    $nm = Join-Path $dir "node_modules"
    if (-not (Test-Path $nm)) {
        Write-Host "Instalando dependencias en $($d.Nombre)..." -ForegroundColor Cyan
        Push-Location $dir
        try { npm install } finally { Pop-Location }
    }
}

# 3) Arrancar las 3 como jobs en background
$jobs = @()
foreach ($d in $demos) {
    $dir = Join-Path $base "clientes\$($d.Nombre)"
    $port = $d.Port
    $name = "dev-$($d.Subnicho)"

    Write-Host "Arrancando $($d.Subnicho) en puerto $port..." -ForegroundColor Green

    $job = Start-Job -Name $name -ScriptBlock {
        param($dir, $port)
        Set-Location $dir
        npx astro dev --port $port --host
    } -ArgumentList $dir, $port

    $jobs += $job
}

# 4) Espera unos segundos a que arranquen
Start-Sleep -Seconds 4

Write-Host ""
Write-Host "==============================================" -ForegroundColor Yellow
Write-Host " 3 DEMOS CORRIENDO EN LOCAL" -ForegroundColor Yellow
Write-Host "==============================================" -ForegroundColor Yellow
Write-Host ""
foreach ($d in $demos) {
    Write-Host (" {0,-10}  http://localhost:{1}" -f $d.Subnicho.ToUpper(), $d.Port) -ForegroundColor Cyan
}
Write-Host ""
Write-Host "Comparalas lado a lado en tabs distintas del navegador." -ForegroundColor Gray
Write-Host "Pulsa cualquier tecla para parar las 3..." -ForegroundColor Yellow
Write-Host ""

# 5) Esperar input para terminar
try {
    [void][System.Console]::ReadKey($true)
}
finally {
    Write-Host ""
    Write-Host "Parando demos..." -ForegroundColor Yellow
    foreach ($job in $jobs) {
        Stop-Job $job -ErrorAction SilentlyContinue
        Remove-Job $job -Force -ErrorAction SilentlyContinue
    }
    # Por si quedó algún astro/node colgado
    Get-Process -Name node -ErrorAction SilentlyContinue |
        Where-Object { $_.CommandLine -match "astro" } |
        Stop-Process -Force -ErrorAction SilentlyContinue
    Write-Host "OK." -ForegroundColor Green
}
