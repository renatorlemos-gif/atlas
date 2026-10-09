# Agent Instructions: Central Repository Governance

Este repositório (`software-delivery-standards`) é a **fonte central e normativa (Registry)** para os padrões, políticas, convenções e templates de Software Delivery.

⚠️ **IMPORTANTE:** Estas instruções regem o comportamento de IAs operando **NESTE** repositório (o repositório de governança). Se você é um agente atuando em um projeto consumidor, você deve buscar o `AGENTS.md` na raiz daquele projeto específico.

## Central Repository Governance (Read-Only)

Agentes interagindo com este repositório devem tratá-lo como uma biblioteca normativa de leitura.

Agentes podem:
- consultar standards;
- consultar templates;
- analisar conteúdo e identificar inconsistências;
- sugerir melhorias.

Agentes **NÃO DEVEM**, sob nenhuma circunstância, como parte do fluxo operacional diário:
- modificar standards;
- criar ou alterar templates;
- alterar políticas ou documentos de governança;
- realizar commits, push ou alterar a branch principal deste repositório para satisfazer regras locais de projetos.

Qualquer alteração neste repositório central deve seguir o fluxo formal de revisão (Pull Requests), pois afeta todos os projetos consumidores que futuramente atualizarem seus caches.

## Como Projetos Consomem Este Framework (Vendoring / Cache Local)

A governança adotada para agentes e projetos segue o princípio de **Inversão de Controle** (Project-Centric Governance).

O projeto não busca os padrões remotamente toda vez que a IA atua. Em vez disso:
1. No momento de inicialização (ex: via `init-repo`), o projeto **copia (faz vendoring)** do estado atual deste repositório central para dentro de uma pasta local no projeto (ex: `.ai-standards/`).
2. O arquivo de inicialização de governança (localizado em `templates/project/AGENTS.md`) é copiado para a raiz do projeto alvo.
3. A partir desse momento, qualquer time agêntico que entre no projeto alvo vai ler o `AGENTS.md` local, que instruirá a IA a consumir o cache local em `.ai-standards/`.

Isso garante que cada projeto tenha total imutabilidade e controle sobre a versão de governança que está usando, sem acoplamento direto com a versão *head* deste repositório central.

## Decision Log

Qualquer alteração na estrutura, governança ou princípios deste repositório deve ser registrada em `DECISIONS.md`. Consulte-o antes de propor arquiteturas diferentes.