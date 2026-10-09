param (
    [Parameter(Mandatory=$true, HelpMessage="Caminho do projeto alvo a ser inicializado")]
    [string]$TargetProject
)

$SourceRepo = $PSScriptRoot

if (-Not (Test-Path $TargetProject)) {
    Write-Host "Criando diretorio do projeto: $TargetProject"
    New-Item -ItemType Directory -Path $TargetProject | Out-Null
}

$AiStandardsDir = Join-Path $TargetProject ".ai-standards"

if (Test-Path $AiStandardsDir) {
    Write-Host "O projeto ja possui a pasta .ai-standards. Atualizando cache (Vendoring)..."
    Remove-Item -Recurse -Force $AiStandardsDir
}

Write-Host "Criando diretorio .ai-standards em $TargetProject"
New-Item -ItemType Directory -Path $AiStandardsDir | Out-Null

# Copia os dominios normativos para o cache do projeto
$FoldersToCopy = @("architecture", "design-system", "development", "devops", "documentation", "governance", "product", "security", "templates", "scripts")

foreach ($Folder in $FoldersToCopy) {
    $SourceFolder = Join-Path $SourceRepo $Folder
    if (Test-Path $SourceFolder) {
        Write-Host "Copiando $Folder..."
        Copy-Item -Path $SourceFolder -Destination $AiStandardsDir -Recurse -Force
    }
}

$AgentsTemplatePath = Join-Path $SourceRepo "templates\project\AGENTS.md"
$TargetAgentsPath = Join-Path $TargetProject "AGENTS.md"

if (Test-Path $AgentsTemplatePath) {
    if (-Not (Test-Path $TargetAgentsPath)) {
        Write-Host "Copiando AGENTS.md (Bootstrap) para a raiz do projeto..."
        Copy-Item -Path $AgentsTemplatePath -Destination $TargetAgentsPath -Force
    } else {
        Write-Host "AGENTS.md ja existe na raiz do projeto. Ele nao sera sobrescrito."
    }
}

Write-Host "`nProjeto inicializado com sucesso em $TargetProject!"
Write-Host "A governanca foi copiada para .ai-standards/ e o AGENTS.md foi validado na raiz."
Write-Host "Este projeto esta pronto para receber times agenticos (IoC)."
