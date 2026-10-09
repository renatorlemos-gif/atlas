# US-001 — Cadastro de Formato (IP Base) com Metadados, Scout e Contatos Comerciais

## 1. User Story
**Como** Analista de Aquisições de Conteúdo,  
**Quero** cadastrar um novo formato audiovisual (Propriedade Intelectual perene) informando seus metadados principais, tags temáticas, contatos comerciais do distribuidor e referências de scout de mercado,  
**Para** centralizar o histórico e inteligência técnica no catálogo do Atlas, eliminando planilhas paralelas e viabilizando o futuro ciclo de negociações.

---

## 2. Contexto
Atualmente, as informações perenes dos formatos e pesquisas de mercado encontram-se dispersas em planilhas eletrônicas legadas (`Formatos_dados.xlsx` e `Acompanhamento de formatos.xlsx`). Esta história viabiliza a criação da entidade raiz do sistema (**Formato / IP Base**), que funcionará como repositório central de inteligência e base para o relacionamento 1:N com futuras temporadas e negociações.

### Referências Visuais e Estados de Tela
* **Protótipo Funcional:** [index.html](file:///c:/Dev/Projetos/Globo/Atlas/docs/prototypes/gestao-acervo/index.html) e [USER-JOURNEY-gestao-acervo.md](file:///c:/Dev/Projetos/Globo/Atlas/docs/ux/USER-JOURNEY-gestao-acervo.md#L12-L19).
* **Estados de Tela Obrigatórios:**
  - **Formulário Estruturado:** Exibição dividida em seções/abas coerentes:
    1. *Dados Básicos:* Título Original, Título Traduzido, Distribuidor, País de Origem, Classificação (`Scripted` ou `Non-Scripted`), Tags Temáticas e Sinopse.
    2. *Dados de Scout/Mercado:* Ano de Lançamento Original, Quantidade de Adaptações Conhecidas, Link The Wit/Referência Externa, Link de Vídeo (Vimeo/YouTube) e Anotações de Scout.
    3. *Contatos Comerciais:* Lista dinâmica para adicionar Nome e E-mail de contatos do distribuidor.
  - **Estado de Carregamento (Loading):** Ao clicar em "Salvar", desabilitar o botão e exibir feedback de carregamento ("Salvando...").
  - **Estado de Validação de Erros:** Inputs obrigatórios não preenchidos devem receber borda destacada em vermelho (`--status-error` / `#FF3132`) e mensagem contextual de erro abaixo do campo.
  - **Estado de Sucesso:** Disparo de notificação toast ("Formato cadastrado com sucesso") e redirecionamento para a tela de Detalhes do Formato recém-criado.

---

## 3. Escopo e Limites

### Inclui
- Criação e persistência da entidade `FORMAT` com todos os atributos perenes e de scout.
- Persistência de tags temáticas normalizadas na tabela relacional `FORMAT_TAG`.
- Persistência de múltiplos contatos comerciais associados na tabela `FORMAT_CONTACT` (1:N).
- Implementação do endpoint RESTful `POST /api/v1/formats`.
- Validações de obrigatoriedade no backend e no frontend para os campos `original_name` e `distributor`.
- Validação de integridade de formato para URLs (`external_reference_link`, `video_link`) e e-mails de contatos.
- Transação atômica de banco de dados (PostgreSQL): persistência de Formato, Tags e Contatos em transação única (`ACID`).

### Não Inclui
- Gestão de contratos, temporadas, valores ou negociações (escopo da FEAT-002).
- Scraping automatizado de metadados do portal *The Wit* ou APIs de terceiros (links manuais no MVP conforme DEC-002).
- Upload ou streaming nativo de arquivos de vídeo (suporte restrito a URLs externas).
- Criação de formatos próprios da Globo / Bíblia de produção (escopo explicitamente fora do Atlas conforme DEC-003).

### Restrições Claras ("O que NÃO fazer")
- **PROIBIDO** persistir formatos sem transação atômica: se a gravação de tags ou contatos comerciais falhar, a transação inteira deve sofrer *rollback*.
- **PROIBIDO** permitir gravação de `original_name` ou `distributor` nulos, vazios ou contendo apenas espaços em branco.
- **PROIBIDO** acoplar campos de negociação (valores em moeda, status contratual, ID Conecta) na entidade de Formato (respeitar RN-001).
- **PROIBIDO** utilizar mocks de persistência ou armazenamento em memória no código final de produção.

---

## 4. Acceptance Criteria

### Regras de Negócio e Validações
1. **Campos Obrigatórios:** `original_name` (string, máx. 255 caracteres) e `distributor` (string, máx. 255 caracteres) são estritamente obrigatórios. Espaços no início e final devem ser removidos (*trim*).
2. **Classificação:** O campo `classification` aceita exclusivamente os valores `SCRIPTED` ou `UNSCRIPTED`.
3. **Tags Temáticas:** Devem ser tratadas como lista de strings em caixa baixa (*lowercase*), sem repetições, removendo pontuações supérfluas.
4. **Contatos Comerciais:** O formulário permite adicionar zero ou mais contatos. Quando um contato for adicionado, o campo `name` é obrigatório e `email` deve obedecer ao padrão sintático de endereço de e-mail válido.
5. **Métricas de Mercado:** `original_release_year` deve ser um número inteiro positivo entre 1900 e o ano corrente + 5. `known_adaptations_count` deve ser um número inteiro maior ou igual a zero.
6. **Links Externos:** `external_reference_link` e `video_link`, quando preenchidos, devem ser URLs válidas iniciando com `http://` ou `https://`.

---

### Cenários de Aceitação BDD (Gherkin)

#### Cenário 1: Cadastro completo de formato com sucesso (Happy Path)
```gherkin
Dado que o Analista de Aquisições está autenticado no Atlas
E acessa a tela de cadastro de novo formato em "/formats/new"
Quando preenche os campos obrigatórios:
  | Campo         | Valor              |
  | Título Original | The Golden Bachelor |
  | Distribuidor   | Warner Bros.        |
E preenche os metadados opcionais:
  | Campo            | Valor                                                 |
  | Título Traduzido  | O Solteiro de Ouro                                    |
  | País de Origem    | USA                                                   |
  | Classificação    | UNSCRIPTED                                            |
  | Sinopse          | Spin-off de relacionamento com elenco da terceira idade |
  | Tags             | dating, reality                                       |
E preenche os dados de scout:
  | Campo                  | Valor                                         |
  | Anotações de Scout     | Forte apelo para audiência sênior no Mipcom   |
  | Link The Wit           | https://thewit.com/format/12345               |
  | Link de Vídeo          | https://vimeo.com/123456789                   |
  | Ano de Lançamento      | 2023                                          |
  | Quantidade Adaptações  | 2                                             |
E adiciona um contato comercial com nome "Jane Doe" e e-mail "jane.doe@wb.example.com"
E clica no botão "Salvar Formato"
Então o sistema envia uma requisição POST para "/api/v1/formats"
E retorna código de status HTTP 201 (Created)
E persiste atomicamente o formato, suas tags e seus contatos no banco de dados
E exibe a notificação toast "Formato cadastrado com sucesso"
E redireciona o usuário para a tela de visualização de detalhes do formato criado
```

#### Cenário 2: Validação de campos obrigatórios ausentes (Unhappy Path)
```gherkin
Dado que o usuário está no formulário de cadastro de formato
Quando tenta submeter o formulário sem preencher "Título Original" e "Distribuidor"
Então o sistema bloqueia a submissão e não envia a requisição para a API
E destaca os campos "Título Original" e "Distribuidor" com borda de erro visual vermelha
E exibe as mensagens de validação:
  | Campo            | Mensagem de Erro               |
  | Título Original  | Título Original é obrigatório |
  | Distribuidor     | Distribuidor é obrigatório    |
E mantém os demais campos digitados preservados
```

#### Cenário 3: Validação de e-mail e links malformados
```gherkin
Dado que o usuário preenche "Título Original" como "Survivor" e "Distribuidor" como "Banijay"
Quando preenche o contato comercial com e-mail inválido "contato-sem-arroba"
Ou preenche o Link de Vídeo com texto não URL "video_invalido"
E clica em "Salvar Formato"
Então o sistema exibe mensagens de erro de validação específicas:
  | Campo            | Mensagem de Erro                         |
  | E-mail do Contato| Formato de e-mail inválido               |
  | Link de Vídeo    | O link informado deve ser uma URL válida |
E o formato não é persistido
```

#### Cenário 4: Falha transacional e resiliência no backend
```gherkin
Dado que uma requisição POST para "/api/v1/formats" possui payload válido
Quando ocorre uma falha de banco de dados durante a inserção dos contatos comerciais
Então a transação relacional executa rollback completo
E nenhum registro órfão é inserido na tabela FORMAT ou FORMAT_TAG
E a API responde com código HTTP 500 (Internal Server Error) e mensagem segura de erro
E o frontend exibe alerta informando que não foi possível salvar o formato
```

---

### Contratos & Schemas JSON

#### Requisição: `POST /api/v1/formats`
```json
{
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
  }
}
```

#### Resposta de Sucesso: `HTTP 201 Created`
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
  "created_at": "2026-10-09T13:30:00Z",
  "updated_at": "2026-10-09T13:30:00Z"
}
```

#### Resposta de Erro de Validação: `HTTP 400 Bad Request`
```json
{
  "error": "Validation Error",
  "message": "Dados obrigatórios ausentes ou inválidos",
  "details": [
    {
      "field": "original_name",
      "message": "original_name é obrigatório"
    },
    {
      "field": "distributor",
      "message": "distributor é obrigatório"
    }
  ]
}
```

---

### Diretrizes de Testes Automatizados
* **Testes de API / Integração:**
  - Arquivo alvo: `tests/api/formats/test_create_format.spec.ts` (ou equivalente na stack definida).
  - Cobrir: Criação com todos os campos, criação apenas com campos obrigatórios, rejeição por campos nulos/vazios, validação de transação atômica em erro de banco.
* **Testes de Componente / UI:**
  - Arquivo alvo: `tests/ui/formats/CreateFormatForm.spec.tsx`.
  - Cobrir: Renderização de abas/campos, bloqueio de submissão sem obrigatórios, exibição de mensagens de erro inline, feedback de "Salvando...".

---

## 5. Avaliação de Impacto Residual (Micro-Triage)
> A triagem primária de UX e Arquitetura ocorre no nível da Feature. Esta seção cobre apenas refinamentos pontuais não cobertos pela triagem da Feature.
- [ ] Requer refinamento visual ou micro-interação específica não coberta pela triagem da Feature? *(Não - coberto pelo protótipo e USER-JOURNEY-gestao-acervo.md)*
- [ ] Requer decisão técnica pontual não coberta pela triagem da Feature? *(Não - coberto por SCHEMA-001-gestao-acervo.md e ADR-001)*

---

## 6. Dependências
- **Blockers:** Nenhum. Esta história é o ponto de partida da FEAT-001.

---

## 7. Rastreabilidade
- **Feature:** [FEAT-001: Gestão de Acervo de Formatos & Scout de Mercado (IP Base)](file:///c:/Dev/Projetos/Globo/Atlas/docs/features/FEAT-001-gestao-acervo.md)
- **PRD:** [PRD-001: Sistema de Gestão de Formatos](file:///c:/Dev/Projetos/Globo/Atlas/docs/product/PRD-gestao-formatos.md)
- **Requirements:** RF-001, RF-002, RN-001, RNF-001, RNF-002, RNF-006
- **Arquitetura / Schemas:** [SCHEMA-001-gestao-acervo.md](file:///c:/Dev/Projetos/Globo/Atlas/docs/architecture/SCHEMA-001-gestao-acervo.md), [ADR-001: PostgreSQL](file:///c:/Dev/Projetos/Globo/Atlas/docs/architecture/ADR-001-selecao-banco.md)
- **Jornada UX:** [USER-JOURNEY-gestao-acervo.md](file:///c:/Dev/Projetos/Globo/Atlas/docs/ux/USER-JOURNEY-gestao-acervo.md)
