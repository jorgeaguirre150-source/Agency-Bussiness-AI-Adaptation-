# Lighthouse Check — Audita la web de un cliente antes de entregar
# Uso:   .\scripts\lighthouse-check.ps1 -Nombre "trattoria-mario"
# Hace:  build limpio + preview + Lighthouse desktop + Lighthouse mobile
#        Reporta puntuaciones críticas y abre los reports en navegador

param(
    [Parameter(Mandatory=$true)]
    [string]$Nombre,

    [int]$Port = 4321
)

$ErrorActionPreference = "Stop"

$Nombre = $Nombre.ToLower() -replace '\s+', '-' -replace '[^a-z0-9\-_]', ''
$base = Split-Path -Parent $PSScriptRoot
$dir = Join-Path $base "clientes\$Nombre"

if (-not (Test-Path $dir)) {
    Write-Host "ERROR: No existe clientes\$Nombre" -ForegroundColor Red
    exit 1
}

# Verifica lighthouse CLI
$lighthouseCmd = Get-Command lighthouse -ErrorAction SilentlyContinue
if (-not $lighthouseCmd) {
    Write-Host "Lighthouse CLI no instalado. Ejecuta:" -ForegroundColor Yellow
    Write-Host "  npm install -g lighthouse" -ForegroundColor Yellow
    exit 1
}

Push-Location $dir
$serverJob = $null

try {
    Write-Host "Build limpio..." -ForegroundColor Cyan
    npm run build

    Write-Host "Arrancando preview en puerto $Port..." -ForegroundColor Cyan
    $serverJob = Start-Job -ScriptBlock {
        param($dir, $port)
        Set-Location $dir
        npx astro preview --port $port
    } -ArgumentList $dir, $Port

    # Espera a que el servidor esté listo (max 30s)
    $maxWait = 30
    $waited = 0
    $ready = $false
    while ($waited -lt $maxWait) {
        try {
            $r = Invoke-WebRequest -Uri "http://localhost:$Port" -UseBasicParsing -TimeoutSec 2
            if ($r.StatusCode -eq 200) { $ready = $true; break }
        } catch {}
        Start-Sleep -Seconds 2
        $waited += 2
    }

    if (-not $ready) {
        Write-Host "ERROR: Preview no respondio en $maxWait segundos." -ForegroundColor Red
        exit 1
    }

    # Output dir para los reports
    $reportsDir = Join-Path $dir "lighthouse-reports"
    New-Item -ItemType Directory -Force -Path $reportsDir | Out-Null

    $stamp = Get-Date -Format "yyyyMMdd-HHmm"
    $mobileReport  = Join-Path $reportsDir "$stamp-mobile.html"
    $desktopReport = Join-Path $reportsDir "$stamp-desktop.html"
    $mobileJson    = Join-Path $reportsDir "$stamp-mobile.json"

    Write-Host ""
    Write-Host "Lighthouse MOBILE..." -ForegroundColor Cyan
    lighthouse "http://localhost:$Port" `
        --output html,json `
        --output-path $mobileReport.Replace('.html','') `
        --form-factor mobile `
        --throttling.cpuSlowdownMultiplier 4 `
        --quiet `
        --chrome-flags="--headless"

    Write-Host ""
    Write-Host "Lighthouse DESKTOP..." -ForegroundColor Cyan
    lighthouse "http://localhost:$Port" `
        --output html `
        --output-path $desktopReport `
        --preset desktop `
        --quiet `
        --chrome-flags="--headless"

    # Parsear JSON para extraer scores
    if (Test-Path $mobileJson) {
        $report = Get-Content $mobileJson | ConvertFrom-Json
        $perf = [math]::Round($report.categories.performance.score * 100)
        $a11y = [math]::Round($report.categories.accessibility.score * 100)
        $bp   = [math]::Round($report.categories.'best-practices'.score * 100)
        $seo  = [math]::Round($report.categories.seo.score * 100)

        Write-Host ""
        Write-Host "RESULTADOS MOBILE (objetivos: 90+ en todos)" -ForegroundColor Yellow
        Write-Host ""
        $marker = if ($perf -ge 90) { "[OK]" } else { "[!!]" }
        Write-Host "  $marker Performance:   $perf"
        $marker = if ($a11y -ge 90) { "[OK]" } else { "[!!]" }
        Write-Host "  $marker Accessibility: $a11y"
        $marker = if ($bp -ge 90) { "[OK]" } else { "[!!]" }
        Write-Host "  $marker Best practices: $bp"
        $marker = if ($seo -ge 95) { "[OK]" } else { "[!!]" }
        Write-Host "  $marker SEO:           $seo (objetivo 95+)"

        $failing = @()
        if ($perf -lt 90)  { $failing += "Performance" }
        if ($a11y -lt 90)  { $failing += "Accessibility" }
        if ($bp -lt 90)    { $failing += "Best practices" }
        if ($seo -lt 95)   { $failing += "SEO" }

        Write-Host ""
        if ($failing.Count -eq 0) {
            Write-Host "TODO OK. Web lista para entrega." -ForegroundColor Green
            Write-Host "Siguiente: chequear visual + completar 01-producto/checklist-entrega.md" -ForegroundColor Gray
        } else {
            Write-Host "BLOQUEANTES: $($failing -join ', ')" -ForegroundColor Red
            Write-Host "No entregar hasta resolver. Abre el report mobile para diagnosticar." -ForegroundColor Yellow
        }
    }

    Write-Host ""
    Write-Host "Reports guardados en: $reportsDir" -ForegroundColor Cyan
    Write-Host "Abriendo report mobile..." -ForegroundColor Gray
    Start-Process $mobileReport
}
finally {
    if ($serverJob) {
        Stop-Job $serverJob -ErrorAction SilentlyContinue
        Remove-Job $serverJob -Force -ErrorAction SilentlyContinue
    }
    Pop-Location
}
