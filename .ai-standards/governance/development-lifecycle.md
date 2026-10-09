# Ciclo de Vida de Entrega de Produto

## 1. Objetivo

Definir o ciclo de vida de entrega de produto para projetos que adotam o
Software Delivery Standards.

Este ciclo de vida define como o conhecimento sobre um produto é
progressivamente transformado em artefatos versionados, revisáveis e
rastreáveis, utilizando uma abordagem de Documentation-as-Code.

O ciclo de vida definido neste documento está limitado à definição do
produto e à preparação do backlog para desenvolvimento.

Este documento contempla:

- Discovery;
- requisitos;
- definição do produto;
- Product Requirements Document (PRD);
- Feature Definitions;
- User Stories;
- Acceptance Criteria;
- preparação do Product Backlog;
- versionamento dos artefatos de produto;
- rastreabilidade entre artefatos;
- revisão e aprovação dos artefatos;
- participação de agentes de IA na documentação de produto.

Atividades de implementação técnica e entrega de software estão fora do
escopo desta versão.

---

## 2. Escopo

### 2.1 Dentro do Escopo

- Discovery;
- levantamento e análise de requisitos;
- requisitos funcionais;
- requisitos não funcionais;
- regras de negócio;
- definição do produto;
- Feature Definitions;
- PRD;
- User Stories;
- Acceptance Criteria;
- Product Backlog;
- rastreabilidade entre artefatos;
- revisão de documentação;
- aprovação de produto;
- preparação para desenvolvimento;
- documentação como código;
- versionamento dos artefatos;
- participação de agentes na documentação de produto.

### 2.2 Fora do Escopo

- arquitetura de software;
- desenho técnico;
- desenvolvimento de software;
- implementação de testes;
- revisão de código;
- CI/CD;
- infraestrutura;
- implantação;
- operação;
- observabilidade;
- suporte em produção.

Esses temas serão tratados em padrões específicos de implementação e
entrega técnica.

---

## 3. Fluxo de Entrega de Produto

O fluxo principal de definição do produto é:

    Discovery
        ↓
    Requirements
        ↓
    PRD (Draft)
        ↓
    Solution Definition (Arquitetura & UX) *Condicional Macro
        ↓
    PRD (Approved)
        ↓
    Feature Mapping (Abertura dos Drafts)
        ↓
    Feature Prioritization Gate 🛑
        ↓
    Feature Triage (UX & Arch) — SOMENTE Feature Aprovada no Gate
        ↓
    Feature Definition Approval Gate 🛑
        ↓
    User Stories (Draft) — SOMENTE da Feature Aprovada
        ↓
    Acceptance Criteria
        ↓
    Ready for Development Gate 🛑 (Aprovação das US)
        ↓
    Desenvolvimento da Feature
        ↓
    Product Backlog Readiness

O fluxo é iterativo (Dual-Track Agile) e não deve ser interpretado como um processo
estritamente linear.

Durante uma etapa, novas informações podem revelar ambiguidades,
dependências ou mudanças de escopo que exijam a revisão de uma etapa
anterior.

Exemplo:

    User Story
        ↓
    Ambiguidade identificada
        ↓
    Revisão de Requirements
        ↓
    Atualização do PRD
        ↓
    Atualização da User Story

Nenhum agente deve resolver silenciosamente uma decisão de negócio
relevante apenas para permitir o avanço do fluxo.

---

## 4. Princípios do Ciclo de Vida

### 4.1 Documentation-as-Code

Os artefatos de produto devem ser mantidos como arquivos versionados
dentro do repositório do projeto.

O repositório é a fonte oficial dos artefatos de produto do projeto.

Os artefatos devem:

- ser versionados pelo Git;
- possuir histórico de alterações;
- ser revisáveis;
- ser rastreáveis;
- utilizar os padrões definidos pelo repositório central;
- permanecer associados ao contexto do projeto.

### 4.2 Separação entre Padrões e Artefatos do Projeto

O repositório central define como os artefatos devem ser produzidos.

O repositório do projeto contém o que foi produzido para aquele projeto.

Exemplo:

    Repositório central

    templates/product/prd.md

    Repositório do projeto

    docs/product/prd.md

O projeto não deve copiar toda a estrutura do repositório central.

Templates e padrões permanecem centralizados.

Os projetos mantêm apenas os artefatos concretos produzidos para seu
contexto.

### 4.3 Responsabilidade Humana

Agentes podem:

- criar artefatos;
- analisar informações;
- transformar informações entre artefatos;
- identificar inconsistências;
- identificar ambiguidades;
- propor alternativas;
- validar estrutura;
- verificar rastreabilidade;
- analisar impacto de mudanças.

Entretanto, decisões de produto e suas respectivas aprovações permanecem
sob responsabilidade humana.

Agentes não devem aprovar autonomamente decisões de negócio.

### 4.4 Rastreabilidade

Os artefatos devem manter rastreabilidade ao longo do ciclo:

    Discovery
        ↓
    Requirements
        ↓
    PRD
        ↓
    Feature Definitions
        ↓
    User Stories
        ↓
    Acceptance Criteria

Quando aplicável, uma informação presente em um artefato deve permitir
identificar sua origem e os artefatos derivados que foram afetados por
ela.

### 4.5 Incertezas Explícitas

Ambiguidades, dúvidas, premissas e informações ausentes devem ser
explicitamente registradas.

Um agente não deve inventar uma decisão de negócio para preencher uma
lacuna.

Quando uma decisão for necessária, a questão deve permanecer registrada
como pendência até que seja resolvida pelo responsável apropriado.

### 4.6 Elaboração Incremental

A quantidade de detalhes esperada aumenta ao longo do ciclo de vida.

Discovery deve estabelecer o entendimento do problema.

Requirements deve explicitar as necessidades e regras conhecidas.

O PRD consolida a definição do produto.

User Stories transformam essa definição em unidades de trabalho
compreensíveis e verificáveis.

O Product Backlog organiza o trabalho preparado para as próximas etapas.

Não é necessário conhecer todos os detalhes do produto nas primeiras
etapas.

### 4.7 Reprocessamento e Impacto

Alterações em um artefato podem exigir a revisão de artefatos
posteriores.

Sempre que uma alteração relevante ocorrer, deve-se avaliar:

- quais artefatos são afetados;
- quais decisões podem ter sido alteradas;
- quais requisitos precisam ser revisados;
- quais User Stories precisam ser atualizadas;
- quais Acceptance Criteria precisam ser revisados.

### 4.8 Topologia de Workspaces e Integração

O ciclo de vida é estruturado para garantir rastreabilidade, isolamento e validação contínua. Independentemente da composição da equipe (humanos, agentes ou times híbridos), a topologia de trabalho segue o seguinte padrão:

1. **Workspaces Locais e Assistência:** O trabalho de ideação (Produto/Design) e codificação (Desenvolvimento/Testes) ocorre em Workspaces Locais. Durante esta fase, assistentes (sejam humanos ou agentes) atuam como geradores de conteúdo. O Workspace Local é um ambiente de draft e construção, sem peso de decisão oficial.
2. **Integração via Pull Requests (PRs):** A submissão do trabalho para o repositório remoto ("Git Remoto") ocorre exclusivamente via Pull Requests. O PR atua como a fronteira de integração, separando o trabalho local não-validado do baseline oficial do projeto. É durante o PR que ocorrem as validações obrigatórias (Quality Gates de Integração).

---

## 5. Etapas do Ciclo de Vida

## 5.1 Discovery

### Objetivo

Construir entendimento suficiente sobre o problema, oportunidade,
contexto e resultado esperado antes da definição detalhada dos
requisitos.

### Critérios de Entrada

A etapa pode ser iniciada quando existir pelo menos um dos seguintes
elementos:

- problema de negócio;
- oportunidade;
- necessidade de usuário;
- solicitação de stakeholder;
- hipótese de produto;
- problema identificado em produto existente;
- necessidade de melhoria.

### Entradas

Podem incluir:

- contexto de negócio;
- objetivos estratégicos;
- feedback de usuários;
- dados existentes;
- informações operacionais;
- pesquisas anteriores;
- documentação existente;
- hipóteses;
- restrições conhecidas.

### Atividades

- compreender o problema;
- identificar usuários e stakeholders;
- entender o contexto;
- definir o problema a ser tratado;
- identificar objetivos;
- identificar resultados esperados;
- registrar hipóteses;
- identificar restrições;
- identificar riscos conhecidos;
- identificar perguntas em aberto.

### Artefatos

Principal artefato:

- Discovery Document.

Podem ser utilizados, quando necessários:

- hipóteses;
- perguntas em aberto;
- registros de pesquisa;
- mapas de stakeholders;
- evidências utilizadas na descoberta.

### Responsável

Product Owner ou Product Analyst.

### Agentes de Apoio

Requirements Agent.

### Gate

Problem Understanding Gate.

### Critérios de Saída

A etapa pode ser concluída quando:

- o problema está suficientemente compreendido;
- o contexto relevante foi registrado;
- usuários ou públicos afetados foram identificados;
- o resultado esperado está definido em nível suficiente;
- principais restrições conhecidas estão registradas;
- questões críticas estão identificadas.

Questões não críticas podem permanecer abertas para as etapas seguintes.

### Padrões Aplicáveis

- Discovery Standard;
- Requirements Standard, quando aplicável.

### Feedback e Reprocessamento

Novas informações descobertas durante Requirements ou PRD podem exigir
a revisão do Discovery.

---

## 5.2 Requirements

### Objetivo

Transformar o entendimento obtido durante Discovery em requisitos
explícitos, verificáveis e rastreáveis.

### Critérios de Entrada

- Discovery concluído em nível suficiente;
- problema e objetivo conhecidos;
- contexto disponível para levantamento dos requisitos.

### Entradas

- Discovery;
- documentação existente;
- informações de stakeholders;
- regras de negócio conhecidas;
- restrições;
- dados e evidências disponíveis.

### Atividades

- identificar requisitos funcionais;
- identificar requisitos não funcionais;
- identificar regras de negócio;
- identificar restrições;
- identificar dependências;
- identificar ambiguidades;
- identificar perguntas em aberto;
- validar consistência entre requisitos;
- estabelecer rastreabilidade com Discovery.

### Artefatos

Podem incluir:

- Functional Requirements;
- Non-Functional Requirements;
- Business Rules;
- Open Questions;
- Dependencies.

### Responsável

Product Owner ou Product Analyst.

### Agentes de Apoio

Requirements Agent.

### Gate

Requirements Readiness Gate.

### Critérios de Saída

Os requisitos estão suficientemente definidos para suportar a
elaboração do PRD quando:

- requisitos relevantes foram identificados;
- requisitos possuem clareza suficiente;
- regras de negócio relevantes estão registradas;
- dependências conhecidas estão identificadas;
- ambiguidades críticas foram resolvidas ou explicitamente registradas;
- requisitos possuem rastreabilidade com o contexto que os originou.

### Padrões Aplicáveis

- Requirements Standard;
- Functional Requirements;
- Non-Functional Requirements.

### Feedback e Reprocessamento

Informações identificadas durante o PRD podem exigir revisão dos
requisitos.

---

## 5.3 Product Requirements Document

### Objetivo

Consolidar o entendimento do problema e os requisitos em uma definição
coerente do produto, estabelecendo o escopo e o comportamento esperado.

### Critérios de Entrada

- Discovery disponível;
- Requirements suficientemente definidos;
- principais ambiguidades críticas resolvidas ou explicitamente
  registradas.

### Entradas

- Discovery;
- Requirements;
- regras de negócio;
- restrições;
- dependências;
- informações de stakeholders.

### Atividades

- consolidar o contexto do produto;
- definir objetivo;
- definir escopo;
- definir usuários e casos de uso;
- descrever comportamento esperado;
- consolidar regras de negócio;
- definir critérios de sucesso;
- registrar métricas relevantes;
- registrar dependências;
- registrar riscos;
- registrar itens fora do escopo.

### Artefato

- Product Requirements Document (PRD).

### Responsável

Product Owner.

### Agentes de Apoio

Product Owner Agent.

### Gate

Product Approval Gate.

### Critérios de Saída

O PRD pode ser considerado aprovado quando:

- objetivo do produto está definido;
- problema está contextualizado;
- escopo está definido;
- comportamento esperado está suficientemente descrito;
- regras de negócio relevantes estão consolidadas;
- critérios de sucesso estão definidos quando aplicáveis;
- dependências e riscos relevantes estão registrados;
- itens fora do escopo estão identificados;
- rastreabilidade com os requisitos está preservada;
- Product Owner aprovou a definição do produto.

### Padrões Aplicáveis

- PRD Standard.

### Feedback e Reprocessamento

Mudanças relevantes em requisitos devem resultar em avaliação de impacto
sobre o PRD.

---

## 5.3.1 Feature Definition

### Objetivo

Decompor o PRD aprovado em Features — capacidades de produto coerentes
que agrupam User Stories relacionadas — e realizar a triagem de UX e
Arquitetura no nível de Feature.

### Critérios de Entrada

- PRD aprovado (Product Approval Gate concluído);
- capacidades do produto identificadas no PRD;
- contexto suficiente para descrever as Features.

### Entradas

- PRD;
- Requirements;
- artefatos de Solution Definition (ADRs, User Journeys), quando existentes.

### Atividades

- identificar Features a partir das capacidades do PRD;
- descrever objetivo e escopo de cada Feature;
- realizar triagem de UX apenas da Feature priorizada;
- realizar triagem de Arquitetura por Feature;
- definir prioridade entre Features;
- identificar User Stories previstas;
- identificar dependências entre Features;
- manter rastreabilidade com o PRD.

### Artefatos

- Feature Definitions.

### Responsável

Product Owner.

### Agentes de Apoio

Product Owner Agent.

### Gates

Feature Prioritization Gate (antes da triagem) e Feature Definition Approval Gate (após triagem).

### Critérios de Saída

A etapa pode ser concluída quando:

- Features foram identificadas e descritas;
- triagem de UX foi realizada quando aplicável;
- triagem de Arquitetura foi realizada quando aplicável;
- pendências da triagem foram resolvidas ou registradas;
- prioridade entre Features está definida;
- User Stories previstas estão identificadas;
- rastreabilidade com o PRD está estabelecida.

### Padrões Aplicáveis

- Feature Definition Standard.

### Feedback e Reprocessamento

Informações identificadas durante a definição de Features podem exigir
revisão do PRD.

---

## 5.4 User Stories

### Objetivo

Decompor a definição aprovada do produto em unidades de trabalho que
possam ser compreendidas, discutidas e posteriormente implementadas e
verificadas.

### Critérios de Entrada

- Feature Definition aprovada;
- PRD aprovado;
- requisitos relevantes disponíveis;
- contexto necessário para decomposição disponível.

### Entradas

- PRD;
- Requirements;
- regras de negócio;
- dependências;
- restrições.

### Atividades

- identificar unidades de valor;
- decompor funcionalidades;
- escrever User Stories;
- verificar necessidade de refinamento residual de UX/Arquitetura (quando não coberto pela triagem da Feature);
- definir contexto suficiente para cada história;
- definir Acceptance Criteria;
- identificar dependências;
- registrar premissas;
- identificar questões em aberto;
- manter rastreabilidade com o PRD e requisitos.

### Artefatos

- User Stories;
- Acceptance Criteria;
- informações de dependências;
- questões em aberto, quando aplicável.

### Responsável

Product Owner.

### Agentes de Apoio

Product Owner Agent.

### Gate

Ready for Development Gate.

### Critérios de Saída

Uma User Story pode ser considerada pronta quando:

- possui objetivo claro;
- representa uma unidade de valor compreensível;
- possui escopo definido;
- possui Acceptance Criteria verificáveis;
- dependências relevantes estão identificadas;
- ambiguidades críticas foram resolvidas;
- rastreabilidade com o PRD ou requisito de origem está disponível.

### Padrões Aplicáveis

- User Story Standard;
- Acceptance Criteria.

### Feedback e Reprocessamento

Durante o refinamento das User Stories, podem ser identificadas
necessidades de alteração no PRD ou nos Requirements.

Nesse caso, os artefatos de origem devem ser revisados antes da
continuidade.

---

## 5.5 Product Backlog Readiness

### Objetivo

Garantir que o Product Backlog contenha trabalho suficientemente
definido para permitir o avanço para as próximas etapas do ciclo de
entrega.

### Critérios de Entrada

- User Stories criadas;
- Acceptance Criteria definidos;
- rastreabilidade disponível;
- dependências conhecidas identificadas.

### Entradas

- User Stories;
- Acceptance Criteria;
- PRD;
- Requirements;
- dependências;
- informações de priorização, quando aplicável.

### Atividades

- validar completude das histórias;
- validar Acceptance Criteria;
- validar dependências;
- verificar rastreabilidade;
- identificar informações ausentes;
- identificar necessidade de refinamento;
- organizar o backlog;
- aplicar priorização quando essa atividade fizer parte do contexto
  do projeto.

### Artefatos

- Product Backlog;
- User Stories;
- Acceptance Criteria;
- informações de dependências;
- informações de priorização, quando aplicável.

### Responsável

Product Owner.

### Agentes de Apoio

Product Owner Agent.

### Gate

Backlog Readiness Gate.

### Critérios de Saída

O backlog está preparado quando:

- as histórias selecionadas atendem à Definition of Ready;
- Acceptance Criteria estão definidos;
- dependências relevantes estão identificadas;
- rastreabilidade está preservada;
- informações críticas estão disponíveis;
- pendências que impedem o avanço estão identificadas;
- a priorização está definida quando aplicável.

### Padrões Aplicáveis

- Backlog Management;
- Definition of Ready;
- User Story Standard;
- Acceptance Criteria.

### Feedback e Reprocessamento

O refinamento do backlog pode revelar problemas em User Stories,
Requirements ou PRD.

Quando isso ocorrer, o fluxo deve retornar ao artefato de origem
afetado.

---

## 6. Relacionamento entre Artefatos

Os principais artefatos de produto devem manter o seguinte
relacionamento:

    Discovery
        ↓
    Requirements
        ↓
    PRD
        ↓
    Feature Definitions
        ↓
    User Stories
        ↓
    Acceptance Criteria
        ↓
    Product Backlog

A relação não representa necessariamente uma relação de um-para-um.

Um requisito pode originar várias User Stories.

Uma User Story pode estar relacionada a mais de um requisito.

Um PRD pode consolidar diversos requisitos.

Um PRD pode originar várias Feature Definitions. Uma Feature pode conter várias User Stories.

O mecanismo de rastreabilidade deve permitir identificar essas relações
quando forem relevantes para o projeto.

---

## 7. Papéis e Capacidades

As responsabilidades dos papéis humanos (Product Owner, Product Analyst) e as capacidades de apoio agêntico em todas as etapas deste ciclo de vida estão centralizadas em:

- `governance/roles-and-responsibilities.md`

Os agentes atuam como aceleradores e validadores analíticos, mas não possuem autonomia para decisões de produto, escolha de escopo ou aprovação formal nos gates. O framework define capacidades esperadas, não uma arquitetura imutável de agentes nomeados.

---

## 8. Gates de Produto

O ciclo de vida possui os seguintes gates:

| Gate | Objetivo |
|---|---|
| Problem Understanding Gate | Garantir entendimento suficiente do problema |
| Requirements Readiness Gate | Garantir requisitos suficientemente definidos |
| Product Approval Gate | Formalizar aprovação da definição do produto |
| Feature Prioritization Gate | Aprovar o mapeamento inicial, priorizar e liberar apenas a Feature da vez para a Triagem de UX/Arch |
| Feature Definition Approval Gate | Garantir que as Features estão suficientemente definidas e triadas para desdobramento em User Stories |
| Ready for Development Gate | Garantir que as User Stories estão suficientemente preparadas |
| Acceptance Criteria Ready | (Sub-gate) Garantir que os critérios de aceitação da User Story estão claros e verificáveis |
| Backlog Readiness Gate | Garantir que o backlog está preparado para o próximo estágio |

Cada gate deve definir:

- critérios de entrada;
- critérios de validação;
- responsável;
- resultado esperado;
- condições de reprovação;
- caminho de reprocessamento.

---

## 9. Documentation-as-Code

Os artefatos de produto devem:

- ser armazenados no repositório do projeto;
- utilizar Markdown sempre que aplicável;
- ser versionados pelo Git;
- possuir histórico de alterações;
- ser revisáveis;
- utilizar os templates e padrões aplicáveis;
- manter rastreabilidade;
- preservar decisões relevantes por meio do histórico do repositório.

Os templates e padrões devem permanecer no repositório central.

Os projetos devem manter as instâncias concretas dos artefatos.

---

## 10. Alterações e Análise de Impacto

Quando um artefato for alterado, deve-se:

1. identificar o motivo da alteração;
2. identificar os artefatos derivados potencialmente afetados;
3. avaliar o impacto;
4. atualizar os artefatos afetados;
5. preservar a rastreabilidade;
6. registrar a alteração no histórico do Git.

Alterações em artefatos de nível superior podem exigir a revalidação dos
artefatos derivados.

Exemplo:

    Alteração no Requirement
            ↓
    Avaliação do PRD
            ↓
    Avaliação das User Stories
            ↓
    Avaliação dos Acceptance Criteria
            ↓
    Atualização dos artefatos afetados

---

## 11. Exceções

Projetos podem adotar uma variação deste ciclo de vida quando houver uma
necessidade justificada.

A exceção deve registrar:

- regra ou padrão afetado;
- desvio adotado;
- justificativa;
- impacto conhecido;
- responsável pela aprovação;
- medidas compensatórias, quando aplicáveis.

Exceções não devem alterar silenciosamente os padrões centrais.

Quando uma necessidade representar uma melhoria geral do padrão, ela deve
ser avaliada como uma possível evolução do Software Delivery Standards.