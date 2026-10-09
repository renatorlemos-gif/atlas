# Changelog

Todas as mudanças notáveis deste projeto serão documentadas neste arquivo.
O formato é baseado no [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/), e este projeto adere ao [Semantic Versioning](https://semver.org/).

## [0.2.0] - 2026-10-02

### Added
- **Solution Definition Phase:** Expansão do framework para cobrir a fase iterativa de desenho da solução (UX e Arquitetura) entre o PRD e as User Stories.
- **Novas Capacidades:** Inclusão dos papéis de Tech Lead/Solution Architect e UX/Product Designer no documento de `roles-and-responsibilities.md`.
- **Novos Templates:** Criação dos artefatos `templates/architecture/ADR.md` e `templates/ux/USER-JOURNEY.md`.
- **Triage (Avaliação de Impacto):** Adição de *checkboxes* condicionais no template do `PRD.md` para criar uma "pista expressa" em demandas que não impactam UX ou Arquitetura, evitando burocracia desnecessária.
- Atualização do `AGENT_BOOTSTRAP.md` instruindo agentes sobre o workflow de PRD (Draft -> Triage -> Solution Def -> Approved).

## [0.1.3] - 2026-09-30

### Added
- **Agent-Native Capability:** Criação do `AGENT_BOOTSTRAP.md`. Um arquivo desenhado para ser injetado como *System Prompt* em agentes de IA externos (LangChain, CrewAI, Antigravity), tornando o framework 100% plug-and-play para adoção por robôs.

## [0.1.2] - 2026-09-30

### Fixed
- **DUP-001/003:** Remoção da duplicação massiva das seções "Documentation-as-Code" e "Idioma e Convenções" de todos os 9 artefatos de produto, substituídas por uma única referência centralizada.

### Added
- Criação do documento `documentation/documentation-as-code-standard.md` estabelecendo as regras globais de formato, versionamento e idioma do framework.
- Criação do documento `governance/definition-of-done.md` consolidando os critérios de conclusão de entrega pela ótica de Produto.

### Removed
- Exclusão do diretório redundante `ai-agents/`. Regras de engajamento da IA permanecem no `AGENTS.md` raiz, e as capacidades foram movidas para `roles-and-responsibilities.md` (conforme DEC-023).

## [0.1.1] - 2026-09-30

### Fixed
- **INC-001/005:** Alinhamento do fluxo do Lifecycle (inserção formal da etapa de Acceptance Criteria).
- **INC-002:** Inclusão formal do gate "Acceptance Criteria Ready" na tabela de governança.
- **AGT-001 a 004 (DEC-023):** Desacoplamento de agentes específicos (Requirements Agent, Product Owner Agent) dos manuais, substituídos por capacidades de apoio agêntico unificadas.

### Added
- **GAP-001:** Criação dos arquivos `governance/definition-of-ready.md` e `governance/exceptions.md` para fechar referências quebradas.
- **GAP-009:** Criação do painel centralizado `governance/quality-gates.md`.
- **GAP-002 a 006:** Criação e popularização da pasta `templates/product/` com os modelos base extraídos dos standards.
- **DUP-002:** Criação de `governance/roles-and-responsibilities.md` para centralizar as atribuições de papéis humanos (PO, Product Analyst) e capacidades de IA, eliminando duplicações nos 9 documentos de produto.
- Atualização do processo de aprovação e evolução no `CONTRIBUTING.md`.

## [0.1.0]
- Initial repository structure e lançamento da primeira onda de standards de Product Delivery.
