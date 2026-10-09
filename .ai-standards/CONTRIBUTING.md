# Contributing to Software Delivery Standards

## 1. Processo Formal de Contribuição

Mudanças neste repositório central afetam como todos os projetos consumidores produzem artefatos. O processo de contribuição é restrito para garantir consistência.

### 1.1 Proposta de Mudança (RFC)
Se você identificou uma melhoria, inconsistência ou necessidade de novo standard:
1. Abra uma Issue no repositório com o prefixo `[RFC]` (Request for Comments).
2. Descreva o problema, a solução proposta e os artefatos que seriam impactados.
3. Se a mudança afetar o ciclo de vida, a governança ou adicionar um novo tipo de agente/capacidade, isso exigirá o registro em `DECISIONS.md`.

### 1.2 Submissão (Pull Request)
1. Crie uma branch a partir da principal.
2. Faça as modificações e atualize o `CHANGELOG.md` na seção `[Unreleased]`.
3. Garanta que todas as novas regras estejam consistentes com a governança e o `DECISIONS.md` atual.
4. Abra o Pull Request apontando para a Issue original.

### 1.3 Revisão e Aprovação
1. Pull Requests exigem aprovação de pelo menos um Maintainer principal do framework.
2. Agentes consumidores de IA **não têm autoridade** para aprovar PRs no repositório central. As aprovações devem ser feitas por humanos (Human Accountability).

## 2. Padrões de Evolução

- **Versionamento:** O repositório segue SemVer (Semantic Versioning) unificado. Veja o arquivo `VERSION`.
- **Linguagem:** Documentos em PT-BR (padrão), nomes de pastas/arquivos em inglês.
- **Rastreabilidade:** Nunca quebre a cadeia de Product Delivery sem aprovação arquitetural explícita.
