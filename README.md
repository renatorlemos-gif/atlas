# Atlas - Gestão de Formatos

Este repositório contém a aplicação de Gestão de Acervo de Formatos.

## Dependências e Requisitos

- Node.js (v18+)
- PostgreSQL (via Docker)
- Docker e Docker Compose

## Configuração do Ambiente Local

1. Copie o arquivo `.env.example` para `.env`:
   ```bash
   cp .env.example .env
   ```

2. Suba o banco de dados PostgreSQL usando o Docker Compose:
   ```bash
   docker-compose up -d
   ```

3. Instale as dependências da raiz e da pasta web:
   ```bash
   npm install
   npm install --prefix web
   ```

4. Execute as migrations/push do banco de dados (certifique-se de que o container do Postgres está rodando):
   ```bash
   npx prisma db push
   ```

## Execução Local (Desenvolvimento)

Para rodar a aplicação localmente, abra dois terminais e execute os seguintes scripts a partir da pasta raiz:

**Terminal 1 - Backend (API Express):**
```bash
npm run dev:api
```
A API ficará disponível em `http://localhost:3000`.

**Terminal 2 - Frontend (React/Vite):**
```bash
npm run dev:web
```
A aplicação web ficará disponível no navegador, geralmente em `http://localhost:5173`.

## Testes Automatizados (TDD Verde)

Para rodar as suítes de testes automatizados (BDD/TDD):

**Testes da API (Backend):**
```bash
npm run test:api
```

**Testes de Componentes (Frontend):**
```bash
npm run test:web
```
