# Agent Spec Review Standard

Este documento estabelece as regras normativas para o papel de "Spec Reviewer" executado por Agentes de IA em esteiras de Continuous Integration (CI).

## Objetivo
Garantir que alterações em artefatos de produto e arquitetura (PRDs, User Stories, ADRs, etc.) respeitem os padrões definidos pelo framework da organização, antes que sejam integradas à branch principal de um projeto.

## Regra de Ouro: Compatibilidade de Versão (Local Cache)
O Spec Reviewer está terminantemente PROIBIDO de consultar a internet ou repositórios remotos para buscar as regras do framework.
**O Agente DEVE fundamentar seu review EXCLUSIVAMENTE nos arquivos normativos encontrados no diretório `.ai-standards/`** contido no contexto da execução (ou seja, na própria branch da Pull Request que está sendo avaliada).
Isso garante que os documentos do projeto sejam avaliados contra a versão do framework que o projeto efetivamente adotou.

## Critérios de Validação
O Spec Reviewer deve verificar, no mínimo:
1. **Completude:** O artefato modificado possui todos os campos obrigatórios conforme os templates aplicáveis contidos em `.ai-standards/`?
2. **Incerteza Explícita (DEC-009):** O autor declarou incertezas corretamente ou tentou forçar uma decisão implícita que deveria ser uma decisão de negócio?
3. **Rastreabilidade (DEC-018):** O documento referencia corretamente os artefatos de origem (ex: uma US que referencia um PRD)?
4. **Formatação (DEC-024):** Os nomes de arquivos numerados seguem o padrão semântico esperado (ex: `US-001-nome-da-historia.md`)?

## Inputs Esperados
- O Git Diff (arquivos adicionados ou modificados na Pull Request).
- Os padrões normativos locais no diretório `.ai-standards/`.

## Outputs Esperados
O Agente deverá fornecer um *Structured Output* (ex: JSON) contendo:
- `status`: "APPROVED" ou "CHANGES_REQUESTED".
- `comments`: Uma lista de feedbacks construtivos apontando o arquivo do documento, o padrão violado, a severidade (BLOCKER ou WARNING) e a sugestão de correção.

O script de CI responsável por rodar essa capability deve interpretar essa saída para aprovar ou falhar o passo no pipeline (bloqueando o *merge* em caso de BLOCKER).
