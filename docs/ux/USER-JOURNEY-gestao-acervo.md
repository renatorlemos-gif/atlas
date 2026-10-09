# UX-001: Jornada de Gestão de Acervo de Formatos & Scout de Mercado

## 1. Objetivo da Jornada
Permitir que o Analista de Aquisições pesquise, cadastre e edite propriedades intelectuais (Formatos) centralizando informações perenes do IP, contatos de distribuidores e referências de scout de mercado (The Wit, vídeos). O usuário entra no sistema buscando organizar as propriedades pesquisadas e sai com o formato catalogado e pronto para iniciar o ciclo de negociações.

## 2. Perfis de Usuário (Personas)
* **Analista de Aquisições (Operacional):** Profissional que prospecta o mercado, avalia formatos em feiras/The Wit e centraliza a inteligência no Atlas.

## 3. Fluxo de Telas (Step-by-Step)
1. **[Dashboard/Listagem]:** O usuário acessa a página "Acervo de Formatos", que exibe uma tabela/lista com propriedades cadastradas e barra de busca.
2. **[Ação]:** O usuário clica no botão "Novo Formato".
3. **[Formulário de Cadastro]:** O sistema exibe um formulário de abas ou seções para:
   - *Dados Básicos* (Título original, Traduzido, Distribuidor, País, Scripted/Unscripted, Tags, Sinopse).
   - *Dados de Scout/Mercado* (Ano, Adaptações, Links de referência, Observações).
   - *Contatos* (Nome e E-mail do distribuidor).
4. **[Ação / Validação]:** O usuário clica em "Salvar". O sistema verifica os campos obrigatórios.
5. **[Transição/Loading]:** O botão assume estado de carregamento "Salvando..." enquanto processa as informações.
6. **[Tela de Sucesso]:** Toast de "Formato cadastrado com sucesso" e redirecionamento para a tela de *Detalhes do Formato*, exibindo as informações de forma estruturada.

## 4. Comportamentos de Exceção (Sad Paths)
* **Erro de Validação (Campos Obrigatórios):** Se "Título Original" ou "Distribuidor" estiverem vazios, os inputs ficarão com borda vermelha (`--status-error`) e uma mensagem de erro abaixo de cada um.
* **Busca sem Resultados:** Se a busca na listagem não retornar formatos, exibir o Estado Vazio (Empty State): "Nenhum formato encontrado para sua pesquisa" com botão de "Cadastrar Novo".

## 5. Assets e Referências Visuais
* **Protótipo Funcional (Código):** `docs/prototypes/gestao-acervo/index.html` e `App.jsx`.

## 6. Rastreabilidade
* **PRD Relacionado:** `docs/product/PRD-gestao-formatos.md`
* **Feature:** `docs/features/FEAT-001-gestao-acervo.md`
* **Status:** Draft
