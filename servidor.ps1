# Servidor local simples para usar o app no computador (http://localhost:8080).
# Não é usado no tablet.
param([switch]$NoBrowser)
$Root = $PSScriptRoot
$Port = 8080
$types = @{ '.html'='text/html; charset=utf-8'; '.js'='text/javascript; charset=utf-8'; '.png'='image/png'; '.webmanifest'='application/manifest+json'; '.json'='application/json' }
$l = New-Object System.Net.HttpListener
$l.Prefixes.Add("http://localhost:$Port/")
try { $l.Start() } catch { Write-Host "O app ja esta aberto (porta $Port em uso)."; Start-Process "http://localhost:$Port/"; exit }
Write-Host ""
Write-Host "  HQ rodando em http://localhost:$Port/"
Write-Host "  Deixe esta janela aberta enquanto usa o app. Feche para desligar."
Write-Host ""
if (-not $NoBrowser) { Start-Process "http://localhost:$Port/" }
while ($l.IsListening) {
  $c = $l.GetContext()
  $p = [Uri]::UnescapeDataString($c.Request.Url.AbsolutePath).TrimStart('/')
  if ($p -eq '') { $p = 'index.html' }
  $f = Join-Path $Root $p
  if ((Test-Path $f -PathType Leaf) -and ([IO.Path]::GetFullPath($f)).StartsWith($Root)) {
    $bytes = [IO.File]::ReadAllBytes($f)
    $ext = [IO.Path]::GetExtension($f)
    $c.Response.ContentType = $(if ($types[$ext]) { $types[$ext] } else { 'application/octet-stream' })
    $c.Response.Headers.Add('Cache-Control', 'no-cache')
    $c.Response.OutputStream.Write($bytes, 0, $bytes.Length)
  } else { $c.Response.StatusCode = 404 }
  $c.Response.Close()
}
