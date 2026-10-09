# Protótipo: Gestão de Formatos (Atlas)

Este diretório contém o protótipo visual de alta fidelidade para o sistema Atlas, seguindo a identidade visual da Globo.

## Arquivos
- **`index.html`**: Protótipo "Zero Setup". Basta abrir este arquivo em qualquer navegador web para testar as interações (renderizado localmente via React + Tailwind CDN e Babel standalone).
- **`App.jsx`**: Código-fonte do React (limpo e modular) idêntico ao contido no HTML, extraído para referência do desenvolvedor na hora da implementação.

## Estados de Tela Mapeados
O protótipo cobre interativamente os seguintes estados:
1. **Estado Padrão (Dashboard):** Tela inicial com listagem e busca.
2. **Estado Formato Detalhe:** Visualização dos dados da negociação ativa.
3. **Estado de Exceção (Sad Path):** Ao alterar o status da negociação para "On Hold" ou "Cancelada", um modal é aberto exigindo a justificativa.
4. **Estado de Validação de Erro:** Ao tentar confirmar o declínio sem preencher a justificativa, o input exibe borda vermelha e texto de alerta (`--status-error`).
5. **Estado Carregando (Loading):** Ao preencher e confirmar o cancelamento, o botão entra em estado "Salvando..." antes de fechar o modal (simulando requisição).

## Design System e Tokens
Este protótipo implementa os design tokens do **Design System da Globo** especificados em `visual-identity.md`:
- Cores Neutras em tema escuro (`--surface-bg`, `--surface-card`).
- Gradiente Institucional aplicado no ícone/botão principal.
- Feedback Semântico (`--status-error` para falha, `--status-success` para contratos assinados, `--status-warning` para negociações em andamento).
- Tipografia: Fallback para `Inter`, garantindo proximidade estrutural com a Globotipo em ambientes sem instalação da fonte primária.
