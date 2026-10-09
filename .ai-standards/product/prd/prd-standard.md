# PRD Standard

## 1. Objetivo

Este documento define o padrão para elaboração, estruturação, validação, aprovação e manutenção de Product Requirements Documents (PRD) no contexto de Product Delivery e Documentation-as-Code.

O PRD é o artefato que consolida a definição do produto a partir do entendimento produzido durante Discovery e dos requisitos identificados durante a análise do problema.

Seu objetivo é estabelecer uma visão coerente e compartilhada sobre:

- o problema que o produto pretende resolver;
- os objetivos do produto;
- os usuários e públicos envolvidos;
- o escopo;
- o comportamento esperado;
- os requisitos relevantes;
- as regras de negócio;
- as condições e restrições relevantes;
- os resultados esperados;
- os critérios de sucesso;
- as decisões de produto necessárias para orientar a decomposição em User Stories.

O PRD deve ser suficientemente completo para orientar a próxima etapa do Product Delivery, sem se transformar em uma especificação técnica de implementação.

---

## 2. Escopo

Este padrão trata especificamente do PRD como artefato de definição de produto.

Estão incluídos:

- propósito do PRD;
- estrutura;
- conteúdo esperado;
- relação com Discovery;
- relação com Requirements;
- relação com User Stories;
- definição de escopo;
- objetivos e resultados;
- usuários e stakeholders;
- capacidades do produto;
- regras de negócio relevantes;
- requisitos funcionais e não funcionais relevantes;
- critérios de sucesso;
- perguntas em aberto;
- decisões de produto;
- dependências;
- riscos;
- rastreabilidade;
- revisão;
- aprovação;
- mudanças e análise de impacto;
- participação de agentes de IA;
- Documentation-as-Code.

Não fazem parte deste padrão:

- arquitetura;
- desenho técnico;
- definição de APIs;
- modelo de banco de dados;
- desenho de componentes;
- implementação;
- código;
- estratégia de testes técnicos;
- infraestrutura;
- CI/CD;
- deployment;
- operação.

Esses temas podem ser tratados por padrões posteriores.

---

## 3. Conceito de PRD

O PRD é o documento que consolida a definição do produto em um determinado contexto e momento.

Ele responde principalmente às perguntas:

- Qual problema estamos resolvendo?
- Para quem?
- Por quê?
- Qual resultado queremos alcançar?
- O que o produto deve oferecer?
- Qual é o escopo?
- Quais condições e regras precisam ser respeitadas?
- Como saberemos que o produto atingiu o resultado esperado?

O PRD não deve responder detalhadamente:

- como o software será implementado;
- qual arquitetura será utilizada;
- quais componentes serão criados;
- qual tecnologia será utilizada.

Essas decisões pertencem a artefatos técnicos posteriores.

---

## 4. Papel do PRD no Product Delivery

O PRD ocupa uma posição intermediária entre entendimento do problema e decomposição da entrega.

Relação principal:

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

O PRD não substitui os artefatos anteriores.

Ele consolida e contextualiza as informações relevantes para a definição do produto.

---

## 5. Princípios

### 5.1 Clareza

O PRD deve permitir que pessoas diferentes obtenham entendimento consistente sobre o produto.

### 5.2 Foco no produto

O PRD deve concentrar-se no problema, usuário, valor, comportamento e condições do produto.

### 5.3 Não duplicação desnecessária

O PRD não deve copiar integralmente todos os requisitos, Discovery ou outros artefatos quando uma referência for suficiente.

### 5.4 Rastreabilidade

As informações relevantes devem poder ser relacionadas à sua origem e aos artefatos derivados.

### 5.5 Decisões explícitas

Decisões importantes devem ser registradas de forma identificável.

### 5.6 Escopo explícito

O que faz parte e o que não faz parte do produto deve ser claramente definido.

### 5.7 Incerteza explícita

Questões ainda não resolvidas não devem ser apresentadas como decisões definitivas.

### 5.8 Evolução controlada

O PRD deve poder evoluir conforme o entendimento do produto muda.

### 5.9 Proporcionalidade

O nível de detalhe deve ser proporcional à complexidade e ao risco do produto.

---

## 6. Quando criar um PRD

Um PRD deve ser criado quando houver necessidade de consolidar a definição de um produto, iniciativa ou capacidade relevante.

Exemplos:

- novo produto;
- nova iniciativa significativa;
- nova capacidade de negócio;
- mudança relevante de produto;
- iniciativa envolvendo múltiplos fluxos;
- mudança com múltiplos requisitos;
- iniciativa que precise de alinhamento entre diferentes stakeholders.

Um PRD pode ser simplificado para mudanças pequenas e bem compreendidas.

Não é necessário produzir um documento extenso quando a mudança puder ser adequadamente definida por artefatos menores.

A decisão de simplificação deve preservar o entendimento necessário para a entrega.

---

## 7. PRD não é um documento necessariamente grande

O PRD deve conter as informações necessárias para definir o produto, mas não deve crescer artificialmente.

Um PRD pode ser:

- curto para uma mudança simples;
- intermediário para uma funcionalidade;
- mais completo para um produto ou iniciativa complexa.

A quantidade de texto não representa qualidade.

Um PRD adequado é aquele que permite entendimento suficiente para tomada de decisão e decomposição posterior.

---

## 8. Relação com Discovery

O Discovery busca compreender:

- problema;
- oportunidade;
- usuários;
- contexto;
- evidências;
- hipóteses;
- restrições;
- riscos;
- alternativas;
- perguntas.

O PRD transforma esse entendimento em uma definição mais concreta do produto.

Exemplo:

    Discovery:
    Usuários têm dificuldade para acompanhar o status de seus pedidos.

    PRD:
    O produto deve permitir que o usuário consulte o status atual de seus pedidos.

O PRD pode introduzir decisões de produto que não existiam no Discovery, desde que essas decisões estejam fundamentadas e sejam explicitamente registradas.

Se uma nova decisão alterar significativamente o entendimento do problema, o Discovery deve ser revisitado.

---

## 9. Relação com Requirements

Os Requirements identificam necessidades, comportamentos, regras, restrições e condições.

O PRD consolida esses elementos no contexto do produto.

Exemplo:

    RF-001:
    O usuário deve conseguir consultar seus pedidos.

    RF-002:
    O usuário deve conseguir visualizar o status atual do pedido.

    RN-001:
    O usuário não pode consultar pedidos de outro usuário.

    RNF-001:
    A consulta deve responder em até 2 segundos nas condições definidas.

O PRD pode consolidar essas informações em uma definição coerente da funcionalidade de consulta de pedidos.

O PRD não deve substituir a fonte original quando a rastreabilidade individual for necessária.

---

## 10. Estrutura recomendada

Um PRD pode utilizar a seguinte estrutura:

    # PRD — Nome do Produto ou Iniciativa

    ## 1. Visão Geral
    ## 2. Problema / Oportunidade
    ## 3. Objetivos
    ## 4. Usuários e Públicos
    ## 5. Contexto
    ## 6. Resultado Esperado
    ## 7. Escopo
    ## 8. Fora de Escopo
    ## 9. Capacidades do Produto
    ## 10. Requisitos Relevantes
    ## 11. Regras de Negócio
    ## 12. Requisitos Não Funcionais Relevantes
    ## 13. Fluxos Principais
    ## 14. Critérios de Sucesso
    ## 15. Dependências
    ## 16. Riscos
    ## 17. Perguntas em Aberto
    ## 18. Decisões
    ## 19. Rastreabilidade
    ## 20. Próximos Passos

Nem todas as seções são obrigatórias em todos os PRDs.

---

## 11. Metadados

Quando aplicável, o PRD pode possuir metadados no início do documento.

Exemplo:

    ---
    id: PRD-001
    title: Consulta de Pedidos
    status: Em validação
    owner: Product Owner
    created: 2026-09-29
    updated: 2026-09-29
    ---

O conjunto de metadados pode ser adaptado ao projeto.

Os metadados não devem substituir o conteúdo funcional do PRD.

---

## 12. Visão Geral

A seção de Visão Geral deve permitir compreender rapidamente o que está sendo definido.

Deve responder, quando aplicável:

- o que é o produto ou iniciativa;
- qual problema principal aborda;
- qual resultado pretende produzir;
- qual é o contexto.

Exemplo:

    Esta iniciativa tem como objetivo permitir que clientes consultem o status
    de seus pedidos em um único fluxo, reduzindo a necessidade de contato
    com o atendimento para obter informações sobre a entrega.

---

## 13. Problema / Oportunidade

Deve apresentar o problema ou oportunidade que justifica a iniciativa.

A seção deve permanecer consistente com o Discovery.

Exemplo:

    Clientes atualmente precisam entrar em contato com o atendimento para
    obter informações sobre o status de seus pedidos.

Quando houver evidências relevantes, elas podem ser referenciadas.

Evitar transformar hipóteses em fatos.

---

## 14. Objetivos

Os objetivos devem representar os resultados que o produto pretende alcançar.

Exemplo:

    - Permitir que clientes consultem o status de seus pedidos.
    - Reduzir a necessidade de contato com o atendimento para consultas de status.

Objetivos devem ser diferentes de funcionalidades.

Exemplo:

    Objetivo:
    Reduzir contatos de atendimento relacionados ao status dos pedidos.

    Funcionalidade:
    Permitir consulta do status do pedido.

---

## 15. Usuários e Públicos

Identificar os principais usuários ou públicos afetados.

Exemplo:

    ### Cliente

    Usuário que consulta seus próprios pedidos.

    ### Operador de atendimento

    Usuário que pode consultar informações necessárias para suporte.

Quando aplicável, identificar:

- usuário principal;
- usuários secundários;
- administradores;
- operadores;
- sistemas externos;
- outros atores relevantes.

Não é necessário criar personas detalhadas se elas não forem necessárias para a decisão de produto.

---

## 16. Contexto

O contexto deve registrar informações necessárias para compreender a iniciativa.

Pode incluir:

- processo atual;
- sistemas ou produtos existentes;
- limitações conhecidas;
- iniciativas relacionadas;
- contexto organizacional;
- dependências;
- informações relevantes do Discovery.

A seção deve evitar duplicar integralmente documentos existentes.

Quando uma informação já estiver documentada, utilizar referência.

---

## 17. Resultado Esperado

O resultado esperado deve descrever o estado desejado após a iniciativa ser implementada.

Exemplo:

    Clientes conseguem consultar o status atualizado de seus pedidos sem
    necessidade de contato com o atendimento.

O resultado deve representar valor ou mudança observável, e não apenas a existência de uma funcionalidade.

---

## 18. Escopo

O escopo define o que está incluído na iniciativa.

Pode ser organizado por:

- capacidades;
- fluxos;
- usuários;
- canais;
- processos;
- funcionalidades.

Exemplo:

    Incluído:
    - Consulta de pedidos.
    - Visualização do status.
    - Visualização da data prevista de entrega.

O escopo deve ser suficientemente claro para permitir a decomposição em User Stories.

---

## 19. Fora de Escopo

O PRD deve explicitar itens que não fazem parte da iniciativa quando sua ausência puder gerar expectativa ou interpretação diferente.

Exemplo:

    Fora de escopo:
    - Cancelamento de pedidos.
    - Alteração de endereço de entrega.
    - Reembolso.

Fora de escopo não significa necessariamente que a funcionalidade nunca será implementada.

Significa que ela não faz parte do escopo atual.

---

## 20. Capacidades do Produto

Esta seção descreve as principais capacidades que o produto deve oferecer.

Exemplo:

    ### Consulta de pedidos

    O usuário deve conseguir visualizar seus pedidos.

    ### Consulta de status

    O usuário deve conseguir visualizar o status atual de cada pedido.

    ### Consulta de previsão

    O usuário deve conseguir visualizar a previsão de entrega quando disponível.

As capacidades podem referenciar Requisitos Funcionais.

Exemplo:

    Requisitos relacionados:
    - RF-001
    - RF-002
    - RF-003

---

## 21. Requisitos Relevantes

O PRD deve referenciar os requisitos necessários para a definição do produto.

Exemplo:

    ### Requisitos Funcionais

    - RF-001 — Consulta de pedidos
    - RF-002 — Consulta de status
    - RF-003 — Consulta de previsão de entrega

    ### Requisitos Não Funcionais

    - RNF-001 — Tempo de resposta
    - RNF-002 — Disponibilidade

Não é obrigatório copiar a descrição completa dos requisitos quando a referência for suficiente.

---

## 22. Regras de Negócio

O PRD deve destacar regras de negócio relevantes para compreender o comportamento do produto.

Exemplo:

    - RN-001 — Usuário somente pode consultar seus próprios pedidos.
    - RN-002 — Pedidos cancelados permanecem disponíveis para consulta histórica.

Quando uma regra estiver documentada em Requirements, o PRD pode referenciá-la.

---

## 23. Requisitos Não Funcionais Relevantes

O PRD deve destacar características não funcionais que sejam importantes para a definição do produto.

Exemplo:

    - RNF-001 — Consultas devem responder em até 2 segundos nas condições definidas.
    - RNF-002 — O produto deve atender ao nível de disponibilidade definido.

Características que não forem relevantes para a decisão de produto não precisam ser repetidas no PRD.

---

## 24. Fluxos Principais

Quando necessário, o PRD deve descrever os principais fluxos de interação.

Exemplo:

    1. Usuário acessa seus pedidos.
    2. Produto apresenta os pedidos disponíveis.
    3. Usuário seleciona um pedido.
    4. Produto apresenta o status atual.
    5. Produto apresenta a previsão de entrega, quando disponível.

Fluxos devem ser descritos em linguagem funcional.

Detalhes técnicos devem ser evitados.

---

## 25. Fluxos Alternativos e Exceções

Quando uma exceção for relevante para o entendimento do produto, ela deve ser registrada.

Exemplo:

    Se não houver pedidos associados ao usuário, o produto deve apresentar
    uma mensagem informando que nenhum pedido foi encontrado.

    Se o status do pedido não estiver disponível, o produto deve informar
    que a informação está temporariamente indisponível.

Não é necessário documentar todas as possíveis exceções técnicas no PRD.

---

## 26. Critérios de Sucesso

Critérios de sucesso devem indicar como será avaliado o resultado da iniciativa.

Quando possível, devem ser mensuráveis.

Exemplo:

    - Usuários conseguem consultar o status dos pedidos.
    - O fluxo de consulta atende ao requisito de desempenho definido.
    - A quantidade de contatos de atendimento relacionados à consulta de
      status reduz conforme a meta definida para a iniciativa.

Critérios de sucesso devem estar relacionados aos objetivos.

Não confundir critério de sucesso do produto com Acceptance Criteria de uma User Story.

---

## 27. Dependências

Registrar dependências relevantes para a entrega do produto.

Exemplos:

- disponibilidade de dados;
- integração com outro produto;
- decisão de negócio;
- disponibilidade de fornecedor;
- dependência de outra iniciativa;
- aprovação regulatória.

Exemplo:

    DEP-001:
    A consulta depende da disponibilidade das informações de pedidos no
    sistema de origem.

Dependências técnicas detalhadas devem ser tratadas em documentação apropriada posteriormente.

---

## 28. Riscos

O PRD deve registrar riscos relevantes para a definição ou sucesso do produto.

Exemplos:

- dados incompletos;
- baixa adoção;
- dependência externa;
- regra de negócio ainda indefinida;
- restrição regulatória;
- mudança de contexto.

Exemplo:

    Risco:
    O sistema de origem pode não fornecer atualização de status em tempo
    suficiente para atender à expectativa definida.

Riscos devem ser descritos sem transformar hipótese em fato.

---

## 29. Perguntas em Aberto

Perguntas que impedem ou condicionam decisões devem ser explicitamente registradas.

Exemplo:

    ### Q-001 — Histórico de pedidos

    **Pergunta:**
    Por quanto tempo os pedidos cancelados devem permanecer disponíveis?

    **Impacto:**
    Afeta a definição do comportamento de consulta e retenção.

    **Responsável pela decisão:**
    Product Owner

    **Status:**
    Em aberto

Perguntas resolvidas devem ser atualizadas ou movidas para a seção de decisões quando apropriado.

---

## 30. Decisões de Produto

Decisões relevantes devem ser registradas explicitamente.

Exemplo:

    ### DEC-001 — Exibição de pedidos cancelados

    **Decisão:**
    Pedidos cancelados permanecerão disponíveis para consulta histórica.

    **Motivo:**
    Permitir que o usuário consulte o histórico completo de pedidos.

    **Data:**
    2026-09-29

    **Responsável:**
    Product Owner

Decisões técnicas ou arquiteturais devem ser registradas nos artefatos correspondentes.

---

## 31. O que não deve estar no PRD

O PRD não deve ser utilizado como substituto de:

- arquitetura;
- desenho técnico;
- documentação de API;
- modelo de banco;
- diagramas técnicos detalhados;
- decisões de implementação;
- detalhes de código;
- instruções de deployment;
- configuração de infraestrutura;
- procedimentos operacionais.

Exemplo inadequado:

    O sistema deve utilizar PostgreSQL com Redis e uma API REST em Python.

Isso é uma decisão técnica.

No PRD, quando relevante, deve permanecer a necessidade funcional ou não funcional que motivou a decisão.

---

## 32. PRD e decisões técnicas

Uma decisão técnica pode ser necessária para atender ao produto, mas isso não significa que ela deva ser incorporada ao PRD.

Exemplo:

    PRD:
    O produto deve permitir consulta de pedidos com resposta em até 2 segundos.

    Documento técnico:
    A solução utilizará mecanismo de cache para atender ao requisito.

O PRD define a necessidade.

O documento técnico define a solução.

---

## 33. Granularidade do PRD

Um PRD pode representar:

- um produto;
- uma iniciativa;
- uma grande funcionalidade;
- uma mudança significativa.

A escolha deve considerar:

- autonomia da iniciativa;
- objetivo;
- público;
- escopo;
- ciclo de decisão;
- necessidade de aprovação.

Evitar criar PRDs separados para partes que não possuem autonomia suficiente para serem compreendidas isoladamente.

Também evitar PRDs excessivamente abrangentes que dificultem rastreabilidade e manutenção.

---

## 34. PRD e múltiplas capacidades

Um PRD pode conter várias capacidades relacionadas.

Exemplo:

    PRD — Consulta e acompanhamento de pedidos

    Capacidades:
    - Consulta de pedidos.
    - Consulta de status.
    - Consulta de previsão.
    - Consulta de histórico.

As capacidades podem posteriormente ser decompostas em várias User Stories.

---

## 35. PRD, Feature Definitions e User Stories

As Feature Definitions devem ser derivadas das capacidades identificadas no PRD. As User Stories devem ser derivadas das Feature Definitions aprovadas.

Relação:

    PRD-001
       ├── FEAT-001
       │      ├── US-001
       │      └── US-002
       └── FEAT-002
              ├── US-003
              └── US-004

Uma seção do PRD pode gerar várias User Stories.

Uma User Story pode atender mais de uma parte do PRD.

O PRD não deve ser escrito no formato de backlog.

Ele define o produto.

O backlog representa a decomposição da entrega.

---

## 36. PRD e Acceptance Criteria

Acceptance Criteria não precisam estar integralmente no PRD.

O PRD deve estabelecer o comportamento e as condições necessárias para que as User Stories possam posteriormente definir critérios verificáveis.

Quando um critério for essencial para o entendimento do produto, ele pode ser mencionado no PRD.

A definição detalhada dos Acceptance Criteria pertence ao padrão específico desse artefato.

---

## 37. Rastreabilidade

O PRD deve manter rastreabilidade suficiente entre:

- Discovery;
- Requirements;
- decisões;
- PRD;
- User Stories;
- Acceptance Criteria.

Exemplo:

    D-001
      ↓
    RF-001
      ↓
    PRD-001
      ↓
    FEAT-001
      ↓
    US-001
      ↓
    AC-001

A rastreabilidade pode ser mantida por:

- IDs;
- links Markdown;
- tabelas;
- referências entre documentos;
- mecanismos de relacionamento adotados pelo projeto.

---

## 38. Matriz de rastreabilidade

Quando a complexidade justificar, utilizar uma matriz.

Exemplo:

    | Elemento | Origem | PRD | User Stories |
    |---|---|---|---|
    | RF-001 | D-001 | PRD-001 | US-001 |
    | RF-002 | D-001 | PRD-001 | US-002 |
    | RNF-001 | D-002 | PRD-001 | US-001 |

Não é necessário utilizar uma matriz para iniciativas simples quando links ou referências diretas forem suficientes.

---

## 39. Responsabilidades

### 39.1 Product Owner

Responsável por:

- definir ou validar objetivos;
- tomar decisões de produto;
- definir ou validar escopo;
- resolver ambiguidades;
- aprovar o PRD;
- validar prioridades;
- resolver conflitos de negócio;
- aprovar mudanças relevantes;
- garantir alinhamento com objetivos da iniciativa.

### 39.2 Product Analyst

Responsável por:

- apoiar estruturação do PRD;
- analisar informações;
- identificar lacunas;
- manter coerência;
- apoiar rastreabilidade;
- identificar impactos;
- apoiar validação com stakeholders.

### 39.3 Requirements Agent

Pode:

- consolidar Discovery e Requirements;
- estruturar o PRD;
- identificar inconsistências;
- identificar informações ausentes;
- verificar rastreabilidade;
- sugerir perguntas;
- identificar conflitos;
- verificar coerência entre objetivos, escopo e requisitos;
- propor estrutura;
- atualizar o documento conforme decisões fornecidas.

Não deve:

- inventar decisões de produto;
- aprovar o PRD em nome do PO;
- definir prioridades sem autorização;
- transformar hipóteses em decisões;
- introduzir soluções técnicas sem justificativa;
- eliminar informação relevante apenas para simplificar o documento.

### 39.4 Product Owner Agent

Pode:

- estruturar objetivos;
- consolidar requisitos;
- organizar escopo;
- propor decomposição de capacidades;
- identificar inconsistências;
- propor User Stories;
- analisar impactos;
- verificar rastreabilidade;
- sugerir perguntas;
- preparar o PRD para revisão humana.

Não deve:

- tomar decisões de negócio sem autorização;
- aprovar o PRD em nome do PO humano;
- definir prioridades de forma autônoma;
- assumir respostas para perguntas em aberto;
- transformar uma sugestão em decisão.

---

## 40. Capacidades do Product Owner Agent

O Product Owner Agent deve ser capaz de:

### 40.1 Consolidar

Transformar Discovery e Requirements em uma visão coerente do produto.

### 40.2 Estruturar

Organizar:

- objetivos;
- usuários;
- escopo;
- capacidades;
- requisitos;
- regras;
- critérios de sucesso.

### 40.3 Detectar inconsistências

Identificar:

- objetivos sem requisitos;
- requisitos sem objetivo aparente;
- escopo contraditório;
- requisitos fora do escopo;
- decisões incompatíveis;
- perguntas em aberto bloqueantes.

### 40.4 Analisar impacto

Quando houver alteração:

- identificar partes do PRD afetadas;
- identificar requisitos afetados;
- identificar User Stories potencialmente afetadas;
- indicar necessidade de revisão.

### 40.5 Preparar decomposição

Identificar capacidades que podem posteriormente ser transformadas em User Stories.

O agente não precisa necessariamente criar as User Stories durante a elaboração do PRD.

---

## 41. Comportamento dos agentes diante de incerteza

Quando uma informação necessária estiver ausente:

1. identificar a lacuna;
2. explicar o impacto;
3. formular pergunta objetiva;
4. registrar a pergunta;
5. aguardar decisão ou informação;
6. atualizar o PRD.

O agente não deve preencher lacunas críticas com suposições silenciosas.

Exemplo:

    Pergunta:
    O produto deve atender clientes pessoa física e pessoa jurídica?

    Impacto:
    A resposta altera o público, escopo e possíveis requisitos do produto.

---

## 42. Critérios de Entrada

A elaboração do PRD pode começar quando:

- Discovery tiver produzido entendimento suficiente do problema;
- requisitos relevantes tiverem sido identificados;
- principais usuários ou públicos forem conhecidos;
- objetivo estiver suficientemente claro;
- informações disponíveis forem suficientes para consolidar uma definição de produto.

Não é necessário que todos os requisitos estejam completamente detalhados para iniciar o PRD.

A elaboração pode ser iterativa.

---

## 43. Critérios de Saída

O PRD está pronto para aprovação quando:

- problema ou oportunidade estão claros;
- objetivo está definido;
- usuários relevantes estão identificados;
- resultado esperado está definido;
- escopo está claro;
- fora de escopo está definido quando necessário;
- principais capacidades estão identificadas;
- requisitos relevantes estão relacionados;
- regras relevantes estão identificadas;
- RNFs relevantes estão identificados;
- dependências e riscos relevantes estão documentados;
- perguntas críticas foram resolvidas ou explicitamente registradas;
- decisões relevantes estão documentadas;
- rastreabilidade necessária está estabelecida;
- não existem ambiguidades críticas que impeçam a decomposição em User Stories.

---

## 44. Gate

O gate aplicável é:

    Product Approval Gate

A validação deve verificar:

- clareza do problema;
- clareza dos objetivos;
- público definido;
- escopo;
- fora de escopo;
- capacidades;
- requisitos;
- regras;
- critérios de sucesso;
- dependências;
- riscos;
- perguntas críticas;
- decisões;
- rastreabilidade.

A aprovação deve ser realizada pelo Product Owner ou pelo papel definido pelo projeto.

---

## 45. Revisão

O PRD deve ser revisado quando houver:

- mudança relevante no problema;
- mudança de objetivo;
- alteração de escopo;
- nova informação relevante;
- mudança de requisito;
- alteração de regra de negócio;
- nova decisão;
- mudança de público;
- alteração relevante de dependência;
- mudança de critério de sucesso;
- identificação de inconsistência.

A revisão deve avaliar os impactos nos artefatos derivados.

---

## 46. Mudanças e análise de impacto

Quando o PRD for alterado:

1. registrar a alteração;
2. identificar a origem da mudança;
3. identificar se objetivos foram afetados;
4. identificar se escopo foi afetado;
5. identificar requisitos afetados;
6. identificar User Stories afetadas;
7. identificar Acceptance Criteria afetados;
8. atualizar rastreabilidade;
9. verificar necessidade de nova aprovação.

Exemplo:

    Mudança:
    Inclusão de consulta de pedidos cancelados.

        ↓

    PRD atualizado

        ↓

    RF-004 criado

        ↓

    US-005 criada

        ↓

    AC correspondente criado

        ↓

    Product Approval Gate revisado quando aplicável

---

## 47. Aprovação e responsabilidade

A aprovação do PRD representa a concordância com a definição atual do produto.

A aprovação não significa que o produto não possa mudar posteriormente.

Quando uma alteração relevante ocorrer após aprovação, o PRD deve retornar ao fluxo de revisão e aprovação definido pelo projeto.

Agentes podem preparar, revisar e propor alterações, mas a aprovação de produto deve permanecer com a pessoa responsável.

---

## 48. Versionamento

O PRD deve ser versionado pelo Git do projeto.

Não é necessário criar cópias físicas para cada versão.

O histórico do Git deve preservar:

- alterações;
- autores;
- datas;
- conteúdo anterior;
- conteúdo atual.

Mudanças relevantes de produto devem ser descritas explicitamente quando o histórico do Git não for suficiente para explicar a decisão.

---

## 49. Status

Um PRD pode utilizar status como:

    Rascunho
    Em análise
    Em validação
    Aprovado
    Em revisão
    Obsoleto

O projeto pode adotar vocabulário diferente, desde que o significado seja claro.

---

## 50. Documentation-as-Code

O PRD deve ser armazenado como Markdown no repositório do projeto.

Exemplo:

    docs/
    └── product/
        └── prd/
            └── PRD-001-consulta-pedidos.md

Ou:

    docs/
    └── product/
        └── PRD.md

A convenção de nomes pode variar conforme o projeto.

O documento deve:

- utilizar Markdown;
- ser versionado pelo Git;
- utilizar referências relativas quando aplicável;
- manter IDs estáveis;
- evitar duplicação desnecessária;
- registrar decisões relevantes;
- manter rastreabilidade.

---

## 51. Convenção de idioma

O conteúdo deve ser escrito em pt-BR por padrão.

Termos técnicos amplamente utilizados podem permanecer em inglês quando isso melhorar a clareza.

Exemplos:

- PRD;
- Product Owner;
- User Story;
- Acceptance Criteria;
- Backlog;
- Gate;
- Discovery.

Nomes de arquivos e diretórios devem permanecer em inglês.

---

## 52. Template recomendado

Modelo mínimo recomendado:

    # PRD — [Nome da Iniciativa]

    ## 1. Visão Geral

    [Descrição resumida da iniciativa.]

    ## 2. Problema / Oportunidade

    [Problema ou oportunidade.]

    ## 3. Objetivos

    - [Objetivo 1]
    - [Objetivo 2]

    ## 4. Usuários e Públicos

    - [Usuário / público]

    ## 5. Contexto

    [Contexto necessário.]

    ## 6. Resultado Esperado

    [Resultado esperado.]

    ## 7. Escopo

    ### Incluído

    - [Item]

    ### Fora de Escopo

    - [Item]

    ## 8. Capacidades do Produto

    ### [Capacidade 1]

    [Descrição.]

    ## 9. Requisitos Relevantes

    ### Requisitos Funcionais

    - RF-001 — [Título]
    - RF-002 — [Título]

    ### Requisitos Não Funcionais

    - RNF-001 — [Título]

    ## 10. Regras de Negócio

    - RN-001 — [Título]

    ## 11. Fluxos Principais

    1. [Etapa]
    2. [Etapa]
    3. [Etapa]

    ## 12. Critérios de Sucesso

    - [Critério]

    ## 13. Dependências

    - DEP-001 — [Descrição]

    ## 14. Riscos

    - [Risco]

    ## 15. Perguntas em Aberto

    - Q-001 — [Pergunta]

    ## 16. Decisões

    - DEC-001 — [Decisão]

    ## 17. Rastreabilidade

    | Elemento | Origem | User Stories |
    |---|---|---|
    | RF-001 | D-001 | US-001 |
    | RF-002 | D-001 | US-002 |

    ## 18. Próximos Passos

    - [Próximo passo]

---

## 53. Exemplo resumido

    # PRD — Consulta de Pedidos

    ## 1. Visão Geral

    A iniciativa permitirá que clientes consultem seus pedidos e acompanhem
    o status atualizado de cada pedido.

    ## 2. Problema / Oportunidade

    Clientes atualmente precisam entrar em contato com o atendimento para
    obter informações sobre o status de seus pedidos.

    ## 3. Objetivos

    - Permitir consulta de pedidos.
    - Permitir acompanhamento do status.
    - Reduzir contatos relacionados à consulta de status.

    ## 4. Usuários e Públicos

    ### Cliente

    Usuário que consulta seus próprios pedidos.

    ## 5. Resultado Esperado

    Clientes conseguem consultar seus pedidos e respectivos status sem
    necessidade de contato com o atendimento.

    ## 6. Escopo

    Incluído:

    - Consulta de pedidos.
    - Consulta de status.
    - Consulta de previsão de entrega.

    Fora de escopo:

    - Cancelamento.
    - Reembolso.
    - Alteração de endereço.

    ## 7. Capacidades do Produto

    ### Consulta de pedidos

    O usuário deve conseguir visualizar seus pedidos.

    ### Consulta de status

    O usuário deve conseguir visualizar o status atual de cada pedido.

    ## 8. Requisitos Relevantes

    - RF-001 — Consulta de pedidos.
    - RF-002 — Consulta de status.
    - RNF-001 — Tempo de resposta.

    ## 9. Regras de Negócio

    - RN-001 — O usuário somente pode consultar seus próprios pedidos.

    ## 10. Critérios de Sucesso

    - Usuários conseguem consultar seus pedidos.
    - Usuários conseguem visualizar o status.
    - O fluxo atende aos requisitos de desempenho definidos.

    ## 11. Rastreabilidade

    | Elemento | Origem | User Stories |
    |---|---|---|
    | RF-001 | D-001 | US-001 |
    | RF-002 | D-001 | US-002 |
    | RNF-001 | D-001 | US-001 |

---

## 54. Relação com outros padrões

Este padrão deve ser utilizado em conjunto com:

- `product/discovery/discovery-standard.md`
- `product/requirements/requirements-standard.md`
- `product/requirements/functional-requirements.md`
- `product/requirements/non-functional-requirements.md`
- `product/features/feature-definition-standard.md`
- `product/user-stories/user-story-standard.md`
- `product/user-stories/acceptance-criteria.md`
- `product/backlog/backlog-management.md`
- `governance/development-lifecycle.md`
- `governance/definition-of-ready.md`
- `governance/definition-of-done.md`

O Discovery estabelece o entendimento inicial do problema.

Requirements formalizam necessidades, comportamentos, regras e condições.

O PRD consolida a definição do produto.

User Stories decompõem a definição em unidades de valor.

Acceptance Criteria estabelecem condições verificáveis para as User Stories.

Backlog organiza as unidades de trabalho resultantes.

---

## 55. Regra de precedência

Quando houver conflito entre este padrão e uma regra geral:

1. uma decisão explícita do projeto pode estabelecer uma exceção documentada;
2. `governance/development-lifecycle.md` define o ciclo geral;
3. os padrões de Requirements definem as regras de requisitos;
4. este documento define as regras específicas do PRD;
5. padrões mais específicos podem detalhar aspectos particulares sem contradizer as regras superiores.

Exceções relevantes devem ser registradas conforme `governance/exceptions.md`.

---

## 56. Resultado esperado

A aplicação deste padrão deve permitir que diferentes pessoas, equipes e agentes produzam PRDs que sejam:

- claros;
- objetivos;
- focados no produto;
- rastreáveis;
- suficientemente completos;
- proporcionais à complexidade;
- livres de detalhes técnicos desnecessários;
- adequados para tomada de decisão;
- adequados para decomposição em User Stories;
- mantidos de forma versionada como código no repositório do projeto.