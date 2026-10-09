# Roles and Responsibilities Standard

## 1. Objetivo

Este documento centraliza a definição de papéis humanos e capacidades de apoio agêntico no processo de Product Delivery. Ele atende ao princípio de centralizar regras compartilhadas para evitar duplicação em múltiplos artefatos e garantir consistência na governança do framework.

## 2. Princípios de Governança

- **Human Accountability:** Decisões de negócio, priorização e aprovação formal pertencem aos papéis humanos (Product Owner ou equivalentes). Agentes não devem assumir essas responsabilidades.
- **Capacidades em vez de Composição Fixa (DEC-023):** O framework define capacidades, limites, responsabilidades e gates, mas não impõe uma arquitetura ou composição fixa de agentes de IA. Nomes específicos de agentes (como "Requirements Agent") são tratados apenas como implementações de referência.
- **Incerteza Explícita:** Na ausência de informações de negócio, as lacunas devem ser expostas como perguntas e bloqueios para decisão humana. Hipóteses não devem ser transformadas silenciosamente em fatos aprovados.

---

## 3. Papéis Humanos

### 3.1 Product Owner (PO)

O Product Owner (ou papel equivalente definido pelo projeto) é o responsável final pelo produto.

**Responsabilidades:**
- validar o problema, oportunidade ou necessidade de negócio;
- definir objetivos e resultados esperados;
- tomar decisões de produto e resolver ambiguidades de negócio;
- validar o escopo;
- resolver conflitos de regras e prioridades;
- aprovar formalmente os artefatos (Discovery, PRD, User Stories, etc.) ao passar pelos Gates;
- criar Feature Definitions com prioridade explícita;
- aprovar Feature Definitions após triagem;
- aprovar mudanças relevantes e o impacto associado;
- garantir o alinhamento com a estratégia do negócio.

### 3.2 Product Analyst

O Product Analyst apoia o processo de entendimento e especificação do produto. O papel pode ser exercido de forma isolada, em conjunto com o PO, ou acumulado por outras pessoas dependendo da organização.

**Responsabilidades:**
- elicitar informações e analisar necessidades de stakeholders;
- apoiar a estruturação do Discovery, PRD, User Stories e Acceptance Criteria;
- identificar lacunas, conflitos e ambiguidades;
- manter rastreabilidade entre os artefatos e necessidades mapeadas;
- apoiar análises de impacto quando há alterações de escopo ou regras;
- transformar expectativas subjetivas em critérios objetivos e verificáveis.

### 3.3 Tech Lead / Solution Architect

O papel responsável por garantir a viabilidade técnica e a integridade sistêmica da solução antes do desenvolvimento.

**Responsabilidades:**
- ler e avaliar o PRD (Draft) para identificar gargalos ou riscos;
- realizar triagem de Arquitetura no nível de Feature;
- desenhar a arquitetura da solução (APIs, Banco de Dados, Integrações);
- registrar as decisões através de ADRs (Architecture Decision Records);
- aprovar a viabilidade técnica no Product Approval Gate.

### 3.4 UX / Product Designer

O papel responsável por traduzir os requisitos de negócio em fluxos interativos e utilizáveis.

**Responsabilidades:**
- desenhar a jornada do usuário e criar protótipos de interface;
- realizar triagem de UX no nível de Feature;
- garantir a usabilidade e consistência visual;
- documentar os caminhos felizes e fluxos de exceção visual (Sad Paths);
- fornecer o artefato de *User Journey* como insumo para a escrita das User Stories.

---

## 4. Papéis e Capacidades Abstratas (Humano ou Agente)

As tarefas do ciclo de vida podem ser assistidas ou validadas por agentes de IA ou especialistas humanos. O repositório central não prescreve a tecnologia do agente, mas sim a *responsabilidade* que a entidade deve assumir. Os projetos consumidores devem mapear sua estrutura para cobrir os seguintes papéis:

### 4.1 Papéis Locais (Assistência e Geração)
Atuam nos Workspaces Locais:
* **Assistente Local (Produto/Design):** Apoia a tradução de ideias em especificações formais (PRD, US). Suas capacidades incluem estruturar conteúdo, extrair contextos, sugerir métricas e analisar impactos de mudança. Não possui poder de aprovar escopo.
* **Assistente Local (Desenvolvimento):** Apoia a escrita de código, criação de testes e refatorações no Workspace Local, preparando o artefato para envio via PR.

### 4.2 Papéis de Integração (Review e Validação)
Atuam de forma independente no Repositório Remoto (via PRs):
* **Reviewer de Especificação:** Tem perfil questionador e analítico. Foca em encontrar lacunas lógicas nas regras de negócio e validar a consistência cruzada entre artefatos.
* **Reviewer de Código:** Tem perfil técnico rigoroso. Foca na validação estrita do código gerado (diff) em relação aos requisitos documentados (`.md`) e à aderência aos *Coding Standards*.
* **Especialista de Segurança (Sec/AppSec):** Atua como validador transversal para antecipar vetores de ataque no design (Security Design Gate) e no código fonte.

### 4.3 Limites Globais para Agentes
Qualquer agente implementado pelas equipes **não deve**:
- Inventar necessidades, restrições ou métricas não fundamentadas.
- Decidir prioridades de negócio autonomamente.
- Aprovar PRD, User Stories, Acceptance Criteria ou qualquer gate de Produto em nome do Product Owner.
- Ocultar incertezas críticas: o agente deve parar e formular perguntas caso a ausência de informação impeça a conclusão segura de uma definição.
