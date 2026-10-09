# Esquema de Dados e Contratos de API - Atlas (MVP)

## 1. Esquema de Banco de Dados Relacional (DDL Lógico)

O modelo obedece a estrutura hierárquica `1 (Formato) : N (Temporadas/Negociações) : N (Parcelas/Invoices)`.

### Tabela `formatos` (IP)
Representa a propriedade intelectual perene.
* `id` (UUID, PK)
* `titulo_original` (VARCHAR, NOT NULL)
* `titulo_traduzido` (VARCHAR, NULL)
* `distribuidor` (VARCHAR, NOT NULL)
* `pais_origem` (VARCHAR, NOT NULL)
* `classificacao` (ENUM: 'SCRIPTED', 'UNSCRIPTED', NOT NULL)
* `tags_tematicas` (VARCHAR[], NULL)
* `sinopse` (TEXT, NOT NULL)
* `contato_distribuidor_nome` (VARCHAR, NULL)
* `contato_distribuidor_email` (VARCHAR, NULL)
* `link_referencia` (VARCHAR, NULL)
* `link_video` (VARCHAR, NULL)
* `ano_lancamento` (INTEGER, NULL)
* `qnt_adaptacoes` (INTEGER, NULL, DEFAULT 0)
* `created_at`, `updated_at` (TIMESTAMP)

### Tabela `negociacoes` (Temporada/Contrato)
Representa uma iteração de contratação ou tentativa de contratação.
* `id` (UUID, PK)
* `formato_id` (UUID, FK -> formatos.id, NOT NULL)
* `temporada` (VARCHAR, NOT NULL)
* `programa_demandante` (VARCHAR, NOT NULL)
* `area_demandante` (VARCHAR, NOT NULL)
* `analista_responsavel` (VARCHAR, NOT NULL)
* `status` (ENUM: 'EM_NEGOCIACAO', 'EM_DISCUSSAO_CONTRATO', 'CONTRATO_EM_ELABORACAO', 'CONTRATO_EM_ASSINATURA', 'CONTRATO_ASSINADO', 'ON_HOLD', 'CANCELADA', NOT NULL)
* `motivo_declinio` (TEXT, NULL)
* `data_solicitacao` (DATE, NOT NULL)
* `data_inicio_negociacao` (DATE, NOT NULL)
* `data_assinatura` (DATE, NULL)
* `inicio_vigencia` (DATE, NULL)
* `fim_vigencia` (DATE, NULL)
* `prazo_renovacao` (VARCHAR, NULL)
* `id_conecta` (VARCHAR, NULL)
* `episodios_min` (INTEGER, NULL)
* `episodios_max` (INTEGER, NULL)
* `episodios_contratados` (INTEGER, NULL)
* `duracao_media_episodio` (INTEGER, NULL)
* `highlights_contratuais` (TEXT, NULL)
* `moeda_contratada` (ENUM: 'USD', 'EUR', 'GBP', 'BRL', NOT NULL)
* `taxa_cambio_ref` (DECIMAL, NULL)
* `license_fee_total` (DECIMAL, NULL)
* `license_fee_episodio` (DECIMAL, NULL)
* `consultoria` (DECIMAL, NULL)
* `tecnologia` (DECIMAL, NULL)
* `direitos_internacionais` (DECIMAL, NULL)
* `outros_valores` (DECIMAL, NULL)
* `outros_especificacao` (VARCHAR, NULL)
* `created_at`, `updated_at` (TIMESTAMP)

### Tabela `parcelas` (Invoices)
Representa a vida financeira associada ao contrato.
* `id` (UUID, PK)
* `negociacao_id` (UUID, FK -> negociacoes.id, NOT NULL)
* `numero_invoice` (VARCHAR, NULL)
* `valor_moeda_original` (DECIMAL, NOT NULL)
* `valor_estimado_brl` (DECIMAL, NULL)
* `wht` (DECIMAL, NULL)
* `data_encaminhamento_financeiro` (DATE, NULL)
* `status` (ENUM: 'PENDENTE', 'ENVIADO_AO_FINANCEIRO', 'PAGO', NOT NULL, DEFAULT 'PENDENTE')
* `observacoes` (TEXT, NULL)
* `created_at`, `updated_at` (TIMESTAMP)

### Tabela `auditoria_comunicacoes` (Log de Newsletters e Boletins)
* `id` (UUID, PK)
* `tipo_comunicacao` (ENUM: 'BOLETIM', 'NEWSLETTER', NOT NULL)
* `data_envio` (TIMESTAMP, NOT NULL)
* `usuario_responsavel` (VARCHAR, NOT NULL)
* `titulos_enviados` (VARCHAR[], NOT NULL)
* `areas_notificadas` (VARCHAR[], NOT NULL)
* `payload_disparado` (JSONB, NULL)

## 2. Contratos de API (REST)

### Endpoints de Formato (IP)
* `GET /api/v1/formatos`
* `POST /api/v1/formatos`
* `GET /api/v1/formatos/{id}`
* `PUT /api/v1/formatos/{id}`

### Endpoints de Negociações (Temporadas)
* `POST /api/v1/formatos/{id}/negociacoes`
* `PUT /api/v1/negociacoes/{id}`
* `POST /api/v1/negociacoes`

### Endpoints Financeiros (Parcelas)
* `POST /api/v1/negociacoes/{id}/parcelas`
* `PUT /api/v1/parcelas/{id}`

### Endpoints de Ações Específicas / RPC / Reports
* `POST /api/v1/negociacoes/{id}/gerar-boletim`
* `POST /api/v1/comunicacoes/newsletter`
* `GET /api/v1/reports/governanca-estudios.xlsx`

## 3. Políticas de Segurança e Tratamento de Erros
* HTTP `400 Bad Request` retornado se `status` mudar para `ON_HOLD` sem o payload `motivo_declinio`.
* Deleções serão via `Soft Delete` (`deleted_at`).
