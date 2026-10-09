# Acceptance Criteria Standard

## 1. Objetivo

Este documento define o padrão para elaboração, estruturação, revisão e validação de Acceptance Criteria no contexto de Product Delivery.

O objetivo é garantir que os Acceptance Criteria:

- expressem condições verificáveis;
- estejam diretamente relacionados à User Story;
- representem o comportamento esperado do produto;
- reduzam ambiguidades;
- permitam validar se a User Story foi atendida;
- mantenham consistência com PRD, Requirements e regras de negócio;
- possam ser utilizados por pessoas e agentes de IA;
- não introduzam decisões de produto que ainda não tenham sido tomadas;
- não antecipem detalhes de implementação desnecessários.

---

## 2. Escopo

Este padrão se aplica aos Acceptance Criteria associados às User Stories do Product Backlog.

Está incluído:

- conceito de Acceptance Criteria;
- finalidade;
- estrutura;
- regras de escrita;
- cenários;
- condições positivas;
- condições negativas;
- exceções;
- validações;
- regras de negócio;
- requisitos não funcionais;
- rastreabilidade;
- responsabilidades;
- atuação de agentes;
- critérios de qualidade;
- revisão;
- mudanças;
- preparação para Ready for Development;
- Documentation-as-Code.

Não está incluído:

- implementação;
- código;
- testes automatizados;
- estratégia técnica de testes;
- casos de teste técnicos;
- arquitetura;
- APIs;
- banco de dados;
- infraestrutura;
- CI/CD;
- deployment.

Acceptance Criteria podem posteriormente servir de entrada para testes, mas não substituem a definição da estratégia ou implementação de testes.

---

## 3. Conceito

Acceptance Criteria são condições objetivas que precisam ser satisfeitas para que uma User Story seja considerada atendida do ponto de vista de produto.

Eles respondem à pergunta:

> Como saberemos que esta User Story foi atendida?

Exemplo:

User Story:

> Como administrador, quero cadastrar usuários para que eles possam acessar o produto.

Acceptance Criteria:

- O administrador consegue iniciar o cadastro.
- Os campos obrigatórios são validados.
- O sistema impede o cadastro quando o e-mail já estiver em uso.
- Um cadastro válido resulta na criação do usuário.

Os Acceptance Criteria não descrevem necessariamente como o sistema será implementado.

---

## 4. Papel no Product Delivery

A relação entre os artefatos é:

    Discovery
        ↓
    Requirements
        ↓
    PRD
        ↓
    User Story
        ↓
    Acceptance Criteria
        ↓
    Product Backlog

A User Story expressa a necessidade e o valor.

Os Acceptance Criteria definem as condições observáveis que permitem verificar se essa necessidade foi atendida.

---

## 5. Princípios

### 5.1 Verificabilidade

Cada critério deve permitir determinar objetivamente se foi atendido.

Evitar:

> O sistema deve ser fácil de usar.

Preferir, quando houver uma definição de produto apropriada:

> O usuário deve conseguir concluir o fluxo de cadastro sem precisar fornecer informações que não sejam necessárias para o cadastro.

Quando a condição puder ser mensurada, deve-se utilizar uma métrica ou condição objetiva.

---

### 5.2 Clareza

Cada critério deve possuir uma interpretação suficientemente clara para diferentes pessoas envolvidas no produto.

Evitar:

- rapidamente;
- adequadamente;
- facilmente;
- intuitivamente;
- normalmente;
- conforme necessário;
- quando possível.

Quando esses conceitos forem relevantes, devem ser transformados em condições observáveis.

---

### 5.3 Relação direta com a User Story

Todo Acceptance Criterion deve estar relacionado ao objetivo da User Story.

Não utilizar uma User Story como local para acumular requisitos não relacionados.

Se um critério representar outra necessidade de negócio, deve-se avaliar:

- criação de outra User Story;
- inclusão em Requirements;
- alteração do escopo;
- ou registro como dependência.

---

### 5.4 Cobertura suficiente

Os Acceptance Criteria devem cobrir os comportamentos necessários para validar a User Story.

Isso pode incluir:

- fluxo principal;
- condições obrigatórias;
- regras de negócio;
- resultados esperados;
- condições negativas;
- exceções relevantes;
- estados relevantes;
- limites relevantes;
- requisitos não funcionais aplicáveis.

Não é necessário descrever todos os comportamentos possíveis.

A cobertura deve ser proporcional ao risco e à complexidade da User Story.

---

### 5.5 Não prescrever implementação

Acceptance Criteria devem definir comportamento e resultado.

Evitar:

> O sistema deve utilizar uma API REST com endpoint POST `/users`.

Preferir:

> O administrador deve conseguir cadastrar um novo usuário fornecendo as informações obrigatórias.

Detalhes técnicos devem ser definidos em artefatos apropriados.

---

### 5.6 Não inventar decisões

Se um critério depender de uma decisão de produto ainda não tomada, a decisão deve ser registrada como pendência.

O Acceptance Criterion não deve assumir uma alternativa como se ela tivesse sido aprovada.

---

## 6. Estrutura básica

Um Acceptance Criterion deve representar uma condição verificável.

Estrutura simples:

    - [ ] [Condição ou comportamento esperado]

Exemplo:

    - [ ] O administrador consegue cadastrar um usuário válido.

Quando houver múltiplas condições relacionadas, podem ser utilizados cenários.

Estrutura:

    ### Cenário: [nome]

    Dado que [contexto]
    Quando [ação]
    Então [resultado esperado]

O formato Given/When/Then é recomendado para cenários mais complexos, mas não é obrigatório.

---

## 7. Critério simples

Para comportamentos simples, uma frase objetiva é suficiente.

Exemplo:

    - [ ] O gestor consegue consultar as despesas do período selecionado.

Não é necessário transformar toda User Story em uma sequência de cenários formais.

---

## 8. Cenário

Cenários são recomendados quando o comportamento possui diferentes caminhos ou condições relevantes.

Exemplo:

    ### Cenário: Cadastro válido

    Dado que o administrador possui permissão para cadastrar usuários
    E informa todos os dados obrigatórios
    Quando solicita o cadastro
    Então o usuário deve ser cadastrado.

    ### Cenário: E-mail já existente

    Dado que já existe um usuário com o e-mail informado
    Quando o administrador solicita o cadastro
    Então o sistema deve impedir o cadastro
    E deve informar que o e-mail já está sendo utilizado.

---

## 9. Given / When / Then

Quando utilizado:

### Given — Dado

Representa o contexto ou condição inicial.

Exemplo:

    Dado que o usuário está autenticado.

### When — Quando

Representa a ação ou evento.

Exemplo:

    Quando o usuário solicita a alteração de sua senha.

### Then — Então

Representa o resultado esperado.

Exemplo:

    Então o sistema deve permitir a alteração da senha.

### And — E

Pode ser utilizado para complementar qualquer uma das partes quando necessário.

Exemplo:

    Dado que o usuário está autenticado
    E possui permissão para alterar o cadastro
    Quando solicita a alteração
    Então o sistema deve apresentar o formulário de edição.

---

## 10. Condições positivas

Devem ser descritos os comportamentos esperados quando as condições necessárias são atendidas.

Exemplo:

    - [ ] Quando todos os dados obrigatórios forem informados, o sistema permite concluir o cadastro.

---

## 11. Condições negativas

Condições negativas devem ser incluídas quando representarem comportamento relevante do produto.

Exemplo:

    - [ ] O sistema não permite o cadastro quando o e-mail já estiver associado a outro usuário.

Condições negativas são especialmente importantes quando representam:

- regras de negócio;
- restrições;
- validações;
- segurança de acesso;
- prevenção de duplicidade;
- limites;
- condições que poderiam gerar comportamento incorreto.

---

## 12. Exceções

Exceções relevantes devem ser explicitadas.

Exemplo:

    ### Cenário: Período sem despesas

    Dado que não existem despesas registradas no período informado
    Quando o gestor realizar a consulta
    Então o sistema deve informar que não existem despesas para o período.

Não é necessário documentar toda possibilidade excepcional.

Devem ser priorizadas as exceções que:

- possuem impacto de negócio;
- podem gerar comportamento incorreto;
- representam regras conhecidas;
- são relevantes para a experiência do usuário;
- possuem risco relevante.

---

## 13. Regras de negócio

Quando uma User Story estiver sujeita a uma regra de negócio, os Acceptance Criteria devem refletir seu comportamento observável.

Exemplo:

Requirement:

    RN-004 — Apenas administradores podem cadastrar usuários.

User Story:

    US-001 — Cadastrar usuário.

Acceptance Criteria:

    - [ ] Usuários com perfil de administrador conseguem iniciar o cadastro.
    - [ ] Usuários sem permissão de administração não conseguem realizar o cadastro.

A regra original deve continuar registrada no conjunto de Requirements.

O Acceptance Criterion representa sua aplicação à User Story.

---

## 14. Requisitos funcionais

Acceptance Criteria podem materializar Requirements funcionais.

Exemplo:

Requirement:

    RF-003 — O sistema deve permitir o cadastro de usuários.

User Story:

    US-001 — Cadastrar usuário.

Acceptance Criteria:

    - [ ] O administrador consegue iniciar um novo cadastro.
    - [ ] O sistema permite informar os dados obrigatórios.
    - [ ] O sistema permite concluir o cadastro quando os dados forem válidos.

Um Requirement pode estar relacionado a várias User Stories.

Nesse caso, os Acceptance Criteria de cada história devem representar somente o comportamento relevante para aquela história.

---

## 15. Requisitos não funcionais

Requisitos não funcionais relevantes podem aparecer nos Acceptance Criteria quando forem necessários para validar a User Story.

Exemplo:

Requirement:

    RNF-002 — A consulta deve responder em até 2 segundos nas condições definidas.

Acceptance Criterion:

    - [ ] A consulta atende ao limite de tempo definido no RNF-002 nas condições especificadas.

Quando o requisito não funcional já estiver formalizado, deve ser referenciado em vez de duplicado desnecessariamente.

---

## 16. Critérios mensuráveis

Quando uma condição puder ser medida, deve-se preferir uma definição objetiva.

Evitar:

> A consulta deve ser rápida.

Preferir:

> A consulta deve responder em até 2 segundos nas condições definidas pelo RNF-002.

Outros exemplos:

    - O arquivo não pode exceder o limite definido.
    - O usuário deve receber a confirmação após a conclusão da operação.
    - O sistema deve permitir no máximo 10 registros por operação.

Os valores devem estar baseados em decisões ou Requirements existentes.

O agente não deve inventar números para tornar um critério aparentemente mais objetivo.

---

## 17. Limites

Limites relevantes devem ser explícitos.

Exemplo:

    - [ ] O usuário pode anexar no máximo 5 arquivos em uma operação.

Quando o limite ainda não tiver sido definido:

    Pergunta em Aberto:
    - Qual é o número máximo de arquivos permitido?

Não transformar uma estimativa do agente em regra definitiva.

---

## 18. Estados

Quando o comportamento depender de estados do produto, os Acceptance Criteria devem considerar os estados relevantes.

Exemplo:

    ### Cenário: Documento já aprovado

    Dado que o documento está no estado "Aprovado"
    Quando o usuário solicitar sua edição
    Então o sistema não deve permitir a alteração.

Os estados devem utilizar a nomenclatura definida pelo produto.

---

## 19. Permissões

Quando uma User Story depender de permissões ou papéis, isso deve ser explicitamente considerado.

Exemplo:

    ### Cenário: Usuário sem permissão

    Dado que o usuário não possui permissão para aprovar documentos
    Quando acessar o documento
    Então a ação de aprovação não deve estar disponível.

A definição dos perfis e permissões pode existir em Requirements ou em outro artefato apropriado.

---

## 20. Dados

Acceptance Criteria podem especificar dados necessários para verificar o comportamento.

Exemplo:

    - [ ] O cadastro exige nome e e-mail.
    - [ ] O sistema informa quando o e-mail informado já está cadastrado.

Não devem definir estruturas técnicas de armazenamento.

Evitar:

    - [ ] O campo `email` deve possuir índice UNIQUE na tabela `users`.

Esse é um detalhe de implementação.

---

## 21. Mensagens e conteúdo apresentado ao usuário

Quando o conteúdo de uma mensagem possuir importância de negócio ou experiência, ele pode ser definido.

Exemplo:

    - [ ] Quando o e-mail já estiver cadastrado, o usuário deve ser informado de que não é possível realizar um novo cadastro com o mesmo e-mail.

Não é necessário definir a redação literal da mensagem quando isso não for relevante.

Evitar especificações excessivamente detalhadas sem necessidade de produto.

---

## 22. Ordem dos critérios

Os critérios podem ser organizados em uma sequência lógica quando isso facilitar a compreensão.

Exemplo:

    1. Usuário inicia a operação.
    2. Sistema solicita informações obrigatórias.
    3. Sistema valida as informações.
    4. Sistema conclui a operação.
    5. Sistema apresenta o resultado.

A ordem não representa necessariamente a ordem de implementação.

---

## 23. Quantidade de critérios

Não existe quantidade fixa obrigatória de Acceptance Criteria.

Uma User Story simples pode possuir poucos critérios.

Uma User Story complexa pode possuir vários critérios ou cenários.

O objetivo é garantir cobertura suficiente, evitando:

- critérios insuficientes;
- critérios redundantes;
- excesso de detalhes;
- duplicação de Requirements;
- especificação técnica desnecessária.

---

## 24. Acceptance Criteria e Definition of Done

Acceptance Criteria e Definition of Done possuem finalidades diferentes.

Acceptance Criteria:

> Define o que precisa ser verdadeiro para aquela User Story atender ao comportamento esperado.

Definition of Done:

> Define condições gerais para considerar um trabalho concluído dentro do processo.

Exemplo:

Acceptance Criterion:

    - [ ] O gestor consegue consultar as despesas do período.

Definition of Done pode incluir condições gerais como:

    - documentação atualizada;
    - revisão realizada;
    - validações necessárias executadas;
    - artefatos obrigatórios atualizados.

Acceptance Criteria são específicos da User Story.

Definition of Done é transversal ao processo.

---

## 25. Acceptance Criteria e testes

Acceptance Criteria não são necessariamente casos de teste.

Um Acceptance Criterion pode originar:

- testes manuais;
- testes automatizados;
- cenários de validação;
- demonstrações;
- inspeções.

Por exemplo:

Acceptance Criterion:

    - [ ] Usuários sem permissão não conseguem aprovar documentos.

Posteriormente podem existir vários casos de teste para verificar essa condição.

O Acceptance Criterion permanece como requisito de produto.

---

## 26. Cobertura

A cobertura deve considerar pelo menos, quando aplicável:

- fluxo principal;
- condições obrigatórias;
- regras de negócio;
- resultados esperados;
- condições negativas;
- exceções relevantes;
- permissões;
- estados;
- limites;
- requisitos não funcionais aplicáveis.

A ausência de um desses elementos não significa automaticamente que a User Story esteja incompleta.

A necessidade depende do comportamento da história.

---

## 27. Evitar duplicação

Acceptance Criteria não devem repetir integralmente informações já existentes em:

- PRD;
- Requirements;
- regras de negócio;
- outros critérios.

Quando uma informação já estiver formalizada, deve-se referenciá-la quando isso for suficiente.

A duplicação deve ser utilizada apenas quando necessária para tornar o critério verificável e compreensível.

---

## 28. Ambiguidades

Durante a elaboração, devem ser identificados termos ou condições que possam gerar interpretações diferentes.

Exemplo:

    Critério ambíguo:
    - O usuário pode alterar seus dados quando necessário.

Questões:

- Quais dados?
- Em quais condições?
- Qual usuário?
- Existem restrições?
- O que significa "quando necessário"?

O critério deve ser refinado ou a questão deve ser registrada como pendência.

---

## 29. Conflitos

Quando Acceptance Criteria entrarem em conflito com:

- User Story;
- Requirements;
- PRD;
- regras de negócio;
- decisões de produto;

o conflito deve ser identificado.

O agente não deve escolher silenciosamente uma interpretação.

Deve:

1. identificar o conflito;
2. localizar os artefatos envolvidos;
3. indicar o impacto;
4. solicitar ou encaminhar a decisão apropriada.

---

## 30. Duplicidade

Antes de criar um novo Acceptance Criterion, deve-se verificar se o comportamento já está representado por outro critério.

Duplicidades podem indicar:

- User Stories sobrepostas;
- Requirements duplicados;
- regra de negócio repetida;
- decomposição inadequada.

O objetivo não é eliminar toda repetição textual, mas evitar inconsistências causadas por múltiplas definições independentes da mesma condição.

---

## 31. Rastreabilidade

Acceptance Criteria devem manter relação com a User Story à qual pertencem.

A rastreabilidade recomendada é:

    Discovery
        ↓
    Requirements
        ↓
    PRD
        ↓
    User Story
        ↓
    Acceptance Criteria

Quando relevante, cada critério pode indicar a origem de uma regra ou Requirement.

Exemplo:

    - [ ] O usuário sem permissão não consegue aprovar o documento.
      Origem: RN-005

Isso é opcional e deve ser utilizado quando melhorar a rastreabilidade.

---

## 32. Rastreabilidade reversa

Quando necessário, deve ser possível responder:

- qual User Story este critério valida?
- qual Requirement originou este comportamento?
- qual regra de negócio está sendo aplicada?
- qual objetivo do PRD é atendido?
- quais Acceptance Criteria cobrem determinado Requirement?

Essa rastreabilidade pode ser realizada por IDs, referências ou links internos.

---

## 33. Responsabilidades

### 33.1 Product Owner

Responsável por:

- validar se os critérios representam o comportamento esperado;
- resolver ambiguidades de negócio;
- decidir regras de produto;
- validar condições de aceitação;
- aprovar alterações relevantes;
- garantir alinhamento com objetivos e escopo do produto.

---

### 33.2 Product Analyst

Responsável por apoiar:

- elaboração;
- refinamento;
- identificação de lacunas;
- identificação de cenários;
- identificação de exceções;
- rastreabilidade;
- análise de consistência;
- análise de impacto.

---

### 33.3 Requirements Agent

Pode apoiar:

- geração inicial de Acceptance Criteria;
- identificação de condições relevantes;
- identificação de cenários;
- identificação de regras relacionadas;
- análise de cobertura;
- detecção de ambiguidades;
- detecção de inconsistências;
- rastreabilidade;
- análise de impacto.

O Requirements Agent não deve:

- inventar regras;
- decidir valores desconhecidos;
- definir limites sem fonte;
- aprovar critérios;
- assumir comportamento não documentado;
- converter hipóteses em fatos.

---

### 33.4 Product Owner Agent

Pode apoiar:

- elaboração de Acceptance Criteria;
- decomposição em cenários;
- análise de valor;
- identificação de condições de sucesso;
- análise de coerência com PRD;
- análise de coerência com User Story;
- identificação de lacunas;
- rastreabilidade;
- preparação para revisão humana.

O Product Owner Agent não deve:

- tomar decisões de produto sem autorização;
- aprovar definitivamente os critérios;
- inventar regras;
- escolher entre alternativas de negócio sem decisão;
- alterar escopo de forma autônoma.

---

## 34. Comportamento dos agentes diante de incerteza

Quando um agente não possuir informação suficiente para definir um Acceptance Criterion, deve:

1. procurar a informação no PRD;
2. consultar Requirements relacionados;
3. verificar regras de negócio;
4. verificar decisões registradas;
5. verificar User Story relacionada;
6. identificar a lacuna;
7. registrar a pergunta;
8. solicitar decisão humana quando necessário.

Exemplo:

    Pergunta em Aberto:
    - Qual deve ser o comportamento quando o arquivo exceder o limite permitido?

O agente não deve simplesmente escolher um comportamento.

---

## 35. Validação de consistência

Antes de considerar os Acceptance Criteria prontos, deve-se verificar:

### Consistência com User Story

- os critérios validam a necessidade da história;
- não adicionam escopo não relacionado;
- não contradizem o objetivo.

### Consistência com Requirements

- regras relevantes foram consideradas;
- requisitos aplicáveis estão representados;
- não existem conflitos.

### Consistência interna

- os critérios não se contradizem;
- as condições são verificáveis;
- os resultados são claros.

### Consistência com PRD

- os critérios não contradizem objetivos ou escopo;
- não introduzem comportamento fora do produto definido.

---

## 36. Critérios de qualidade

Acceptance Criteria de qualidade devem ser:

- claros;
- verificáveis;
- relevantes;
- consistentes;
- suficientemente completos;
- rastreáveis;
- proporcionais à complexidade;
- independentes de implementação;
- livres de decisões inventadas.

Checklist recomendada:

    [ ] O critério é verificável?
    [ ] Está relacionado à User Story?
    [ ] O comportamento esperado está claro?
    [ ] As regras de negócio relevantes foram consideradas?
    [ ] As condições negativas relevantes foram consideradas?
    [ ] As exceções relevantes foram consideradas?
    [ ] Os limites relevantes foram definidos?
    [ ] Os requisitos não funcionais aplicáveis foram considerados?
    [ ] Existem ambiguidades?
    [ ] Existem conflitos?
    [ ] Existe duplicidade?
    [ ] O critério evita detalhes técnicos desnecessários?
    [ ] A origem está identificada quando necessário?

---

## 37. Entrada

Para elaboração dos Acceptance Criteria, espera-se que existam:

- User Story;
- contexto;
- escopo;
- Requirements relacionados;
- regras de negócio relevantes;
- decisões de produto;
- requisitos não funcionais aplicáveis.

Os Acceptance Criteria podem ser refinados iterativamente.

---

## 38. Saída

Os Acceptance Criteria estão prontos quando:

- representam o comportamento esperado;
- são verificáveis;
- cobrem as condições relevantes;
- não possuem ambiguidades significativas;
- estão consistentes com a User Story;
- estão consistentes com Requirements e PRD;
- não introduzem decisões não aprovadas;
- estão suficientemente claros para permitir validação.

---

## 39. Gate — Acceptance Criteria Ready

Antes de uma User Story ser considerada Ready for Development, os Acceptance Criteria devem passar por uma validação mínima.

O Gate deve verificar:

    User Story
        ↓
    Acceptance Criteria
        ↓
    Clareza
        ↓
    Verificabilidade
        ↓
    Cobertura
        ↓
    Consistência
        ↓
    Rastreabilidade
        ↓
    Decisões resolvidas
        ↓
    Acceptance Criteria Ready

Esse Gate faz parte da preparação da User Story.

Ele não representa aprovação técnica da implementação.

---

## 40. Revisão

Acceptance Criteria devem ser revisados quando:

- a User Story for criada;
- a User Story sofrer alteração;
- um Requirement relacionado mudar;
- uma regra de negócio mudar;
- o PRD relacionado mudar;
- uma decisão de produto mudar;
- uma dependência relevante mudar;
- surgir nova informação relevante.

A revisão deve avaliar possíveis impactos sobre:

- cobertura;
- cenários;
- regras;
- limites;
- dependências;
- rastreabilidade;
- outras User Stories.

---

## 41. Mudanças

Alterações devem ser realizadas no próprio artefato versionado quando continuarem relacionadas à mesma User Story.

O histórico deve ser preservado pelo Git.

Uma alteração pode exigir revisão dos Acceptance Criteria mesmo quando a User Story permanecer com o mesmo ID.

Exemplo:

    User Story permanece:
    US-001 — Cadastrar usuário

    Mas os critérios podem mudar:

    Antes:
    - [ ] O e-mail deve ser informado.

    Depois:
    - [ ] O e-mail deve ser informado.
    - [ ] O e-mail deve ser único.

A mudança deve ser avaliada quanto ao impacto sobre Requirements, regras de negócio e backlog.

---

## 42. Obsolescência

Acceptance Criteria podem se tornar obsoletos quando:

- a User Story for cancelada;
- a User Story for substituída;
- o comportamento do produto mudar;
- uma regra deixar de existir;
- um Requirement for descontinuado.

O histórico deve ser preservado no Git.

Não se deve apagar indiscriminadamente critérios que fizeram parte de uma decisão anterior.

---

## 43. Documentation-as-Code

Acceptance Criteria devem ser mantidos junto às User Stories no repositório do projeto.

Estrutura recomendada:

    project/
    └── docs/
        └── product/
            └── user-stories/
                ├── US-001-cadastrar-usuario.md
                ├── US-002-consultar-usuario.md
                └── US-003-inativar-usuario.md

Os critérios podem permanecer no mesmo arquivo da User Story.

Não é necessário criar um arquivo separado para cada Acceptance Criterion.

---

## 44. Formato recomendado

Formato simples:

    ## Acceptance Criteria

    - [ ] O administrador consegue iniciar o cadastro.
    - [ ] O sistema exige os dados obrigatórios.
    - [ ] O sistema impede o cadastro de e-mail duplicado.
    - [ ] O sistema confirma o cadastro válido.

Formato com cenários:

    ## Acceptance Criteria

    ### Cenário: Cadastro válido

    Dado que o administrador possui permissão
    E informa todos os dados obrigatórios
    Quando solicita o cadastro
    Então o usuário deve ser cadastrado.

    ### Cenário: E-mail duplicado

    Dado que já existe um usuário com o e-mail informado
    Quando o administrador solicita o cadastro
    Então o sistema deve impedir o cadastro.

O formato deve ser escolhido conforme a complexidade da User Story.

---

## 45. Idioma e convenções

O conteúdo deve ser escrito em português do Brasil, salvo necessidade explícita de outro idioma.

Termos técnicos amplamente utilizados podem permanecer em inglês quando isso melhorar a clareza, por exemplo:

- Acceptance Criteria;
- Given;
- When;
- Then;
- Product Backlog;
- User Story.

Diretórios e nomes de arquivos permanecem em inglês conforme a convenção geral do repositório.

---

## 46. Template

Template recomendado:

    ## Acceptance Criteria

    - [ ] [Condição verificável]
    - [ ] [Condição verificável]
    - [ ] [Condição verificável]

    ### Cenários adicionais

    #### Cenário: [Nome]

    Dado que [contexto]
    Quando [ação]
    Então [resultado]

    #### Cenário: [Nome]

    Dado que [contexto]
    Quando [ação]
    Então [resultado]

---

## 47. Exemplo completo

    # US-001 — Cadastrar usuário

    ## User Story

    Como administrador,
    quero cadastrar usuários,
    para permitir que novos usuários tenham acesso ao produto.

    ## Acceptance Criteria

    ### Cenário: Cadastro válido

    Dado que o administrador possui permissão para cadastrar usuários
    E informa todos os dados obrigatórios
    Quando solicita o cadastro
    Então o sistema deve cadastrar o usuário.

    ### Cenário: Campo obrigatório ausente

    Dado que o administrador não informou um campo obrigatório
    Quando solicita o cadastro
    Então o sistema não deve concluir o cadastro
    E deve informar quais informações são necessárias.

    ### Cenário: E-mail duplicado

    Dado que já existe um usuário com o e-mail informado
    Quando o administrador solicita o cadastro
    Então o sistema não deve criar um novo usuário
    E deve informar que o e-mail já está sendo utilizado.

    ## Rastreabilidade

    - User Story: US-001
    - Requirements: RF-003, RN-004

---

## 48. Relação com outros padrões

Este padrão deve ser utilizado em conjunto com:

- `product/discovery/discovery-standard.md`
- `product/requirements/requirements-standard.md`
- `product/requirements/functional-requirements.md`
- `product/requirements/non-functional-requirements.md`
- `product/prd/prd-standard.md`
- `product/user-stories/user-story-standard.md`
- `product/backlog/backlog-management.md`
- `governance/definition-of-ready.md`
- `governance/definition-of-done.md`

Cada padrão possui uma responsabilidade específica.

Este documento não substitui o padrão de User Story.

---

## 49. Precedência

Em caso de conflito:

1. decisões de produto formalmente aprovadas;
2. políticas organizacionais aplicáveis;
3. `governance/`;
4. padrões específicos do artefato;
5. templates;
6. exemplos.

Um exemplo ou template não deve ser interpretado como uma decisão de produto.

---

## 50. Resultado esperado

A aplicação deste padrão deve produzir Acceptance Criteria que:

- tornem o comportamento esperado verificável;
- estejam diretamente relacionados às User Stories;
- sejam consistentes com PRD e Requirements;
- representem regras e condições relevantes;
- explicitem cenários importantes;
- reduzam ambiguidades;
- não inventem decisões;
- não prescrevam implementação;
- possam servir como referência para validação posterior;
- possam ser elaborados e revisados por pessoas e agentes de IA sob as mesmas regras.