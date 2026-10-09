# UX-001: Jornada de Gestão de Formatos (Atlas)

## 1. Objetivo da Jornada
Permitir que o Analista de Aquisições de Conteúdo centralize a inteligência de mercado, o histórico de negociações, os marcos contratuais e o acompanhamento financeiro de formatos audiovisuais (ficção e não ficção), substituindo planilhas manuais.

## 2. Perfis de Usuário (Personas)
* **Analista de Aquisições:** Usuário interno que realiza a pesquisa (scout), conduz negociações, cadastra contratos e controla parcelas financeiras.
* **Governança (Visualização/Consumo):** Consome os relatórios (Excel) e boletins/newsletters gerados pelo sistema, mas não tem acesso direto.

## 3. Fluxo de Telas (Step-by-Step)
1. **[Dashboard Principal]:** O usuário acessa a plataforma e visualiza a listagem de Formatos (IPs) e negociações recentes, com botões para "Novo Formato", "Gerar Boletim" e "Exportar Excel".
2. **[Cadastro de Formato / Scout]:** O usuário clica em "Novo Formato" e preenche os metadados perenes (Título, Distribuidor, Tags) e links de referência (Scout).
3. **[Detalhes do Formato]:** Após salvar, é direcionado à página do Formato, onde pode visualizar o histórico de temporadas/negociações vinculadas.
4. **[Nova Negociação]:** O usuário clica em "Nova Negociação/Temporada", preenche a área demandante, episódios e define o status inicial (ex: *Em Negociação*).
5. **[Controle Contratual e Financeiro]:** Na tela de detalhes da negociação, o usuário atualiza o status para *Contrato Assinado*, preenche vigência, ID Conecta e cadastra as parcelas/invoices com conversão manual de câmbio.
6. **[Disseminação]:** Com os dados atualizados, o usuário pode clicar em "Gerar Boletim de Direitos" ou "Exportar Governança" para prestar contas.

## 4. Comportamentos de Exceção (Sad Paths)
* **Status "On Hold" ou "Cancelada":** O sistema exibe um modal exigindo o preenchimento obrigatório do campo "Justificativa/Motivo". Se vazio, bloqueia a alteração do status.
* **Navegação sem Salvar:** Ao tentar sair de uma página de cadastro com dados não salvos, exibe alerta de confirmação.

## 5. Assets e Referências Visuais
* **Protótipo Funcional (Código):** `docs/prototypes/gestao-formatos/index.html` e `App.jsx`
* Identidade Visual: Tema Escuro (Dark Mode) padronizado pelo Design System da Globo, com botões de destaque utilizando o gradiente institucional.

## 6. Rastreabilidade
* **PRD Relacionado:** [PRD-gestao-formatos](../product/PRD-gestao-formatos.md)
* **Status:** Draft
