# Functional Requirements Standard

## 1. Objetivo

Este documento define o padrão para identificação, definição, documentação, validação e manutenção de Requisitos Funcionais no contexto de Product Delivery e Documentation-as-Code.

O objetivo é estabelecer uma forma consistente de descrever comportamentos e capacidades que o produto deve oferecer, permitindo que diferentes pessoas, agentes e equipes produzam requisitos funcionais compreensíveis, verificáveis e rastreáveis.

Este padrão complementa o `requirements-standard.md`, que define as regras gerais para requisitos.

---

## 2. Escopo

Este padrão trata especificamente de Requisitos Funcionais.

Estão incluídos:

- definição de comportamento funcional;
- capacidades que o produto deve oferecer;
- ações realizadas por usuários ou outros atores;
- entradas e saídas funcionais;
- condições e pré-condições;
- resultados esperados;
- fluxos alternativos e exceções;
- estados e transições quando relevantes ao comportamento;
- relacionamento com Regras de Negócio;
- relacionamento com outros requisitos;
- rastreabilidade;
- critérios de qualidade;
- revisão, aprovação e evolução;
- uso por agentes de IA.

Não fazem parte deste padrão:

- definição detalhada de requisitos não funcionais;
- desenho de arquitetura;
- definição de APIs ou contratos técnicos;
- definição de componentes de software;
- escolha de tecnologias;
- implementação;
- testes automatizados;
- código.

Esses temas devem ser tratados por padrões específicos quando aplicável.

---

## 3. Conceito de Requisito Funcional

Um Requisito Funcional descreve um comportamento, capacidade ou função que o produto deve disponibilizar ou executar.

Ele responde principalmente à pergunta:

> O que o produto deve fazer?

Exemplos:

- O usuário deve conseguir consultar o status de um pedido.
- O produto deve permitir o cancelamento de pedidos elegíveis.
- O sistema deve registrar a solicitação de cancelamento.
- O produto deve apresentar ao usuário os pedidos associados à sua conta.

Um Requisito Funcional deve descrever o comportamento esperado do produto sem prescrever desnecessariamente sua implementação.

---

## 4. Objetivos dos Requisitos Funcionais

Os Requisitos Funcionais devem permitir:

- compreender o comportamento esperado do produto;
- alinhar entendimento entre negócio, produto, análise e desenvolvimento;
- identificar claramente capacidades que precisam existir;
- orientar a elaboração do PRD;
- apoiar a decomposição em User Stories;
- permitir a definição de Acceptance Criteria;
- possibilitar validação e verificação;
- manter rastreabilidade entre necessidade e entrega;
- identificar impactos quando uma necessidade funcional for alterada.

---

## 5. Quando definir um Requisito Funcional

Um Requisito Funcional deve ser registrado quando existir uma capacidade ou comportamento do produto que precise ser explicitamente definido.

Exemplos:

- nova funcionalidade;
- alteração de comportamento existente;
- novo fluxo de usuário;
- nova capacidade de consulta, criação, alteração ou exclusão;
- novo processamento funcional;
- nova interação com usuário ou outro ator;
- nova regra que altera o comportamento do produto;
- novo resultado funcional esperado.

Nem todo comportamento precisa necessariamente ser registrado como um RF individual.

Em mudanças pequenas e simples, vários comportamentos relacionados podem ser agrupados quando isso não prejudicar:

- clareza;
- rastreabilidade;
- validação;
- decomposição posterior em User Stories.

A granularidade deve ser proporcional à complexidade do produto e da necessidade.

---

## 6. Princípios

Os Requisitos Funcionais devem seguir os seguintes princípios:

### 6.1 Clareza

O comportamento deve ser compreensível sem depender de interpretação subjetiva.

### 6.2 Verificabilidade

Deve ser possível determinar objetivamente se o comportamento foi atendido.

### 6.3 Independência de implementação

O requisito deve descrever o que o produto precisa fazer, evitando determinar como isso será implementado quando a implementação ainda não for uma decisão necessária.

### 6.4 Necessidade

Cada requisito deve representar uma necessidade real do produto, usuário, negócio ou contexto identificado.

### 6.5 Não ambiguidade

Um requisito não deve permitir interpretações significativamente diferentes.

### 6.6 Consistência

Um requisito não deve contradizer outros requisitos, regras ou decisões aprovadas.

### 6.7 Rastreabilidade

Quando relevante, deve ser possível relacionar o requisito à sua origem e aos artefatos derivados.

### 6.8 Evolução controlada

Alterações em um requisito devem permitir identificar possíveis impactos nos artefatos relacionados.

---

## 7. Estrutura de um Requisito Funcional

Quando aplicável, um Requisito Funcional pode conter:

- ID;
- título;
- descrição;
- origem;
- justificativa;
- atores;
- pré-condições;
- gatilho;
- comportamento esperado;
- entradas;
- saídas;
- regras de negócio relacionadas;
- exceções;
- dependências;
- prioridade;
- status;
- rastreabilidade;
- observações.

Nem todos os campos são obrigatórios em todos os casos.

A estrutura deve ser proporcional à complexidade do comportamento.

---

## 8. Identificação

Quando for necessária rastreabilidade individual, os Requisitos Funcionais devem utilizar identificadores estáveis.

Formato recomendado:

    RF-001
    RF-002
    RF-003

O identificador deve permanecer estável enquanto representar a mesma necessidade funcional.

Alterar a descrição de um requisito não significa necessariamente criar um novo ID.

Um novo ID deve ser criado quando houver uma nova necessidade funcional independente.

Quando um requisito for substituído por outro, a relação entre os requisitos deve ser registrada quando isso for relevante para preservar a rastreabilidade.

---

## 9. Título

O título deve representar de forma objetiva a capacidade ou comportamento descrito.

Exemplos adequados:

    Consulta de status do pedido
    Cancelamento de pedido
    Cadastro de fornecedor
    Emissão de relatório financeiro
    Consulta de documentos

Evitar títulos vagos:

    Melhorias no pedido
    Ajustes no sistema
    Nova funcionalidade
    Alterações diversas
    Tratamento do processo

O título deve permitir identificar rapidamente o assunto do requisito.

---

## 10. Descrição

A descrição deve representar o comportamento funcional esperado.

Exemplos:

    O usuário deve conseguir consultar o status atual de seu pedido.

    O produto deve permitir que o usuário solicite o cancelamento de um pedido elegível.

    O produto deve apresentar os pedidos associados ao usuário autenticado.

A descrição deve evitar detalhes de implementação que ainda não sejam decisões necessárias.

Exemplo inadequado:

    O sistema deve consultar a tabela Orders utilizando uma API REST GET.

Esse texto descreve uma solução técnica.

Uma formulação funcional seria:

    O produto deve permitir a consulta dos pedidos associados ao usuário.

A definição da API, banco de dados ou tecnologia deve ocorrer em um contexto apropriado quando necessária.

---

## 11. Atores

Quando relevante, o requisito pode identificar quem inicia ou participa do comportamento.

Exemplos de atores:

- usuário;
- administrador;
- operador;
- cliente;
- fornecedor;
- sistema externo;
- processo automatizado.

Exemplo:

    Ator: Usuário autenticado

    RF-001:
    O usuário autenticado deve conseguir consultar seus pedidos.

A identificação do ator deve ser utilizada quando sua ausência puder gerar ambiguidade.

---

## 12. Gatilho

Quando relevante, o requisito pode identificar o evento que inicia o comportamento.

Exemplos:

- usuário solicita uma ação;
- pedido é criado;
- pagamento é confirmado;
- documento é recebido;
- prazo é atingido;
- sistema externo envia uma informação.

Exemplo:

    Gatilho:
    O usuário solicita o cancelamento de um pedido.

    Comportamento:
    O produto deve verificar se o pedido é elegível para cancelamento.

O gatilho é especialmente útil em processos orientados a eventos ou fluxos.

---

## 13. Pré-condições

Pré-condições representam condições que precisam ser verdadeiras para que determinado comportamento possa ocorrer.

Exemplo:

    Pré-condições:
    - O usuário deve estar autenticado.
    - O pedido deve pertencer ao usuário.
    - O pedido deve estar em situação elegível para cancelamento.

Pré-condições não devem ser usadas quando a condição já estiver implícita e sua explicitação não acrescentar clareza.

---

## 14. Comportamento

O comportamento deve descrever o que o produto deve fazer quando o requisito for acionado.

Exemplo:

    O produto deve permitir que o usuário solicite o cancelamento de um pedido elegível.
    Após a confirmação da solicitação, o produto deve registrar o cancelamento e apresentar o novo status do pedido.

Quando houver uma sequência relevante, o comportamento pode ser descrito em etapas.

Exemplo:

    1. O usuário solicita o cancelamento.
    2. O produto verifica a elegibilidade do pedido.
    3. O produto solicita a confirmação do usuário.
    4. O produto registra o cancelamento.
    5. O produto apresenta o novo status.

A descrição deve permanecer funcional e evitar detalhes técnicos desnecessários.

---

## 15. Entradas

Quando relevante, o requisito deve identificar informações necessárias para executar o comportamento.

Exemplo:

    Entradas:
    - Identificador do pedido.
    - Solicitação de cancelamento.
    - Motivo do cancelamento, quando aplicável.

As entradas devem ser descritas pelo significado funcional.

Evitar especificar estruturas técnicas, formatos de payload ou campos de banco de dados neste nível, salvo quando forem requisitos funcionais propriamente ditos.

---

## 16. Saídas e resultados

Quando relevante, o requisito deve identificar o resultado esperado.

Exemplo:

    Saídas:
    - Solicitação de cancelamento registrada.
    - Status do pedido atualizado.
    - Confirmação apresentada ao usuário.

Uma saída pode ser:

- informação apresentada;
- registro criado ou alterado;
- mudança de estado;
- resultado disponibilizado;
- ação desencadeada;
- informação retornada a outro ator.

---

## 17. Fluxos alternativos

Quando um comportamento possuir caminhos alternativos relevantes, eles devem ser explicitados.

Exemplo:

    Fluxo principal:
    1. Usuário solicita cancelamento.
    2. Produto verifica elegibilidade.
    3. Produto confirma cancelamento.
    4. Produto apresenta o novo status.

    Fluxo alternativo:
    1. Usuário solicita cancelamento.
    2. Produto identifica que o pedido não é elegível.
    3. Produto não realiza o cancelamento.
    4. Produto informa o motivo ao usuário.

Fluxos alternativos devem ser documentados quando sua ausência puder gerar interpretação diferente do comportamento esperado.

---

## 18. Exceções funcionais

Exceções representam situações em que o comportamento esperado não pode ser executado normalmente.

Exemplo:

    Se o pedido não existir, o produto deve informar que o pedido não foi encontrado.

    Se o pedido não pertencer ao usuário, o produto não deve permitir sua consulta.

    Se o pedido não for elegível para cancelamento, o produto não deve realizar o cancelamento.

A exceção deve descrever o comportamento esperado do produto diante da condição.

Não é necessário descrever tratamento técnico de erro neste nível.

---

## 19. Estados e transições

Quando o comportamento envolver uma entidade com estados relevantes, os estados e transições podem ser explicitados.

Exemplo:

    Pedido:
    - Criado
    - Em processamento
    - Faturado
    - Cancelado
    - Concluído

    RF-010:
    Um pedido em processamento pode ser cancelado pelo usuário.

    RF-011:
    Um pedido faturado não pode ser cancelado pelo usuário.

Estados devem ser utilizados somente quando forem relevantes para compreender o comportamento.

Não é necessário criar um modelo formal de estados para comportamentos simples.

---

## 20. Regras de Negócio relacionadas

Um Requisito Funcional pode depender de uma ou mais Regras de Negócio.

Exemplo:

    RF-001:
    O usuário deve conseguir cancelar um pedido elegível.

    RN-001:
    Um pedido não pode ser cancelado após a emissão da nota fiscal.

O RF descreve a capacidade.

A RN define a condição de negócio que influencia essa capacidade.

Quando a regra for relevante para o comportamento, o relacionamento deve ser explicitado.

Exemplo:

    Regra de negócio relacionada:
    RN-001

---

## 21. Requisitos Funcionais e Restrições

Uma restrição não deve ser transformada artificialmente em comportamento funcional.

Exemplo:

    RF-001:
    O usuário deve conseguir consultar seus pedidos.

    RC-001:
    A consulta deve respeitar as regras de privacidade aplicáveis.

O RF descreve a capacidade.

A RC descreve uma condição ou limitação que deve ser respeitada.

---

## 22. Requisitos Funcionais e Requisitos Não Funcionais

Um comportamento funcional pode estar sujeito a requisitos não funcionais.

Exemplo:

    RF-001:
    O usuário deve conseguir consultar seus pedidos.

    RNF-001:
    A consulta deve apresentar o resultado em até 2 segundos em condições definidas.

O RF descreve o que o produto deve fazer.

O RNF descreve uma característica ou condição de qualidade associada ao comportamento.

---

## 23. Linguagem obrigatória

Quando o requisito representar uma obrigação, utilizar linguagem normativa.

Exemplos:

    deve
    não deve
    somente pode
    é obrigatório
    é permitido
    é proibido

Evitar termos vagos:

    deveria
    preferencialmente
    idealmente
    sempre que possível
    rapidamente
    facilmente
    adequadamente

Quando uma expressão subjetiva for necessária, ela deve ser transformada em condição verificável.

Exemplo inadequado:

    O produto deve responder rapidamente.

Exemplo adequado:

    O produto deve apresentar o resultado da consulta em até 2 segundos nas condições definidas pelo requisito RNF correspondente.

---

## 24. Evitar prescrição prematura de solução

Um Requisito Funcional deve evitar especificar a solução técnica quando isso não for necessário.

Exemplo inadequado:

    O produto deve utilizar uma API REST para consultar os pedidos.

Exemplo funcional:

    O produto deve permitir a consulta dos pedidos associados ao usuário.

A definição de API, arquitetura, banco de dados ou tecnologia deve ser registrada em artefato apropriado quando necessária.

Uma tecnologia pode aparecer no requisito quando representar uma restrição ou condição explícita do produto.

---

## 25. Granularidade

A granularidade deve permitir compreender e rastrear o comportamento sem criar fragmentação excessiva.

Um requisito pode representar um comportamento composto quando suas partes são inseparáveis para fins de entendimento.

Exemplo:

    RF-001:
    O produto deve permitir que o usuário consulte seus pedidos e visualize o status atual de cada pedido.

Pode ser apropriado separar quando os comportamentos tiverem:

- objetivos diferentes;
- ciclos de vida diferentes;
- regras diferentes;
- prioridades diferentes;
- impactos diferentes;
- User Stories diferentes;
- possibilidade de evolução independente.

Exemplo:

    RF-001 — Consultar pedidos
    RF-002 — Consultar status do pedido

A granularidade deve ser definida de forma pragmática.

---

## 26. Requisito Funcional versus User Story

Requisito Funcional e User Story são artefatos relacionados, mas possuem propósitos diferentes.

Requisito Funcional:

    O usuário deve conseguir cancelar um pedido elegível.

User Story:

    Como cliente,
    quero cancelar um pedido elegível,
    para interromper uma compra que não desejo mais.

O requisito descreve a capacidade funcional.

A User Story contextualiza essa capacidade como uma necessidade de um usuário e uma unidade de valor.

Um Requisito Funcional pode originar uma ou várias User Stories.

Uma User Story também pode atender mais de um Requisito Funcional.

Exemplo:

    RF-001 ─────┐
                ├──> US-001
    RF-002 ─────┘

---

## 27. Requisito Funcional versus Acceptance Criteria

O Requisito Funcional descreve o comportamento esperado.

Os Acceptance Criteria definem condições objetivamente verificáveis para uma User Story.

Exemplo:

    RF-001:
    O usuário deve conseguir cancelar um pedido elegível.

    US-001:
    Como cliente,
    quero cancelar um pedido elegível,
    para interromper uma compra.

    Acceptance Criteria:
    - O usuário consegue iniciar a solicitação de cancelamento.
    - Pedidos elegíveis podem ser cancelados.
    - Pedidos não elegíveis não podem ser cancelados.
    - Após o cancelamento, o pedido apresenta o status "Cancelado".

O Acceptance Criteria pode detalhar o comportamento necessário sem transformar o RF em uma lista excessivamente operacional.

---

## 28. Requisitos Funcionais e PRD

O PRD consolida a definição do produto e pode incorporar, agrupar ou referenciar Requisitos Funcionais.

O PRD deve contextualizar os requisitos em relação a:

- problema;
- objetivo;
- usuários;
- escopo;
- comportamento do produto;
- regras relevantes;
- resultados esperados.

Não é necessário duplicar integralmente todos os RF no PRD quando a referência direta for suficiente.

Quando a rastreabilidade individual for importante, manter os IDs dos requisitos.

Exemplo:

    PRD-001
      ├── RF-001
      ├── RF-002
      └── RF-003

---

## 29. Rastreabilidade

Quando aplicável, cada Requisito Funcional deve permitir rastrear sua origem e seus artefatos derivados.

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

A rastreabilidade pode ser implementada por:

- IDs;
- links entre documentos;
- tabelas;
- referências Markdown;
- mecanismos de relacionamento adotados pelo projeto.

Não é necessário utilizar uma ferramenta específica.

---

## 30. Qualidade de um Requisito Funcional

Um Requisito Funcional é considerado adequado quando:

- descreve uma necessidade funcional real;
- é claro;
- é objetivo;
- é verificável;
- não possui ambiguidade relevante;
- não contradiz outros requisitos;
- não duplica desnecessariamente outro requisito;
- possui granularidade adequada;
- mantém rastreabilidade quando necessária;
- não prescreve implementação sem necessidade;
- contém informações suficientes para compreensão do comportamento.

---

## 31. Validação

Antes de ser considerado pronto, o requisito deve ser analisado quanto a:

- clareza;
- completude suficiente;
- consistência;
- necessidade;
- verificabilidade;
- dependências;
- regras relacionadas;
- exceções relevantes;
- rastreabilidade;
- ausência de ambiguidade crítica.

A validação deve ser proporcional à complexidade do requisito.

---

## 32. Ambiguidade

Quando houver múltiplas interpretações possíveis, o requisito não deve ser considerado pronto sem esclarecimento ou registro explícito da incerteza.

Exemplo:

    "O produto deve permitir o cancelamento rapidamente."

Pergunta necessária:

    Qual é o prazo ou condição que define "rapidamente"?

O agente ou analista deve:

1. identificar a ambiguidade;
2. explicar por que ela é relevante;
3. formular uma pergunta objetiva;
4. registrar a pendência;
5. atualizar o requisito após a decisão.

O agente não deve escolher uma interpretação por conta própria quando isso representar uma decisão de produto.

---

## 33. Conflitos entre Requisitos Funcionais

Quando dois requisitos apresentarem comportamento conflitante:

1. identificar os requisitos envolvidos;
2. registrar o conflito;
3. avaliar o impacto;
4. encaminhar a decisão ao responsável apropriado;
5. registrar a decisão;
6. atualizar os requisitos afetados;
7. atualizar a rastreabilidade.

Exemplo:

    RF-001:
    O usuário pode cancelar o pedido antes do faturamento.

    RF-002:
    O usuário pode cancelar o pedido a qualquer momento.

Esses requisitos apresentam potencial conflito.

O Requirements Agent deve identificar o conflito, mas não decidir sozinho qual comportamento deve prevalecer.

---

## 34. Duplicidade

Quando dois requisitos representarem essencialmente a mesma necessidade:

1. identificar a possível duplicidade;
2. comparar os comportamentos;
3. verificar se existe alguma diferença relevante;
4. propor consolidação quando apropriado;
5. preservar rastreabilidade;
6. atualizar referências afetadas.

Não se deve consolidar automaticamente quando os requisitos possuírem diferenças de contexto, regra ou impacto que justifiquem sua separação.

---

## 35. Responsabilidades

### 35.1 Product Owner

Responsável por:

- validar necessidades de produto;
- tomar decisões de negócio;
- resolver ambiguidades de produto;
- definir ou validar prioridades;
- aprovar requisitos quando aplicável;
- resolver conflitos de negócio;
- validar mudanças relevantes de escopo.

### 35.2 Product Analyst

Responsável por:

- elicitar informações;
- analisar necessidades;
- estruturar requisitos;
- identificar lacunas;
- identificar ambiguidades;
- apoiar validação;
- manter rastreabilidade;
- apoiar análise de impacto.

### 35.3 Requirements Agent

O Requirements Agent pode:

- analisar Discovery;
- identificar requisitos funcionais candidatos;
- estruturar requisitos;
- propor títulos e descrições;
- classificar requisitos;
- identificar duplicidades;
- identificar conflitos;
- identificar ambiguidades;
- sugerir perguntas;
- identificar dependências;
- verificar consistência;
- verificar qualidade;
- manter rastreabilidade;
- analisar impacto de mudanças;
- atualizar documentação conforme decisões fornecidas.

O Requirements Agent não deve:

- inventar necessidades;
- transformar hipótese em requisito aprovado;
- tomar decisão de negócio sem autorização;
- escolher entre requisitos conflitantes por conta própria;
- definir prioridade de negócio autonomamente;
- aprovar requisitos em nome do PO;
- transformar uma solução técnica em requisito funcional sem justificativa.

---

## 36. Comportamento do Agent diante de informação insuficiente

Quando não houver informação suficiente para definir um requisito:

1. identificar a lacuna;
2. explicar o impacto da lacuna;
3. formular pergunta objetiva;
4. registrar a questão;
5. aguardar informação ou decisão;
6. atualizar o requisito.

Exemplo:

    RF-001:
    O produto deve permitir a alteração do cadastro do cliente.

    Questão:
    Quais campos do cadastro podem ser alterados pelo cliente?

O agente não deve assumir que todos os campos podem ser alterados.

---

## 37. Capacidades de análise do Requirements Agent

O Requirements Agent deve ser capaz de analisar:

### 37.1 Cobertura

Identificar necessidades mencionadas na Discovery que ainda não possuem requisito correspondente.

### 37.2 Lacunas

Identificar comportamentos necessários que não foram definidos.

### 37.3 Ambiguidade

Identificar termos ou condições com múltiplas interpretações.

### 37.4 Consistência

Verificar se requisitos contradizem outros requisitos, regras ou decisões.

### 37.5 Duplicidade

Identificar requisitos potencialmente redundantes.

### 37.6 Dependências

Identificar requisitos que dependem de outros comportamentos ou condições.

### 37.7 Exceções

Identificar situações relevantes que não possuem comportamento definido.

### 37.8 Rastreabilidade

Relacionar requisitos às suas origens e aos artefatos derivados.

### 37.9 Impacto

Identificar quais artefatos podem precisar ser revisados após uma alteração.

---

## 38. Critérios de Entrada

A etapa de definição de Requisitos Funcionais pode ser iniciada quando:

- o problema ou oportunidade estiver suficientemente compreendido;
- o objetivo estiver disponível;
- o contexto estiver disponível;
- os principais usuários ou atores forem conhecidos;
- houver informação suficiente para iniciar a formalização.

Não é necessário eliminar todas as dúvidas antes de iniciar.

Dúvidas não bloqueantes podem permanecer registradas e ser resolvidas durante a elaboração.

---

## 39. Critérios de Saída

Os Requisitos Funcionais estão prontos para a próxima etapa quando:

- os principais comportamentos funcionais foram identificados;
- os requisitos relevantes estão documentados;
- os requisitos estão suficientemente claros;
- ambiguidades críticas foram resolvidas ou explicitamente registradas;
- conflitos relevantes foram resolvidos ou encaminhados;
- regras de negócio relacionadas foram identificadas;
- exceções relevantes foram consideradas;
- dependências relevantes foram identificadas;
- a rastreabilidade necessária está estabelecida;
- os requisitos possuem qualidade suficiente para apoiar o PRD e a decomposição em User Stories.

---

## 40. Gate

O gate aplicável é:

    Requirements Readiness Gate

A validação deve verificar:

- cobertura funcional;
- clareza;
- consistência;
- ausência de ambiguidade crítica;
- regras de negócio relevantes;
- exceções relevantes;
- dependências;
- rastreabilidade;
- capacidade de utilização dos requisitos na elaboração do PRD.

A aprovação deve ser realizada pelo PO ou pelo papel definido pelo projeto.

---

## 41. Revisão

Os Requisitos Funcionais devem ser revisados quando ocorrer:

- nova informação relevante;
- alteração do problema;
- alteração do objetivo;
- alteração de regra de negócio;
- descoberta de novo comportamento;
- alteração de escopo;
- identificação de conflito;
- identificação de requisito ausente;
- mudança relevante em uma User Story;
- mudança relevante em Acceptance Criteria.

A revisão deve avaliar os impactos nos artefatos relacionados.

---

## 42. Mudanças e análise de impacto

Quando um Requisito Funcional for alterado:

1. registrar a alteração;
2. registrar a razão quando relevante;
3. identificar os artefatos afetados;
4. revisar o PRD;
5. revisar User Stories;
6. revisar Acceptance Criteria;
7. atualizar rastreabilidade;
8. verificar conflitos ou duplicidades introduzidos pela mudança.

Exemplo:

    RF-001 alterado
        ↓
    PRD-001 afetado
        ↓
    US-001 e US-002 afetadas
        ↓
    AC-001 e AC-002 revisados

---

## 43. Obsolescência

Um Requisito Funcional pode se tornar obsoleto quando:

- a necessidade deixar de existir;
- o comportamento for removido do produto;
- a direção do produto mudar;
- o requisito for substituído;
- uma regra ou contexto que o justificava deixar de existir.

Quando o histórico for relevante, o requisito não deve ser simplesmente apagado.

Exemplo:

    Status: Obsoleto
    Motivo: Funcionalidade removida do escopo do produto.

Quando substituído por outro requisito:

    RF-001 → substituído por RF-015

A relação deve ser registrada quando for relevante para a rastreabilidade.

---

## 44. Versionamento

A versão dos Requisitos Funcionais deve ser controlada pelo Git do projeto.

Não é necessário criar uma cópia física do requisito para cada alteração.

O histórico do Git permite identificar:

- quando ocorreu a alteração;
- quem realizou a alteração;
- qual era o conteúdo anterior;
- qual foi o novo conteúdo.

Mudanças de negócio relevantes devem também ser registradas explicitamente no documento ou em outro artefato apropriado quando o histórico do Git não for suficiente para explicar a decisão.

---

## 45. Convenção de Documentation-as-Code

Os Requisitos Funcionais devem ser documentados preferencialmente em Markdown no repositório do projeto.

Convenções:

- conteúdo em pt-BR por padrão;
- nomes de arquivos e diretórios em inglês;
- IDs estáveis;
- títulos objetivos;
- referências entre documentos;
- links relativos quando aplicável;
- ausência de duplicação desnecessária;
- histórico mantido pelo Git.

Exemplo de organização:

    docs/
    └── product/
        └── requirements/
            └── requirements.md

Ou, quando o projeto exigir separação:

    docs/
    └── product/
        └── requirements/
            ├── functional-requirements.md
            └── non-functional-requirements.md

A organização pode variar conforme o projeto, desde que preserve clareza e rastreabilidade.

---

## 46. Template de Requisito Funcional

Modelo recomendado:

    ### RF-001 — Título do requisito

    **Descrição:**  
    O produto deve ...

    **Origem:**  
    D-001

    **Ator:**  
    Usuário

    **Gatilho:**  
    ...

    **Pré-condições:**  
    - ...

    **Entradas:**  
    - ...

    **Comportamento:**  
    1. ...
    2. ...
    3. ...

    **Saídas / Resultado:**  
    - ...

    **Regras de Negócio relacionadas:**  
    - RN-001

    **Exceções:**  
    - ...

    **Dependências:**  
    - ...

    **Prioridade:**  
    Alta

    **Status:**  
    Em validação

    **Rastreabilidade:**  
    - PRD-001
    - US-001

Os campos devem ser utilizados somente quando fizerem sentido para o requisito.

---

## 47. Exemplo completo

    ### RF-001 — Cancelamento de pedido

    **Descrição:**  
    O usuário deve conseguir solicitar o cancelamento de um pedido elegível.

    **Origem:**  
    D-001

    **Ator:**  
    Cliente autenticado

    **Gatilho:**  
    O usuário solicita o cancelamento de um pedido.

    **Pré-condições:**  
    - O usuário deve estar autenticado.
    - O pedido deve pertencer ao usuário.

    **Entradas:**  
    - Identificador do pedido.
    - Solicitação de cancelamento.
    - Motivo do cancelamento, quando aplicável.

    **Comportamento:**  
    1. O produto deve verificar se o pedido é elegível para cancelamento.
    2. Se o pedido for elegível, o produto deve permitir a confirmação do cancelamento.
    3. Após a confirmação, o produto deve registrar o cancelamento.
    4. O produto deve atualizar o status do pedido.
    5. O produto deve apresentar a confirmação do cancelamento ao usuário.

    **Saídas / Resultado:**  
    - Solicitação de cancelamento registrada.
    - Pedido com status "Cancelado".
    - Confirmação apresentada ao usuário.

    **Regras de Negócio relacionadas:**  
    - RN-001 — Pedido faturado não pode ser cancelado.

    **Exceções:**  
    - Caso o pedido não seja elegível, o produto não deve realizar o cancelamento e deve informar o motivo ao usuário.

    **Prioridade:**  
    Alta

    **Status:**  
    Aprovado

    **Rastreabilidade:**  
    - D-001
    - PRD-001
    - US-001

---

## 48. Relação com outros padrões

Este padrão deve ser utilizado em conjunto com:

- `product/requirements/requirements-standard.md`
- `product/requirements/non-functional-requirements.md`
- `product/discovery/discovery-standard.md`
- `product/prd/prd-standard.md`
- `product/user-stories/user-story-standard.md`
- `product/user-stories/acceptance-criteria.md`
- `product/backlog/backlog-management.md`
- `governance/definition-of-ready.md`

O `requirements-standard.md` define as regras gerais de requisitos.

Este documento define as regras específicas para Requisitos Funcionais.

O padrão de Requisitos Não Funcionais deve definir as regras específicas para características e condições de qualidade.

O PRD deve consolidar e contextualizar a definição do produto.

As User Stories devem decompor necessidades em unidades de valor para usuários.

Os Acceptance Criteria devem estabelecer condições verificáveis para as User Stories.

---

## 49. Regra de precedência

Quando houver conflito entre este padrão e uma regra geral:

1. uma decisão explícita do projeto pode estabelecer uma exceção documentada;
2. o `requirements-standard.md` define as regras gerais de requisitos;
3. este documento define as regras específicas de Requisitos Funcionais;
4. padrões mais específicos podem detalhar aspectos particulares sem contradizer as regras superiores.

Qualquer exceção relevante deve ser registrada conforme `governance/exceptions.md`.

---

## 50. Resultado esperado

A aplicação deste padrão deve permitir que diferentes pessoas, equipes e agentes produzam Requisitos Funcionais que sejam:

- compreensíveis;
- consistentes;
- verificáveis;
- rastreáveis;
- independentes de implementação quando apropriado;
- reutilizáveis na elaboração do PRD;
- adequados para decomposição em User Stories;
- suficientemente claros para apoiar as etapas posteriores do Product Delivery;
- mantidos de forma versionada como código no repositório do projeto.