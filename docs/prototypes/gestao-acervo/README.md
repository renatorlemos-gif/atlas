# Protótipo: Gestão de Acervo de Formatos (FEAT-001)

Este protótipo contém a interface principal para listagem, cadastro e detalhes dos Formatos (IP Base).

## Como Visualizar
Basta abrir o arquivo `index.html` em qualquer navegador. Não é necessário ambiente Node ou build local, pois ele utiliza React standalone compilado via Babel no browser e Tailwind CSS via CDN.

## Estados Mapeados e Cobertura de Requisitos
- **Estado Vazio/Padrão (Listagem):** A tela inicial apresenta a listagem de formatos existentes.
- **Validação / Erro:** Ao tentar salvar um novo formato sem preencher "Título Original" ou "Distribuidor", o formulário exibirá erros de validação explícitos (`--status-error`).
- **Carregando (Loading):** Ao salvar, o botão primário exibe feedback de processamento e desabilita múltiplas submissões.
- **Sucesso:** Feedback positivo via Toast, transicionando suavemente para a visão de detalhes do formato salvo.

## Arquivos
- `index.html`: Protótipo executável (No-setup).
- `App.jsx`: Código fonte modular em React contendo todas as views para uso como referência pelo desenvolvedor durante a construção definitiva.
