# Non-Functional Requirements Standard

## 1. Objetivo

Este documento define o padrão para identificação, definição, documentação, validação e manutenção de Requisitos Não Funcionais no contexto de Product Delivery e Documentation-as-Code.

O objetivo é estabelecer uma forma consistente de descrever características, condições e restrições de qualidade que o produto deve atender, permitindo que diferentes pessoas, agentes e equipes produzam requisitos claros, verificáveis, mensuráveis quando aplicável e rastreáveis.

Este padrão complementa o `requirements-standard.md`, que define as regras gerais para requisitos.

---

## 2. Escopo

Este padrão trata especificamente de Requisitos Não Funcionais.

Estão incluídos:

- definição de características de qualidade do produto;
- condições de desempenho;
- disponibilidade;
- capacidade;
- escalabilidade;
- segurança;
- privacidade;
- acessibilidade;
- compatibilidade;
- confiabilidade;
- experiência relacionada a características mensuráveis ou verificáveis;
- restrições de qualidade percebidas pelo usuário;
- critérios de medição e verificação;
- escopo e condições de aplicação;
- rastreabilidade;
- revisão, aprovação e evolução;
- uso por agentes de IA.

Não fazem parte deste padrão:

- desenho de arquitetura;
- definição de componentes técnicos;
- escolha de tecnologias;
- configuração de infraestrutura;
- implementação;
- testes automatizados;
- definição detalhada de APIs;
- procedimentos operacionais.

Esses temas podem ser tratados posteriormente por padrões específicos de arquitetura, desenvolvimento, segurança, DevOps ou operações.

---

## 3. Conceito de Requisito Não Funcional

Um Requisito Não Funcional descreve uma característica, condição, restrição ou atributo de qualidade que o produto deve atender.

Ele responde principalmente à pergunta:

> Com quais características ou condições o produto deve funcionar?

Exemplos:

- A consulta deve apresentar o resultado em até 2 segundos nas condições definidas.
- O produto deve estar disponível durante o período operacional definido.
- O conteúdo deve ser acessível por usuários que utilizem tecnologias assistivas.
- O produto não deve permitir acesso a informações de outro usuário.
- O produto deve suportar a quantidade de usuários definida para o contexto de negócio.

O Requisito Não Funcional não precisa necessariamente ser técnico.

Ele pode representar uma condição percebida diretamente pelo usuário, uma obrigação de negócio ou uma condição de qualidade necessária ao produto.

---

## 4. Objetivos

Os Requisitos Não Funcionais devem permitir:

- explicitar características de qualidade relevantes;
- evitar interpretações subjetivas sobre qualidade;
- estabelecer condições verificáveis;
- orientar a definição do produto;
- apoiar a elaboração do PRD;
- apoiar a definição de Acceptance Criteria quando aplicável;
- permitir avaliação objetiva do atendimento;
- manter rastreabilidade;
- identificar impactos decorrentes de mudanças.

---

## 5. Quando definir um Requisito Não Funcional

Um Requisito Não Funcional deve ser definido quando uma característica de qualidade ou condição não funcional for relevante para o produto.

Exemplos:

- uma determinada resposta precisa ocorrer dentro de um limite de tempo;
- o produto precisa estar disponível em determinado período;
- existe uma quantidade esperada de usuários;
- informações precisam ser protegidas;
- determinados usuários precisam conseguir utilizar o produto;
- o produto precisa funcionar em determinado ambiente ou contexto;
- existe uma exigência regulatória;
- existe uma condição de negócio relacionada à qualidade do serviço.

Nem toda característica de qualidade precisa ser transformada em um RNF individual.

A documentação deve ser proporcional ao risco, relevância e complexidade do produto.

---

## 6. Princípios

Os Requisitos Não Funcionais devem seguir os seguintes princípios:

### 6.1 Clareza

A característica esperada deve ser compreensível.

### 6.2 Verificabilidade

Deve ser possível determinar se o requisito foi atendido.

### 6.3 Mensurabilidade quando aplicável

Quando uma característica puder ser expressa por métrica, limite, faixa ou condição objetiva, isso deve ser preferido a termos subjetivos.

### 6.4 Contexto

A métrica ou condição deve possuir contexto suficiente para ser interpretada corretamente.

### 6.5 Necessidade

O requisito deve representar uma necessidade real do produto.

### 6.6 Independência de implementação

O requisito deve descrever a qualidade ou condição esperada sem determinar desnecessariamente a solução técnica.

### 6.7 Rastreabilidade

Quando relevante, deve ser possível relacionar o RNF à sua origem e aos artefatos derivados.

### 6.8 Proporcionalidade

O nível de detalhamento deve ser proporcional à importância da característica e ao risco associado.

---

## 7. Categorias

Os Requisitos Não Funcionais podem ser classificados por categoria.

Categorias comuns incluem:

- desempenho;
- disponibilidade;
- capacidade;
- escalabilidade;
- confiabilidade;
- segurança;
- privacidade;
- acessibilidade;
- compatibilidade;
- usabilidade, quando expressa de forma objetiva;
- continuidade, quando aplicável;
- retenção ou comportamento de informações, quando representar uma condição de produto;
- conformidade regulatória ou normativa, quando aplicável.

A lista não é exaustiva.

Um projeto pode adotar categorias adicionais quando houver necessidade.

---

## 8. Desempenho

Requisitos de desempenho devem descrever limites ou condições mensuráveis sempre que possível.

Exemplo inadequado:

    O produto deve ser rápido.

Exemplo adequado:

    RNF-001:
    O produto deve apresentar o resultado da consulta em até 2 segundos para até 1.000 usuários simultâneos, nas condições definidas para o cenário de referência.

Quando aplicável, devem ser definidos:

- métrica;
- limite;
- condição de medição;
- escopo;
- cenário;
- população ou volume relevante.

Exemplos de métricas:

- tempo de resposta;
- tempo de processamento;
- taxa de processamento;
- latência;
- volume processado por período.

---

## 9. Disponibilidade

Requisitos de disponibilidade devem definir a condição esperada do produto.

Exemplo inadequado:

    O sistema deve estar sempre disponível.

Exemplo adequado:

    RNF-002:
    O produto deve estar disponível em pelo menos 99,9% do período operacional definido para o serviço.

Quando relevante, especificar:

- período de medição;
- janela operacional;
- percentual esperado;
- exceções;
- manutenção planejada;
- contexto de aplicação.

---

## 10. Capacidade

Requisitos de capacidade representam volumes que o produto deve suportar.

Exemplos:

- número de usuários;
- quantidade de transações;
- quantidade de documentos;
- volume de dados;
- quantidade de operações por período.

Exemplo:

    RNF-003:
    O produto deve suportar até 10.000 usuários ativos simultaneamente no cenário de referência definido pelo produto.

A capacidade deve estar associada a uma condição mensurável sempre que possível.

---

## 11. Escalabilidade

Quando a capacidade precisar aumentar de acordo com crescimento previsto, a necessidade pode ser documentada como requisito de escalabilidade.

Exemplo:

    RNF-004:
    O produto deve suportar o crescimento previsto de até 100.000 usuários ativos mensais sem alteração do comportamento funcional definido no PRD.

O requisito deve definir o contexto do crescimento.

A forma técnica de alcançar essa capacidade não deve ser determinada neste nível, salvo quando existir uma restrição explícita.

---

## 12. Confiabilidade

Requisitos de confiabilidade descrevem condições relacionadas à capacidade do produto de manter comportamento esperado sob condições definidas.

Exemplo:

    RNF-005:
    O produto não deve perder uma solicitação confirmada pelo usuário em caso de falha durante o processamento.

Quando aplicável, a confiabilidade pode ser expressa por:

- taxa de falha;
- quantidade máxima de ocorrências;
- percentual de sucesso;
- período;
- condições de operação.

---

## 13. Segurança

Requisitos de segurança podem ser definidos quando houver uma necessidade de proteção relacionada ao produto.

Exemplos:

    RNF-006:
    O produto deve impedir que um usuário consulte informações pertencentes a outro usuário.

    RNF-007:
    O produto deve exigir autenticação antes de permitir acesso às informações restritas.

O requisito deve descrever a condição de segurança necessária.

A tecnologia ou mecanismo utilizado para implementá-la deve ser definido em documentação técnica quando aplicável.

---

## 14. Privacidade

Requisitos de privacidade devem representar condições relacionadas ao tratamento de dados pessoais ou outras informações que necessitem de proteção.

Exemplo:

    RNF-008:
    O produto não deve disponibilizar dados pessoais de um usuário para outro usuário sem autorização prevista pelo contexto do produto.

Quando houver obrigação legal ou regulatória, a origem deve ser registrada.

Exemplo:

    Origem:
    LGPD — requisito aplicável ao tratamento de dados pessoais.

A interpretação jurídica específica deve ser validada pelo responsável apropriado quando necessário.

---

## 15. Acessibilidade

Requisitos de acessibilidade devem definir condições objetivas quando a acessibilidade for relevante para o produto.

Exemplo inadequado:

    O produto deve ser acessível.

Exemplo mais adequado:

    RNF-009:
    As funcionalidades de navegação principais devem ser utilizáveis por usuários que utilizem navegação exclusivamente por teclado, conforme o critério de acessibilidade adotado pelo projeto.

Quando um padrão, legislação ou diretriz for utilizado como referência, ele deve ser identificado.

Exemplo:

    Referência:
    WCAG 2.2 — nível de conformidade adotado pelo projeto.

---

## 16. Compatibilidade

Requisitos de compatibilidade devem definir ambientes ou condições suportadas quando isso representar uma necessidade do produto.

Exemplo:

    RNF-010:
    O produto deve ser utilizável nas versões de navegador definidas como suportadas pelo projeto.

Quando houver uma lista de versões, ela deve ser mantida em local apropriado e versionado.

Evitar requisitos vagos como:

    O produto deve funcionar em todos os navegadores.

---

## 17. Usabilidade

Usabilidade pode ser tratada como Requisito Não Funcional quando houver uma condição objetiva que precise ser atendida.

Exemplo inadequado:

    O produto deve ser fácil de usar.

Exemplo adequado:

    RNF-011:
    Um usuário que atenda aos critérios definidos para o público-alvo deve conseguir concluir o fluxo de cadastro sem orientação externa no cenário de avaliação definido pelo produto.

Quando possível, definir:

- público;
- cenário;
- métrica;
- critério;
- condição de avaliação.

Não transformar uma preferência subjetiva em requisito obrigatório sem critério verificável.

---

## 18. Conformidade e requisitos externos

Uma característica não funcional pode ter origem em:

- legislação;
- regulamentação;
- contrato;
- política corporativa;
- padrão externo;
- acordo com cliente;
- requisito de mercado;
- decisão de produto.

A origem deve ser registrada quando for relevante.

Exemplo:

    RNF-012:
    O produto deve atender ao requisito de retenção de dados definido pela política corporativa aplicável.

    Origem:
    Política Corporativa de Retenção de Dados.

Quando o requisito tiver implicações legais ou regulatórias, a interpretação deve ser validada pelo responsável apropriado.

---

## 19. Métricas

Sempre que possível, uma métrica deve possuir:

- nome da métrica;
- unidade;
- valor ou faixa esperada;
- condição;
- contexto;
- período de medição, quando aplicável.

Exemplo:

    Métrica: Tempo de resposta
    Unidade: segundos
    Limite: até 2 segundos
    Condição: até 1.000 usuários simultâneos
    Percentil: p95

Evitar métricas sem contexto.

Exemplo inadequado:

    Tempo de resposta: 2 segundos.

Sem contexto, não fica claro:

- para qual operação;
- em qual condição;
- para qual volume;
- como medir;
- qual percentual das solicitações deve atender ao limite.

---

## 20. Limites, faixas e metas

Um RNF deve distinguir, quando necessário:

- limite mínimo;
- limite máximo;
- faixa aceitável;
- valor alvo;
- condição obrigatória.

Exemplo:

    Limite obrigatório:
    O tempo de resposta deve ser inferior a 2 segundos.

Exemplo de meta:

    Meta:
    95% das consultas devem ser concluídas em até 2 segundos.

Quando uma informação representar apenas uma expectativa ou objetivo e não uma obrigação, isso deve ser explicitado.

---

## 21. Condições de medição

Quando a medição depender de condições específicas, elas devem ser documentadas.

Exemplo:

    RNF-001:
    O produto deve apresentar o resultado da consulta em até 2 segundos em 95% das solicitações realizadas com até 1.000 usuários simultâneos durante o período de operação normal.

A condição evita que o requisito seja interpretado fora do contexto definido.

---

## 22. Escopo

Um RNF deve indicar seu escopo quando isso não for evidente.

O escopo pode ser:

- produto inteiro;
- determinada funcionalidade;
- determinado fluxo;
- determinado público;
- determinado canal;
- determinado período;
- determinado volume.

Exemplo:

    Escopo:
    Fluxo de consulta de pedidos no canal web.

Isso evita que uma condição seja interpretada como aplicável a todo o produto quando não for esse o caso.

---

## 23. Exceções

Quando uma condição possuir exceções, elas devem ser explicitadas.

Exemplo:

    RNF-002:
    O produto deve estar disponível em 99,9% do período operacional mensal, excluindo janelas de manutenção previamente comunicadas.

As exceções devem ser objetivas.

Evitar expressões como:

    exceto quando necessário;
    salvo situações especiais;
    quando possível.

---

## 24. Requisitos Não Funcionais e Regras de Negócio

Um RNF pode coexistir com uma Regra de Negócio.

Exemplo:

    RNF-001:
    O produto deve manter o histórico de pedidos por no mínimo 5 anos.

    RN-001:
    Pedidos relacionados a processos jurídicos devem permanecer disponíveis durante o período definido pela regra aplicável.

O RNF define uma característica ou condição.

A RN define a regra de negócio que pode determinar ou complementar essa condição.

---

## 25. Requisitos Não Funcionais e Restrições

Uma restrição pode determinar uma condição que o produto deve respeitar, mas não necessariamente representa uma característica de qualidade.

Exemplo:

    RNF-001:
    O produto deve estar disponível durante 99,9% do período operacional definido.

    RC-001:
    O produto deve operar dentro da infraestrutura corporativa autorizada.

A diferença deve ser preservada quando for relevante para entendimento e rastreabilidade.

---

## 26. Evitar solução técnica

O RNF deve descrever a qualidade ou condição esperada, não a solução técnica.

Exemplo inadequado:

    O produto deve utilizar Redis para garantir resposta inferior a 2 segundos.

Exemplo adequado:

    O produto deve apresentar o resultado da consulta em até 2 segundos nas condições definidas.

A tecnologia necessária para atingir o requisito deve ser definida posteriormente em documentação técnica apropriada.

Uma tecnologia pode aparecer no RNF quando a própria tecnologia for uma restrição explícita do produto.

---

## 27. Linguagem

Requisitos Não Funcionais devem utilizar linguagem objetiva e normativa.

Preferir:

    deve
    não deve
    no máximo
    no mínimo
    até
    igual ou superior a
    igual ou inferior a
    deve suportar
    deve permitir

Evitar:

    rápido
    seguro
    altamente disponível
    intuitivo
    fácil
    robusto
    escalável
    adequado
    eficiente
    performático

Esses termos podem ser utilizados apenas quando acompanhados de critérios objetivos.

---

## 28. Identificação

Quando houver necessidade de rastreabilidade individual, utilizar identificadores estáveis.

Formato recomendado:

    RNF-001
    RNF-002
    RNF-003

O ID deve permanecer estável enquanto representar a mesma necessidade.

Alterações no valor, contexto ou descrição não exigem necessariamente novo ID.

Um novo ID deve ser utilizado quando existir uma nova necessidade independente.

---

## 29. Estrutura de um Requisito Não Funcional

Quando aplicável, um RNF pode conter:

- ID;
- título;
- categoria;
- descrição;
- origem;
- justificativa;
- escopo;
- métrica;
- unidade;
- limite ou condição;
- contexto de medição;
- exceções;
- prioridade;
- status;
- dependências;
- referências;
- rastreabilidade.

Nem todos os campos são obrigatórios.

A estrutura deve ser proporcional à necessidade.

---

## 30. Exemplo de estrutura

    ### RNF-001 — Tempo de resposta da consulta de pedidos

    **Categoria:**  
    Desempenho

    **Descrição:**  
    O produto deve apresentar o resultado da consulta de pedidos em até 2 segundos.

    **Métrica:**  
    Tempo de resposta

    **Unidade:**  
    Segundos

    **Limite:**  
    Até 2 segundos

    **Condição:**  
    95% das solicitações com até 1.000 usuários simultâneos.

    **Escopo:**  
    Consulta de pedidos no canal web.

    **Origem:**  
    PRD-001

    **Prioridade:**  
    Alta

    **Status:**  
    Aprovado

---

## 31. Relação com Requisitos Funcionais

Um RNF pode estar associado a um ou mais Requisitos Funcionais.

Exemplo:

    RF-001:
    O usuário deve conseguir consultar seus pedidos.

    RNF-001:
    A consulta deve apresentar o resultado em até 2 segundos nas condições definidas.

O RF descreve o comportamento.

O RNF define uma característica associada ao comportamento.

A relação deve ser registrada quando necessária para rastreabilidade.

---

## 32. Relação com PRD

O PRD pode consolidar os Requisitos Não Funcionais relevantes para a definição do produto.

Exemplo:

    PRD-001
      ├── RF-001
      ├── RF-002
      ├── RNF-001
      └── RNF-002

O PRD não precisa duplicar integralmente todos os RNFs quando referências forem suficientes.

Características críticas para o produto devem ser explicitamente destacadas no PRD quando sua ausência puder comprometer o entendimento do escopo.

---

## 33. Relação com User Stories

Nem todo RNF precisa gerar uma User Story individual.

Um RNF pode:

- estar associado a várias User Stories;
- aplicar-se a todo um fluxo;
- aplicar-se ao produto inteiro;
- ser usado como condição transversal.

Exemplo:

    RNF-001
       ↓
    US-001
    US-002
    US-003

O relacionamento deve ser mantido quando necessário para rastreabilidade.

Não criar User Stories artificiais apenas para representar um RNF transversal.

---

## 34. Relação com Acceptance Criteria

Um RNF pode originar ou complementar Acceptance Criteria.

Exemplo:

    RNF-001:
    95% das consultas devem responder em até 2 segundos nas condições definidas.

    US-001:
    Como usuário,
    quero consultar meus pedidos,
    para acompanhar minhas compras.

    Acceptance Criteria:
    - A consulta apresenta os resultados corretamente.
    - O requisito de desempenho definido em RNF-001 é atendido nas condições estabelecidas.

Quando o RNF for transversal, sua validação pode ocorrer fora da User Story individual.

---

## 35. Rastreabilidade

Quando aplicável, deve ser possível relacionar o RNF à sua origem e aos artefatos derivados.

Exemplo:

    Discovery D-001
        ↓
    RNF-001
        ↓
    PRD-001
        ↓
    US-001
        ↓
    AC-001

A rastreabilidade pode utilizar:

- IDs;
- links;
- referências;
- tabelas;
- mecanismos de relacionamento do projeto.

---

## 36. Qualidade de um Requisito Não Funcional

Um RNF adequado deve ser:

- claro;
- necessário;
- verificável;
- mensurável quando aplicável;
- contextualizado;
- consistente;
- rastreável quando necessário;
- proporcional ao problema;
- livre de ambiguidade crítica;
- independente de implementação quando apropriado.

Um RNF não deve depender exclusivamente de julgamento subjetivo para determinar se foi atendido.

---

## 37. Ambiguidade

Termos subjetivos devem ser identificados e esclarecidos.

Exemplo:

    RNF-001:
    O produto deve apresentar uma resposta rápida.

Pergunta:

    Qual tempo máximo caracteriza uma resposta aceitável?

Após decisão:

    RNF-001:
    O produto deve apresentar o resultado em até 2 segundos em 95% das solicitações no cenário definido.

O agente não deve escolher o valor por conta própria.

---

## 38. Conflitos

Quando dois RNFs entrarem em conflito:

1. identificar os requisitos;
2. registrar o conflito;
3. avaliar o impacto;
4. encaminhar a decisão;
5. registrar a decisão;
6. atualizar os requisitos;
7. atualizar os artefatos relacionados.

Exemplo:

    RNF-001:
    O produto deve manter histórico completo por 10 anos.

    RNF-002:
    Dados pessoais devem ser eliminados após 5 anos.

O conflito deve ser identificado e encaminhado para decisão apropriada.

O agente não deve decidir sozinho qual requisito deve prevalecer.

---

## 39. Dependências

Um RNF pode depender de:

- outro requisito;
- regra de negócio;
- restrição;
- capacidade externa;
- obrigação regulatória;
- condição de produto.

Exemplo:

    RNF-001:
    O produto deve apresentar os dados em até 2 segundos.

    Dependência:
    DEP-001 — Disponibilidade do serviço de origem.

As dependências relevantes devem ser registradas.

---

## 40. Responsabilidades

### 40.1 Product Owner

Responsável por:

- validar a necessidade do requisito;
- decidir prioridades;
- resolver ambiguidades de produto;
- aprovar requisitos relevantes;
- validar compromissos de qualidade;
- resolver conflitos de negócio.

### 40.2 Product Analyst

Responsável por:

- elicitar necessidades;
- estruturar requisitos;
- transformar expectativas subjetivas em critérios objetivos;
- identificar lacunas;
- apoiar validação;
- manter rastreabilidade;
- apoiar análise de impacto.

### 40.3 Requirements Agent

O Requirements Agent pode:

- identificar RNFs candidatos;
- classificar requisitos;
- sugerir métricas;
- identificar termos vagos;
- identificar ausência de contexto;
- verificar consistência;
- identificar duplicidades;
- identificar conflitos;
- verificar rastreabilidade;
- sugerir perguntas;
- analisar impacto;
- estruturar documentação;
- relacionar RNFs a RFs, PRD, User Stories e Acceptance Criteria.

O Requirements Agent não deve:

- inventar métricas;
- escolher limites sem base ou decisão;
- transformar uma expectativa em obrigação sem validação;
- assumir prioridade;
- interpretar obrigação legal de forma autônoma;
- escolher tecnologia para atender o requisito;
- aprovar o requisito em nome do PO.

---

## 41. Capacidades do Requirements Agent

### 41.1 Identificação

Detectar características de qualidade mencionadas em:

- Discovery;
- entrevistas;
- documentos;
- requisitos;
- PRD;
- regras;
- decisões.

### 41.2 Estruturação

Transformar informações em RNFs candidatos.

### 41.3 Quantificação

Identificar oportunidades de substituir termos subjetivos por:

- métricas;
- limites;
- faixas;
- condições;
- cenários.

O agente pode sugerir a necessidade de quantificação, mas não deve inventar o valor.

### 41.4 Validação

Verificar:

- clareza;
- mensurabilidade;
- contexto;
- consistência;
- verificabilidade;
- escopo;
- rastreabilidade.

### 41.5 Impacto

Identificar:

- RFs afetados;
- PRDs afetados;
- User Stories afetadas;
- Acceptance Criteria afetados;
- outras condições dependentes.

---

## 42. Comportamento do Agent diante de informação insuficiente

Quando faltar informação para definir um RNF:

1. identificar a lacuna;
2. explicar por que ela é necessária;
3. formular pergunta objetiva;
4. registrar a questão;
5. aguardar decisão;
6. atualizar o requisito.

Exemplo:

    RNF candidato:
    O produto deve apresentar o resultado rapidamente.

    Pergunta:
    Qual é o tempo máximo aceitável e em qual percentual das solicitações?

O agente não deve converter "rapidamente" em um valor arbitrário.

---

## 43. Critérios de Entrada

A definição de RNFs pode começar quando:

- o problema e o contexto estiverem suficientemente compreendidos;
- existirem expectativas ou condições de qualidade relevantes;
- os principais fluxos ou capacidades do produto forem conhecidos;
- houver informação suficiente para identificar necessidades não funcionais.

Os RNFs podem ser definidos paralelamente aos RFs.

Não é necessário concluir todos os RFs antes de iniciar a identificação de RNFs.

---

## 44. Critérios de Saída

Os RNFs estão prontos para utilização no PRD quando:

- as características relevantes foram identificadas;
- requisitos importantes estão documentados;
- métricas foram definidas quando aplicável;
- limites ou condições estão suficientemente claros;
- o contexto de aplicação está definido;
- ambiguidades críticas foram resolvidas;
- conflitos relevantes foram resolvidos ou encaminhados;
- dependências relevantes foram identificadas;
- rastreabilidade necessária está estabelecida.

---

## 45. Gate

O gate aplicável é:

    Requirements Readiness Gate

A validação deve verificar:

- cobertura das características relevantes;
- clareza;
- verificabilidade;
- mensurabilidade quando aplicável;
- contexto;
- limites;
- escopo;
- ausência de ambiguidade crítica;
- dependências;
- rastreabilidade.

A aprovação deve ser realizada pelo PO ou pelo papel definido pelo projeto.

---

## 46. Revisão

Os RNFs devem ser revisados quando ocorrer:

- alteração de expectativa de qualidade;
- alteração de escopo;
- mudança de público;
- alteração de volume;
- mudança de regra;
- mudança regulatória;
- alteração de risco;
- identificação de nova dependência;
- alteração de RF relacionado;
- alteração de PRD;
- descoberta de inconsistência.

A revisão deve considerar os artefatos derivados.

---

## 47. Mudança e análise de impacto

Quando um RNF for alterado:

1. registrar a alteração;
2. registrar a razão quando relevante;
3. identificar artefatos afetados;
4. revisar o PRD;
5. revisar RFs relacionados;
6. revisar User Stories;
7. revisar Acceptance Criteria;
8. atualizar rastreabilidade.

Exemplo:

    RNF-001 alterado
        ↓
    PRD-001 afetado
        ↓
    RF-001 afetado
        ↓
    US-001 e US-002 afetadas
        ↓
    AC revisados

---

## 48. Obsolescência

Um RNF pode se tornar obsoleto quando:

- a característica deixar de ser necessária;
- o escopo do produto mudar;
- a obrigação externa deixar de existir;
- o requisito for substituído;
- a funcionalidade relacionada for removida.

Quando o histórico for relevante, o RNF deve ser marcado como obsoleto em vez de simplesmente apagado.

Exemplo:

    Status: Obsoleto
    Motivo: A funcionalidade à qual o requisito estava associado foi removida do produto.

---

## 49. Versionamento

Os RNFs devem ser versionados pelo Git do projeto.

Não é necessário criar cópias físicas para cada alteração.

O histórico do Git deve preservar as versões anteriores.

Alterações relevantes de negócio devem ser registradas no documento ou em artefato apropriado quando o histórico técnico não for suficiente para explicar a decisão.

---

## 50. Documentation-as-Code

Os RNFs devem ser documentados preferencialmente em Markdown no repositório do projeto.

Convenções:

- pt-BR por padrão;
- nomes de arquivos e diretórios em inglês;
- IDs estáveis;
- referências entre documentos;
- links relativos quando aplicável;
- histórico controlado pelo Git;
- ausência de duplicação desnecessária.

Exemplo:

    docs/
    └── product/
        └── requirements/
            ├── functional-requirements.md
            └── non-functional-requirements.md

---

## 51. Template de Requisito Não Funcional

Modelo recomendado:

    ### RNF-001 — Título do requisito

    **Categoria:**  
    Desempenho

    **Descrição:**  
    O produto deve ...

    **Origem:**  
    D-001

    **Escopo:**  
    ...

    **Métrica:**  
    ...

    **Unidade:**  
    ...

    **Limite / Condição:**  
    ...

    **Contexto de medição:**  
    ...

    **Exceções:**  
    ...

    **Dependências:**  
    - ...

    **Prioridade:**  
    Alta

    **Status:**  
    Em validação

    **Rastreabilidade:**  
    - PRD-001
    - RF-001
    - US-001

Os campos devem ser utilizados somente quando fizerem sentido.

---

## 52. Exemplo completo

    ### RNF-001 — Tempo de resposta da consulta de pedidos

    **Categoria:**  
    Desempenho

    **Descrição:**  
    O produto deve apresentar o resultado da consulta de pedidos em até 2 segundos.

    **Origem:**  
    D-001

    **Escopo:**  
    Consulta de pedidos no canal web.

    **Métrica:**  
    Tempo de resposta.

    **Unidade:**  
    Segundos.

    **Limite / Condição:**  
    Até 2 segundos em 95% das solicitações.

    **Contexto de medição:**  
    Até 1.000 usuários simultâneos durante o período operacional normal.

    **Exceções:**  
    Não aplicável.

    **Prioridade:**  
    Alta

    **Status:**  
    Aprovado

    **Rastreabilidade:**  
    - D-001
    - PRD-001
    - RF-001
    - US-001

---

## 53. Relação com outros padrões

Este padrão deve ser utilizado em conjunto com:

- `product/requirements/requirements-standard.md`
- `product/requirements/functional-requirements.md`
- `product/discovery/discovery-standard.md`
- `product/prd/prd-standard.md`
- `product/user-stories/user-story-standard.md`
- `product/user-stories/acceptance-criteria.md`
- `product/backlog/backlog-management.md`
- `governance/definition-of-ready.md`

O `requirements-standard.md` define as regras gerais para requisitos.

O `functional-requirements.md` define as regras específicas para Requisitos Funcionais.

Este documento define as regras específicas para Requisitos Não Funcionais.

O PRD consolida e contextualiza a definição do produto.

As User Stories representam unidades de valor para usuários.

Os Acceptance Criteria estabelecem condições verificáveis para as User Stories.

---

## 54. Regra de precedência

Quando houver conflito entre este padrão e uma regra geral:

1. uma decisão explícita do projeto pode estabelecer uma exceção documentada;
2. o `requirements-standard.md` define as regras gerais;
3. este documento define as regras específicas para Requisitos Não Funcionais;
4. padrões mais específicos podem detalhar aspectos particulares sem contradizer as regras superiores.

Exceções relevantes devem ser registradas conforme `governance/exceptions.md`.

---

## 55. Resultado esperado

A aplicação deste padrão deve permitir que diferentes pessoas, equipes e agentes produzam Requisitos Não Funcionais que sejam:

- claros;
- objetivos;
- verificáveis;
- mensuráveis quando aplicável;
- contextualizados;
- rastreáveis;
- independentes de implementação quando apropriado;
- adequados para definição do produto;
- adequados para orientar User Stories e Acceptance Criteria quando necessário;
- mantidos de forma versionada como código no repositório do projeto.