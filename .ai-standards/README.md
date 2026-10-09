# Globo Agentic Framework

Repositório central de standards, políticas, convenções e templates para Software Delivery.

O objetivo deste repositório é fornecer uma base comum para que diferentes projetos, equipes e agentes possam produzir artefatos de forma consistente, rastreável e versionada.

## Princípios

- Standards centralizados e versionados.
- Artefatos específicos mantidos nos respectivos projetos.
- Documentation-as-Code.
- Rastreabilidade entre artefatos.
- Responsabilidade humana sobre decisões de negócio.
- Uso de agentes para análise, estruturação e automação, respeitando os limites definidos pelos standards.
- Evolução controlada do framework.

## Estrutura

Os principais domínios do repositório são:

- `governance/` — governança e regras gerais.
- `product/` — Product Delivery.
- `architecture/` — arquitetura.
- `development/` — desenvolvimento.
- `security/` — segurança.
- `devops/` — DevOps.
- `documentation/` — documentação.
- `ai-agents/` — padrões relacionados a agentes.
- `templates/` — templates reutilizáveis.

Os domínios acima podem possuir diferentes níveis de maturidade. A existência de um diretório não significa que seu conteúdo normativo esteja necessariamente concluído.

## Product Delivery

A primeira etapa de evolução do framework está concentrada em Product Delivery e Documentation-as-Code.

O lifecycle definido atualmente é:

`Discovery → Requirements → PRD → User Stories → Acceptance Criteria → Product Backlog / Ready for Development`

O lifecycle é iterativo. Mudanças ou descobertas posteriores podem exigir retorno a etapas anteriores.

## Central Standards vs Project Artifacts

Este repositório define **como** os projetos devem produzir determinados artefatos.

Os projetos definem **o que** está sendo construído e mantêm seus próprios artefatos e decisões.

Exemplo:

`Central Repository: product/prd/prd-standard.md`

`Project Repository: docs/product/PRD.md`

Projetos não devem copiar toda a estrutura deste repositório.

O projeto deve consultar o standard aplicável e criar os artefatos necessários conforme o trabalho evolui.

## Documentation-as-Code

Os artefatos de produto devem ser tratados como artefatos versionados:

- Markdown;
- Git;
- histórico de alterações;
- revisão;
- rastreabilidade;
- validação;
- evolução controlada.

Ferramentas operacionais como Jira ou Confluence podem complementar esse modelo, mas não substituem automaticamente os artefatos versionados do projeto.

## Agents and Project Initialization (Vendoring)

A governança para IA e agentes segue o princípio de **Inversão de Controle** (Project-Centric Governance). 

Isso significa que agentes operando em um projeto alvo não acessam diretamente este repositório central durante sua rotina diária. Em vez disso, os projetos utilizam um modelo de cache local (vendoring):

1. **Inicialização:** Ao criar um novo projeto, a estrutura de padrões e templates deste repositório central deve ser copiada para uma pasta local no projeto alvo. Você faz isso executando o script de vendoring fornecido por este repositório: `.\init-project.ps1 C:\Caminho\Do\Novo\Projeto`.
2. **Bootstrap:** O script copia automaticamente o template de governança (`templates/project/AGENTS.md`) para a raiz do novo projeto, informando à IA que ela deve buscar suas regras de negócio na pasta `.ai-standards/` local.
3. **Imutabilidade:** Isso garante que o projeto é blindado contra atualizações futuras neste repositório central, até que a equipe do projeto decida explicitamente sincronizar a governança local para a versão mais recente.

Agentes que eventualmente precisarem interagir **diretamente com este repositório central** devem tratá-lo estritamente como fonte normativa de leitura, conforme definido no `AGENTS.md` localizado na raiz.

Mudanças nos standards centrais devem ocorrer por meio do processo formal de contribuição e revisão definido para este repositório.

## Governance and Decision Log

Este repositório mantém um registro das decisões estruturais que orientam sua própria evolução.

Consulte [DECISIONS.md](DECISIONS.md) para entender as decisões adotadas, seus racionales, alternativas consideradas e consequências.

O `DECISIONS.md` não substitui os standards normativos.

Ele registra o contexto e o racional das decisões que levaram à estrutura atual do framework.

## Versioning

O repositório utiliza versionamento semântico (SemVer).

- PATCH: correções sem alteração de comportamento.
- MINOR: adições compatíveis.
- MAJOR: alterações incompatíveis em regras, estruturas ou processos obrigatórios.

A versão atual é mantida em `VERSION`.

Alterações relevantes devem ser registradas em `CHANGELOG.md`.

## Contributing

Alterações neste repositório devem seguir as regras definidas em `CONTRIBUTING.md`.

Mudanças relevantes na estrutura, governança ou princípios do framework também devem ser registradas em `DECISIONS.md`.

## Language Convention

O conteúdo dos standards utiliza português do Brasil por padrão.

Nomes de diretórios e arquivos permanecem em inglês.

Termos técnicos consolidados podem permanecer em inglês quando isso melhorar a precisão ou interoperabilidade.