# ADR-001: Arquitetura Relacional e Estrutura de APIs para Gestão de Formatos (Atlas)

## 1. Contexto e Problema
O projeto Atlas visa substituir planilhas manuais e ferramentas generalistas na Gestão de Formatos da Globo. O principal desafio técnico é garantir a integridade relacional entre as propriedades intelectuais (Formatos), suas múltiplas negociações ao longo do tempo (Temporadas/Contratos) e os detalhamentos financeiros destas (Parcelas/Invoices).
O sistema requer alta integridade de dados (relacionamento 1:N restrito), performance para exportação consolidada e capacidade de escalabilidade futura para novos domínios (Obras Literárias, Eventos).

## 2. Opções Consideradas
* **Opção 1: Banco de Dados NoSQL (ex: MongoDB / Firestore)**
  * *Prós:* Flexibilidade inicial, esquema dinâmico (schemaless) que facilitaria adições futuras de tipos.
  * *Contras:* Dificuldade em assegurar consistência estrita, complexidade para realizar queries agregadas relacionais robustas necessárias para a exportação analítica da Governança (joins pesados).
* **Opção 2: Banco de Dados Relacional SQL (ex: PostgreSQL / Cloud SQL)**
  * *Prós:* Forte integridade de dados (constraints, foreign keys) essencial para as regras de negócio financeiras e contratos (1:N:N); alta performance e previsibilidade em queries complexas; excelente suporte a geração de relatórios tabulares.
  * *Contras:* Esquema mais rígido que exige migrações estruturadas para novos domínios.

## 3. Decisão Tomada
**A Opção 2 (Banco de Dados Relacional - PostgreSQL) foi a escolhida.**
O modelo central de negócio (Formato -> Temporada -> Parcela) tem natureza intrinsecamente relacional. A integridade financeira e contratual não pode prescindir das Foreign Keys (FK) e regras estritas do banco de dados (ex: exclusões em cascata controladas e chaves únicas). Além disso, a prioridade máxima em gerar exportações em formato tabular (`.xlsx`) favorece um motor SQL maduro.

## 4. Consequências (Trade-offs)
* **Positivas:** 
  * Total consistência referencial (Não é possível ter uma Temporada órfã sem Formato, nem Parcela sem Temporada).
  * Consultas complexas para geração do `.xlsx` da Governança podem ser executadas de forma otimizada via SQL nativo.
  * Evita a duplicação dos metadados do IP (Nome, Sinopse) a cada nova temporada negociada.
* **Negativas / Riscos:** 
  * Para a incorporação futura de Eventos e Obras Literárias (fase 2 e 3), será necessário um planejamento arquitetural (ex: tabelas de herança ou mapeamentos polimórficos) exigindo migrações (migrations) controladas no banco de dados.

## 5. Rastreabilidade
* **PRD Relacionado:** [PRD-001 - Gestão de Formatos](../product/PRD-gestao-formatos.md)
* **Contratos Técnicos e Schema:** [SCHEMA-API-001.md](SCHEMA-API-001.md)
* **Status:** Proposed
