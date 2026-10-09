# Padrão de Requisitos

## 1. Objetivo

Definir o padrão para levantamento, análise, documentação, validação e manutenção de requisitos em projetos que adotam o Software Delivery Standards.

Os requisitos transformam o entendimento obtido durante Discovery em necessidades explícitas que devem ser atendidas pelo produto.

Este padrão estabelece:

- o que caracteriza um requisito;
- quando requisitos devem ser definidos;
- como requisitos devem ser estruturados;
- como requisitos devem ser classificados;
- regras para escrita;
- critérios de qualidade;
- rastreabilidade;
- responsabilidades;
- participação de agentes de IA;
- critérios de entrada e saída;
- revisão e aprovação;
- tratamento de mudanças e impactos.

Este documento define o padrão geral de requisitos.

Requisitos funcionais e não funcionais possuem padrões complementares quando regras específicas forem necessárias.

---

## 2. Conceito de Requisito

Um requisito representa uma necessidade, comportamento, condição ou restrição que deve ser atendida pelo produto.

Um requisito deve expressar o que precisa ser atendido, e não necessariamente como será implementado.

Exemplo:

> O usuário deve conseguir consultar o status atual de um pedido.

Esse requisito descreve uma necessidade do produto.

A definição de como essa consulta será implementada pertence às etapas técnicas posteriores.

---

## 3. Objetivos dos Requisitos

Os requisitos devem permitir que as pessoas envolvidas no produto tenham entendimento comum sobre:

- o que o produto deve fazer;
- quais necessidades devem ser atendidas;
- quais comportamentos são esperados;
- quais regras devem ser respeitadas;
- quais condições devem ser satisfeitas;
- quais restrições existem;
- quais comportamentos não são permitidos.

Os requisitos também devem fornecer base para:

- elaboração do PRD;
- decomposição em User Stories;
- definição de Acceptance Criteria;
- validação do produto;
- análise de impacto de mudanças;
- rastreabilidade ao longo do ciclo de vida.

---

## 4. Quando Levantar Requisitos

Os requisitos devem ser levantados quando o entendimento do problema obtido durante Discovery precisar ser transformado em necessidades explícitas do produto.

O levantamento deve ocorrer antes da elaboração detalhada do PRD quando houver necessidade de maior formalização das necessidades, comportamentos ou restrições.

O nível de detalhamento deve ser proporcional à complexidade da iniciativa.

---

## 5. Quando o Levantamento Formal Pode Ser Simplificado

Nem toda iniciativa exige um conjunto extenso de requisitos.

O nível de formalização pode ser reduzido quando:

- a alteração é pequena;
- o comportamento já está claramente definido;
- os requisitos existentes permanecem válidos;
- a mudança possui baixo nível de incerteza;
- não existem novas regras relevantes;
- o PRD ou outro artefato existente já contém informação suficiente.

A simplificação não deve eliminar informações necessárias para compreensão, implementação ou validação do produto.

---

## 6. Princípios

### 6.1 Clareza

Um requisito deve possuir significado claro e não depender de interpretações individuais.

### 6.2 Necessidade

Todo requisito deve possuir uma justificativa relacionada a uma necessidade do usuário, negócio, produto, regra ou restrição.

### 6.3 Verificabilidade

Deve ser possível verificar posteriormente se o requisito foi atendido.

### 6.4 Independência da Implementação

Sempre que possível, o requisito deve descrever o comportamento ou necessidade sem prescrever uma implementação técnica específica.

### 6.5 Não Ambiguidade

Um requisito não deve permitir interpretações conflitantes.

Termos vagos como:

- adequado;
- rápido;
- intuitivo;
- fácil;
- eficiente;
- simples;
- adequado ao negócio;

não devem ser utilizados sem uma definição verificável.

### 6.6 Consistência

Requisitos não devem entrar em conflito entre si.

Quando houver conflito, ele deve ser explicitamente identificado e resolvido pelo responsável apropriado.

### 6.7 Rastreabilidade

Todo requisito relevante deve poder ser relacionado à informação que originou sua necessidade e aos artefatos derivados.

### 6.8 Evolução Controlada

Requisitos podem evoluir durante o ciclo de vida.

Mudanças relevantes devem ser analisadas quanto ao impacto nos artefatos derivados.

---

## 7. Classificação de Requisitos

Os requisitos devem ser classificados conforme sua natureza.

### 7.1 Requisitos Funcionais

Descrevem comportamentos, capacidades ou funções que o produto deve oferecer.

Exemplo:

> O usuário deve conseguir cancelar um pedido antes do início da preparação.

Requisitos funcionais são detalhados no padrão `functional-requirements.md`.

### 7.2 Requisitos Não Funcionais

Descrevem características, condições ou atributos que devem ser atendidos pelo produto.

Exemplos:

- disponibilidade;
- desempenho;
- segurança;
- acessibilidade;
- privacidade;
- capacidade;
- compatibilidade.

Requisitos não funcionais são detalhados no padrão `non-functional-requirements.md`.

### 7.3 Regras de Negócio

Representam regras que determinam condições, restrições ou comportamentos impostos pelo negócio.

Exemplo:

> Um pedido somente pode ser cancelado antes da emissão da nota fiscal.

Regras de negócio podem ser documentadas junto aos requisitos ou em seção própria quando isso facilitar a compreensão.

### 7.4 Restrições

Representam condições que limitam as alternativas possíveis para o produto.

Exemplos:

- exigência regulatória;
- prazo obrigatório;
- política organizacional;
- processo existente que precisa ser preservado.

Restrições técnicas detalhadas devem ser tratadas nas etapas técnicas posteriores.

### 7.5 Dependências

Representam condições externas necessárias para que um requisito seja atendido.

Exemplos:

- outro produto;
- processo externo;
- disponibilidade de determinada informação;
- decisão de outra área;
- fornecedor.

---

## 8. Estrutura de um Requisito

Cada requisito relevante deve possuir, quando aplicável:

- identificador;
- título;
- descrição;
- tipo;
- origem;
- justificativa;
- prioridade;
- critérios de aceitação ou condição de verificação;
- dependências;
- observações;
- status.

Exemplo:

    ID: RF-001
    Título: Consulta de status do pedido
    Tipo: Funcional
    Descrição: O usuário deve conseguir consultar o status atual de seu pedido.
    Origem: Discovery-001
    Prioridade: Alta
    Status: Aprovado

A estrutura exata pode variar conforme o tipo de requisito.

---

## 9. Identificação

Requisitos devem possuir identificadores estáveis quando a rastreabilidade individual for necessária.

Exemplos:

- RF-001 — requisito funcional;
- RNF-001 — requisito não funcional;
- RN-001 — regra de negócio;
- RC-001 — restrição.

Os identificadores devem permanecer estáveis durante o ciclo de vida sempre que possível.

A alteração do texto de um requisito não deve, por si só, gerar um novo identificador.

Um novo identificador deve ser criado quando representar um novo requisito.

---

## 10. Título

O título deve resumir o requisito de forma clara e objetiva.

Exemplo:

> Consulta do status do pedido

Evitar títulos vagos como:

> Melhorias no pedido

ou:

> Nova funcionalidade

---

## 11. Descrição

A descrição deve representar o comportamento, necessidade ou condição que precisa ser atendida.

Preferir linguagem objetiva.

Exemplo:

> O sistema deve permitir que o usuário consulte o status atual de um pedido informado.

Evitar:

> Criar uma tela moderna para acompanhamento do pedido.

A segunda formulação prescreve uma solução visual e utiliza um termo subjetivo.

---

## 12. Regras de Escrita

Os requisitos devem:

- utilizar linguagem clara;
- utilizar frases objetivas;
- evitar termos subjetivos;
- evitar ambiguidades;
- utilizar vocabulário consistente;
- evitar duplicidade;
- evitar detalhes de implementação desnecessários;
- permitir verificação posterior.

Quando apropriado, utilizar estruturas como:

> O produto deve...

ou:

> O usuário deve conseguir...

ou:

> Quando determinada condição ocorrer, o produto deve...

---

## 13. Termos Obrigatórios e Condicionais

Quando uma condição for obrigatória, utilizar linguagem que represente claramente essa obrigatoriedade.

Exemplos:

- deve;
- não deve;
- somente pode;
- é obrigatório;
- é permitido;
- é proibido.

Evitar termos ambíguos como:

- deveria;
- preferencialmente;
- idealmente;
- talvez;
- sempre que possível.

Quando uma condição for opcional, essa característica deve ser explicitamente indicada.

---

## 14. Evitar Prescrição Prematura de Solução

Requisitos devem evitar definir uma solução técnica específica quando isso ainda não for uma decisão necessária.

Exemplo inadequado:

> O produto deve utilizar uma API REST para consultar os pedidos.

Exemplo adequado:

> O produto deve disponibilizar ao usuário as informações atuais do pedido.

A definição da API ou arquitetura pertence à etapa técnica, salvo quando a tecnologia representar uma restrição ou decisão já estabelecida.

---

## 15. Requisitos e Regras de Negócio

Regras de negócio devem ser explicitamente identificadas quando sua natureza puder causar confusão com o comportamento do produto.

Exemplo:

    RF-001
    O usuário deve conseguir cancelar um pedido.

    RN-001
    Um pedido não pode ser cancelado após a emissão da nota fiscal.

A User Story e seus Acceptance Criteria podem posteriormente utilizar ambos para definir o comportamento esperado.

---

## 16. Requisitos e Restrições

Uma restrição não deve ser apresentada como uma funcionalidade.

Exemplo:

    RF-001
    O usuário deve conseguir consultar seus pedidos.

    RC-001
    A consulta deve respeitar as regras de privacidade aplicáveis.

Essa separação facilita a análise de impacto e a rastreabilidade.

---

## 17. Prioridade

Quando aplicável, requisitos podem possuir prioridade.

A classificação deve utilizar um vocabulário definido pelo projeto.

Exemplo:

- Alta;
- Média;
- Baixa.

A prioridade deve representar a importância relativa do requisito para o produto.

Prioridade não deve ser definida automaticamente pelo agente sem validação do responsável pelo produto.

---

## 18. Status

O status deve indicar o estado atual do requisito.

Exemplo:

- Rascunho;
- Em análise;
- Em validação;
- Aprovado;
- Rejeitado;
- Obsoleto.

O conjunto de status pode ser adaptado ao fluxo do projeto, desde que seu significado seja claro.

---

## 19. Ambiguidades

Quando um requisito possuir múltiplas interpretações possíveis, ele não deve ser considerado pronto.

O agente ou analista deve:

1. identificar a ambiguidade;
2. registrar a questão;
3. identificar o impacto potencial;
4. solicitar esclarecimento;
5. atualizar o requisito após a decisão.

Exemplo de ambiguidade:

> O sistema deve responder rapidamente.

Pergunta necessária:

> Qual tempo de resposta é considerado aceitável para essa operação?

---

## 20. Conflitos entre Requisitos

Quando dois ou mais requisitos entrarem em conflito:

1. o conflito deve ser identificado;
2. os requisitos envolvidos devem ser registrados;
3. o impacto deve ser avaliado;
4. a decisão deve ser tomada pelo responsável apropriado;
5. os requisitos devem ser atualizados;
6. a decisão relevante deve ser preservada.

Um agente não deve escolher unilateralmente qual requisito deve prevalecer quando isso envolver uma decisão de negócio.

---

## 21. Duplicidade

Requisitos equivalentes ou redundantes devem ser identificados.

Quando dois requisitos representarem a mesma necessidade, deve-se preferir consolidá-los.

A consolidação deve preservar as informações relevantes e avaliar o impacto sobre os artefatos que referenciam os requisitos envolvidos.

---

## 22. Rastreabilidade

Os requisitos devem manter rastreabilidade com:

- Discovery;
- evidências, quando aplicável;
- decisões relevantes;
- PRD;
- User Stories;
- Acceptance Criteria.

Exemplo:

    Discovery D-001
          ↓
    RF-001
          ↓
    PRD-001
          ↓
    US-001
          ↓
    AC-001

A rastreabilidade pode ser representada diretamente nos documentos, por identificadores ou por outro mecanismo definido pelo projeto.

---

## 23. Relação com Discovery

Os requisitos devem ser derivados do entendimento obtido durante Discovery.

Isso não significa que todo requisito precise estar explicitamente escrito no Discovery.

Durante Requirements, novas informações podem surgir.

Quando uma nova informação alterar significativamente o entendimento do problema, deve-se avaliar se o Discovery precisa ser revisado.

---

## 24. Relação com o PRD

O PRD consolida os requisitos em uma definição coerente do produto.

O PRD pode:

- agrupar requisitos;
- contextualizar requisitos;
- estabelecer escopo;
- definir objetivos;
- consolidar regras;
- definir comportamento esperado em nível de produto.

Os requisitos detalhados não devem ser duplicados desnecessariamente no PRD.

O PRD deve manter referência aos requisitos quando a rastreabilidade individual for relevante.

---

## 25. Relação com User Stories

User Stories devem ser derivadas dos requisitos e do PRD.

Um requisito pode originar uma ou mais User Stories.

Uma User Story pode atender a mais de um requisito.

Exemplo:

    RF-001 ─────┐
                ├──> US-001
    RF-002 ─────┘

    RF-003 ────────> US-002

A decomposição deve preservar a intenção original do requisito.

---

## 26. Requisitos e Acceptance Criteria

Acceptance Criteria devem permitir verificar se uma User Story atende aos requisitos relacionados.

O requisito define a necessidade ou comportamento.

O Acceptance Criteria define condições verificáveis para a história.

Exemplo:

    Requisito:

    RF-001
    O usuário deve conseguir cancelar um pedido elegível.

    Acceptance Criteria:

    - O usuário consegue solicitar o cancelamento.
    - Pedidos já faturados não podem ser cancelados.
    - Após o cancelamento, o pedido apresenta status "Cancelado".

---

## 27. Responsabilidades

### Product Owner

Responsável por:

- validar necessidades de produto;
- definir ou aprovar prioridades;
- resolver ambiguidades de negócio;
- aprovar requisitos relevantes;
- validar mudanças de escopo;
- tomar decisões quando requisitos entrarem em conflito.

### Product Analyst

Pode apoiar:

- levantamento;
- análise;
- documentação;
- decomposição;
- validação;
- identificação de inconsistências;
- identificação de ambiguidades;
- rastreabilidade.

### Requirements Agent

Pode apoiar:

- analisar Discovery;
- identificar potenciais requisitos;
- propor requisitos;
- classificar requisitos;
- identificar duplicidades;
- identificar ambiguidades;
- identificar conflitos;
- sugerir perguntas;
- verificar qualidade;
- verificar rastreabilidade;
- analisar impacto de alterações;
- organizar documentação.

O Requirements Agent não deve:

- inventar requisitos;
- inventar regras de negócio;
- assumir decisões de produto;
- escolher entre requisitos conflitantes sem autorização;
- definir prioridades autonomamente;
- aprovar requisitos em nome do Product Owner.

---

## 28. Capacidades Esperadas do Requirements Agent

O agente deve ser capaz de:

### Análise

- interpretar Discovery;
- identificar necessidades explícitas;
- identificar necessidades implícitas que exijam validação;
- identificar lacunas;
- identificar dependências;
- identificar restrições.

### Estruturação

- transformar informações em requisitos candidatos;
- classificar requisitos;
- atribuir identificadores conforme o padrão;
- organizar requisitos por domínio ou capacidade.

### Validação

- verificar clareza;
- verificar consistência;
- verificar verificabilidade;
- identificar ambiguidade;
- identificar duplicidade;
- identificar conflitos;
- verificar rastreabilidade.

### Investigação

- gerar perguntas;
- solicitar esclarecimentos;
- identificar informações ausentes;
- sugerir evidências que poderiam reduzir incertezas.

### Impacto

- identificar requisitos afetados por mudanças;
- identificar User Stories potencialmente afetadas;
- identificar necessidade de revisão do PRD.

---

## 29. Comportamento do Agente diante de Incerteza

Quando não houver informação suficiente para definir um requisito, o agente deve:

1. identificar a lacuna;
2. explicar por que ela é relevante;
3. formular uma pergunta objetiva;
4. registrar a questão como pendência;
5. aguardar a decisão ou informação necessária.

O agente não deve preencher a lacuna com uma suposição apresentada como requisito aprovado.

---

## 30. Critérios de Qualidade

Um requisito de qualidade deve ser:

- claro;
- necessário;
- verificável;
- consistente;
- não ambíguo;
- rastreável;
- suficientemente completo;
- independente de implementação quando aplicável;
- não redundante;
- compreensível para as pessoas envolvidas.

Um conjunto de requisitos de qualidade deve também:

- possuir cobertura adequada do problema;
- evitar conflitos;
- evitar duplicidades;
- representar as regras relevantes;
- identificar restrições relevantes;
- manter rastreabilidade.

---

## 31. Critérios de Entrada

A etapa de Requirements pode ser iniciada quando:

- o problema está suficientemente compreendido;
- o objetivo da iniciativa está disponível;
- o contexto relevante está disponível;
- stakeholders relevantes podem ser identificados;
- informações existentes estão disponíveis em nível suficiente.

Não é necessário que Discovery esteja completamente livre de dúvidas.

Entretanto, dúvidas que impeçam a definição dos requisitos devem ser tratadas antes do avanço.

---

## 32. Critérios de Saída

Requirements pode ser considerado concluído quando:

- requisitos relevantes foram identificados;
- requisitos estão suficientemente claros;
- requisitos estão classificados;
- regras de negócio relevantes estão registradas;
- restrições relevantes estão identificadas;
- dependências relevantes estão identificadas;
- ambiguidades críticas foram resolvidas ou explicitamente registradas;
- conflitos relevantes foram resolvidos ou encaminhados;
- rastreabilidade com Discovery está disponível;
- os requisitos possuem qualidade suficiente para suportar o PRD.

---

## 33. Gate

Requirements utiliza o:

**Requirements Readiness Gate**

O gate deve verificar:

- cobertura das necessidades identificadas;
- clareza;
- consistência;
- ausência de ambiguidades críticas;
- regras de negócio;
- restrições;
- dependências;
- rastreabilidade;
- capacidade de utilização dos requisitos na elaboração do PRD.

A aprovação do gate é responsabilidade do Product Owner ou do papel definido pelo projeto.

---

## 34. Revisão e Aprovação

Os requisitos devem ser revisados quando:

- novas informações forem identificadas;
- uma hipótese for invalidada;
- o problema mudar;
- o escopo mudar;
- uma regra de negócio mudar;
- uma dependência mudar;
- houver conflito entre requisitos;
- uma User Story revelar uma lacuna.

A aprovação deve representar o entendimento atual do produto.

A aprovação não impede alterações futuras.

---

## 35. Mudanças e Análise de Impacto

Quando um requisito for alterado:

1. registrar a alteração;
2. identificar o motivo;
3. avaliar impacto;
4. identificar artefatos derivados;
5. revisar PRD;
6. revisar User Stories;
7. revisar Acceptance Criteria;
8. atualizar rastreabilidade.

Exemplo:

    RF-001 alterado
        ↓
    PRD afetado
        ↓
    US-001 e US-002 afetadas
        ↓
    Acceptance Criteria revisados

---

## 36. Versionamento

Os requisitos devem utilizar o versionamento do repositório do projeto.

Alterações devem permanecer registradas no histórico do Git.

Não é necessário criar uma cópia física do requisito a cada alteração.

O histórico do Git deve ser utilizado como mecanismo principal de versionamento.

Quando uma alteração representar uma mudança significativa de negócio, a decisão e seu impacto devem ser explicitamente registrados no artefato ou documento apropriado.

---

## 37. Obsolescência

Um requisito pode se tornar obsoleto quando:

- a necessidade deixar de existir;
- o produto mudar de direção;
- outro requisito substituí-lo;
- uma regra deixar de ser válida;
- a funcionalidade deixar de fazer parte do produto.

Requisitos obsoletos não devem ser simplesmente apagados quando sua história for relevante.

Devem ser marcados como obsoletos quando necessário e permanecer no histórico do Git.

Quando um requisito for substituído, a relação entre o requisito antigo e o novo deve ser registrada quando isso for relevante para a rastreabilidade.

---

## 38. Convenções de Documentação

Os requisitos devem:

- ser documentados em Markdown quando aplicável;
- utilizar linguagem clara e objetiva;
- evitar informações duplicadas;
- utilizar identificadores estáveis;
- manter rastreabilidade;
- utilizar os padrões específicos de requisitos funcionais e não funcionais;
- preservar o histórico no Git.

O conteúdo deve ser escrito em português-BR, salvo quando houver motivo para utilização de termos em outro idioma.

Termos técnicos amplamente utilizados podem permanecer em inglês quando isso facilitar a interoperabilidade com ferramentas e práticas do mercado.

---

## 39. Relação com Outros Padrões

Este padrão deve ser utilizado em conjunto com:

- Product Delivery Lifecycle;
- Discovery Standard;
- Functional Requirements;
- Non-Functional Requirements;
- PRD Standard;
- User Story Standard;
- Acceptance Criteria;
- Definition of Ready.

Este documento define o padrão geral para Requirements.

Regras específicas de requisitos funcionais e não funcionais devem ser mantidas nos respectivos padrões.

---

## 40. Estrutura Recomendada do Artefato

Quando requisitos forem mantidos em um documento consolidado, a estrutura recomendada é:

# Requisitos

## 1. Contexto

## 2. Requisitos Funcionais

### RF-001 — Título

**Descrição:**

...

**Origem:**

...

**Prioridade:**

...

**Status:**

...

### RF-002 — Título

...

## 3. Requisitos Não Funcionais

### RNF-001 — Título

**Descrição:**

...

**Origem:**

...

**Prioridade:**

...

**Status:**

...

## 4. Regras de Negócio

### RN-001 — Título

**Descrição:**

...

## 5. Restrições

### RC-001 — Título

**Descrição:**

...

## 6. Dependências

### DEP-001 — Título

**Descrição:**

...

## 7. Perguntas em Aberto

### Q-001 — Pergunta

**Responsável:**

...

**Impacto:**

...

**Status:**

...

## 8. Rastreabilidade

| Requisito | Origem | PRD | User Stories |
|---|---|---|---|
| RF-001 | D-001 | PRD-001 | US-001 |
| RF-002 | D-001 | PRD-001 | US-002 |