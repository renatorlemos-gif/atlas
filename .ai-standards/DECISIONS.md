# Decision Log

Registro das decisÃµes estruturais que orientam a evoluÃ§Ã£o do repositÃ³rio central de Software Delivery Standards.

Este documento registra decisÃµes sobre a prÃ³pria estrutura, governanÃ§a e evoluÃ§Ã£o dos standards.

NÃ£o substitui os standards normativos nem os ADRs especÃ­ficos dos projetos.

---

## DEC-001 â€” Central Repository as Source of Truth

**Status:** Accepted

### Decision

O repositÃ³rio central Ã© a fonte de verdade para standards, polÃ­ticas, convenÃ§Ãµes, templates e orientaÃ§Ãµes compartilhadas de Product Delivery.

Os projetos consumidores mantÃªm os artefatos e decisÃµes especÃ­ficos de cada produto/projeto.

### Rationale

Separar claramente:

- como a organizaÃ§Ã£o trabalha;
- o que cada projeto/produto estÃ¡ construindo.

O repositÃ³rio central deve permitir que diferentes projetos e diferentes times/agentes adotem uma mesma base normativa.

### Consequences

- Standards compartilhados ficam no repositÃ³rio central.
- Artefatos especÃ­ficos de projeto ficam no repositÃ³rio do projeto.
- MudanÃ§as nos standards sÃ£o versionadas pelo Git.
- Projetos nÃ£o devem alterar diretamente os standards centrais.

---

## DEC-002 â€” Central Standards vs Project Artifacts

**Status:** Accepted

### Decision

O repositÃ³rio central define o padrÃ£o.

O repositÃ³rio do projeto contÃ©m a aplicaÃ§Ã£o desse padrÃ£o.

A relaÃ§Ã£o conceitual Ã©:

Central Standard
â†’ Project Artifact

Por exemplo:

Central:
product/prd/prd-standard.md

Projeto:
docs/product/PRD.md

### Rationale

Evitar que cada projeto mantenha uma cÃ³pia independente dos standards, criando divergÃªncia e dificultando sua evoluÃ§Ã£o.

### Consequences

Templates e standards permanecem centralizados.

Projetos nÃ£o precisam reproduzir toda a estrutura de diretÃ³rios do repositÃ³rio central.

---

## DEC-003 â€” Documentation-as-Code

**Status:** Accepted

### Decision

Os principais artefatos de Product Delivery devem ser tratados como cÃ³digo:

- arquivos Markdown;
- versionamento Git;
- histÃ³rico de alteraÃ§Ãµes;
- revisÃ£o;
- rastreabilidade;
- possibilidade de automaÃ§Ã£o e validaÃ§Ã£o.

### Rationale

DocumentaÃ§Ã£o de produto participa diretamente do processo de engenharia e precisa possuir controle de versÃ£o, revisÃ£o e rastreabilidade equivalentes aos demais artefatos do ciclo de desenvolvimento.

### Consequences

Os artefatos de produto nÃ£o devem depender exclusivamente de ferramentas externas para representar seu conteÃºdo normativo.

Ferramentas como Jira e Confluence podem ser utilizadas operacionalmente, mas nÃ£o substituem necessariamente os artefatos versionados do projeto.

---

## DEC-004 â€” Project Structure Is Organic

**Status:** Accepted

### Decision

Um novo projeto nÃ£o deve inicializar sua estrutura simplesmente copiando a estrutura completa do repositÃ³rio central.

A estrutura do projeto deve surgir conforme os artefatos necessÃ¡rios forem criados.

### Rationale

O repositÃ³rio central representa uma taxonomia de standards, nÃ£o um template obrigatÃ³rio de estrutura de projeto.

Copiar toda a estrutura criaria diretÃ³rios e arquivos desnecessÃ¡rios e aumentaria o acoplamento entre projeto e framework central.

### Consequences

Um agente iniciando um projeto deve:

1. identificar o estÃ¡gio do trabalho;
2. consultar o standard aplicÃ¡vel;
3. utilizar o template correspondente, quando existir;
4. criar o artefato necessÃ¡rio no projeto.

---

## DEC-005 â€” One Physical Standard per Topic

**Status:** Accepted

### Decision

Cada standard deve possuir um arquivo fÃ­sico prÃ³prio.

O histÃ³rico e a evoluÃ§Ã£o desse standard sÃ£o controlados pelo Git.

NÃ£o serÃ£o criadas cÃ³pias fÃ­sicas do mesmo standard para representar suas diferentes versÃµes.

### Rationale

O Git jÃ¡ fornece histÃ³rico, diff, autoria e reversibilidade.

Duplicar arquivos por versÃ£o aumentaria a complexidade e criaria risco de inconsistÃªncia.

### Consequences

Exemplo:

product/prd/prd-standard.md

continua sendo o arquivo do standard.

Sua evoluÃ§Ã£o Ã© registrada no histÃ³rico Git e, quando necessÃ¡rio, por releases/tags do repositÃ³rio.

---

## DEC-006 â€” Central Repository Versioning

**Status:** Accepted

### Decision

Inicialmente, o repositÃ³rio central possui uma versÃ£o global.

A versÃ£o utiliza SemVer:

- PATCH â€” correÃ§Ãµes editoriais, links, formataÃ§Ã£o ou ajustes sem mudanÃ§a de comportamento;
- MINOR â€” adiÃ§Ãµes compatÃ­veis, novos templates, orientaÃ§Ãµes ou validaÃ§Ãµes;
- MAJOR â€” alteraÃ§Ãµes incompatÃ­veis nas regras, estruturas ou processos obrigatÃ³rios.

A versÃ£o do repositÃ³rio Ã© registrada em:

VERSION
CHANGELOG.md

e pode ser representada por tags Git.

### Rationale

Evitar a complexidade de versionamento independente de cada domÃ­nio antes que essa necessidade seja comprovada.

### Consequences

Um projeto pode declarar explicitamente a versÃ£o dos standards que estÃ¡ utilizando, quando isso for necessÃ¡rio:

standards:
  repository: software-delivery-standards
  version: 0.1.0

---

## DEC-007 â€” Product Delivery Scope Before Technical Delivery

**Status:** Accepted

### Decision

A primeira fase do repositÃ³rio serÃ¡ dedicada exclusivamente ao domÃ­nio de Product Delivery e Documentation-as-Code.

O escopo atual cobre:

Discovery
â†’ Requirements
â†’ PRD
â†’ User Stories
â†’ Acceptance Criteria
â†’ Product Backlog / Ready for Development

Aspectos de implementaÃ§Ã£o tÃ©cnica serÃ£o tratados posteriormente.

### Rationale

Esgotar primeiro os artefatos, regras, responsabilidades, capacidades dos agentes, gates e relaÃ§Ãµes do domÃ­nio de produto antes de expandir o framework para arquitetura, desenvolvimento, seguranÃ§a, DevOps e operaÃ§Ã£o.

### Consequences

Os diretÃ³rios tÃ©cnicos existentes no repositÃ³rio nÃ£o representam, neste momento, escopo normativo concluÃ­do.

O desenvolvimento desses domÃ­nios serÃ¡ uma evoluÃ§Ã£o posterior do framework.

---

## DEC-008 â€” Product Lifecycle Is Iterative

**Status:** Accepted

### Decision

O lifecycle de Product Delivery nÃ£o deve ser interpretado como um fluxo waterfall rÃ­gido.

Os estÃ¡gios representam responsabilidades e artefatos, mas mudanÃ§as ou descobertas posteriores podem exigir retorno a estÃ¡gios anteriores.

### Rationale

Novas informaÃ§Ãµes podem surgir durante a elaboraÃ§Ã£o do PRD, User Stories ou Backlog.

Impedir o retorno a estÃ¡gios anteriores criaria uma falsa sensaÃ§Ã£o de completude e incentivaria decisÃµes implÃ­citas.

### Consequences

Os standards devem prever:

- rework;
- revisÃ£o;
- impacto da mudanÃ§a;
- atualizaÃ§Ã£o de artefatos relacionados;
- rastreabilidade.

---

## DEC-009 â€” Explicit Uncertainty

**Status:** Accepted

### Decision

Agentes nÃ£o devem transformar incerteza em decisÃ£o implÃ­cita.

Quando uma informaÃ§Ã£o necessÃ¡ria nÃ£o estiver disponÃ­vel, o agente deve:

- identificar a lacuna;
- registrar a dÃºvida;
- indicar o impacto;
- solicitar esclarecimento quando necessÃ¡rio;
- evitar inventar uma decisÃ£o de negÃ³cio.

### Rationale

Agentes podem estruturar, analisar e propor, mas decisÃµes de produto pertencem Ã s responsabilidades humanas definidas no processo.

### Consequences

Os standards devem definir explicitamente o comportamento esperado dos agentes diante de:

- ambiguidade;
- conflito;
- ausÃªncia de informaÃ§Ã£o;
- requisitos incompletos;
- decisÃµes ainda nÃ£o tomadas.

---

## DEC-010 â€” Human Accountability for Product Decisions

**Status:** Accepted

### Decision

Agentes podem apoiar anÃ¡lise, estruturaÃ§Ã£o, consistÃªncia, rastreabilidade e elaboraÃ§Ã£o de artefatos, mas nÃ£o assumem autonomamente decisÃµes de negÃ³cio ou aprovaÃ§Ã£o formal.

O Product Owner permanece responsÃ¡vel por decisÃµes como:

- objetivo;
- escopo;
- prioridade;
- decisÃµes de produto;
- resoluÃ§Ã£o de ambiguidades relevantes;
- aprovaÃ§Ã£o dos gates definidos para Product Delivery.

### Rationale

A automaÃ§Ã£o deve aumentar a capacidade do time sem eliminar a responsabilidade humana sobre decisÃµes de produto.

### Consequences

Os standards devem declarar explicitamente:

- responsabilidades humanas;
- capacidades dos agentes;
- limites dos agentes;
- pontos de aprovaÃ§Ã£o.

---

## DEC-011 â€” Agent Consumption of Central Standards

**Status:** Accepted

### Decision

Agentes de diferentes projetos, ferramentas ou times podem consumir diretamente os standards do repositÃ³rio central.

O consumo direto dos arquivos Markdown Ã© o mecanismo inicial preferencial.

Um agente centralizado de standards/orquestrador nÃ£o Ã© obrigatÃ³rio para a primeira versÃ£o do framework.

### Rationale

Markdown versionado Ã© simples, transparente, auditÃ¡vel e facilmente consumÃ­vel por diferentes ferramentas de IA.

Uma camada adicional de abstraÃ§Ã£o pode ser introduzida posteriormente se houver necessidade real de descoberta, interpretaÃ§Ã£o, governanÃ§a ou distribuiÃ§Ã£o.

### Consequences

Agentes devem conseguir:

- localizar o standard aplicÃ¡vel;
- ler seu conteÃºdo;
- utilizar seus templates;
- aplicar suas regras;
- identificar lacunas ou conflitos.

---

## DEC-012 â€” Central Repository Is Read-Only for Consuming Agents

**Status:** Accepted

### Decision

Agentes consumidores devem tratar o repositÃ³rio central como fonte normativa de leitura.

Eles podem:

- consultar standards;
- consultar templates;
- analisar conteÃºdo;
- identificar inconsistÃªncias;
- sugerir melhorias.

Eles nÃ£o devem, como parte de um fluxo normal de projeto:

- modificar standards;
- criar novos standards;
- alterar templates;
- alterar polÃ­ticas;
- criar commits;
- fazer push;
- alterar a branch principal.

### Rationale

O repositÃ³rio central possui impacto transversal sobre diversos projetos.

Permitir que um agente de projeto altere diretamente o conteÃºdo normativo criaria risco de mudanÃ§as nÃ£o governadas.

### Consequences

MudanÃ§as no repositÃ³rio central devem passar pelo processo formal de contribuiÃ§Ã£o e revisÃ£o definido para o prÃ³prio repositÃ³rio.

---

## DEC-013 â€” Behavioral vs Technical Read-Only Controls

**Status:** Accepted

### Decision

AGENTS.md e instruÃ§Ãµes semelhantes sÃ£o mecanismos de governanÃ§a comportamental, nÃ£o mecanismos tÃ©cnicos de seguranÃ§a.

A proteÃ§Ã£o efetiva do repositÃ³rio central deve utilizar camadas independentes quando disponÃ­veis, como:

- permissÃµes de acesso;
- filesystem/mount read-only;
- credenciais com permissÃµes adequadas;
- proteÃ§Ã£o de branches;
- revisÃ£o por Pull/Merge Request.

### Rationale

Uma instruÃ§Ã£o dizendo a um agente para nÃ£o escrever nÃ£o impede tecnicamente uma ferramenta com permissÃ£o de escrita de fazÃª-lo.

A governanÃ§a deve utilizar defesa em profundidade.

### Consequences

O framework nÃ£o deve considerar AGENTS.md isoladamente como garantia de read-only.

---

## DEC-014 â€” User Story Is a Product Artifact

**Status:** Accepted

### Decision

A User Story no repositÃ³rio do projeto Ã© tratada como um artefato de produto versionado.

Ela representa uma unidade de valor ou comportamento do produto.

Seu ID permanece estÃ¡vel enquanto a histÃ³ria continuar representando essencialmente a mesma unidade de valor.

### Rationale

A User Story possui valor como documentaÃ§Ã£o de produto e nÃ£o deve ficar rigidamente acoplada Ã  ferramenta operacional de gestÃ£o de trabalho.

### Consequences

Uma User Story pode evoluir atravÃ©s de versÃµes, por exemplo:

US-023 v1.0
US-023 v1.1
US-023 v1.2

Uma alteraÃ§Ã£o de versÃ£o nÃ£o implica automaticamente a criaÃ§Ã£o de uma nova User Story.

Uma nova User Story deve ser considerada quando surgir uma unidade de valor ou comportamento suficientemente independente.

---

## DEC-015 â€” User Story Is Not Necessarily 1:1 with Jira Story

**Status:** Accepted

### Decision

NÃ£o existe uma relaÃ§Ã£o obrigatÃ³ria 1:1 entre User Story do repositÃ³rio e item operacional do Jira.

Uma User Story pode resultar em:

- um Ãºnico item operacional;
- mÃºltiplos itens operacionais;
- diferentes incrementos ao longo do tempo.

Da mesma forma, a evoluÃ§Ã£o de uma User Story nÃ£o implica automaticamente a criaÃ§Ã£o de um novo item Jira.

### Rationale

User Story e Jira Story possuem funÃ§Ãµes diferentes:

User Story
â†’ artefato de produto

Jira Story / Item
â†’ unidade operacional de trabalho

ForÃ§ar uma relaÃ§Ã£o 1:1 criaria acoplamento desnecessÃ¡rio entre documentaÃ§Ã£o de produto e ferramenta de gestÃ£o.

### Consequences

A rastreabilidade deve permitir representar explicitamente as relaÃ§Ãµes entre os dois nÃ­veis.

O Jira Ã© tratado como ferramenta operacional, enquanto os artefatos de produto permanecem versionados no projeto.

---

## DEC-016 â€” Product Artifact as Source of Truth

**Status:** Accepted

### Decision

Para o domÃ­nio de Product Delivery:

- o repositÃ³rio do projeto Ã© a fonte de verdade dos artefatos de produto versionados;
- Jira Ã© a fonte operacional dos itens de trabalho;
- ferramentas como Confluence podem servir para publicaÃ§Ã£o, colaboraÃ§Ã£o ou navegaÃ§Ã£o, sem necessariamente substituir os artefatos versionados.

### Rationale

Separar claramente documentaÃ§Ã£o normativa/produtual de gestÃ£o operacional do trabalho.

### Consequences

A integraÃ§Ã£o entre ferramentas deve preservar rastreabilidade, mas nÃ£o deve obrigatoriamente transformar uma ferramenta em cÃ³pia integral da outra.

---

## DEC-017 â€” Acceptance Criteria Is Part of the User Story Artifact

**Status:** Accepted

### Decision

Acceptance Criteria possui um standard prÃ³prio no repositÃ³rio central, mas os critÃ©rios concretos pertencentes a uma User Story devem permanecer dentro do artefato da User Story.

NÃ£o Ã© necessÃ¡rio criar um arquivo independente para cada Acceptance Criterion.

### Rationale

Acceptance Criteria descreve as condiÃ§Ãµes verificÃ¡veis para aquela User Story especÃ­fica.

SeparÃ¡-los fisicamente aumentaria a fragmentaÃ§Ã£o sem benefÃ­cio proporcional.

### Consequences

O central contÃ©m:

product/user-stories/acceptance-criteria.md

Enquanto o projeto contÃ©m, por exemplo:

# US-023 â€” ...

## Acceptance Criteria

- ...
- ...

---

## DEC-018 â€” Traceability Across Product Artifacts

**Status:** Accepted

### Decision

Os artefatos de Product Delivery devem manter rastreabilidade entre seus nÃ­veis.

A cadeia conceitual Ã©:

Discovery
â†’ Requirements
â†’ PRD
â†’ User Story
â†’ Acceptance Criteria
â†’ Product Backlog / Operational Items

### Rationale

Permitir compreender a origem, intenÃ§Ã£o e impacto das decisÃµes e mudanÃ§as.

### Consequences

Cada standard deve definir mecanismos proporcionais de identificaÃ§Ã£o e relacionamento entre artefatos.

A rastreabilidade nÃ£o deve exigir duplicaÃ§Ã£o desnecessÃ¡ria de conteÃºdo.

---

## DEC-019 â€” ADR Is Project-Specific

**Status:** Accepted

### Decision

ADRs representam decisÃµes especÃ­ficas de arquitetura ou de projeto e pertencem ao repositÃ³rio do projeto.

O repositÃ³rio central pode fornecer o standard e o template para ADRs, mas nÃ£o deve armazenar os ADRs concretos dos projetos.

### Rationale

A decisÃ£o arquitetural normalmente depende do contexto especÃ­fico do projeto.

Misturar essas decisÃµes ao repositÃ³rio central criaria acoplamento entre projetos.

### Consequences

No futuro:

Central:
architecture/adr-standard.md

Projeto:
docs/adr/ADR-001-...

---

## DEC-020 â€” Language Convention

**Status:** Accepted

### Decision

O conteÃºdo dos standards e dos artefatos de documentaÃ§Ã£o deve utilizar portuguÃªs do Brasil por padrÃ£o.

Nomes de diretÃ³rios e arquivos permanecem em inglÃªs.

Termos tÃ©cnicos consolidados podem permanecer em inglÃªs quando isso melhorar a precisÃ£o ou interoperabilidade.

Exemplos:

product/
user-stories/
acceptance-criteria.md

com conteÃºdo em pt-BR.

### Rationale

Manter consistÃªncia entre documentaÃ§Ã£o e contexto de trabalho brasileiro, sem perder convenÃ§Ãµes tÃ©cnicas amplamente utilizadas.

### Consequences

Novos standards devem seguir essa convenÃ§Ã£o salvo necessidade especÃ­fica documentada.

---

## DEC-021 â€” Decision Log Is Not a Normative Standard

**Status:** Accepted

### Decision

DECISIONS.md registra decisÃµes estruturais e seus racionales, mas nÃ£o substitui os standards normativos.

Quando houver divergÃªncia entre o Decision Log e um standard vigente, o standard vigente representa a regra operacional.

### Rationale

O Decision Log explica a evoluÃ§Ã£o do framework.

Os standards definem o comportamento esperado atualmente.

### Consequences

Uma decisÃ£o pode continuar registrada no histÃ³rico mesmo depois de ser substituÃ­da.

Quando uma decisÃ£o deixar de ser vÃ¡lida, seu status deve ser atualizado e a nova decisÃ£o deve registrar a substituiÃ§Ã£o.

---

## DEC-022 â€” Decision Log Is Part of the Central Repository Governance

**Status:** Accepted

### Decision

MudanÃ§as relevantes na estrutura, governanÃ§a ou princÃ­pios do repositÃ³rio central devem ser registradas no DECISIONS.md.

Nem toda alteraÃ§Ã£o editorial precisa gerar uma nova decisÃ£o.

### Rationale

Preservar o conhecimento institucional necessÃ¡rio para compreender por que o framework possui determinada estrutura.

### Consequences

Uma nova decisÃ£o deve ser registrada quando a mudanÃ§a:

- altera um princÃ­pio do framework;
- altera a relaÃ§Ã£o entre artefatos;
- altera responsabilidades;
- altera governanÃ§a;
- altera o modelo de consumo pelos agentes;
- altera uma regra estrutural relevante;
- substitui uma decisÃ£o anterior.

---

## DEC-023 â€” Framework Baseado em Capacidades e Responsabilidades, NÃ£o em ComposiÃ§Ã£o Fixa de Agentes

**Status:** Accepted

### Contexto

Os padrÃµes de Product Delivery inicialmente passaram a identificar agentes especÃ­ficos, como `Requirements Agent` e `Product Owner Agent`, como participantes das diferentes etapas do ciclo de produto.

Essa abordagem Ã© Ãºtil para descrever uma implementaÃ§Ã£o de referÃªncia, mas pode acoplar o framework a uma arquitetura especÃ­fica de agentes.

Diferentes analistas, equipes ou organizaÃ§Ãµes podem montar seus prÃ³prios times agÃªnticos, utilizando diferentes ferramentas, agentes e nÃ­veis de especializaÃ§Ã£o. Um Ãºnico agente pode acumular capacidades de diferentes etapas, enquanto mÃºltiplos agentes podem compartilhar uma mesma responsabilidade.

### DecisÃ£o

O framework central deve definir **capacidades, responsabilidades, limites e resultados esperados**, e nÃ£o impor uma composiÃ§Ã£o fixa de agentes.

Os padrÃµes devem especificar:

- quais capacidades sÃ£o necessÃ¡rias em cada etapa;
- quais atividades precisam ser executadas;
- quais responsabilidades existem;
- quais decisÃµes dependem de responsabilidade humana;
- quais limites os agentes devem respeitar;
- quais artefatos e resultados devem ser produzidos;
- quais critÃ©rios e gates precisam ser atendidos.

A composiÃ§Ã£o concreta dos agentes que executarÃ¡ essas capacidades Ã© uma decisÃ£o do time ou projeto consumidor do framework.

Portanto, referÃªncias como `Requirements Agent` ou `Product Owner Agent` devem ser entendidas como **papÃ©is ou implementaÃ§Ãµes de referÃªncia**, e nÃ£o como componentes obrigatÃ³rios de qualquer time agÃªntico.

### Exemplo

Um time pode implementar as capacidades de Discovery e Requirements como:

- `Research Agent`;
- `Requirements Agent`;
- `Product Analyst Agent`.

Outro time pode concentrar as mesmas capacidades em um Ãºnico:

- `Product Analyst Agent`.

Ambas as composiÃ§Ãµes podem estar em conformidade com o framework, desde que as capacidades, responsabilidades, limites, artefatos e gates definidos pelos standards sejam atendidos.

### ImplicaÃ§Ãµes

Os standards de Product Delivery devem evitar regras do tipo:

> "A etapa X deve ser executada pelo Agent Y."

Sempre que possÃ­vel, devem utilizar formulaÃ§Ãµes como:

> "A etapa X deve contemplar as capacidades A, B e C."

ou:

> "A responsabilidade por X deve ser atribuÃ­da a um papel com capacidade para A, B e C."

Agentes especÃ­ficos podem ser documentados posteriormente como:

- implementaÃ§Ãµes de referÃªncia;
- exemplos de composiÃ§Ã£o;
- perfis de agentes;
- recomendaÃ§Ãµes para determinados tipos de projeto.

Esses elementos nÃ£o devem ser confundidos com os requisitos normativos do framework.

### RelaÃ§Ã£o com decisÃµes anteriores

Esta decisÃ£o complementa:

- **DEC-011 â€” Agent Consumption of Central Standards**
- **DEC-012 â€” Central Repository Is Read-Only for Consuming Agents**
- **DEC-013 â€” Behavioral vs Technical Read-Only Controls**

A decisÃ£o tambÃ©m orienta a revisÃ£o dos standards de Product Delivery que atualmente associam etapas diretamente a agentes especÃ­ficos.

### Regra de evoluÃ§Ã£o

Ao criar ou alterar um standard, deve-se verificar se a regra descreve:

1. uma capacidade necessÃ¡ria;
2. uma responsabilidade;
3. uma restriÃ§Ã£o;
4. um resultado esperado;

ou se estÃ¡ indevidamente prescrevendo uma implementaÃ§Ã£o especÃ­fica de agentes.

A prescriÃ§Ã£o de uma composiÃ§Ã£o especÃ­fica somente deve ocorrer quando houver uma justificativa explÃ­cita para tratÃ¡-la como uma implementaÃ§Ã£o de referÃªncia ou requisito daquele contexto.

---

## Decision Status

Os status utilizados neste documento sÃ£o:

- Proposed â€” decisÃ£o em discussÃ£o;
- Accepted â€” decisÃ£o adotada;
- Superseded â€” substituÃ­da por outra decisÃ£o;
- Deprecated â€” deixou de ser recomendada, mas permanece registrada por histÃ³rico;
- Rejected â€” considerada e explicitamente nÃ£o adotada.

---

## Evolution Rule

Este documento deve evoluir junto com o framework.

Quando uma decisÃ£o existente for alterada:

1. nÃ£o apagar o registro histÃ³rico;
2. atualizar seu status para Superseded quando aplicÃ¡vel;
3. criar uma nova decisÃ£o;
4. registrar a relaÃ§Ã£o com a decisÃ£o anterior;
5. atualizar os standards afetados.

O objetivo Ã© preservar nÃ£o apenas o que o framework Ã©, mas tambÃ©m por que ele chegou a ser assim.
---

## DEC-024 â€” Semantic Naming for Numbered Artifacts

**Status:** Accepted

### Decision

Todo arquivo gerado a partir de um template que represente um artefato sequencial/numerado (como User Stories, ADRs, PRDs, User Journeys, RevisÃµes de SeguranÃ§a) DEVE incluir obrigatoriamente um sufixo descritivo (slug) em sua nomenclatura, no formato kebab-case.

Exemplos aceitos:
- US-001-user-login.md
- ADR-005-database-selection.md
- PRD-002-shopping-cart.md

Exemplos proibidos:
- US-001.md
- ADR-005.md

### Rationale

Nomenclaturas puramente numÃ©ricas criam uma "caixa preta" no sistema de arquivos. 
Agentes de IA e humanos perdem contexto imediato e sÃ£o forÃ§ados a abrir mÃºltiplos arquivos para encontrar a funcionalidade desejada, desperdiÃ§ando tokens (custo/latÃªncia) e tempo cognitivo humano.

O uso de slugs semÃ¢nticos melhora drasticamente a usabilidade do *Documentation-as-Code* e a precisÃ£o de ferramentas de busca (grep, RAG, file search).

### Consequences

- Todos os templates de artefatos numerados no repositÃ³rio central (	emplates/) devem incluir uma instruÃ§Ã£o explÃ­cita no cabeÃ§alho instruindo o Agente/Humano a adicionar o slug no momento da geraÃ§Ã£o do arquivo.
- O arquivo de bootstrap dos agentes (AGENT_BOOTSTRAP.md) ou documentos de governanÃ§a devem reforÃ§ar esta como uma regra crÃ­tica de nomenclatura.
- Se novos templates forem criados futuramente e tiverem natureza sequencial, a instruÃ§Ã£o de nomenclatura (slug) deve ser incorporada desde a origem.


---

## DEC-025 — Dual-Track Agile and Micro-Triaging

**Status:** Partially Superseded (by DEC-027)

### Decision

A atuação de Arquitetura e UX/Design não se limita à fase inicial de definição do PRD (Macro). O framework adota o modelo **Dual-Track Agile**, exigindo um refinamento contínuo (Micro) durante a esteira de Delivery.

Todo template de User Story passa a contar com uma seção de **Micro-Triagem**. Se uma história específica exigir refinamentos de interface, micro-interações ou decisões técnicas não cobertas pelo ADR inicial, os agentes/profissionais especialistas devem atuar pontualmente na história ANTES que ela avance para "Ready for Development".

### Rationale

Tratar Arquitetura e UX apenas como "portões de entrada" no momento do PRD cria um vazio durante o desenvolvimento. O protótipo inicial nunca cobre todos os "sad paths" (caminhos de erro) ou micro-interações necessárias em histórias fatiadas. Sem o envolvimento contínuo, as decisões em nível de código acabam sendo improvisadas pelos desenvolvedores.

O modelo Dual-Track garante que enquanto o Delivery constrói as histórias prontas, a trilha de Discovery/Design refina as histórias seguintes.

### Consequences

- O template USER-STORY.md agora possui checkboxes de Avaliação de Impacto.
- O Agente Orquestrador deve estar instruído a invocar especialistas (UX Agent, Architect Agent) no nível da User Story, e não apenas no PRD.
- A "Definition of Ready" implicitamente exige que as pendências apontadas pela Micro-Triagem da história sejam resolvidas.

---

## DEC-026 — Feature Definition Stage

**Status:** Accepted

### Contexto

O framework de Product Delivery definia o fluxo pós-aprovação do PRD como uma transição direta para a criação de User Stories. Na prática, o salto entre uma visão ampla de produto (PRD) e unidades granulares de trabalho (User Story) é excessivo. O Product Owner perdia visibilidade estratégica ao entrar diretamente no detalhamento história a história, e a triagem de UX/Arquitetura no nível individual de cada US gerava redundância e fragmentação.

### Decisão

Introduzir uma etapa intermediária formal de **Feature Definition** entre o Product Approval Gate (PRD aprovado) e a criação de User Stories.

O novo fluxo passa a ser:

    Discovery → Requirements → PRD (Draft)
        → Solution Definition (Arch & UX) → PRD (Approved)
            → Feature Definitions (com triagem UX/Arch por Feature)
                → Feature Definition Approval Gate
                    → User Stories (por Feature, priorizadas)
                        → Aprovação das US (individual, grupo ou total)
                            → Desenvolvimento (Feature a Feature)

As mudanças estruturais são:

1. **Nova etapa:** Feature Definition — o PO cria todas as Features identificadas no escopo do PRD, com informações essenciais (sem exageros), prioridade explícita entre Features e ordem clara.

2. **Triagem UX e Arquitetura migra para o nível de Feature:** a avaliação de impacto de UX/Design e Arquitetura agora acontece no nível da Feature, não mais individualmente por User Story. Isso fornece visão coesa aos especialistas e reduz redundância.

3. **Novo gate — Feature Definition Approval Gate:** um gate leve entre a definição das Features e a criação das User Stories. Após aprovação, o PO prossegue com a criação das US daquela Feature.

4. **User Stories são criadas dentro do contexto de uma Feature aprovada:** o Entry Criteria das User Stories agora exige Feature aprovada.

5. **Aprovação de User Stories:** pode ser individual, em grupo ou total — a modalidade é flexibilidade do PO conforme o contexto do projeto.

6. **Entrega Feature a Feature:** uma vez aprovadas as US de uma Feature, o desenvolvimento acontece. Implementada, testada e entregue a Feature, passa-se para a próxima na ordem de prioridade.

7. **Prioridade clara:** o PO deve criar tanto as Features quanto as respectivas User Stories com ordem de prioridade explícita.

### Rationale

- O PRD define uma visão ampla do produto. Features representam capacidades coerentes que agrupam unidades de valor. User Stories detalham essas capacidades em unidades verificáveis. A decomposição progressiva (PRD → Feature → US) é mais natural e amplamente reconhecida em frameworks de produto.

- Triagem de UX e Arquitetura no nível de Feature é mais eficiente: em vez de N avaliações por N histórias da mesma capacidade, uma avaliação coesa por Feature fornece contexto completo ao Arquiteto e ao Designer.

- Priorizar Features antes de desdobrar em US dá ao PO visão estratégica de "o que entregar primeiro" sem se perder em detalhamento granular prematuro.

- A entrega Feature a Feature facilita o Dual-Track: enquanto uma Feature está em desenvolvimento, o PO pode estar definindo as US da próxima Feature.

### Consequences

- Criação do standard: `product/features/feature-definition-standard.md`.
- Criação do template: `templates/product/FEATURE-DEFINITION.md`.
- Atualização de `governance/development-lifecycle.md` — nova etapa e novo gate.
- Atualização de `governance/quality-gates.md` — novo Feature Definition Approval Gate.
- Atualização de `product/user-stories/user-story-standard.md` — Entry Criteria e rastreabilidade.
- Atualização de `product/backlog/backlog-management.md` — Feature como item priorizado.
- Atualização de `governance/roles-and-responsibilities.md` — responsabilidades na etapa de Feature.
- Atualização de `governance/definition-of-ready.md` — pré-requisito de Feature aprovada.
- Demais ajustes de rastreabilidade em PRD, templates e documentos relacionados.
- DEC-025 (Micro-Triaging) é parcialmente superseded — ver DEC-027.

### Relação com decisões anteriores

- **DEC-007:** O escopo de Product Delivery é expandido para incluir a etapa de Feature Definition.
- **DEC-008:** O ciclo permanece iterativo; Features podem ser revisitadas.
- **DEC-018:** A cadeia de rastreabilidade passa a incluir Feature.
- **DEC-023:** A decisão define capacidades e responsabilidades, não composição fixa de agentes.
- **DEC-025:** Parcialmente superseded — ver DEC-027.

---

## DEC-027 — Triagem UX/Arquitetura no Nível de Feature (Supersession Parcial de DEC-025)

**Status:** Accepted

### Contexto

DEC-025 estabeleceu o modelo Dual-Track Agile com micro-triagem de UX e Arquitetura no nível individual de cada User Story. Com a introdução da etapa de Feature Definition (DEC-026), a triagem primária de UX e Arquitetura migra para o nível de Feature.

### Decisão

A triagem formal de UX e Arquitetura passa a acontecer no nível de **Feature Definition**, não mais no nível individual de cada User Story.

A seção de "Avaliação de Impacto (Micro-Triage)" no template de User Story é mantida como **check residual leve**: serve para identificar casos pontuais em que uma história específica exige refinamento adicional não coberto pela triagem da Feature. Não representa mais o ponto principal de triagem.

### Rationale

- Triagem no nível de Feature fornece contexto completo e evita fragmentação.
- Manter o check residual na US preserva a segurança para desvios pontuais sem reintroduzir o custo da triagem formal por história.
- O espírito do Dual-Track (DEC-025) é preservado — apenas o nível de atuação muda.

### Consequences

- DEC-025 recebe status **Superseded** parcial — o princípio de envolvimento contínuo permanece, mas o locus primário da triagem muda de US para Feature.
- O template USER-STORY.md mantém a seção de Micro-Triage com redação ajustada para refletir o caráter residual.
- O novo standard de Feature Definition inclui seção de triagem UX e Arquitetura como atividade principal.

### Relação com decisões anteriores

- **DEC-025:** Parcialmente superseded por esta decisão.
- **DEC-026:** Esta decisão é consequência direta de DEC-026.

---

## DEC-028 — Limites de WIP e Triagem em Duas Etapas (Anti-Batching)

**Status:** Accepted

### Contexto

Agentes autônomos tendem a otimizar a execução processando artefatos em lote (ex: prototipando todas as telas ou gerando dezenas de User Stories simultaneamente para todas as Features de um PRD). Isso viola o princípio de entrega iterativa, gera desperdício se o rumo do produto mudar e remove o controle do Humano sobre o fluxo.

### Decisão

Fica estritamente proibido o processamento autônomo em lote ("batch processing") que avance etapas de ciclo de vida para múltiplas Features simultaneamente sem aprovação humana.

O fluxo de Feature Definition passa a ter **dois STOPS obrigatórios (Gates)**:

1. **Feature Prioritization Gate:** O PO mapeia as Features (Drafts) e PAUSA. O Humano aprova a priorização e seleciona qual(is) Feature(s) avança(m).
2. **Feature Definition Approval Gate:** UX e Arquitetura realizam a micro-triagem APENAS da Feature liberada no Gate 1. Após a triagem, PAUSA novamente. O Humano aprova o design/arquitetura desta Feature. Só então as User Stories desta Feature específica podem ser geradas.

O Work In Progress (WIP) padrão para triagem e desdobramento é de **1 (uma) Feature por vez**.

> **Exceção de Paralelismo na Implementação:** A restrição de lote ("Anti-Batching") aplica-se à definição e aprovação do escopo para evitar desperdício. Uma vez que as User Stories de uma Feature tenham passado pelo *Ready for Development Gate* (aprovação humana para codificação), o Orquestrador **pode e deve** acionar submódulos/agentes de desenvolvimento em paralelo para implementar as histórias dessa mesma Feature simultaneamente.

### Rationale

- Garante o fatiamento real do escopo (verdadeiro Dual-Track Agile).
- Impede que agentes consumam tokens/recursos gerando artefatos para Features de baixa prioridade que podem ser descartadas.
- Devolve ao Humano o controle granular do que está sendo refinado e construído.

### Consequences

- O Feature Definition Standard é atualizado para impor limite de WIP e dois gates.
- O Development Lifecycle e Quality Gates recebem o novo "Feature Prioritization Gate".
- O AGENTS.md ganha uma regra explícita proibindo ações em lote ("batching") por parte dos agentes consumidores.

---

## DEC-025 — Project-Centric AI Governance (Inversion of Control)

**Status:** Accepted

### Contexto

Inicialmente, o bootstrap para agentes (como o DevTeam) exigia que a IA fizesse referência e carregasse dinamicamente os padrões e templates hospedados no repositório central `software-delivery-standards` a cada execução. 

Isso criava os seguintes desafios:
- Dificuldade para agentes que não possuíam acesso cross-repo na mesma workspace.
- Vulnerabilidade de versionamento: alterações futuras no repositório central poderiam quebrar silenciosamente projetos legados que esperavam a governança antiga.
- Complexidade na definição de exceções ou regras locais específicas de um projeto.

### Decisão

Adotamos a **Inversão de Controle** via Vendoring (Cache Local) de governança para projetos de software (Project-Centric AI Governance).

1. O repositório `software-delivery-standards` atua apenas como um "Registry" (semelhante ao NPM).
2. Na inicialização de um projeto, a versão corrente dos padrões é copiada fisicamente para dentro do projeto (ex: na pasta `.ai-standards/`).
3. Um manifesto de governança raiz (`AGENTS.md`), gerado a partir do template do repositório central, é colocado no projeto alvo informando: *"Siga as regras e templates encontrados na pasta `.ai-standards/` deste repositório"*.

### Rationale

Assim como o `package.json` define as dependências versionadas de um projeto, a governança da IA deve pertencer ao projeto.
Tendo os padrões no "cache" local:
- O agente só precisa de ferramentas básicas de leitura local (`view_file`), reduzindo complexidade e falhas de segurança.
- O projeto mantém imutabilidade e estabilidade, operando exatamente sob a versão de regras com a qual foi criado, até que a equipe opte explicitamente por atualizar o cache (`update-standards`).
- Exceções e customizações de regras ou templates são feitas no cache local, sem "sujar" o repositório central nem o motor do agente.
- O motor de execução agêntico (como o DevTeam) torna-se 100% "burro" e agnóstico, apenas obedecendo ao que o repositório alvo instrui.

### Consequences

- Remoção do arquivo central `AGENT_BOOTSTRAP.md` em favor do template localizado em `templates/project/AGENTS.md`.
- O `AGENTS.md` na raiz do repositório central agora instrui apenas sobre a proteção do próprio repositório (Read-Only).
- Ferramentas de inicialização (como o `init-repo` de times agênticos) devem ser ajustadas para executar o vendoring a partir do repositório central, em vez de carregar templates próprios.

---

## DEC-026 — Workflow-as-Data and Semantic Responsibility Matching

**Status:** Accepted

### Contexto

Durante o aprimoramento da governança agêntica (Project-Centric Vendoring via DEC-025), percebemos que times agênticos (como o DevTeam) ainda mantinham acoplamento metodológico ao possuir "skills" hardcoded para gerar artefatos específicos (ex: uma skill programada para "Criar PRD"). 

Isso feria o princípio de um motor agnóstico, pois:
1. Qualquer mudança na metodologia da empresa exigiria reescrita do código do agente.
2. Diferentes frameworks de IA (LangChain, AutoGen, CrewAI) possuem nomenclaturas e orquestrações de papéis heterogêneas, dificultando o match rígido por "nome do papel".

### Decisão

Adotamos o padrão **Workflow-as-Data** com **Match Semântico de Responsabilidades**.

1. O ciclo de vida do software e os artefatos a serem gerados passam a ser mapeados exclusivamente de forma descritiva no manifesto do projeto alvo (`AGENTS.md`).
2. O mapeamento inclui não apenas o nome do papel, mas uma **Descrição da Responsabilidade** ricamente semântica. 
3. Os agentes perdem qualquer conhecimento pré-programado sobre frameworks ágeis ou tipos de artefatos. Eles operam fazendo um "match semântico": leem o manifesto, comparam a tarefa atual com as descrições de responsabilidade, e geram os artefatos nos caminhos estipulados pelo mapa.
4. (Definição Futura) O Prompt Engineering e as diretrizes de preenchimento de cada artefato migrarão para dentro dos arquivos de template como metadados invisíveis.

### Rationale

- **Interoperabilidade Total:** Ao usar descrições semânticas, qualquer IA ou orquestrador no mundo consegue inferir se a tarefa que o usuário pediu se enquadra na responsabilidade X ou Y, sem depender de strings exatas de papéis.
- **Evolução Fluida:** A metodologia da empresa inteira pode mudar (ex: trocar Scrum por Shape Up) alterando apenas o repositório de standards, e todos os agentes herdarão o novo processo sem nenhuma alteração de código nos motores.

### Consequences

- O template `AGENTS.md` foi reescrito para incluir a matriz "ROLE & ARTIFACT MAPPING".
- Times agênticos consumidores (ex: DevTeam) devem deletar skills focadas em artefatos específicos e adotar personas de execução genéricas, cuja diretriz zero seja buscar suas instruções operacionais nesse mapa.
