# Backlog Management Standard

## 1. Objetivo

Definir padrões para estruturação, organização, refinamento, ordenação, rastreabilidade e evolução do Product Backlog.

O backlog representa o conjunto ordenado de necessidades, capacidades, melhorias e demais itens de trabalho de produto conhecidos pelo projeto.

## 2. Escopo

Este standard define:

- conceito de Product Backlog;
- estrutura;
- tipos de itens;
- User Stories;
- Features e Epics;
- prioridade;
- ordenação;
- status;
- refinamento;
- decomposição;
- dependências;
- perguntas em aberto;
- critérios de Ready for Development;
- rastreabilidade;
- evolução;
- obsolescência;
- responsabilidades;
- participação de agentes;
- Documentation-as-Code.

Não define:

- implementação;
- arquitetura;
- desenho técnico;
- branches;
- Pull Requests;
- CI/CD;
- deploy;
- operação.

## 3. Conceito de Product Backlog

Product Backlog é uma coleção ordenada de itens que representam trabalho ou necessidades relevantes para evolução do produto.

Pode conter:

- User Stories;
- Features;
- Epics;
- Bugs;
- Discovery Items;
- Spikes;
- outros tipos definidos pelo processo do projeto.

O backlog deve permanecer alinhado aos objetivos do produto.

## 4. Papel no Product Delivery

O backlog representa a transição entre definição de produto e planejamento de trabalho.

Fluxo conceitual:

Discovery → Requirements → PRD → Feature Definitions → User Stories → Product Backlog → Itens operacionais

O backlog não substitui PRD, Requirements ou User Stories.

## 5. Princípios

### 5.1 Valor antes de atividade

Itens devem representar valor, necessidade, resultado ou trabalho necessário.

### 5.2 Ordenação explícita

O backlog deve possuir uma ordem compreensível.

### 5.3 Transparência

Status, dependências e bloqueios relevantes devem estar explícitos.

### 5.4 Rastreabilidade

Itens devem poder ser relacionados às definições de produto que os originaram.

### 5.5 Evolução controlada

Alterações devem considerar impacto sobre os artefatos relacionados.

### 5.6 Evitar detalhamento prematuro

O backlog não deve ser utilizado para antecipar decisões técnicas que ainda não são necessárias.

## 6. Estrutura

Um item de backlog deve possuir, quando aplicável:

- identificador;
- título;
- tipo;
- descrição;
- valor;
- prioridade;
- status;
- escopo;
- dependências;
- perguntas em aberto;
- rastreabilidade;
- critérios de aceitação, quando aplicável.

## 7. Identificação

Itens de backlog podem utilizar identificadores próprios do projeto ou da ferramenta.

Exemplos:

US-001  
FEAT-001  
EPIC-001  
BUG-001  
DISC-001  
SPIKE-001

Quando uma ferramenta como Jira possuir identificador próprio, ele pode ser utilizado adicionalmente.

O identificador operacional da ferramenta não substitui necessariamente o identificador do artefato de produto.

## 8. User Story como unidade de produto

User Story é uma das principais unidades de valor do Product Backlog.

A User Story deve seguir:

product/user-stories/user-story-standard.md

O backlog pode conter referências às User Stories, mas não deve alterar silenciosamente o conteúdo normativo dessas User Stories.

## 9. Itens operacionais e ferramentas de gestão

Uma ferramenta como Jira pode representar o trabalho por meio de:

- Epic;
- Feature;
- Story;
- Task;
- Bug;
- Spike;
- outros tipos.

Esses itens são itens operacionais de gestão do trabalho.

Eles não devem ser considerados automaticamente equivalentes aos artefatos de produto definidos no Central Repository.

A estrutura exata pode variar conforme a ferramenta ou organização.

## 10. Relação entre User Story e item operacional

Não deve existir uma regra rígida de 1:1 entre User Story e item operacional.

Uma User Story pode resultar em um ou mais itens operacionais.

Exemplo:

US-023 — Consultar pagamentos

- Jira Story A
- Jira Story B
- Jira Story C

Esses itens podem representar:

- partes da entrega;
- incrementos;
- atividades necessárias;
- diferentes ciclos de trabalho;
- outras unidades operacionais definidas pelo projeto.

Da mesma forma, uma User Story pode ser representada por um único item operacional quando isso for suficiente.

## 11. User Story e evolução do backlog

A evolução de uma User Story não implica automaticamente na criação de um novo item operacional.

Exemplo:

US-023 v1.0  
→ Jira Story A

US-023 v1.1  
→ Jira Story A atualizado

ou:

US-023 v1.0  
→ Jira Story A

US-023 v1.1  
→ Jira Story B

Ambos podem ser válidos.

A decisão deve considerar:

- escopo da alteração;
- estado do item operacional;
- impacto sobre planejamento;
- necessidade de rastreabilidade;
- processo de backlog adotado.

O standard central não deve impor uma regra automática de versionamento entre User Story e ferramenta de backlog.

## 12. Nova User Story

Uma nova User Story deve ser considerada quando surgir uma nova unidade de valor ou comportamento suficientemente independente.

Não deve ser criada simplesmente porque:

- o documento anterior foi alterado;
- um critério de aceitação mudou;
- houve uma correção editorial;
- houve uma evolução pequena da mesma necessidade.

A decisão deve considerar a identidade da necessidade e seu ciclo de vida.

## 13. Features

Features representam capacidades de produto suficientemente amplas para agrupar User Stories ou outras unidades relacionadas.

A partir de DEC-026, Feature Definitions são um artefato formal do ciclo de Product Delivery, criadas após a aprovação do PRD e antes das User Stories.

O standard completo está em:

`product/features/feature-definition-standard.md`

Exemplo:

FEAT-001: Gestão de pagamentos

- US-001 — Consultar pagamentos
- US-002 — Filtrar pagamentos
- US-003 — Exportar pagamentos

A utilização de Features deve seguir o Feature Definition Standard e o modelo adotado pelo projeto.

## 14. Epics

Epics podem representar agrupamentos estratégicos ou grandes capacidades, quando utilizados pelo modelo de gestão adotado.

O Central Repository não deve assumir que todo projeto utiliza Epics.

## 15. Prioridade

Prioridade representa a ordem relativa de atenção ou entrega.

A priorização é uma responsabilidade de produto.

Agentes podem:

- organizar informações;
- apresentar impactos;
- identificar dependências;
- sugerir alternativas.

Agentes não devem definir prioridade autonomamente quando isso representar uma decisão de negócio.

## 16. Ordenação

O Product Backlog deve possuir uma ordem explícita ou mecanismo equivalente.

A ordenação pode considerar:

- valor;
- urgência;
- risco;
- dependências;
- objetivos;
- compromissos;
- capacidade disponível;
- outros critérios definidos pelo projeto.

## 17. Status

Exemplos:

Draft  
Refining  
Ready for Development  
In Progress  
Done  
Blocked  
Cancelled  
Obsolete

O projeto pode adotar estados diferentes.

Status não substitui critérios de prontidão.

## 18. Draft

Item em Draft pode possuir:

- informações incompletas;
- questões em aberto;
- escopo preliminar;
- ausência de critérios completos.

Não deve ser considerado pronto para desenvolvimento.

## 19. Refining

Durante Refining, o item pode receber:

- esclarecimentos;
- critérios de aceitação;
- decomposição;
- dependências;
- análise de impacto;
- rastreabilidade.

## 20. Ready for Development

Um item está Ready for Development quando possui informações suficientes para que o trabalho possa ser iniciado sem ambiguidades críticas de produto.

Critérios típicos:

- objetivo claro;
- valor identificado;
- escopo definido;
- Acceptance Criteria definidos quando aplicável;
- dependências identificadas;
- questões críticas resolvidas;
- rastreabilidade;
- coerência com PRD e Requirements.

Ready for Development é um gate de prontidão de produto.

Não significa:

- arquitetura aprovada;
- solução técnica definida;
- código pronto para implementação;
- ambiente preparado.

## 21. Definition of Ready

O projeto pode adotar uma Definition of Ready específica.

Como referência:

Definition of Ready

- objetivo compreensível;
- valor identificado;
- escopo definido;
- critérios de aceitação definidos;
- dependências conhecidas;
- perguntas críticas resolvidas;
- rastreabilidade estabelecida;
- ausência de ambiguidades críticas.

## 22. Dependências

Dependências relevantes devem ser identificadas.

Podem incluir:

- outra User Story;
- Feature;
- decisão de produto;
- dependência externa;
- requisito;
- restrição;
- dependência regulatória.

Dependências técnicas detalhadas devem ser tratadas em documentação apropriada.

## 23. Perguntas em Aberto

Questões que impedem a prontidão do item devem ser registradas.

Exemplo:

- O filtro deve utilizar data de pagamento ou competência?

Itens com questões críticas não resolvidas não devem ser classificados como Ready for Development.

## 24. Bloqueios

Um item pode estar bloqueado por:

- decisão pendente;
- dependência externa;
- dependência de outro item;
- ausência de informação;
- outro impedimento relevante.

O bloqueio deve ser explicitado.

## 25. Refinamento

Refinamento pode incluir:

- revisão do escopo;
- esclarecimento;
- decomposição;
- atualização de critérios;
- identificação de dependências;
- análise de impacto;
- validação de rastreabilidade.

O refinamento não deve antecipar detalhamento técnico desnecessário.

## 26. Decomposição

Itens grandes podem ser decompostos em unidades menores.

A decomposição deve preservar:

- valor;
- rastreabilidade;
- coerência;
- contexto.

Não decompor apenas para representar tarefas técnicas internas.

## 27. Mudança de escopo

Quando um item sofrer mudança relevante, deve-se avaliar impacto sobre:

- User Story;
- Requirements;
- PRD;
- Acceptance Criteria;
- dependências;
- prioridade;
- outros itens.

Quando a mudança representar uma nova unidade de valor, deve-se avaliar a criação de uma nova User Story.

## 28. Duplicidade

Itens duplicados devem ser identificados e consolidados quando possível.

O histórico relevante não deve ser perdido.

## 29. Cancelamento e obsolescência

Itens podem tornar-se:

- Cancelled;
- Obsolete;
- Superseded.

O motivo deve ser registrado quando relevante.

Evitar apagar itens quando isso eliminar rastreabilidade histórica.

## 30. Bugs

Bugs podem ser representados como itens próprios do backlog.

Quando um bug estiver relacionado a uma User Story, deve existir rastreabilidade entre eles.

Um bug não deve ser transformado automaticamente em uma nova User Story.

## 31. Discovery Items

Itens destinados a investigação ou redução de incerteza podem ser registrados como Discovery Items.

Devem produzir resultado que possa alimentar os artefatos de produto.

## 32. Spikes

Spikes podem ser utilizados para investigação delimitada quando o projeto adotar esse conceito.

Seu resultado deve ser documentado de forma adequada.

Spikes não devem ser utilizados para substituir decisões de produto.

## 33. Responsabilidades

### Product Owner

Responsável por:

- prioridade;
- ordenação;
- valor;
- escopo;
- decisões de produto;
- aprovação;
- resolução de ambiguidades;
- prontidão do backlog.

### Product Analyst

Responsável por:

- análise;
- estruturação;
- identificação de lacunas;
- rastreabilidade;
- impacto;
- apoio ao refinamento.

### Requirements Agent

Pode:

- organizar backlog;
- verificar consistência;
- identificar dependências;
- verificar rastreabilidade;
- identificar lacunas;
- sugerir decomposição.

Não pode:

- priorizar autonomamente;
- inventar decisões;
- aprovar;
- alterar standards centrais.

### Product Owner Agent

Pode:

- propor estrutura;
- propor decomposição;
- propor Acceptance Criteria;
- verificar coerência;
- analisar impacto;
- manter rastreabilidade.

Não pode:

- definir prioridade sem autorização;
- aprovar autonomamente;
- inventar decisões de negócio.

## 34. Automação

Automação pode ser utilizada para:

- criação de itens;
- atualização de status;
- sincronização de referências;
- validação de campos;
- identificação de inconsistências;
- verificação de rastreabilidade.

Automação não deve substituir decisões humanas de produto.

## 35. Rastreabilidade

O backlog deve permitir rastreamento para os artefatos que originaram seus itens.

Exemplo:

Jira Story  
→ US-023  
→ PRD-001  
→ RF-014  
→ DISC-003

Quando uma User Story possuir múltiplos itens operacionais, cada item deve apontar para a User Story correspondente quando o processo adotado permitir.

## 36. Rastreabilidade reversa

Também deve ser possível identificar:

PRD  
→ User Stories  
→ Itens de backlog

Isso permite identificar:

- o que será entregue;
- o que está planejado;
- o que ainda não foi planejado;
- quais itens dependem de determinada definição.

## 37. Análise de impacto

Alterações relevantes devem avaliar impacto sobre:

- itens relacionados;
- User Stories;
- Requirements;
- PRD;
- prioridades;
- dependências;
- Acceptance Criteria.

## 38. Priorização versus refinamento

Priorização responde:

> O que deve receber atenção primeiro?

Refinamento responde:

> O que precisamos entender para considerar o item suficientemente definido?

São atividades diferentes e não devem ser confundidas.

## 39. Backlog saudável

Um backlog saudável deve:

- possuir itens compreensíveis;
- possuir ordenação;
- evitar duplicidades;
- identificar bloqueios;
- identificar dependências;
- manter rastreabilidade;
- evitar itens permanentemente indefinidos;
- refletir prioridades atuais;
- eliminar itens obsoletos quando apropriado.

## 40. Revisão periódica

O backlog deve ser revisado periodicamente para:

- reavaliar prioridades;
- remover duplicidades;
- identificar obsolescência;
- revisar dependências;
- atualizar status;
- identificar lacunas;
- manter coerência com objetivos do produto.

## 41. Documentation-as-Code

Quando o projeto adotar Documentation-as-Code, os artefatos normativos do backlog podem ser armazenados no repositório.

Exemplo:

docs/
└── product/
    └── backlog/

A ferramenta operacional, como Jira, pode conter a representação operacional dos itens.

O documento versionado no repositório e o item operacional da ferramenta devem possuir rastreabilidade quando ambos forem utilizados.

## 42. Fonte de verdade

Deve ser explicitamente definido qual sistema é a fonte de verdade para cada tipo de informação.

Recomendação:

Artefatos de produto  
→ Project Repository

Gestão operacional do trabalho  
→ Jira / ferramenta equivalente

Não assumir que o Jira seja automaticamente a fonte normativa dos artefatos de produto.

## 43. Relação com Definition of Done

Definition of Ready define quando um item possui informação suficiente para iniciar o trabalho.

Definition of Done define quando o trabalho é considerado concluído.

São conceitos distintos.

## 44. Template

# [ID] — [Título]

## Tipo

[User Story / Feature / Bug / Discovery Item / Spike]

## Objetivo / Valor

[Valor esperado.]

## Descrição

[Descrição.]

## Escopo

[Escopo.]

## Acceptance Criteria

- [ ] [Critério]

## Dependências

- [Dependência]

## Perguntas em Aberto

- [Pergunta]

## Prioridade

[Prioridade.]

## Status

[Status.]

## Rastreabilidade

- User Story: [referência]
- PRD: [referência]
- Requirements: [referência]
- Discovery: [referência]
- Item operacional: [referência]

## 45. Relação com outros standards

Este standard deve ser utilizado em conjunto com:

- product/discovery/discovery-standard.md
- product/requirements/requirements-standard.md
- product/prd/prd-standard.md
- product/features/feature-definition-standard.md
- product/user-stories/user-story-standard.md
- product/user-stories/acceptance-criteria.md
- governance/development-lifecycle.md
- governance/definition-of-ready.md

## 46. Precedência

Quando houver conflito entre este standard e outro standard central, deve ser seguido o mecanismo de precedência definido pela governança do Central Repository.

Quando houver conflito entre o standard central e uma necessidade específica de projeto, deve ser seguido o processo definido em:

governance/exceptions.md

## 47. Resultado esperado

O uso deste standard deve produzir um Product Backlog:

- compreensível;
- ordenado;
- rastreável;
- evolutivo;
- coerente com os artefatos de produto;
- adequadamente relacionado às ferramentas operacionais;
- sem dependência obrigatória de uma ferramenta específica;
- pronto para alimentar o processo posterior de desenvolvimento.