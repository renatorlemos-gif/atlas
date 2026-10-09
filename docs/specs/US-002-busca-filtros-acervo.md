# US-002 — Catálogo, Listagem e Busca Filtrada do Acervo de Formatos

## 1. User Story
**Como** Analista de Aquisições de Conteúdo,  
**Quero** consultar o catálogo de formatos cadastrados com suporte a busca textual livre e filtros por classificação, distribuidor e tags,  
**Para** localizar rapidamente propriedades intelectuais, explorar referências perenes e evitar duplicidade de cadastros no scout de mercado.

---

## 2. Contexto
No fluxo contínuo de scout e triagem de feiras internacionais, o analista necessita consultar o acervo com agilidade antes de abrir novas negociações ou registrar contatos de mercado. A listagem do catálogo é a porta de entrada da plataforma Atlas e substitui as consultas lentas e filtros manuais das antigas planilhas do Excel.

### Referências Visuais e Estados de Tela
* **Protótipo Funcional:** [index.html](file:///c:/Dev/Projetos/Globo/Atlas/docs/prototypes/gestao-acervo/index.html#L104-L130) e [USER-JOURNEY-gestao-acervo.md](file:///c:/Dev/Projetos/Globo/Atlas/docs/ux/USER-JOURNEY-gestao-acervo.md#L10).
* **Estados de Tela Obrigatórios:**
  - **Estado Populado (Grid/Cards):** Exibição em cards ou tabela responsiva contendo:
    - Título Original e Título Traduzido (se existente).
    - Distribuidor e País de Origem.
    - Badge de Classificação temática (`Scripted` ou `Non-Scripted`).
    - Ano de Lançamento Original.
    - Badges/Pills de Tags temáticas (ex: `Reality`, `Dating`, `Quiz`).
    - Botão de ação rápida "+ Novo Formato" fixado no cabeçalho.
  - **Estado de Carregamento (Skeleton / Loading):** Durante a consulta inicial ou alternância de páginas/filtros, apresentar skeleton loaders simulando os cards.
  - **Estado Vazio (Empty State):** Conforme mapeado no fluxo de exceção da Jornada UX: quando a busca textual ou filtros combinados retornarem zero resultados, exibir ilustração/mensagem centralizada:
    > *"Nenhum formato encontrado para sua pesquisa"*  
    com botão de ação imediata: `+ Cadastrar Novo Formato` (redirecionando para `/formats/new`).
  - **Estado de Erro de Conexão:** Mensagem amigável com opção "Tentar novamente" caso o backend esteja temporariamente inacessível.

---

## 3. Escopo e Limites

### Inclui
- Endpoint RESTful `GET /api/v1/formats` com suporte a paginação e parâmetros de consulta (*query string*).
- Parâmetro `q` para busca ampla por texto livre em: `original_name`, `translated_name`, `distributor` e `synopsis`.
- Filtro específico por `distributor` (correspondência exata ou prefixo).
- Filtro específico por `classification` (`SCRIPTED` ou `UNSCRIPTED`).
- Filtro por tags (`tags`), permitindo múltiplos identificadores separados por vírgula em modo inclusivo.
- Paginação de dados via `page` e `limit`, com contagem total de itens e páginas.
- Frontend de busca com *debounce* (mínimo de 300ms) no campo de texto para prevenir sobrecarga de requisições.
- Tratamento e renderização do Empty State contextual com ação direta de cadastro.

### Não Inclui
- Filtros dependentes de contratos ou negociações: "status da negociação", "vigência (vigente/vencido)" e "demandante" (estes filtros serão incorporados na FEAT-002 após a modelagem da entidade Negociação/Temporada).
- Exportação em massa para planilha `.xlsx` (escopo da FEAT-005).
- Exclusão em lote de formatos.

### Restrições Claras ("O que NÃO fazer")
- **PROIBIDO** carregar listagens sem paginação que possam descarregar todos os registros da base de uma única vez no navegador.
- **PROIBIDO** executar buscas textuais case-sensitive que ignorem correspondências por diferenças de caixa alta/baixa.
- **PROIBIDO** deixar a tela em branco ou sem feedback visual quando nenhuma correspondência for localizada.
- **PROIBIDO** perder os parâmetros de paginação e filtro ativos na URL ao navegar e retornar à listagem.

---

## 4. Acceptance Criteria

### Regras de Negócio e Validações
1. **Paginação:**
   - O parâmetro `page` é 1-indexado (padrão: `1`).
   - O parâmetro `limit` define o tamanho da página (padrão: `20`, máximo permitido: `100`).
   - A resposta da API deve sempre conter o envelope de paginação com `page`, `limit`, `total_count` e `total_pages`.
2. **Busca Textual (`q`):**
   - A busca deve ser *case-insensitive* e desconsiderar acentuação se aplicável.
   - Espaços extras no termo digitado devem sofrer *trim*.
   - Se `q` for vazio ou não informado, todos os formatos válidos devem ser retornados respeitando os demais filtros.
3. **Filtro de Tags:**
   - Ao enviar `?tags=reality,estrategia`, o sistema deve retornar formatos que possuam ao menos uma das tags informadas (OU inclusivo).
4. **Ordenação Padrão:**
   - A listagem padrão sem filtros deve ser ordenada por `created_at DESC` (formatos mais recentes primeiro).

---

### Cenários de Aceitação BDD (Gherkin)

#### Cenário 1: Listagem padrão paginada de formatos (Happy Path)
```gherkin
Dado que existem 45 formatos cadastrados no acervo
E o analista acessa a página do catálogo em "/formats"
Quando a página carrega os dados
Então o sistema realiza uma requisição GET para "/api/v1/formats?page=1&limit=20"
E retorna HTTP 200 (OK) com 20 formatos no array "data"
E o objeto "pagination" indica "total_count: 45", "total_pages: 3" e "page: 1"
E a interface exibe os cards com Título, Distribuidor, Classificação e Tags
E apresenta os controles de paginação para navegar para a página 2
```

#### Cenário 2: Busca por texto livre com debounce (Query Search)
```gherkin
Dado que o analista está na listagem de formatos
E existem os formatos "The Traitors" e "The Golden Bachelor"
Quando o analista digita "traitors" no campo de busca do catálogo
Então o sistema aguarda o debounce de 300ms
E dispara a requisição GET para "/api/v1/formats?q=traitors&page=1&limit=20"
E a listagem atualiza exibindo apenas o card do formato "The Traitors"
```

#### Cenário 3: Filtragem combinada por classificação e tags
```gherkin
Dado que o catálogo possui formatos de diversos gêneros e classificações
Quando o usuário seleciona o filtro de classificação "Non-Scripted"
E seleciona a tag "reality"
Então a requisição enviada é GET para "/api/v1/formats?classification=UNSCRIPTED&tags=reality"
E todos os resultados exibidos pertencem à classificação "UNSCRIPTED"
E contêm a tag "reality" em sua listagem
```

#### Cenário 4: Busca sem resultados exibindo Empty State com CTA
```gherkin
Dado que o analista digita "formato-inexistente-xyz" no campo de busca
Quando a API responde com HTTP 200 (OK) e array "data" vazio ([])
Então a interface oculta a listagem de cards
E renderiza o componente de Empty State com o texto "Nenhum formato encontrado para sua pesquisa"
E exibe o botão "+ Cadastrar Novo Formato"
E ao clicar no botão, o usuário é direcionado para a tela "/formats/new"
```

#### Cenário 5: Requisição com página fora do limite (Edge Case)
```gherkin
Dado que o total de formatos no sistema resulta em 2 páginas
Quando o cliente consome GET para "/api/v1/formats?page=99&limit=20"
Então a API responde HTTP 200 (OK) com array "data: []"
E metadados indicando "page: 99", "total_pages: 2", "total_count: 28"
E a interface exibe aviso de que não há itens nesta página, permitindo voltar à primeira página
```

---

### Contratos & Schemas JSON

#### Parâmetros de Consulta: `GET /api/v1/formats`
| Parâmetro | Tipo | Padrão | Descrição |
|-----------|------|--------|-----------|
| `q` | string | `null` | Termo de busca livre (título, distribuidor, sinopse). |
| `distributor` | string | `null` | Filtro por nome do distribuidor. |
| `classification` | enum (`SCRIPTED`, `UNSCRIPTED`) | `null` | Filtro por classificação do formato. |
| `tags` | string (separadas por vírgula) | `null` | Lista de tags temáticas a filtrar. |
| `page` | integer | `1` | Número da página solicitada (mínimo 1). |
| `limit` | integer | `20` | Quantidade de itens por página (máximo 100). |

#### Resposta de Sucesso: `HTTP 200 OK`
```json
{
  "data": [
    {
      "id": "e8d4b3c9-1a2b-4c3d-9e8f-0123456789ab",
      "original_name": "The Traitors",
      "translated_name": "Os Traidores",
      "distributor": "All3Media",
      "country_of_origin": "Holanda",
      "classification": "UNSCRIPTED",
      "tags": [
        "reality",
        "estrategia"
      ],
      "original_release_year": 2024,
      "created_at": "2026-10-09T10:00:00Z"
    },
    {
      "id": "fa12c4d8-2b3c-5d4e-0f1a-9876543210fe",
      "original_name": "The Golden Bachelor",
      "translated_name": "O Solteiro de Ouro",
      "distributor": "Warner Bros.",
      "country_of_origin": "USA",
      "classification": "UNSCRIPTED",
      "tags": [
        "dating",
        "reality"
      ],
      "original_release_year": 2023,
      "created_at": "2026-10-09T09:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total_count": 45,
    "total_pages": 3
  }
}
```

---

### Diretrizes de Testes Automatizados
* **Testes de API / Integração:**
  - Arquivo alvo: `tests/api/formats/test_list_formats.spec.ts`.
  - Cobrir: Listagem com paginação padrão, filtro por `q` (case-insensitive), filtros por `classification` e `tags`, resposta com paginação além do limite máximo.
* **Testes de Componente / UI:**
  - Arquivo alvo: `tests/ui/formats/FormatListCatalog.spec.tsx`.
  - Cobrir: Renderização de cards, disparo de busca com debounce, exibição de Empty State com botão CTA quando `data` for vazio.

---

## 5. Avaliação de Impacto Residual (Micro-Triage)
> A triagem primária de UX e Arquitetura ocorre no nível da Feature. Esta seção cobre apenas refinamentos pontuais não cobertos pela triagem da Feature.
- [ ] Requer refinamento visual ou micro-interação específica não coberta pela triagem da Feature? *(Não - coberto pelo protótipo e USER-JOURNEY-gestao-acervo.md)*
- [ ] Requer decisão técnica pontual não coberta pela triagem da Feature? *(Não - coberto por SCHEMA-001-gestao-acervo.md e ADR-001)*

---

## 6. Dependências
- **Blockers:** US-001 (ou modelo de dados da entidade `FORMAT` provisionado).

---

## 7. Rastreabilidade
- **Feature:** [FEAT-001: Gestão de Acervo de Formatos & Scout de Mercado (IP Base)](file:///c:/Dev/Projetos/Globo/Atlas/docs/features/FEAT-001-gestao-acervo.md)
- **PRD:** [PRD-001: Sistema de Gestão de Formatos](file:///c:/Dev/Projetos/Globo/Atlas/docs/product/PRD-gestao-formatos.md)
- **Requirements:** RF-015, RNF-001, RNF-003, ADR-001, SCHEMA-001
- **Jornada UX:** [USER-JOURNEY-gestao-acervo.md](file:///c:/Dev/Projetos/Globo/Atlas/docs/ux/USER-JOURNEY-gestao-acervo.md)
