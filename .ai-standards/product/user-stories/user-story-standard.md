# User Story Standard

## 1. Objetivo

Definir o padrão para criação, estruturação, evolução, validação e rastreabilidade de User Stories no processo de Product Delivery.

A User Story representa uma unidade de valor ou comportamento do produto sob a perspectiva do usuário ou público beneficiado.

Este standard também define a relação entre User Stories como artefatos de produto e itens operacionais de ferramentas de gestão de trabalho, como Jira Stories.

## 2. Escopo

Este standard define:

- conceito de User Story;
- quando criar uma User Story;
- estrutura;
- identificação;
- escrita;
- contexto;
- valor esperado;
- escopo;
- critérios de aceitação;
- dependências;
- perguntas em aberto;
- rastreabilidade;
- evolução e versionamento;
- decomposição;
- relação com Requirements;
- relação com PRD;
- relação com Acceptance Criteria;
- relação com itens operacionais de backlog;
- responsabilidades;
- participação de agentes;
- critérios de qualidade;
- critérios de Ready for Development;
- revisão;
- alteração;
- obsolescência;
- Documentation-as-Code.

Não define:

- arquitetura;
- desenho técnico;
- implementação;
- código;
- testes automatizados;
- estratégia de branches;
- processo de Pull Request;
- CI/CD;
- deploy.

## 3. Conceito de User Story

User Story é um artefato de produto que descreve uma necessidade ou capacidade do ponto de vista do usuário ou público beneficiado.

Uma User Story deve representar uma unidade de valor suficientemente coerente para ser compreendida, validada e rastreada.

Formato recomendado:

> Como [usuário ou público], quero [necessidade/capacidade], para [valor ou resultado esperado].

A User Story não deve ser utilizada para descrever diretamente uma solução técnica.

## 4. Papel no Product Delivery

A User Story transforma definições de produto em unidades de valor que podem ser refinadas e posteriormente transformadas em itens de trabalho.

Fluxo conceitual:

Discovery → Requirements → PRD → Feature → User Story → Acceptance Criteria → Product Backlog → Itens de trabalho

A User Story não substitui Requirements ou PRD.

Ela representa uma visão mais granular e orientada ao valor do produto.

## 5. Princípios

### 5.1 Valor antes de implementação

A User Story deve explicar o que o usuário precisa e por quê.

Não deve prescrever antecipadamente como a solução será implementada.

### 5.2 Clareza

A necessidade deve ser compreensível sem depender de conhecimento implícito.

### 5.3 Valor explícito

O resultado ou benefício esperado deve estar identificado.

### 5.4 Escopo controlado

A User Story deve deixar claro o que está incluído e, quando necessário, o que não está incluído.

### 5.5 Independência relativa

Sempre que possível, a User Story deve representar uma unidade de valor que possa ser analisada e priorizada de forma independente.

Dependências existentes devem ser explicitadas.

### 5.6 Critérios verificáveis

A User Story deve possuir critérios de aceitação observáveis e verificáveis.

### 5.7 Não inventar decisões

Agentes não devem preencher lacunas de negócio por inferência.

Quando uma decisão for necessária, ela deve ser explicitada como questão em aberto.

## 6. Quando criar uma User Story

Uma User Story deve ser criada quando houver uma necessidade ou capacidade de produto suficientemente compreendida para ser descrita sob a perspectiva de um usuário ou público.

Pode ser criada a partir de:

- Feature Definitions aprovadas;
- PRD;
- requisitos;
- capacidades de produto;
- necessidades identificadas durante Discovery;
- evolução de funcionalidades existentes;
- mudanças de comportamento do produto.

## 7. Identificação

Cada User Story deve possuir um identificador único dentro do projeto.

Formato recomendado:

US-001  
US-002  
US-003

O identificador deve permanecer associado à identidade da User Story enquanto ela existir.

Uma alteração no conteúdo da User Story não deve gerar automaticamente um novo identificador.

## 8. Estrutura recomendada

Uma User Story deve conter, quando aplicável:

# US-001 — [Título]

## User Story

Como [usuário],  
quero [necessidade],  
para [valor].

## Contexto

[Contexto necessário para compreensão.]

## Valor Esperado

[Resultado ou benefício esperado.]

## Escopo

[O que está incluído.]

## Acceptance Criteria

[Critérios de aceitação.]

## Dependências

[Dependências conhecidas.]

## Perguntas em Aberto

[Questões ainda não decididas.]

## Rastreabilidade

[Referências para Feature, PRD, Requirements, Discovery etc.]

## 9. Título

O título deve ser:

- curto;
- identificável;
- orientado à capacidade ou necessidade;
- compreensível fora do contexto imediato.

Evitar títulos que descrevam apenas implementação.

Exemplo inadequado:

Criar endpoint para pagamentos

Exemplo adequado:

Consultar pagamentos do condomínio

## 10. User Story

A descrição deve seguir preferencialmente:

Como [usuário],  
quero [necessidade],  
para [valor].

O usuário ou público deve ser identificado de forma suficientemente específica.

Evitar descrições genéricas como:

Como usuário, quero melhorar o sistema.

## 11. Contexto

O contexto deve ser utilizado para registrar informações necessárias para compreender a User Story que não estejam adequadamente representadas na frase principal.

Não deve duplicar desnecessariamente o PRD ou Requirements.

## 12. Valor Esperado

O valor esperado deve explicar por que a necessidade existe.

Quando possível, deve estar relacionado a:

- resultado para o usuário;
- resultado para o negócio;
- redução de esforço;
- redução de erro;
- melhoria de experiência;
- cumprimento de requisito;
- outro resultado relevante.

## 13. Escopo

O escopo deve indicar o comportamento ou capacidade abrangida pela User Story.

Quando houver risco de interpretação, deve também indicar explicitamente o que está fora do escopo.

## 14. Acceptance Criteria

Toda User Story que esteja sendo preparada para desenvolvimento deve possuir critérios de aceitação suficientes para permitir a verificação do comportamento esperado.

Os critérios devem seguir o padrão definido em:

product/user-stories/acceptance-criteria.md

Podem ser escritos como:

- checklist;
- cenários;
- Given / When / Then.

## 15. User Story e Requirements

Requirements descrevem necessidades, regras, comportamentos ou restrições do produto de forma mais estruturada.

User Stories representam essas necessidades sob a perspectiva do usuário ou público beneficiado.

Uma User Story pode estar relacionada a:

- um ou mais requisitos;
- parte de um requisito;
- vários requisitos relacionados.

Não deve existir uma regra rígida de 1:1.

A relação deve ser explicitada por rastreabilidade.

## 16. User Story e PRD

O PRD define a visão e o escopo do produto ou capacidade.

User Stories detalham unidades de valor derivadas dessa definição.

Uma User Story deve ser coerente com o PRD que a originou.

Quando uma User Story exigir alteração significativa do escopo definido no PRD, o impacto deve ser analisado antes da alteração.

## 17. User Story e Acceptance Criteria

A User Story define:

> o que o usuário precisa e por quê.

Acceptance Criteria define:

> quais condições observáveis devem ser satisfeitas.

Acceptance Criteria não substituem a User Story.

## 18. Granularidade

Uma User Story deve ser suficientemente pequena para permitir análise, priorização e refinamento, mas suficientemente grande para representar uma unidade de valor.

Evitar:

- histórias excessivamente grandes;
- histórias puramente técnicas;
- histórias sem valor identificável;
- fragmentação artificial.

Quando uma User Story contiver múltiplas unidades independentes de valor, ela deve ser avaliada para decomposição.

## 19. Decomposição

Uma User Story pode ser decomposta em outras User Stories quando houver unidades de valor suficientemente independentes.

A decomposição deve preservar a rastreabilidade com a necessidade original.

Exemplo:

Feature: Gestão de pagamentos

- US-001 — Consultar pagamentos
- US-002 — Filtrar pagamentos
- US-003 — Exportar pagamentos

Não decompor apenas porque uma implementação possui várias tarefas técnicas.

## 20. Evolução e versionamento da User Story

Uma User Story é um artefato versionado.

Alterações relevantes devem ser registradas no histórico Git do projeto.

Exemplo:

US-023

v1.0  
Consultar pagamentos.

v1.1  
Adiciona filtro por período.

v1.2  
Adiciona filtro por fornecedor.

A evolução do documento não cria automaticamente uma nova User Story.

O identificador US-023 pode permanecer o mesmo enquanto a necessidade ou capacidade representada continuar sendo essencialmente a mesma unidade de valor.

Uma nova User Story deve ser considerada quando surgir uma nova unidade de valor ou comportamento suficientemente independente para possuir identidade, prioridade ou ciclo de vida próprios.

## 21. User Story e itens operacionais de backlog

Uma User Story como artefato de produto não deve ser confundida automaticamente com um item específico de uma ferramenta de gestão de trabalho.

Por exemplo, uma User Story pode resultar em um ou mais itens operacionais:

US-023 — Consultar pagamentos

- Jira Story A
- Jira Story B
- Jira Story C

A relação não precisa ser 1:1.

Um item operacional pode representar:

- uma parte da implementação da User Story;
- uma entrega incremental;
- uma atividade necessária para concluir a User Story;
- uma evolução específica;
- outra unidade operacional definida pelo modelo de backlog adotado.

Da mesma forma, a ferramenta utilizada pode possuir sua própria estrutura de Epic, Feature, Story, Task, Bug ou outros tipos.

O standard central não deve assumir que a estrutura operacional de uma ferramenta específica seja equivalente à estrutura dos artefatos de produto.

## 22. Versionamento da User Story não equivale a novos itens de backlog

Uma nova versão da User Story não deve automaticamente gerar um novo item operacional.

Exemplo:

US-023 v1.0  
→ Jira Story A

US-023 v1.1  
→ Jira Story B

Essa relação pode existir, mas não deve ser uma regra automática.

Quando a alteração representar apenas evolução da mesma unidade de valor, o item operacional existente pode ser atualizado, ou um novo item pode ser criado conforme o processo de backlog do projeto.

Quando a alteração representar uma nova unidade de valor, deve-se avaliar a criação de uma nova User Story.

## 23. Rastreabilidade

A User Story deve permitir rastreamento para:

Discovery → Requirements → PRD → Feature → User Story → Acceptance Criteria → Backlog / itens operacionais

Quando aplicável, a rastreabilidade também deve funcionar no sentido inverso.

Exemplo:

Jira Story  
→ US-023  
→ PRD-001  
→ RF-014

A ferramenta de backlog não deve ser considerada a fonte normativa do conteúdo da User Story quando o projeto adota Documentation-as-Code.

O documento versionado no repositório do projeto deve permanecer como fonte normativa do artefato de produto, salvo decisão explícita em sentido contrário.

## 24. Dependências

Dependências relevantes devem ser explicitadas.

Podem incluir:

- outra User Story;
- requisito;
- decisão de produto;
- dependência externa;
- dependência de negócio;
- dependência regulatória;
- outra capacidade do produto.

Dependências técnicas detalhadas devem ser tratadas em documentação apropriada quando o escopo técnico estiver sendo elaborado.

## 25. Perguntas em Aberto

Questões que impedem a definição completa da User Story devem ser registradas explicitamente.

Não devem ser resolvidas por inferência do agente.

Exemplo:

- O filtro deve considerar a data de pagamento ou a data de competência?

## 26. Status

Os projetos podem adotar estados compatíveis com seu processo.

Exemplo:

Draft  
Refining  
Ready for Review  
Approved  
Ready for Development  
In Progress  
Done  
Cancelled  
Obsolete

O conjunto definitivo de status pode ser definido pelo projeto ou pela ferramenta utilizada.

O status não deve substituir os critérios de entrada e saída definidos pelos gates.

## 27. Ready for Development

Antes de uma User Story ser considerada pronta para desenvolvimento, deve possuir, quando aplicável:

- objetivo compreensível;
- valor identificado;
- escopo definido;
- Acceptance Criteria;
- dependências identificadas;
- perguntas críticas resolvidas;
- rastreabilidade;
- ausência de ambiguidades críticas;
- coerência com PRD e Requirements.

## 28. Responsabilidades

### Product Owner

Responsável por:

- definir valor;
- validar necessidade;
- decidir escopo;
- resolver ambiguidades de negócio;
- priorizar;
- aprovar a User Story;
- aprovar mudanças relevantes.

### Product Analyst

Responsável por:

- estruturar;
- analisar;
- identificar lacunas;
- validar coerência;
- apoiar rastreabilidade;
- apoiar análise de impacto.

### Requirements Agent

Pode:

- estruturar User Stories;
- identificar inconsistências;
- verificar rastreabilidade;
- identificar ambiguidades;
- sugerir decomposição;
- verificar coerência com Requirements e PRD.

Não pode:

- inventar decisões;
- aprovar;
- priorizar;
- assumir decisões de negócio;
- alterar o padrão central.

### Product Owner Agent

Pode:

- propor User Stories;
- estruturar escopo;
- propor Acceptance Criteria;
- identificar inconsistências;
- analisar impacto;
- manter rastreabilidade.

Não pode:

- tomar decisões de negócio não fornecidas;
- aprovar autonomamente;
- definir prioridade sem autorização;
- inventar regras.

## 29. Comportamento do agente diante de incerteza

Quando uma informação necessária não estiver disponível, o agente deve:

1. identificar a lacuna;
2. registrar a questão;
3. indicar o impacto;
4. solicitar decisão quando necessário.

O agente não deve preencher lacunas críticas por inferência.

## 30. Validação de qualidade

Antes de considerar a User Story pronta, verificar:

- [ ] usuário identificado;
- [ ] necessidade clara;
- [ ] valor explícito;
- [ ] escopo definido;
- [ ] critérios de aceitação definidos;
- [ ] dependências identificadas;
- [ ] perguntas críticas resolvidas;
- [ ] rastreabilidade estabelecida;
- [ ] coerência com PRD;
- [ ] coerência com Requirements;
- [ ] ausência de solução técnica desnecessária.

## 31. Entry Criteria

Para iniciar a elaboração da User Story, deve existir:

- Feature Definition aprovada;
- PRD aprovado;
- Requirements suficientes para o escopo;
- contexto de usuário ou público;
- capacidade ou necessidade identificada.

## 32. Exit Criteria

Uma User Story pode avançar quando:

- estrutura está completa;
- valor está claro;
- escopo está definido;
- Acceptance Criteria estão definidos;
- dependências relevantes estão identificadas;
- questões críticas estão resolvidas;
- rastreabilidade está estabelecida;
- critérios de Ready for Development foram atendidos.

## 33. Gate — Ready for Development

O gate verifica se as User Stories de uma Feature estão suficientemente definidas para entrarem em desenvolvimento.

**PARADA OBRIGATÓRIA (STOP):** A aprovação é estritamente humana. Agentes autônomos são **PROIBIDOS** de avançar para a fase de implementação (código) sem que o Humano valide e autorize as User Stories propostas para a Feature.

O agente pode preparar e validar o material, mas não deve substituir a responsabilidade humana pela decisão de produto.

## 34. Revisão e alteração

Alterações relevantes devem ser avaliadas quanto ao impacto sobre:

- Requirements;
- PRD;
- outras User Stories;
- Acceptance Criteria;
- backlog;
- decisões previamente aprovadas.

Quando necessário, o artefato de origem também deve ser atualizado.

## 35. Obsolescência

Uma User Story pode tornar-se:

- cancelada;
- substituída;
- obsoleta.

O documento não deve ser apagado quando seu histórico for relevante.

O estado deve ser registrado no próprio artefato ou no mecanismo de versionamento adotado pelo projeto.

## 36. Documentation-as-Code

User Stories devem ser armazenadas como arquivos versionados no repositório do projeto.

Exemplo:

docs/
└── product/
    └── user-stories/
        ├── US-001.md
        ├── US-002.md
        └── US-003.md

O padrão do central repository deve permanecer separado dos artefatos concretos do projeto.

## 37. Convenções de documentação

Conteúdo dos documentos:

- pt-BR por padrão.

Nomes de arquivos e diretórios:

- English.

Termos técnicos consolidados podem permanecer em inglês quando isso melhorar a precisão.

## 38. Template

# US-001 — [Título]

## User Story

Como [usuário],  
quero [necessidade],  
para [valor].

## Contexto

[Contexto.]

## Valor Esperado

[Valor.]

## Escopo

[Escopo.]

## Acceptance Criteria

- [ ] [Critério]

## Dependências

- [Dependência]

## Perguntas em Aberto

- [Pergunta]

## Rastreabilidade

- Feature: [referência]
- PRD: [referência]
- Requirements: [referência]
- Discovery: [referência]

## 39. Exemplo

# US-023 — Consultar pagamentos

## User Story

Como síndico,  
quero consultar os pagamentos realizados pelo condomínio,  
para acompanhar as despesas realizadas.

## Contexto

O síndico precisa consultar pagamentos realizados em determinado período.

## Valor Esperado

Permitir acompanhamento das despesas realizadas.

## Escopo

Inclui:

- consulta de pagamentos;
- filtro por período;
- identificação do fornecedor.

Não inclui:

- exportação para arquivo.

## Acceptance Criteria

- [ ] O usuário consegue consultar pagamentos.
- [ ] O usuário consegue informar um período.
- [ ] Os pagamentos apresentados pertencem ao período informado.

## Dependências

- Dados de pagamentos disponíveis.

## Perguntas em Aberto

Nenhuma.

## Rastreabilidade

- Feature: FEAT-001
- PRD: PRD-001
- Requirements: RF-014
- Discovery: DISC-003

## 40. Relação com outros standards

Este standard deve ser utilizado em conjunto com:

- product/requirements/requirements-standard.md
- product/requirements/functional-requirements.md
- product/requirements/non-functional-requirements.md
- product/prd/prd-standard.md
- product/features/feature-definition-standard.md
- product/user-stories/acceptance-criteria.md
- product/backlog/backlog-management.md
- governance/development-lifecycle.md

## 41. Precedência

Quando houver conflito entre este standard e outro standard central, deve ser seguido o mecanismo de precedência definido pela governança do Central Repository.

Quando houver conflito entre o standard central e uma necessidade específica de projeto, deve ser seguido o processo definido em:

governance/exceptions.md

## 42. Resultado esperado

O uso deste standard deve produzir User Stories:

- claras;
- orientadas a valor;
- verificáveis;
- rastreáveis;
- versionáveis;
- independentes de implementação;
- adequadamente relacionadas ao backlog operacional;
- consistentes com PRD e Requirements.