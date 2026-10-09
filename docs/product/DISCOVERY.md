---
id: DISC-001
title: Discovery — Sistema de Gestão e Base de Conhecimento de Formatos (Atlas)
status: Approved
version: "1.0.0"
date: 2026-10-08
owner: Analista de Requisitos (DevTeam)
---

# Discovery Document

## 1. Contexto de Negócio
A área de Aquisições de Conteúdo da Globo (focada em Formatos, Eventos e Obras Literárias) enfrenta um desafio crítico de governança e perenidade do conhecimento: os dados históricos de pesquisas de mercado, negociações contratuais, vigências e pagamentos de formatos residem de forma descentralizada nas mãos de profissionais específicos ou distribuídos em planilhas desconectadas (`Formatos_dados.xlsx`, `Acompanhamento de formatos.xlsx`).

Uma tentativa prévia de utilizar a plataforma Monday.com evidenciou limitações severas de custo, poucas capacidades de automação de regras de negócio e ausência de integração com o ecossistema corporativo da Globo, culminando no retorno ao uso frágil de planilhas.

Essa dinâmica gera vulnerabilidades institucionais:
- Risco de perda de memória corporativa em transições de equipe;
- Dificuldade de auditar negociações passadas e histórico de contatos com distribuidores;
- Ineficiência na geração de relatórios regulatórios e executivos (ex: envio trimestral de dados para a Governança dos Estúdios);
- Ausência de rastreabilidade sobre quais formatos foram apresentados a demandantes internos (gerando risco de duplicidade ou questionamentos de omissão).

Para estancar esses gargalos, definiu-se a criação de uma solução proprietária corporativa (iniciativa **Atlas**), adotando uma estratégia de rollout faseada que se inicia com foco total na vertical de **Formatos**.

---

## 2. Objetivos e Resultados Esperados
### Objetivos
- Centralizar em uma base de dados estruturada e perene todo o ciclo de vida dos formatos audiovisuais (pesquisa, negociação, contratação, vigência e acompanhamento de pagamentos).
- Eliminar a dependência de planilhas operacionais e de ferramentas SaaS de alto custo sem aderência ao processo (Monday).
- Instrumentalizar a equipe de Aquisições com geração ágil de Boletins de Direitos, Newsletters e exportações padronizadas para stakeholders internos.
- Assegurar a rastreabilidade e auditoria de títulos enviados para clientes internos.

### Resultados Esperados (KPIs e Métricas)
- **100% dos formatos e negociações ativas e históricas catalogados** na nova base de dados.
- **Redução a zero da perda de dados de negociações passadas**, registrando propostas, contrapropostas e motivos de descarte/on hold.
- **Redução drástica do tempo de consolidação** do relatório trimestral para a Governança dos Estúdios (geração em 1 clique em formato `.xlsx` padronizado).
- **Log completo de auditoria** de comunicações de mercado enviadas às áreas demandantes da Globo.

---

## 3. Público-Alvo e Stakeholders
### Usuários Diretos do Sistema (Atores Operacionais)
- **Equipe de Aquisição de Formatos (Analistas e Negociadores):** Operam o sistema diariamente, catalogam pesquisas de mercado, conduzem e atualizam negociações de temporadas/contratos, anexam links de referência (Scout/The Wit), registram destaques contratuais e acompanham o fluxo de pagamentos de invoices.
- **Liderança / Gestão de Aquisições:** Acompanham o status do pipeline de negociações, vigências contratuais e aprovam envio de comunicações formais.

### Stakeholders e Clientes Internos (Consumidores Indiretos - Sem acesso direto ao sistema no MVP)
- **Áreas Demandantes (Estúdios Globo, Canais Pagos, Globoplay, Variedades, Ficção):** Áreas que solicitam pesquisas ou demandam formatos. Recebem relatórios executivos, resumos ou PDFs exportados.
- **Governança dos Estúdios:** Consome trimestralmente a base de formatos vigentes e em negociação para alimentação de visões estratégicas do portfólio.
- **Governança de Direitos:** Recebe o Boletim de Formato fechado como gatilho (*start*) para a gestão ampla de direitos e exibição.
- **Comunicação / Licenciamento de Marcas:** Notificados pós-fechamento de contrato para viabilização de exploração de marcas derivadas (ex: produtos de consumo atrelados a realities/programas).
- **Área Financeira / Contas a Pagar (IBMS):** Recebe as orientações e invoices encaminhadas pela equipe de Aquisições para liquidação contábil/financeira no ERP corporativo.

---

## 4. Hipóteses e Suposições
- A equipe de Aquisições possui disciplina operacional suficiente para alimentar o sistema no momento em que os fatos acontecem, desde que a interface seja simples, ágil e focada no fluxo real.
- Uma estrutura relacional que desacopla a entidade conceitual do **Formato/IP** dos seus registros de **Temporadas/Contratos** suportará com precisão histórica formatos perenes com múltiplas renovações anuais (ex: *The Voice*, *Dança dos Famosos*).
- A exportação em formato Excel (`.xlsx`) padronizado atenderá perfeitamente as necessidades imediatas da Governança dos Estúdios, dispensando integrações via API complexas no MVP.

---

## 5. Restrições e Limites
- **Faseamento Estrito (Escopo do MVP):** Foco exclusivo no fluxo de **Formatos**. Gestão de Eventos e Obras Literárias está postergada para versões futuras.
- **Sem Gestão de Formatos Próprios:** O desenvolvimento da "Bíblia" de formatos internos (ex: *Estrela da Casa*) e licenciamento para terceiros está explicitamente FORA do escopo.
- **Sem Liquidação Financeira:** O sistema não realiza processamento de pagamentos ou transferências bancárias; limita-se ao acompanhamento de invoices, parcelas e encaminhamentos ao setor financeiro.
- **Sem Acesso Externo para Demandantes:** Usuários demandantes não terão login no sistema na fase inicial; toda interação externa é via artefatos gerados (boletins, planilhas, relatórios).
- **Entrada Manual de Câmbio:** As taxas de conversão de moeda estrangeira (USD, EUR, GBP para BRL) serão alimentadas manualmente pelo usuário a cada negociação/pagamento, sem consumo de APIs bancárias no MVP.
- **Integração Externa com "The Wit" Manual:** O portal *The Wit* será tratado inicialmente via apontamento de links e notas de referência inseridas pelo analista.

---

## 6. Riscos Conhecidos
- **Risco de Incompletude na Carga Inicial de Dados:** Como os dados históricos estão fragmentados entre Monday e várias planilhas com colunas inconsistentes, a higienização dos dados para importação pode exigir esforço adicional.
  - *Mitigador:* Definir layout padronizado de importação/carga e validar lote a lote com o time de negócio.
- **Risco de Burocratização no Cadastro:** Se o sistema exigir preenchimento obrigatório de campos excessivos no momento inicial de uma oportunidade de negócio, os analistas podem adiar o input.
  - *Mitigador:* Permitir cadastro ágil e transição de status flexível (iniciar diretamente em negociação se não houve pesquisa formal prévia).
- **Risco de Divergência Cambial:** Inserção manual de taxas cambiais pode gerar pequenas variações em relatórios estimativos consolidados em Reais.
  - *Mitigador:* Exibir os valores sempre acompanhados de sua moeda de origem contratada, tratando os valores em R$ explicitamente como "estimativa".

---

## 7. Descobertas e Dados
- **Análise das Planilhas Legadas (`Formatos_dados.xlsx` e `Acompanhamento de formatos.xlsx`):**
  - Mapeou-se um ciclo de vida em 4 etapas funcionais: **Pesquisa ➔ Em Negociação ➔ Fechados (Vigentes) ➔ Acompanhamento de Pagamentos**.
  - No acervo de Formatos Globo vigentes/históricos, há mais de 100 títulos registrados, com campos contratuais detalhados: Distribuidor, Vigência, Episódios Contratados (Mínimo e Máximo), Taxa de Licença por episódio, Consultoria, Tecnologia, Outros Custos, WHT (Withholding Tax) e ID Conecta.
- **Práticas de Comunicação da Área:**
  - O envio de Newsletters e Boletins é vital não apenas como comunicação, mas como resguardo institucional contra questionamentos de auditoria ("por que tal formato não foi ofertado à área X?").
  - O envio trimestral à Governança dos Estúdios é um compromisso recorrente e não pode depender de compilação manual demorada.

---

## 8. Perguntas em Aberto
- *Nenhuma pergunta bloqueante de negócio em aberto no momento.* As principais definições estruturais, limites de escopo e perfis de usuário foram respondidas e validadas pelo usuário na Rodada 1 de Elicitação.
- *Ponto para refinamento futuro:* Formato exato do template visual do Boletim/Newsletter gerado pelo sistema (HTML/PDF) e layout específico de colunas exigido pela Governança dos Estúdios no arquivo `.xlsx`.

---

## 9. Próximos Passos
1. Formalizar o documento de requisitos do produto (**PRD-gestao-formatos.md**) contendo requisitos funcionais (RF), requisitos não funcionais (RNF), regras de negócio (RN) e Macro-Triagem de Impacto.
2. Submeter o PRD e o Discovery à validação e acionar os papéis de Solution Definition (Tech Lead para arquitetura/dados e UX Designer para fluxo/telas).

---

## 10. Rastreabilidade
- **Documento de Origem:** [`descritivo-inicial.md`](file:///c:/Dev/Projetos/Globo/Atlas/docs/product/inputs/descritivo-inicial.md)
- **Ata de Alinhamento:** [`pontos-reuniao-190.md`](file:///c:/Dev/Projetos/Globo/Atlas/docs/product/inputs/pontos-reuniao-190.md)
- **Artefatos Legados de Referência:** `Formatos_dados.xlsx` e `Acompanhamento de formatos.xlsx`
- **Rodada de Validação com Usuário:** Respostas à 1ª Rodada de Elicitação (A1 a A13) em 08/10/2026.
