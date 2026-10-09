# ADR-001: Seleção de Banco de Dados Relacional (PostgreSQL)

## 1. Contexto e Problema
O **Atlas - Gestão de Formatos** requer um banco de dados que suporte o armazenamento centralizado do acervo de Formatos e suas respectivas negociações e dados financeiros. Conforme o PRD (RNF-002), o modelo de dados deve assegurar integridade relacional estrita (1:N) entre Formato (IP) e suas Negociações/Temporadas, e entre Negociação e suas Parcelas financeiras. Além disso, a plataforma exige busca textual flexível e filtragem avançada (RF-015) e extensibilidade arquitetural (RNF-006).

## 2. Opções Consideradas
* **Opção 1:** PostgreSQL
  * *Prós:* Robusto controle de integridade relacional, suporte avançado a campos estruturados em JSONB, busca textual nativa eficiente (Full-Text Search), e tipo nativo de Array (útil para tags temáticas). Amplo suporte no ecossistema de desenvolvimento e nuvem.
  * *Contras:* Requer administração relacional convencional em nuvem (ex: RDS/Cloud SQL).
* **Opção 2:** MySQL / MariaDB
  * *Prós:* Leve, rápido e muito consolidado no mercado.
  * *Contras:* Suporte a JSON e recursos avançados de arrays são menos sofisticados que no PostgreSQL; suporte de buscas full-text nativas ligeiramente inferior.
* **Opção 3:** MongoDB (NoSQL)
  * *Prós:* Altamente flexível para estruturas não definidas e prototipagem rápida.
  * *Contras:* Não é um banco relacional, o que contraria frontalmente o requisito RNF-002 e aumenta o custo e risco de garantir integridade transacional 1:N no nível da aplicação.

## 3. Decisão Tomada
**PostgreSQL** foi escolhido como banco de dados principal. Ele atende perfeitamente à exigência de modelo relacional rigoroso (RNF-002) ao mesmo tempo em que oferece recursos modernos de indexação e estruturação (tipos de dados Array para tags, JSONB para expansibilidade e índices GIN/GiST) que facilitarão a implementação de buscas (RF-015) sem a necessidade imediata de indexadores externos, como o Elasticsearch, no MVP.

## 4. Consequências (Trade-offs)
* **Positivas:** Alta confiabilidade transacional, modelo fortemente tipado, capacidade de acomodar buscas ricas por texto e tags de forma performática.
* **Negativas / Riscos:** Necessidade de gerir migrações de schema (ex: via Flyway, Liquibase ou ORM próprio) para garantir o versionamento do banco junto com o código da aplicação.

## 5. Rastreabilidade
* **PRD Relacionado:** [PRD-001: Sistema de Gestão de Formatos](../product/PRD-gestao-formatos.md)
* **Feature:** [FEAT-001: Gestão de Acervo](../features/FEAT-001-gestao-acervo.md)
* **Status:** Approved
