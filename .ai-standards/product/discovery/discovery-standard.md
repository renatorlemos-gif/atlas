# Padrão de Discovery

## 1. Objetivo

Definir o padrão para realização e documentação de Discovery em projetos
que adotam o Software Delivery Standards.

O Discovery tem como objetivo construir entendimento suficiente sobre um
problema, oportunidade ou necessidade antes da definição detalhada do
produto e de seus requisitos.

O Discovery deve reduzir incertezas relevantes sobre:

- o problema a ser resolvido;
- os usuários ou públicos afetados;
- o contexto;
- os objetivos;
- os resultados esperados;
- as restrições conhecidas;
- as hipóteses;
- os riscos;
- as principais perguntas ainda não respondidas.

O Discovery não tem como objetivo definir antecipadamente toda a solução.

---

## 2. Quando Utilizar Discovery

O Discovery deve ser utilizado quando houver incerteza relevante sobre o
problema, contexto, necessidade ou resultado esperado.

Exemplos de situações que normalmente justificam Discovery:

- criação de um novo produto;
- criação de uma nova capacidade relevante;
- mudança significativa de produto existente;
- problema de negócio ainda pouco compreendido;
- necessidade de usuário ainda não suficientemente compreendida;
- iniciativa com múltiplas alternativas de solução;
- iniciativa envolvendo múltiplos stakeholders;
- iniciativa com dependências ou restrições ainda pouco conhecidas;
- hipótese que precisa ser investigada antes da definição do produto.

O nível de profundidade do Discovery deve ser proporcional à
complexidade e à incerteza da iniciativa.

---

## 3. Quando o Discovery Pode Ser Dispensado

O Discovery pode ser dispensado quando o problema, contexto e resultado
esperado já estiverem suficientemente compreendidos e documentados.

Exemplos:

- pequena evolução de uma funcionalidade existente;
- correção de comportamento já conhecido;
- alteração claramente especificada por requisito existente;
- adequação necessária para atender uma regra já conhecida;
- manutenção de documentação;
- mudança cuja necessidade e objetivo já estejam inequivocamente
  estabelecidos.

A dispensa do Discovery não significa dispensa das demais etapas
aplicáveis do ciclo de vida.

Quando o Discovery for dispensado, a decisão e sua justificativa podem
ser registradas no artefato seguinte, quando relevante.

---

## 4. Princípios

### 4.1 Entender o Problema Antes da Solução

O Discovery deve priorizar o entendimento do problema e do resultado
esperado.

A solução não deve ser assumida como premissa quando ainda existirem
alternativas relevantes a serem avaliadas.

### 4.2 Evidências Antes de Hipóteses

Sempre que possível, afirmações relevantes devem estar apoiadas em:

- dados;
- pesquisas;
- feedback de usuários;
- documentação existente;
- observações;
- informações fornecidas por stakeholders;
- outras evidências disponíveis.

Quando uma informação for apenas uma hipótese, ela deve ser identificada
como tal.

### 4.3 Incertezas Explícitas

Questões ainda não respondidas devem permanecer explícitas.

Não se deve preencher uma lacuna com uma suposição apresentada como
fato.

### 4.4 Profundidade Proporcional

Nem todo Discovery precisa possuir o mesmo nível de profundidade.

A profundidade deve considerar:

- complexidade;
- impacto;
- quantidade de stakeholders;
- grau de incerteza;
- dependências;
- riscos;
- novidade da iniciativa.

### 4.5 Discovery Não É Definição da Solução

O Discovery pode registrar alternativas ou hipóteses de solução quando
isso for relevante, mas não deve transformar prematuramente uma
alternativa em decisão de produto.

---

## 5. Entradas

O Discovery pode utilizar como entrada:

- solicitação de negócio;
- problema identificado;
- oportunidade;
- objetivos estratégicos;
- feedback de usuários;
- dados de utilização;
- pesquisas;
- documentos existentes;
- processos atuais;
- informações de stakeholders;
- restrições conhecidas;
- hipóteses existentes;
- iniciativas relacionadas.

Não é necessário que todas essas informações estejam disponíveis antes
do início do Discovery.

---

## 6. Estrutura do Discovery Document

O Discovery Document deve conter, quando aplicável:

1. Contexto
2. Problema ou oportunidade
3. Usuários e públicos afetados
4. Objetivos
5. Resultado esperado
6. Evidências
7. Hipóteses
8. Restrições
9. Riscos
10. Dependências
11. Alternativas ou possibilidades identificadas
12. Perguntas em aberto
13. Decisões já tomadas
14. Itens fora do escopo
15. Próximos passos
16. Rastreabilidade

Nem todas as seções precisam possuir conteúdo extenso.

Quando uma seção não for aplicável, isso deve ser explicitado quando
necessário.

---

## 7. Contexto

O contexto deve explicar a situação que originou a iniciativa.

Deve responder, quando aplicável:

- O que está acontecendo?
- Por que essa iniciativa surgiu?
- Qual processo, produto ou experiência está envolvido?
- Qual é o contexto atual?
- Existem iniciativas relacionadas?

O contexto deve evitar detalhes de solução que ainda não tenham sido
validados.

---

## 8. Problema ou Oportunidade

Deve descrever claramente:

- qual problema foi identificado;
- quem é afetado;
- em qual contexto ocorre;
- qual é o impacto conhecido;
- ou qual oportunidade foi identificada.

Quando possível, o problema deve ser descrito sem prescrever uma
solução específica.

Exemplo:

Em vez de:

> Precisamos criar uma nova tela para permitir que o usuário acompanhe
> seus pedidos.

Preferir:

> Usuários não possuem visibilidade suficiente sobre o status de seus
> pedidos após a confirmação da compra.

A primeira formulação já pressupõe uma solução.

A segunda descreve o problema.

---

## 9. Usuários e Públicos Afetados

Devem ser identificados os principais usuários, públicos ou stakeholders
afetados pela iniciativa.

Quando aplicável, registrar:

- perfil;
- papel;
- necessidade;
- impacto;
- contexto de utilização.

Não é necessário criar personas formais quando elas não agregarem valor
à iniciativa.

---

## 10. Objetivos

Os objetivos devem descrever o que se pretende alcançar.

Sempre que possível, devem ser orientados a resultado e não à
implementação de uma solução específica.

Exemplos:

- reduzir o tempo necessário para realizar determinada atividade;
- aumentar a visibilidade sobre determinado processo;
- reduzir determinada ocorrência;
- permitir que determinado usuário realize uma atividade hoje
  indisponível.

---

## 11. Resultado Esperado

Deve descrever como será percebido o resultado da iniciativa.

Quando aplicável, registrar:

- resultado esperado para o usuário;
- resultado esperado para o negócio;
- indicador ou métrica relacionada;
- condição esperada após a implementação.

Os indicadores não precisam estar completamente definidos durante
Discovery.

---

## 12. Evidências

Devem ser registradas as evidências relevantes utilizadas para sustentar
o entendimento do problema.

Podem incluir:

- dados;
- métricas;
- pesquisas;
- entrevistas;
- feedback;
- documentação;
- observações;
- incidentes;
- análises existentes.

Cada evidência deve, quando possível, identificar sua origem.

---

## 13. Hipóteses

Hipóteses são afirmações ainda não comprovadas que podem influenciar a
definição do produto.

Cada hipótese relevante deve indicar, quando aplicável:

- hipótese;
- motivo;
- evidência disponível;
- como poderá ser validada;
- impacto caso esteja incorreta.

Hipóteses não devem ser apresentadas como fatos.

---

## 14. Restrições

Devem ser registradas restrições conhecidas que possam influenciar a
iniciativa.

Podem incluir:

- prazo;
- orçamento;
- regras de negócio;
- limitações organizacionais;
- dependências externas;
- limitações de dados;
- requisitos regulatórios;
- restrições de usuários;
- restrições de processos existentes.

Restrições técnicas detalhadas pertencem às etapas técnicas posteriores.

---

## 15. Riscos

Devem ser identificados riscos relevantes conhecidos durante Discovery.

Para cada risco relevante, registrar, quando aplicável:

- descrição;
- possível impacto;
- probabilidade conhecida ou estimada;
- forma de mitigação ou investigação.

O Discovery não precisa produzir uma análise completa de riscos do
projeto.

Deve registrar os riscos que possam influenciar a definição do produto.

---

## 16. Dependências

Devem ser registradas dependências conhecidas que possam afetar a
iniciativa.

Podem incluir:

- outras áreas;
- outros produtos;
- processos;
- fornecedores;
- dados;
- sistemas existentes;
- decisões externas;
- iniciativas relacionadas.

Detalhamento técnico de integrações deve ser tratado posteriormente.

---

## 17. Alternativas e Possibilidades

Quando houver múltiplas possibilidades relevantes para tratar o
problema, elas podem ser registradas no Discovery.

O registro deve evitar transformar prematuramente uma possibilidade em
decisão.

Quando apropriado, registrar:

- alternativa;
- benefício potencial;
- limitações conhecidas;
- dúvidas;
- informações necessárias para avaliação.

Uma decisão formal de produto deve ser registrada como decisão, e não
como hipótese.

---

## 18. Perguntas em Aberto

Todas as questões relevantes ainda não respondidas devem ser
explicitamente registradas.

Cada pergunta deve indicar, quando aplicável:

- pergunta;
- motivo;
- responsável pela resposta;
- impacto;
- status.

Perguntas críticas para o avanço do ciclo devem ser diferenciadas das
questões que podem permanecer abertas para etapas posteriores.

---

## 19. Decisões

Decisões de produto já tomadas durante Discovery devem ser registradas
se forem relevantes para o entendimento da iniciativa.

Cada decisão deve indicar, quando aplicável:

- decisão;
- contexto;
- responsável;
- data;
- impacto.

Decisões arquiteturais ou técnicas detalhadas não fazem parte deste
artefato.

---

## 20. Itens Fora do Escopo

Devem ser registrados itens explicitamente identificados como fora do
escopo quando sua ausência puder gerar interpretação equivocada.

Isso ajuda a evitar que o escopo seja expandido implicitamente durante
as etapas seguintes.

---

## 21. Próximos Passos

Devem ser registrados os próximos passos necessários para avançar o
ciclo de vida.

Exemplos:

- aprofundar requisito;
- validar hipótese;
- obter informação de stakeholder;
- iniciar Requirements;
- revisar informação existente;
- realizar pesquisa adicional.

Os próximos passos não devem antecipar decisões que ainda não foram
tomadas.

---

## 22. Rastreabilidade

O Discovery deve manter rastreabilidade com suas entradas quando elas
existirem.

Exemplos:

- solicitação de negócio;
- iniciativa estratégica;
- feedback;
- pesquisa;
- documento existente;
- decisão anterior.

Os artefatos produzidos posteriormente devem poder identificar o
Discovery que serviu como origem quando essa relação for relevante.

---

## 23. Responsabilidades

### Product Owner

Responsável por:

- orientar o objetivo do Discovery;
- validar o entendimento do problema;
- tomar decisões de produto necessárias;
- validar objetivos e resultados esperados;
- aprovar o encerramento do Discovery quando aplicável.

### Product Analyst

Pode apoiar:

- levantamento de informações;
- entrevistas;
- análise de contexto;
- organização das evidências;
- identificação de stakeholders;
- documentação do Discovery.

### Requirements Agent

Pode:

- analisar informações fornecidas;
- organizar o contexto;
- identificar lacunas;
- sugerir perguntas;
- identificar inconsistências;
- separar fatos de hipóteses;
- identificar possíveis requisitos;
- identificar riscos e dependências;
- estruturar o Discovery Document;
- verificar completude;
- verificar rastreabilidade.

O Requirements Agent não deve:

- inventar fatos;
- assumir decisões de negócio;
- transformar hipótese em fato;
- decidir sozinho se uma solução deve ser adotada;
- aprovar o Discovery em nome do Product Owner.

---

## 24. Perguntas que o Agente Deve Fazer

Quando houver informação insuficiente, o agente deve priorizar perguntas
que reduzam incertezas relevantes.

Exemplos:

### Problema

- Qual problema estamos tentando resolver?
- Quem é afetado?
- Como o problema ocorre atualmente?
- Qual é o impacto conhecido?

### Usuários

- Quem utiliza ou é afetado pelo processo?
- Existem diferentes perfis de usuário?
- O problema afeta todos da mesma maneira?

### Objetivo

- O que precisa mudar?
- Qual resultado esperamos alcançar?
- Como saberemos que o problema foi solucionado?

### Evidências

- Como sabemos que esse problema existe?
- Existem dados ou feedback que sustentem essa percepção?
- Qual é a origem da informação?

### Restrições

- Existem prazos ou restrições de negócio?
- Existem dependências conhecidas?
- Existem regras que precisam ser consideradas?

### Incertezas

- O que ainda não sabemos?
- Quais hipóteses estamos assumindo?
- Quais dessas hipóteses precisam ser validadas antes de avançar?

O agente deve priorizar perguntas cujo desconhecimento possa afetar
significativamente a definição do produto.

---

## 25. Critérios de Qualidade

Um Discovery deve ser considerado de qualidade quando:

- o problema está claramente descrito;
- usuários ou públicos afetados estão identificados;
- objetivo está definido;
- resultado esperado está descrito;
- fatos e hipóteses estão diferenciados;
- evidências relevantes estão identificadas;
- restrições relevantes estão registradas;
- riscos relevantes estão identificados;
- dependências conhecidas estão registradas;
- perguntas críticas estão explícitas;
- decisões relevantes estão registradas;
- itens fora do escopo estão identificados quando necessários;
- não existem decisões de negócio inventadas para preencher lacunas;
- existe rastreabilidade das principais informações utilizadas.

---

## 26. Critérios de Saída

O Discovery pode avançar para Requirements quando:

- o problema está suficientemente compreendido;
- o público afetado está identificado;
- o objetivo está suficientemente claro;
- o resultado esperado está definido;
- informações relevantes possuem evidência ou estão identificadas
  como hipótese;
- restrições relevantes estão conhecidas;
- riscos relevantes estão identificados;
- questões críticas estão resolvidas ou explicitamente registradas;
- não existem ambiguidades que impeçam o início de Requirements.

O Discovery não precisa eliminar toda a incerteza.

Ele precisa reduzir a incerteza a um nível suficiente para que o
próximo estágio possa começar de forma consciente.

---

## 27. Gate

O Discovery utiliza o:

**Problem Understanding Gate**

O gate deve verificar:

- entendimento do problema;
- entendimento do público afetado;
- clareza do objetivo;
- resultado esperado;
- principais restrições;
- principais riscos;
- principais dependências;
- questões críticas;
- ausência de decisões inventadas ou não validadas.

A aprovação do gate é responsabilidade do Product Owner ou do papel
definido pelo projeto.

---

## 28. Revisão e Aprovação

O Discovery deve ser revisado quando:

- novas evidências forem identificadas;
- uma hipótese relevante for invalidada;
- o problema for redefinido;
- o público afetado mudar;
- o objetivo mudar;
- uma restrição relevante surgir;
- uma decisão alterar o entendimento da iniciativa.

A aprovação do Discovery não impede sua revisão posterior.

A aprovação significa que o entendimento atual é suficiente para
avançar para a próxima etapa.

---

## 29. Mudanças e Impacto

Alterações relevantes no Discovery devem gerar avaliação de impacto nos
artefatos derivados.

Exemplo:

    Discovery
        ↓
    Alteração no problema
        ↓
    Avaliação de Requirements
        ↓
    Avaliação do PRD
        ↓
    Avaliação das User Stories

O impacto deve ser avaliado antes de considerar os artefatos derivados
como válidos.

---

## 30. Template

O template mínimo de Discovery deve seguir esta estrutura:

# Discovery

## 1. Contexto

## 2. Problema ou Oportunidade

## 3. Usuários e Públicos Afetados

## 4. Objetivos

## 5. Resultado Esperado

## 6. Evidências

## 7. Hipóteses

## 8. Restrições

## 9. Riscos

## 10. Dependências

## 11. Alternativas ou Possibilidades

## 12. Perguntas em Aberto

## 13. Decisões

## 14. Fora do Escopo

## 15. Próximos Passos

## 16. Rastreabilidade

---

## 31. Convenções de Documentação

O Discovery deve:

- ser escrito em Markdown;
- utilizar linguagem clara e objetiva;
- evitar informações duplicadas;
- diferenciar fatos, hipóteses e decisões;
- utilizar referências quando evidências externas forem relevantes;
- manter o histórico de alterações no Git;
- seguir o padrão de documentação definido pelo Software Delivery
  Standards.

O conteúdo deve ser escrito em português-BR, salvo quando houver motivo
para utilização de termos em outro idioma.

Termos técnicos amplamente utilizados podem permanecer em inglês quando
isso facilitar a interoperabilidade com ferramentas e práticas do
mercado.

---

## 32. Relação com Outros Padrões

Este padrão deve ser utilizado em conjunto com:

- Product Delivery Lifecycle;
- Requirements Standard;
- Functional Requirements;
- Non-Functional Requirements;
- PRD Standard;
- Definition of Ready;
- Definition of Done, quando aplicável.

Este documento define especificamente o padrão de Discovery.

Não deve duplicar regras que pertençam a outros padrões centrais.