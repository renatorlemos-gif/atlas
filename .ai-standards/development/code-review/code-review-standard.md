# Code Review Standard

## 1. Objetivo

Este padrão estabelece as diretrizes e o fluxo obrigatório para as revisões de código (Code Review). O Code Review é o **Quality Gate mais crítico do desenvolvimento técnico** (atuando na fronteira do "PR Build") e serve para garantir a conformidade arquitetural, a qualidade de implementação e a fidelidade aos requisitos de produto.

As regras definidas aqui aplicam-se a todos os revisores, sejam eles especialistas humanos ou agentes autônomos (Reviewers de Código).

## 2. A Regra de Ouro da Rastreabilidade (Diff vs `.md`)

Nenhuma alteração de código deve existir sem origem. Para qualquer avaliação de Pull Request, é obrigatória a aderência à seguinte premissa:

> **O código submetido (Diff) deve obrigatoriamente ser confrontado com a documentação em Markdown (`.md`) que originou a demanda (ex: User Stories, Acceptance Criteria, ADRs).**
> O revisor deve validar se o código atende plenamente o que foi especificado e se não inclui abstrações alienígenas não documentadas.

## 3. Fluxo de Execução do Code Review

O fluxo de revisão segue 6 etapas inegociáveis:

1. **Preparação:** 
   O autor do código (humano ou agente local) prepara o Pull Request. Isso inclui agrupar lógicamente as alterações, fornecer uma descrição clara do objetivo do PR e referenciar diretamente a(s) documentação(ões) de origem (US/ADR).
2. **Solicitação de Revisão:** 
   O PR é direcionado para os revisores adequados. Esta atribuição é baseada na criticidade do escopo e competência necessária.
3. **Revisão Inicial (Auditoria de Baseline):** 
   O(s) revisor(es) verifica(m) a qualidade e a conformidade do diff utilizando os `coding-standards.md` e a **Regra de Ouro da Rastreabilidade** (checando o código vs requisitos `.md`). Verifica-se legibilidade, arquitetura, segurança superficial e manutenibilidade.
4. **Comentários e Discussões:** 
   O revisor deve prover um feedback técnico rigoroso. A linguagem deve ser técnica, neutra e sem ambiguidades subjetivas, focada sempre na estrutura e nas melhores práticas documentadas da organização. O revisor deve justificar e apresentar os caminhos esperados, com uma abordagem construtiva.
5. **Iterações:** 
   O autor atua sobre os apontamentos, alterando e repassando o código para validação na mesma thread até a conformidade com as regras do projeto.
6. **Aprovação e Merge:** 
   Somente após a liquidação de todos os bloqueios e apontamentos críticos no PR, o Code Reviewer provê o *Approval*, liberando o artefato para entrar no repositório.

## 4. Boas Práticas Comportamentais do Revisor

* **Seja claro e objetivo:** Evite ambiguidades ou interpretações puramente opinativas nas observações. Embase apontamentos no `coding-standard.md`.
* **Foque na arquitetura:** Concentre os bloqueios em falhas estruturais, arquitetura da aplicação e descumprimento de boas práticas. Formatações de sintaxe devem ser abstraídas via *linters* em CI.
* **Priorize incidentes e segurança:** Destaque *imediatamente* prováveis bugs graves, falhas de segurança e riscos de regressão no ecossistema (atuação em paridade com o AppSec Gate).
* **Mantenha o contexto sistêmico:** Considere sempre o trade-off de negócio, as restrições declaradas nas especificações e os prazos ao avaliar soluções "ideais" vs "adequadas".
