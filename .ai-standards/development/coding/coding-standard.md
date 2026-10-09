# Coding Standards

## 1. Objetivo

Este padrão estabelece os princípios globais de codificação e arquitetura para as equipes de desenvolvimento. Ele serve como o guia definitivo (A Régua de Medida) contra o qual todo código gerado e submetido (via Pull Requests) deve ser avaliado nos Quality Gates (ex: por um Reviewer de Código).

## 2. Princípios Gerais de Codificação

Independentemente da linguagem ou framework utilizado, todo código produzido deve seguir as seguintes diretrizes:

* **Modularidade e DRY (Don't Repeat Yourself):** O código deve ser dividido em unidades menores e independentes (funções, módulos, classes) com responsabilidade única. Abstraia padrões comuns em funções/classes reutilizáveis para evitar duplicação desnecessária.
* **Coerência e Legibilidade:** A legibilidade do código é prioritária para facilitar a compreensão tanto por revisores humanos quanto agenticos. Utilize nomenclaturas de variáveis e métodos que reflitam estritamente suas intenções, seguindo as convenções idiomáticas da linguagem.
* **Comentários e Documentação de Código:** O código deve ser autoexplicativo na medida do possível. Comentários devem focar no **porquê** de uma abordagem não-óbvia ou em regras de negócio críticas. O **o quê** o código faz deve transparecer por sua estrutura limpa.

## 3. Diretrizes para Front-end

As equipes focadas no desenvolvimento de interfaces (UI/UX) devem seguir as diretrizes abaixo:

* **Gerenciamento de Estado:** É obrigatório haver clareza na separação entre o estado local e o estado global da aplicação. (Exemplo em ecossistemas React: priorizar Hooks (`useState`, `useEffect`) para o escopo local de componentes e delegar estados transversais para ferramentas globais, como Context API, Redux ou equivalentes).
* **Encapsulamento Visual (Estilos):** Para evitar conflitos de escopo de CSS e side-effects de estilização global, adote abordagens de encapsulamento rígidas, tais como CSS Modules ou Styled Components (CSS-in-JS).
* **Performance:** Preze por otimizações preventivas de interface. Evite renderizações desnecessárias utilizando técnicas como memoização de componentes, *lazy loading* para blocos de rota ou interface pesada, e fragmentação de entrega (*code splitting*).

## 4. Diretrizes para Back-end

As equipes focadas em sistemas, regras de negócio isoladas e dados devem seguir as seguintes premissas:

* **Segurança de Borda (Security-by-Design):** É imprescindível a aplicação de mecanismos de autenticação e autorização, validação estrita e higienização (sanitization) de todos os dados de entrada (input validation), proteção declarada contra injeção e manipulação segura de secrets/senhas.
* **Escalabilidade e Resiliência:** Projete arquiteturas aptas a lidar com flutuações de demanda (*Design for Failure*). Trate as exceções de forma robusta e antecipada (falhas graciosas), implemente *timeouts*, circuit breakers, e prefira soluções sem estado não-gerenciado (stateless).
* **Gerenciamento de Dependências:** O controle das bibliotecas externas e pacotes da aplicação deve ser rígido e gerido através das ferramentas oficiais da plataforma. Dependências devem ser sistematicamente atualizadas e validadas contra vulnerabilidades conhecidas em fluxos de CI.
