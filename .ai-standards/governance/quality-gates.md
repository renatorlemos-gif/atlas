# Quality Gates Standard

## 1. Objetivo

Este documento consolida os mecanismos de controle de qualidade (Gates) definidos para o ciclo de vida do Product Delivery.

A aplicação estruturada dos Gates evita o repasse de incertezas e especificações imaturas para as etapas de desenvolvimento técnico.

## 2. Relação com os Standards

O detalhamento funcional e os critérios finos estão nos documentos padrão de cada etapa (Discovery, PRD, Requirements, User Stories). Este documento atua como o painel central de governança.

---

## 3. Matriz de Gates de Produto (Workspaces Locais)

### 3.1 Problem Understanding Gate (Fase: Discovery)

- **Critérios de Entrada:** Solicitação registrada, hipóteses preliminares.
- **Critérios de Validação (Saída):** Problema compreendido, público-alvo claro, objetivo mensurável, Discovery Document aprovado.
- **Responsável pela Aprovação:** Product Owner.
- **Condição de Reprovação:** Retornar ao solicitante se o problema não for justificado ou não estiver alinhado estrategicamente.
- **Caminho de Reprocessamento:** Ampliar ciclo de Discovery / User Research.

### 3.2 Requirements Readiness Gate (Fase: Requirements)

- **Critérios de Entrada:** Discovery finalizado, viabilidade inicial estabelecida.
- **Critérios de Validação (Saída):** Requisitos (RF, RNF) levantados, ambiguidades de negócio resolvidas, dependências mapeadas, conflitos regulatórios tratados.
- **Responsável pela Aprovação:** Product Owner.
- **Condição de Reprovação:** Faltam definições vitais, impossibilitando a compreensão técnica do sistema.
- **Caminho de Reprocessamento:** Nova sessão de detalhamento de regras com stakeholders.

### 3.3 Product Approval Gate (Fase: PRD)

- **Critérios de Entrada:** Requirements consolidados (PRD Draft) e Artefatos de Solution Definition concluídos (ADR e/ou UX-Journey, quando aplicável pela triagem).
- **Critérios de Validação (Saída):** Escopo bem definido no PRD, viabilidade técnica e usabilidade confirmadas pelos artefatos de Solução, critérios de sucesso aprovados. O PRD muda para `Approved`.
- **Responsável pela Aprovação:** Product Owner (com aval de Tech Lead/UX).
- **Condição de Reprovação:** PRD inconsistente com as restrições técnicas descobertas durante o Solution Definition, ou UX considerado inviável.
- **Caminho de Reprocessamento:** Revisão do escopo no documento de PRD (cortar features, negociar trade-offs) e nova validação arquitetural.

### 3.3.1 Feature Prioritization Gate (Fase: Feature Mapping)

- **Critérios de Entrada:** PRD Aprovado, lista preliminar de Features criada (Drafts com objetivo e escopo).
- **Critérios de Validação (Saída):** Lista de Features compreendida, prioridade de negócios estabelecida. O Humano seleciona explicitamente a(s) Feature(s) que avança(m) para a triagem.
- **Responsável pela Aprovação:** Product Owner humano.
- **Condição de Reprovação:** Escopo das features confuso, Features grandes demais não fatiadas, ausência de clareza de valor.
- **Caminho de Reprocessamento:** Revisão do mapeamento das Features.

### 3.3.2 Feature Definition Approval Gate (Fase: Feature Definition)

- **Critérios de Entrada:** Feature(s) aprovada(s) no Feature Prioritization Gate.
- **Critérios de Validação (Saída):** Features definidas com objetivo e escopo claros, triagem de UX realizada (quando aplicável), triagem de Arquitetura realizada (quando aplicável), pendências resolvidas ou registradas, prioridade entre Features definida, User Stories previstas identificadas, rastreabilidade com PRD estabelecida.
- **Responsável pela Aprovação:** Product Owner (com aval de Tech Lead/UX quando a triagem for aplicável).
- **Condição de Reprovação:** Feature com escopo indefinido, triagem pendente sem justificativa, ausência de priorização.
- **Caminho de Reprocessamento:** Revisão do escopo da Feature, conclusão da triagem pendente, ou retorno ao PRD quando necessário.

### 3.4 Ready for Development Gate (Fase: User Stories)

- **Critérios de Entrada:** Feature Definition aprovada, PRD Aprovado, User Stories elaboradas com Acceptance Criteria (AC).
- **Critérios de Validação (Saída):** História alinhada com a `governance/definition-of-ready.md`. Os critérios de aceite estão verificáveis. **O Humano (Usuário) aprovou o lote de User Stories gerado para esta Feature.**
- **Responsável pela Aprovação:** Humano (Parada Obrigatória 🛑). O Agente DEVE pausar e solicitar a aprovação explícita para iniciar o desenvolvimento da Feature.
- **Condição de Reprovação:** História demasiadamente grande, AC raso, ou o Humano rejeitou a abordagem de negócio.
- **Caminho de Reprocessamento:** Quebra (split) da User Story, refinamento dos ACs ou correção da lógica da História pelo PO.

### 3.5 Backlog Readiness Gate (Fase: Product Backlog)

- **Critérios de Entrada:** Múltiplas User Stories que passaram pelo Ready for Development.
- **Critérios de Validação (Saída):** Itens priorizados, ordenados e com rastreabilidade preenchida, aptos a comporem um ciclo de desenvolvimento (ex: Sprint).
- **Responsável pela Aprovação:** Product Owner.
- **Condição de Reprovação:** Ausência de foco (itens aleatórios ou não alinhados à meta de produto daquele ciclo).
- **Caminho de Reprocessamento:** Repriorização.

---

## 4. Quality Gates de Integração (Pull Requests)

Qualquer time conectado a este framework deve garantir que seu pipeline de integração (CI/Review) execute as seguintes validações (Quality Gates) no repositório remoto ("Git Remoto") antes de aprovar um PR. Esses gates podem ser automatizados por agentes especializados ou executados por revisores humanos.

### 4.1 Gate de Especificação (Spec Review)
- **Alvo:** PRs contendo documentação (PRD, US, Feature Definitions).
- **Critério de Validação:** Validação cruzada obrigatória. O artefato gerado deve ser consistente, rastreável e não contraditório em relação ao artefato de origem (ex: User Story x PRD).
- **Responsável:** Reviewer de Especificação (Humano ou Agente).

### 4.2 Gate de Segurança de Design (Sec Review)
- **Alvo:** PRs de documentação arquitetural e de produto.
- **Critério de Validação:** Identificação prematura de riscos arquiteturais, necessidade de autenticação/autorização e aderência aos Security Standards.
- **Responsável:** Especialista de Segurança (Humano ou Agente).

### 4.3 Gate de Code Review
- **Alvo:** PRs contendo código-fonte ("PR Build").
- **Critério de Validação:** O diff do código proposto deve ser **diretamente confrontado com a documentação Markdown (`.md`)** correspondente à demanda. O código deve cumprir os *Coding Standards* e refletir exatamente a especificação.
- **Responsável:** Reviewer de Código (Humano ou Agente).

### 4.4 Gate de Application Security (AppSec)
- **Alvo:** PRs contendo código-fonte e manifestos de infraestrutura.
- **Critério de Validação:** Verificação de vulnerabilidades estáticas (SAST), análise de dependências, secrets e configurações inseguras.
- **Responsável:** Ferramentas AppSec / Especialista de Segurança (Humano ou Agente).
