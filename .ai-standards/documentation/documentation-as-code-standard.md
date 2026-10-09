# Documentation-as-Code Standard

## 1. Objetivo

Este padrão estabelece como a documentação de Produto (e posteriormente de Arquitetura e Engenharia) deve ser criada, mantida e versionada. 

Tratar a documentação como código (Documentation-as-Code) garante que as especificações evoluam junto com o software, mantendo um histórico auditável e uma única fonte de verdade.

## 2. Princípios Base

- **Junto ao Código:** A documentação oficial do produto (PRDs, Requisitos, User Stories) deve residir no repositório do projeto, no diretório correspondente (ex: `docs/product/`).
- **Sincronia:** Alterações no comportamento do sistema devem ser acompanhadas pela respectiva alteração na documentação no mesmo Pull Request/Commit sempre que possível.
- **Descentralização Operacional:** Ferramentas operacionais como Jira, Trello ou Confluence servem para a gestão do fluxo de trabalho e discussões, mas a **fonte normativa de verdade** deve ser o repositório Git.

## 3. Formato e Ferramentas

- **Formato:** Arquivos Markdown (`.md`).
- **Versionamento:** Git. Todas as mudanças passam por controle de versão.
- **Rastreabilidade:** O uso de IDs (ex: RF-001, US-042) deve ser mantido em links, tanto entre artefatos `.md` quanto em referências em commits e ferramentas operacionais.

## 4. Idioma e Convenções

Para manter a clareza e facilitar a interoperabilidade entre as equipes:

1. **Conteúdo:** O texto dos documentos deve ser escrito em **Português do Brasil (PT-BR)** por padrão.
2. **Termos Técnicos:** Termos consolidados da indústria devem permanecer em **inglês** para evitar traduções confusas (ex: *Acceptance Criteria*, *Given/When/Then*, *User Story*, *Product Backlog*, *PRD*).
3. **Arquitetura de Pastas e Arquivos:** Nomes de diretórios, arquivos e IDs devem obrigatoriamente estar em **inglês** e utilizar *kebab-case* (ex: `user-stories/US-001-login-flow.md`).

## 5. Obsolescência

Quando uma regra de negócio ou artefato (como um PRD de uma feature legada) deixar de ser válido na plataforma, ele não deve ser deletado. O documento deve receber a flag de status `Obsoleto` e uma nota apontando para a nova definição (se houver), preservando o histórico de decisões da empresa.

## 6. Publicação e Sincronização

A topologia de documentação assume que a escrita e aprovação sempre precedem a publicação visual. Para as organizações que utilizam portais corporativos:

- **Pipeline Mandatório:** O pipeline de CI/CD (ex: originado em um Pull Request de Docs) é o **único mecanismo autorizado** a publicar ou atualizar a documentação corporativa em portais como Confluence, Jira, wikis, ou portais de desenvolvimento.
- **Carga e Release Notes:** O fluxo de publicação exporta o `Markdown` consolidado e também sincroniza sumários como *Release Notes* para tickets ou épicos no Jira.
- **Read-only em Portais Externos:** A visualização nesses portais é passiva. Evite realizar correções, edições estruturais ou inclusão de diagramas "direto no portal". Alterações devem sempre nascer no repositório (`.md` -> Commit -> PR -> Deploy de Docs).
