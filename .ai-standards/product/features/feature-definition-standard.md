# Feature Definition Standard

## 1. Objetivo

Definir o padrão para criação, estruturação, triagem, aprovação, priorização e rastreabilidade de Feature Definitions no processo de Product Delivery.

A Feature Definition representa uma capacidade de produto suficientemente coerente para agrupar User Stories relacionadas e servir como unidade de triagem de UX e Arquitetura.

Este standard define a etapa intermediária entre a aprovação do PRD e a criação das User Stories.

## 2. Escopo

Este standard define:

- conceito de Feature Definition;
- quando criar uma Feature Definition;
- estrutura;
- identificação;
- triagem de UX e Arquitetura;
- priorização entre Features;
- relação com PRD;
- relação com User Stories;
- rastreabilidade;
- aprovação;
- responsabilidades;
- participação de agentes;
- Documentation-as-Code.

Não define:

- arquitetura;
- desenho técnico;
- implementação;
- código;
- testes;
- CI/CD;
- deploy.

## 3. Conceito de Feature Definition

Feature Definition é um artefato de produto que descreve uma capacidade ou funcionalidade coerente, derivada do PRD aprovado, com informações suficientes para orientar a decomposição em User Stories.

A Feature Definition deve:

- representar uma capacidade de produto identificável e coerente;
- agrupar logicamente User Stories relacionadas;
- servir como unidade de triagem de UX e Arquitetura;
- possuir prioridade relativa explícita entre as demais Features.

A Feature Definition não deve:

- substituir o PRD;
- conter detalhes técnicos de implementação;
- duplicar desnecessariamente informações do PRD;
- ser excessivamente detalhada a ponto de antecipar as User Stories.

## 4. Papel no Product Delivery

A Feature Definition ocupa uma posição intermediária entre a aprovação do PRD e a criação das User Stories.

Fluxo conceitual:

    PRD (Approved)
        ↓
    Feature Mapping (Drafts)
        ↓
    Feature Prioritization Gate 🛑
        ↓
    Feature Triage (UX & Arch)
        ↓
    Feature Definition Approval Gate 🛑
        ↓
    User Stories

A Feature Definition transforma capacidades identificadas no PRD em unidades de trabalho suficientemente definidas para orientar a decomposição em User Stories.

## 5. Princípios

### 5.1 Sem exageros

A Feature Definition deve conter informações essenciais e proporcionais. Não deve ser um mini-PRD nem uma especificação exaustiva.

### 5.2 Prioridade explícita

Todas as Features devem possuir uma ordem de prioridade clara e compreensível.

### 5.3 Triagem antes de detalhar

A triagem de UX e Arquitetura deve acontecer no nível da Feature antes da criação das User Stories.

### 5.4 Rastreabilidade

A Feature deve manter vínculos claros com o PRD de origem e com as User Stories derivadas.

### 5.5 Valor antes de atividade

A Feature deve representar uma capacidade de valor, não uma lista de tarefas técnicas.

### 5.6 Não inventar decisões

Agentes não devem preencher lacunas de negócio por inferência. Quando uma decisão for necessária, ela deve ser explicitada como questão em aberto.

## 6. Quando criar Feature Definitions

Feature Definitions devem ser criadas após a aprovação do PRD (Product Approval Gate), como primeiro passo antes da criação de User Stories.

O PO deve criar todas as Features identificadas no escopo do PRD, com prioridade explícita.

Podem ser criadas a partir de:

- capacidades do produto identificadas no PRD;
- seções de escopo do PRD;
- funcionalidades ou fluxos definidos no PRD;
- agrupamentos lógicos de requisitos relacionados.

## 7. Identificação

Cada Feature Definition deve possuir um identificador único dentro do projeto.

Formato recomendado:

FEAT-001
FEAT-002
FEAT-003

O identificador deve permanecer associado à identidade da Feature enquanto ela existir.

O nome do arquivo deve incluir um sufixo descritivo (slug) em kebab-case, conforme DEC-024.

Exemplo:

FEAT-001-gestao-pagamentos.md

## 8. Estrutura recomendada

Uma Feature Definition deve conter, quando aplicável:

    # FEAT-001 — [Título]

    ## Objetivo / Valor

    [O que esta Feature entrega e por quê.]

    ## Escopo

    ### Inclui
    - [Capacidade ou comportamento incluído]

    ### Não Inclui
    - [Capacidade ou comportamento fora do escopo desta Feature]

    ## Triagem UX

    - [ ] Impacta interface de usuário, jornada ou micro-interações?
    - Resultado: [Aprovado / Pendências identificadas]
    - Observações: [Se aplicável]

    ## Triagem Arquitetura

    - [ ] Impacta componentes estruturais, modelagem de dados, APIs ou integrações?
    - Resultado: [Aprovado / Pendências identificadas]
    - Observações: [Se aplicável]

    ## User Stories Previstas

    - US-001 — [Título]
    - US-002 — [Título]
    - US-003 — [Título]

    ## Prioridade

    [Posição relativa entre as Features do PRD.]

    ## Dependências

    - [Dependência entre Features ou externa]

    ## Rastreabilidade

    - PRD: [referência]
    - Requirements: [referências]

    ## Status

    [Draft | Triaged | Approved]

## 9. Título

O título deve ser:

- curto;
- orientado à capacidade ou funcionalidade;
- compreensível fora do contexto imediato.

Exemplo adequado:

Gestão de pagamentos

Exemplo inadequado:

Backend de pagamentos com cache

## 10. Objetivo / Valor

Deve explicar brevemente o que a Feature entrega e por que ela é necessária.

Não deve duplicar o PRD integralmente.

Quando possível, deve estar relacionado a um resultado de produto.

## 11. Escopo

Deve indicar os comportamentos ou capacidades abrangidos pela Feature.

Quando houver risco de interpretação, deve indicar explicitamente o que está fora do escopo da Feature.

## 12. Triagem de UX

A triagem de UX no nível de Feature substitui a triagem primária por User Story.

Deve avaliar se a Feature:

- impacta interface de usuário;
- requer jornadas de usuário;
- requer prototipação;
- requer definição de micro-interações;
- requer definição de fluxos de exceção visual.

Quando a triagem identificar necessidade, os artefatos de UX relevantes (User Journey, protótipos) devem ser produzidos antes da aprovação da Feature.

## 13. Triagem de Arquitetura

A triagem de Arquitetura no nível de Feature substitui a triagem primária por User Story.

Deve avaliar se a Feature:

- requer decisões arquiteturais;
- impacta modelagem de dados;
- requer novos contratos de API;
- requer integrações;
- requer decisões técnicas estruturais.

Quando a triagem identificar necessidade, os artefatos de Arquitetura relevantes (ADRs) devem ser produzidos antes da aprovação da Feature.

## 14. User Stories Previstas

A Feature Definition deve listar as User Stories previstas para aquela Feature.

A lista pode ser preliminar e pode evoluir durante a criação das US.

O objetivo é fornecer visibilidade antecipada do desdobramento esperado.

## 15. Prioridade

As Features devem possuir prioridade relativa explícita entre si.

A priorização é responsabilidade do Product Owner.

A prioridade define a ordem em que as Features serão desdobradas em User Stories e posteriormente desenvolvidas.

Agentes podem apoiar com análise de dependências e impacto, mas não devem definir prioridade autonomamente.

## 16. Dependências

Dependências relevantes entre Features ou externas devem ser explicitadas.

Podem incluir:

- outra Feature;
- decisão de produto;
- dependência externa;
- dependência regulatória;
- dependência técnica identificada na triagem.

## 17. Status

Exemplos:

Draft
Triaged
Approved

- **Draft:** Feature criada, informações podem estar incompletas, triagem não realizada.
- **Triaged:** Triagem de UX e Arquitetura realizada, pendências identificadas e resolvidas ou registradas.
- **Approved:** Feature aprovada para desdobramento em User Stories.

O projeto pode adotar estados adicionais conforme necessidade.

## 18. Entry Criteria

Para iniciar a criação de Feature Definitions, deve existir:

- PRD aprovado (Product Approval Gate concluído);
- capacidades do produto identificadas no PRD;
- contexto suficiente para descrever as Features.

## 19. Exit Criteria

Uma Feature Definition pode ser considerada aprovada quando:

- objetivo e valor estão claros;
- escopo está definido;
- triagem de UX foi realizada (quando aplicável);
- triagem de Arquitetura foi realizada (quando aplicável);
- pendências da triagem foram resolvidas ou explicitamente registradas;
- User Stories previstas estão identificadas;
- prioridade entre Features está definida;
- dependências relevantes estão identificadas;
- rastreabilidade com o PRD está estabelecida.

## 20. Gates da Etapa de Feature

A etapa possui duas paradas obrigatórias para garantir o limite de WIP (Work In Progress):

### 20.1 Feature Prioritization Gate
Ocorre após o mapeamento inicial (Draft). Verifica se as Features cobrem o escopo do PRD e define a ordem de prioridade. O Humano libera APENAS a Feature selecionada para avançar. Nenhuma triagem de UX ou Arquitetura deve ocorrer antes desta aprovação.

### 20.2 Feature Definition Approval Gate
Ocorre após a triagem (UX/Arch) da Feature selecionada. Verifica se as soluções propostas para a Feature estão adequadas. Somente após esta aprovação as User Stories podem ser geradas.

## 21. Relação com PRD

O PRD define a visão e o escopo do produto.

Feature Definitions decompõem essa visão em capacidades coerentes.

Relação:

    PRD-001
       ├── FEAT-001
       ├── FEAT-002
       └── FEAT-003

Uma Feature deve ser coerente com o PRD que a originou.

Quando uma Feature exigir alteração significativa do escopo do PRD, o impacto deve ser analisado.

## 22. Relação com User Stories

User Stories são criadas dentro do contexto de uma Feature aprovada.

Relação:

    FEAT-001
       ├── US-001
       ├── US-002
       └── US-003

Uma Feature pode conter uma ou mais User Stories.

A criação de User Stories deve respeitar a prioridade das Features.

## 23. Cadência de Entrega e Limites de WIP

A cadência de entrega é estritamente iterativa e baseada no limite de Work In Progress (WIP).

1. O PO mapeia todas as Features do PRD em estado de Draft (Apenas escopo e prioridade).
2. O agente PAUSA e solicita o **Feature Prioritization Gate**.
3. O Humano aprova e libera **UMA ÚNICA FEATURE** (ou um lote explicitamente definido pelo Humano) para detalhamento.
4. UX e Arquitetura realizam a triagem **SOMENTE** da Feature liberada.
5. O agente PAUSA e solicita o **Feature Definition Approval Gate**.
6. O Humano aprova a triagem técnica e de design.
7. O PO cria as User Stories **SOMENTE** da Feature aprovada.

**Anti-Batching (Fase de Definição):** Agentes autônomos são PROIBIDOS de avançar múltiplas Features simultaneamente para a fase de Triagem ou para a fase de User Stories, a menos que o Humano tenha autorizado o lote explicitamente no Gate correspondente. O comportamento padrão é agir uma Feature por vez.

**Paralelismo (Fase de Implementação):** Após a aprovação do lote de User Stories pelo humano no *Ready for Development Gate*, o limite de WIP se aplica apenas ao isolamento da Feature. A implementação (código) das User Stories dessa mesma Feature **pode ocorrer em paralelo** por múltiplos agentes desenvolvedores, acelerando o tempo de entrega técnica.

## 24. Rastreabilidade

A Feature Definition deve permitir rastreamento para:

    Discovery → Requirements → PRD → Feature → User Stories → AC → Backlog

Exemplo:

    DISC-001 → RF-001 → PRD-001 → FEAT-001 → US-001 → AC → Jira Story

## 25. Responsabilidades

### Product Owner

Responsável por:

- criar as Feature Definitions;
- definir prioridade entre Features;
- definir escopo de cada Feature;
- resolver ambiguidades de negócio;
- aprovar as Feature Definitions;
- aprovar mudanças relevantes.

### Product Analyst

Responsável por:

- apoiar estruturação;
- analisar informações;
- identificar lacunas;
- manter coerência;
- apoiar rastreabilidade.

### Tech Lead / Solution Architect

Responsável por:

- realizar triagem de Arquitetura;
- produzir ADRs quando necessário;
- aprovar viabilidade técnica.

### UX / Product Designer

Responsável por:

- realizar triagem de UX;
- produzir User Journeys e protótipos quando necessário;
- aprovar viabilidade de usabilidade.

### Capacidades de Apoio Agêntico

Agentes podem:

- propor Feature Definitions a partir do PRD;
- estruturar escopo;
- identificar inconsistências;
- verificar rastreabilidade;
- sugerir decomposição em User Stories;
- analisar impacto entre Features;
- preparar artefatos para aprovação.

Agentes não podem:

- inventar decisões de negócio;
- aprovar Feature Definitions;
- definir prioridade sem autorização;
- transformar hipóteses em decisões;
- processar múltiplas Features em lote (batch) para triagem ou geração de User Stories sem autorização humana explícita;
- ignorar os STOPS obrigatórios (Gates) entre o mapeamento, a triagem e a geração de User Stories.

## 26. Evolução

Uma Feature Definition pode evoluir quando:

- novas informações surgirem;
- o escopo do PRD for alterado;
- a triagem identificar necessidades adicionais;
- dependências mudarem.

Alterações devem avaliar impacto sobre User Stories já criadas.

## 27. Documentation-as-Code

Feature Definitions devem ser armazenadas como arquivos versionados no repositório do projeto.

Exemplo:

    docs/
    └── product/
        └── features/
            ├── FEAT-001-gestao-pagamentos.md
            ├── FEAT-002-relatorios.md
            └── FEAT-003-notificacoes.md

## 28. Relação com outros standards

Este standard deve ser utilizado em conjunto com:

- `product/prd/prd-standard.md`
- `product/user-stories/user-story-standard.md`
- `product/user-stories/acceptance-criteria.md`
- `product/backlog/backlog-management.md`
- `governance/development-lifecycle.md`
- `governance/quality-gates.md`
- `governance/roles-and-responsibilities.md`
- `governance/definition-of-ready.md`

## 29. Precedência

Quando houver conflito entre este standard e outro standard central, deve ser seguido o mecanismo de precedência definido pela governança do Central Repository.

Quando houver conflito entre o standard central e uma necessidade específica de projeto, deve ser seguido o processo definido em:

`governance/exceptions.md`

## 30. Resultado esperado

O uso deste standard deve produzir Feature Definitions:

- claras;
- orientadas a valor;
- proporcionais (sem exageros);
- priorizadas;
- triadas por UX e Arquitetura;
- rastreáveis;
- versionáveis;
- adequadas para decomposição em User Stories;
- consistentes com o PRD.
