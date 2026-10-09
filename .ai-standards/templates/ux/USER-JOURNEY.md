# UX-[XXX]: Jornada de [Nome da Funcionalidade]

> **Instrução de Nomenclatura:** Se houver múltiplas jornadas no projeto, avalie adicionar um sufixo descritivo ao arquivo (ex: `UJ-001-fluxo-checkout.md`).

## 1. Objetivo da Jornada
(O que o usuário deseja alcançar neste fluxo específico? Como ele entra e como ele sai desta jornada?)

## 2. Perfis de Usuário (Personas)
* (Quais tipos de usuários navegarão por esse fluxo? Ex: Admin, Usuário Logado, Anônimo)

## 3. Fluxo de Telas (Step-by-Step)
1. **[Tela Inicial]:** O usuário acessa a página X e vê o componente Y.
2. **[Ação]:** O usuário clica no botão "Avançar".
3. **[Transição/Loading]:** O sistema exibe um estado de carregamento enquanto valida os dados.
4. **[Tela de Sucesso]:** O usuário é redirecionado para a tela Z.

## 4. Comportamentos de Exceção (Sad Paths)
* **Erro de Validação:** Se o campo X estiver vazio, exibir tooltip vermelho dizendo "Campo obrigatório".
* **Queda de Conexão/API offline:** Exibir modal de "Tente novamente mais tarde" sem perder os dados preenchidos.

## 5. Assets e Referências Visuais
* **Link do Figma / Mockup:** [Inserir URL, se aplicável]
* **Protótipo Funcional (Código):** [Inserir caminho local, ex: `docs/prototypes/pagamentos/index.jsx` ou link do Storybook]

## 6. Rastreabilidade
* **PRD Relacionado:** [Link para o PRD]
* **Status:** [Draft | Review | Approved]
