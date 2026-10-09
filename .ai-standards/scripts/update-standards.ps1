# Script de Atualizacao do Cache de Governanca (Self-Updater)
# Este script puxa a versao mais recente do repositorio central e sobrescreve o cache local.

Write-Host "Iniciando a atualizacao dos padroes de governanca (.ai-standards)..."

# URL do repositorio central
$StandardsUrl = "https://github.com/renatorlemos-gif/globo-agentic-framework.git"
$TempDir = ".ai-standards-temp"
$CacheDir = ".ai-standards"

# 1. Limpa sujeira previa se houver
if (Test-Path $TempDir) {
    Remove-Item -Recurse -Force $TempDir
}

# 2. Clona apenas a ultima versao (depth 1) do repositorio remoto
Write-Host "Baixando a versao mais recente de: $StandardsUrl"
git clone --depth 1 $StandardsUrl $TempDir

if (-Not (Test-Path $TempDir)) {
    Write-Error "Falha ao baixar os padroes. Verifique sua conexao ou permissoes do Git."
    exit 1
}

# 3. Remove a pasta .git para nao criar um submódulo no projeto atual
Write-Host "Limpando metadados do Git..."
Remove-Item -Recurse -Force (Join-Path $TempDir ".git") -ErrorAction SilentlyContinue

# 4. Substitui o cache local (.ai-standards)
if (Test-Path $CacheDir) {
    Write-Host "Removendo o cache antigo..."
    Remove-Item -Recurse -Force $CacheDir
}

Write-Host "Aplicando o novo cache..."
Rename-Item -Path $TempDir -NewName $CacheDir

# 5. Sobrescreve/Atualiza o AGENTS.md na raiz do projeto
Write-Host "Atualizando o manifesto AGENTS.md na raiz do projeto..."
Copy-Item -Path "$CacheDir\templates\project\AGENTS.md" -Destination ".\AGENTS.md" -Force

Write-Host "`nAtualizacao de Governanca concluida com sucesso! O projeto esta operando com os padroes mais recentes."
