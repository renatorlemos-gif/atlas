# US-003 — Visualização Detalhada e Edição Cadastral de Formato

## 1. User Story
**Como** Analista de Aquisições de Conteúdo,  
**Quero** visualizar os detalhes consolidados de um formato e editar seus metadados, contatos e referências de scout,  
**Para** manter a base de inteligência perene sempre enriquecida e atualizada ao longo do ciclo de vida da propriedade intelectual.

---

## 2. Contexto
As propriedades intelectuais são ativas e evoluem: novos contatos comerciais assumem as contas nas distribuidoras, novas adaptações internacionais são anunciadas e novas análises e links de scout (*The Wit*, Vimeo) são agregados. Esta história viabiliza a tela de detalhes completos do Formato (IP Base) e o fluxo de edição contínua, garantindo que o conhecimento tácito não se perca.

### Referências Visuais e Estados de Tela
* **Protótipo Funcional:** [index.html](file:///c:/Dev/Projetos/Globo/Atlas/docs/prototypes/gestao-acervo/index.html#L186-L198) e [USER-JOURNEY-gestao-acervo.md](file:///c:/Dev/Projetos/Globo/Atlas/docs/ux/USER-JOURNEY-gestao-acervo.md#L18).
* **Estados de Tela Obrigatórios:**
  - **Visualização de Detalhes (Read-Only):**
    - Cabeçalho estruturado com Título Original, Título Traduzido, Badge de Classificação (`Scripted` ou `Non-Scripted`), Distribuidor e País de Origem.
    - Seção de Sinopse e Tags temáticas destacadas.
    - Seção de Scout e Mercado: Ano de lançamento, quantidade de adaptações, anotações de pesquisa e links de referência clicáveis (abrindo em nova aba com `target="_blank" rel="noopener noreferrer"`).
    - Lista de Contatos Comerciais: Exibição de Nome e E-mail com link `mailto:`.
    - Botão de ação "Editar Formato" e botão "Voltar ao Acervo".
  - **Modo de Edição:** Formulário pré-preenchido com os dados atuais do formato, permitindo alteração de todos os campos cadastrais, inclusão/remoção de tags e contatos comerciais.
  - **Estado de Salvamento:** Botão "Salvar Alterações" desabilitado durante o envio com texto "Salvando alterações...".
  - **Feedback de Sucesso:** Toast "Formato atualizado com sucesso" e retorno automático à visualização de detalhes com dados atualizados.
  - **Estado 404 (Não Encontrado):** Caso o formato requisitado pela URL não exista, exibir alerta explicativo: *"Formato não encontrado ou inexistente"* com botão de retorno à listagem.

---

## 3. Escopo e Limites

### Inclui
- Endpoint RESTful `GET /api/v1/formats/{id}` para obtenção dos dados integrais de um formato por seu UUID.
- Endpoint RESTful `PUT /api/v1/formats/{id}` para atualização completa dos metadados, tags e contatos comerciais.
- Substituição e sincronização atômica das relações em `FORMAT_TAG` e `FORMAT_CONTACT` dentro de transação única de banco de dados.
- Atualização automática do campo `updated_at` para o timestamp corrente.
- Tratamento de resposta HTTP 404 para identificadores inexistentes ou inválidos.
- Links externos seguros na interface web para reprodução de referências no Vimeo, YouTube ou portal *The Wit*.

### Não Inclui
- Exclusão física (*Hard Delete*) de formatos.
- Gestão ou alteração de dados de negociações/temporadas (escopo da FEAT-002).
- Controle de concorrência pessimista (lock de tela por múltiplos usuários).

### Restrições Claras ("O que NÃO fazer")
- **PROIBIDO** permitir a alteração do identificador primário (`id` / UUID) do formato.
- **PROIBIDO** permitir que a atualização de tags ou contatos comerciais ocorra fora de transação atômica (`ACID`).
- **PROIBIDO** permitir que campos obrigatórios (`original_name` e `distributor`) sejam esvaziados no fluxo de edição.
- **PROIBIDO** abrir links de mídia externa na mesma aba da aplicação (deve abrir em nova aba com proteções de segurança).

---

## 4. Acceptance Criteria

### Regras de Negócio e Validações
1. **Identificador (`id`):** Deve ser um UUID v4 válido. Se o formato do UUID for sintaticamente inválido ou o registro não existir, a API deve retornar `HTTP 404 Not Found`.
2. **Campos Obrigatórios na Edição:** A requisição `PUT` deve validar estritamente que `original_name` e `distributor` não sejam omitidos ou preenchidos com strings em branco.
3. **Sincronização de Tags e Contatos:**
   - O payload do `PUT` substitui a lista de tags e contatos vinculados. Caso o array de contatos comerciais seja enviado com alterações, o sistema deve atualizar, inserir novos ou remover os contatos omitidos em conformidade transacional.
4. **Auditoria Temporal:** A cada atualização bem-sucedida, o atributo `updated_at` deve registrar a data/hora UTC corrente.

---

### Cenários de Aceitação BDD (Gherkin)

#### Cenário 1: Consulta de detalhes de formato com sucesso (Happy Path)
```gherkin
Dado que existe um formato cadastrado com ID "e8d4b3c9-1a2b-4c3d-9e8f-0123456789ab"
E possui título "The Golden Bachelor" e distribuidor "Warner Bros."
Quando o usuário acessa a URL "/formats/e8d4b3c9-1a2b-4c3d-9e8f-0123456789ab"
Então o sistema executa uma requisição GET para "/api/v1/formats/e8d4b3c9-1a2b-4c3d-9e8f-0123456789ab"
E retorna HTTP 200 (OK) com os dados completos, tags e contatos comerciais
E a interface exibe as seções de metadados, links de scout e tabela de contatos
E exibe o botão "Editar Formato"
```

#### Cenário 2: Consulta com formato inexistente (Sad Path - 404)
```gherkin
Dado que o usuário tenta acessar "/formats/00000000-0000-0000-0000-000000000000"
Quando o sistema executa a requisição GET para "/api/v1/formats/00000000-0000-0000-0000-000000000000"
Então a API responde com código HTTP 404 (Not Found)
E a interface exibe mensagem contextual "Formato não encontrado ou inexistente"
E oferece um botão "Voltar ao Acervo" direcionando para "/formats"
```

#### Cenário 3: Edição e atualização de formato com alteração de contatos e scout (Happy Path)
```gherkin
Dado que o usuário está visualizando os detalhes do formato "The Golden Bachelor"
E clica em "Editar Formato"
Quando atualiza o campo "Quantidade de Adaptações" de "2" para "5"
E adiciona um novo contato comercial com nome "John Smith" e e-mail "john.smith@wb.example.com"
E clica no botão "Salvar Alterações"
Então o sistema envia uma requisição PUT para "/api/v1/formats/e8d4b3c9-1a2b-4c3d-9e8f-0123456789ab"
E a API responde HTTP 200 (OK) com o payload atualizado e novo timestamp "updated_at"
E o frontend exibe a notificação toast "Formato atualizado com sucesso"
E exibe a tela de detalhes refletindo as 5 adaptações e o novo contato cadastrado
```

#### Cenário 4: Tentativa de atualização com campos obrigatórios em branco (Unhappy Path)
```gherkin
Dado que o usuário está no modo de edição do formato
Quando apaga todo o texto do campo "Distribuidor" deixando-o em branco
E clica em "Salvar Alterações"
Então a validação local bloqueia a submissão
E o input de "Distribuidor" é destacado com borda de erro vermelha
E exibe a mensagem "Distribuidor é obrigatório"
E nenhuma alteração é persistida no banco de dados
```

#### Cenário 5: Navegação externa segura para links de scout
```gherkin
Dado que o formato possui o Link de Vídeo "https://vimeo.com/123456789"
Quando o analista clica sobre o link na seção de Scout
Então o link abre o endereço em uma nova aba do navegador
E contém os atributos de segurança target="_blank" e rel="noopener noreferrer"
```

---

### Contratos & Schemas JSON

#### Resposta: `GET /api/v1/formats/{id}` (HTTP 200 OK)
```json
{
  "id": "e8d4b3c9-1a2b-4c3d-9e8f-0123456789ab",
  "original_name": "The Golden Bachelor",
  "translated_name": "O Solteiro de Ouro",
  "distributor": "Warner Bros.",
  "country_of_origin": "USA",
  "classification": "UNSCRIPTED",
  "tags": [
    "dating",
    "reality"
  ],
  "synopsis": "Um spin-off de The Bachelor focando em participantes da terceira idade.",
  "commercial_contacts": [
    {
      "id": "7f12a345-b67c-890d-ef12-34567890abcd",
      "name": "Jane Doe",
      "email": "jane.doe@wb.example.com"
    }
  ],
  "scout": {
    "notes": "Forte aderência ao público +50. Visto no Mipcom 2023.",
    "external_reference_link": "https://thewit.com/format/12345",
    "video_link": "https://vimeo.com/123456789",
    "original_release_year": 2023,
    "known_adaptations_count": 2
  },
  "created_at": "2026-10-09T10:00:00Z",
  "updated_at": "2026-10-09T10:00:00Z"
}
```

#### Requisição: `PUT /api/v1/formats/{id}`
```json
{
  "original_name": "The Golden Bachelor",
  "translated_name": "O Solteiro de Ouro",
  "distributor": "Warner Bros.",
  "country_of_origin": "USA",
  "classification": "UNSCRIPTED",
  "tags": [
    "dating",
    "reality",
    "senior"
  ],
  "synopsis": "Um spin-off de The Bachelor focando em participantes da terceira idade.",
  "commercial_contacts": [
    {
      "name": "Jane Doe",
      "email": "jane.doe@wb.example.com"
    },
    {
      "name": "John Smith",
      "email": "john.smith@wb.example.com"
    }
  ],
  "scout": {
    "notes": "Forte aderência ao público +50. Visto no Mipcom 2023 e renovado para nova temporada.",
    "external_reference_link": "https://thewit.com/format/12345",
    "video_link": "https://vimeo.com/123456789",
    "original_release_year": 2023,
    "known_adaptations_count": 5
  }
}
```

#### Resposta de Erro: `HTTP 404 Not Found`
```json
{
  "error": "Not Found",
  "message": "Formato com o identificador informado não foi encontrado."
}
```

---

### Diretrizes de Testes Automatizados
* **Testes de API / Integração:**
  - Arquivo alvo: `tests/api/formats/test_get_and_update_format.spec.ts`.
  - Cobrir: Consulta por UUID existente, consulta com UUID inexistente (retornando 404), atualização de campos cadastrais e scout via PUT, atualização substituindo array de contatos de forma atômica.
* **Testes de Componente / UI:**
  - Arquivo alvo: `tests/ui/formats/FormatDetailsAndEdit.spec.tsx`.
  - Cobrir: Alternância entre modo visualização e modo edição, pré-população de campos, validação de campos obrigatórios no salvamento, toast de confirmação.

---

## 5. Avaliação de Impacto Residual (Micro-Triage)
> A triagem primária de UX e Arquitetura ocorre no nível da Feature. Esta seção cobre apenas refinamentos pontuais não cobertos pela triagem da Feature.
- [ ] Requer refinamento visual ou micro-interação específica não coberta pela triagem da Feature? *(Não - coberto pelo protótipo e USER-JOURNEY-gestao-acervo.md)*
- [ ] Requer decisão técnica pontual não coberta pela triagem da Feature? *(Não - coberto por SCHEMA-001-gestao-acervo.md e ADR-001)*

---

## 6. Dependências
- **Blockers:** US-001 (Cadastro de formato).

---

## 7. Rastreabilidade
- **Feature:** [FEAT-001: Gestão de Acervo de Formatos & Scout de Mercado (IP Base)](file:///c:/Dev/Projetos/Globo/Atlas/docs/features/FEAT-001-gestao-acervo.md)
- **PRD:** [PRD-001: Sistema de Gestão de Formatos](file:///c:/Dev/Projetos/Globo/Atlas/docs/product/PRD-gestao-formatos.md)
- **Requirements:** RF-001, RF-002, RN-001, RNF-001, RNF-002, ADR-001, SCHEMA-001
- **Jornada UX:** [USER-JOURNEY-gestao-acervo.md](file:///c:/Dev/Projetos/Globo/Atlas/docs/ux/USER-JOURNEY-gestao-acervo.md)
