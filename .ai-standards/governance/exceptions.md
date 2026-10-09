# Exceptions Standard

## 1. Objetivo

Definir o processo formal para projetos que necessitam desviar pontualmente das regras normativas definidas neste repositório. O objetivo é permitir flexibilidade para necessidades reais de negócio, sem que essas exceções descaracterizem silenciosamente os padrões globais ou abram precedentes de desorganização.

## 2. Princípio da Exceção Explícita

O princípio base é: **se você não pode seguir o padrão, o desvio deve ser um ato documentado e aprovado, não uma omissão silenciosa.**

Quando uma necessidade representar uma melhoria geral aplicável a múltiplos contextos, ela não deve ser tratada como exceção de projeto, mas proposta como alteração no repositório central via processo formal de contribuição (`CONTRIBUTING.md`).

## 3. Estrutura do Registro de Exceção

Toda exceção de projeto deve ser registrada em um documento específico no repositório do projeto consumidor (por exemplo, `docs/governance/exceptions.md` ou equivalente), devendo conter obrigatoriamente:

1. **Regra ou Padrão afetado:** (Ex: "prd-standard.md - Seção de estrutura obrigatória")
2. **Desvio adotado:** (O que o projeto está fazendo diferente. Ex: "Unificamos o PRD e Discovery Document em um único arquivo.")
3. **Justificativa de Negócio/Técnica:** (Ex: "A iniciativa consiste apenas na troca de um parceiro de integração backend, não possuindo Discovery clássico.")
4. **Impacto conhecido:** (Quais as consequências dessa decisão na rastreabilidade, aprovação ou entendimento da equipe técnica).
5. **Responsável pela aprovação:** (Pessoa nomeada, tipicamente o PO ou líder técnico).
6. **Medidas compensatórias:** (O que está sendo feito para mitigar o impacto. Ex: "Todas as regras de negócio serão documentadas diretamente na User Story").

## 4. Aprovação e Visibilidade

A exceção entra em vigor tão logo seja documentada e aprovada pelo responsável no projeto consumidor.

**Agentes de IA e ferramentas de validação:**
Ao validarem a consistência de um projeto consumidor em relação a este framework, os agentes devem analisar primeiro o registro local de exceções do projeto. Se encontrarem o desvio documentado e aprovado, não devem relatar a variação como uma "não conformidade" em suas saídas de erro.
