# Component Guidelines — Design System

## 1. Sobre Este Documento

Este documento define a stack tecnológica e as convenções para protótipos e componentes visuais gerados por agentes de IA ou equipes de desenvolvimento dentro do ecossistema Globo.

Quando um Agente UX gerar um protótipo funcional em código, ele DEVE seguir estritamente estas diretrizes.

---

## 2. Stack Tecnológica para Protótipos

### 2.1 Framework: React + Vite

Todos os protótipos funcionais devem ser criados usando:
- **React 18+** como framework de UI.
- **Vite** como bundler/dev server (rápido e leve para prototipagem).
- **TypeScript** (preferencial) ou JavaScript.

### 2.2 Estilização: Tailwind CSS

O padrão de estilização é **Tailwind CSS 3+**, por ser:
- Altamente compatível com geração por IA (classes utilitárias explícitas).
- Fácil de mapear para os Design Tokens listados em `visual-identity.md`.
- Sem overhead de configuração de temas complexos para protótipos.

### 2.3 Biblioteca de Componentes Base: Headless UI + Radix UI

Para componentes interativos (modais, dropdowns, tabs, tooltips), utilizar:
- **Headless UI** (`@headlessui/react`) — Acessível por padrão (WAI-ARIA).
- **Radix UI** (`@radix-ui/react-*`) — Alternativa igualmente acessível, recomendada para projetos maiores.

Essas bibliotecas fornecem o comportamento (acessibilidade, keyboard navigation) sem impor estilos, permitindo que a identidade visual Globo seja aplicada via Tailwind.

### 2.4 Ícones: Lucide React

O padrão de ícones é **Lucide** (`lucide-react`):
- Open-source e leve.
- Estilo limpo e geométrico, compatível com a estética Globo.
- Amplo catálogo (~1500 ícones).

---

## 3. Mapeamento de Tokens para Tailwind

O arquivo `tailwind.config.js` dos protótipos deve estender o tema padrão do Tailwind com os tokens definidos em `visual-identity.md`.

Exemplo de configuração:

```javascript
// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand Gradient Colors
        'globo-yellow':  '#FFE22B',
        'globo-orange':  '#FFA600',
        'globo-red':     '#FF3132',
        'globo-blue':    '#00B8FF',
        'globo-green':   '#00C46D',

        // Surface (Dark Theme)
        'surface-bg':       '#121212',
        'surface-card':     '#1E1E1E',
        'surface-elevated': '#2A2A2A',
        'border-subtle':    '#333333',

        // Text
        'text-primary':   '#E0E0E0',
        'text-secondary': '#9E9E9E',

        // Semantic
        'status-success': '#00C46D',
        'status-warning': '#FFA600',
        'status-error':   '#FF3132',
        'status-info':    '#00B8FF',
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '16px',
        'full': '9999px',
      },
    },
  },
  plugins: [],
};
```

---

## 4. Convenções de Componentes

### 4.1 Estrutura de Arquivos

Os protótipos devem seguir a estrutura:

```
docs/prototypes/<nome-da-feature>/
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
├── src/
│   ├── App.jsx          (ou App.tsx)
│   ├── main.jsx
│   ├── index.css        (imports do Tailwind)
│   └── components/
│       ├── Header.jsx
│       ├── Sidebar.jsx
│       └── ...
```

### 4.2 Regras de Codificação

1. **Componentes funcionais** apenas (sem classes React).
2. **Nomes de componentes** em PascalCase.
3. **Nomes de arquivos** em PascalCase (ex: `PaymentForm.jsx`).
4. **Props tipadas** quando usando TypeScript.
5. **Sem lógica de backend** nos protótipos. Dados mockados com arrays/objetos estáticos.
6. **Sem chamadas a APIs reais.** Se necessário simular, usar `setTimeout` ou dados hardcoded.

### 4.3 Padrão de Botões

```jsx
{/* Botão Primário (Gradiente Globo) */}
<button className="bg-gradient-to-r from-globo-orange to-globo-red text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
  Começar agora
</button>

{/* Botão Secundário (Outline) */}
<button className="border border-border-subtle text-text-primary font-semibold py-3 px-6 rounded-lg hover:bg-surface-card transition-colors">
  Saiba mais
</button>

{/* Botão Destrutivo */}
<button className="bg-status-error text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
  Excluir
</button>
```

### 4.4 Padrão de Cards

```jsx
<div className="bg-surface-card border border-border-subtle rounded-md p-4 shadow-sm">
  <h3 className="text-text-primary text-lg font-semibold">Título do Card</h3>
  <p className="text-text-secondary text-sm mt-2">Descrição do conteúdo.</p>
</div>
```

### 4.5 Padrão de Input

```jsx
<div>
  <label className="text-text-secondary text-sm block mb-1">E-mail</label>
  <input
    type="email"
    placeholder="seu@email.com"
    className="w-full bg-surface-elevated border border-border-subtle rounded-sm px-3 py-2 text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-globo-blue"
  />
</div>
```

---

## 5. Acessibilidade (Obrigatório)

1. Todo componente interativo deve ser navegável por teclado.
2. Imagens devem ter `alt` descritivo.
3. Formulários devem ter `label` associado via `htmlFor`.
4. Contraste mínimo: WCAG AA (4.5:1 texto normal, 3:1 texto grande).
5. Usar `aria-label` em ícones interativos sem texto visível.

---

## 6. Responsividade

Os protótipos devem ser responsivos utilizando os breakpoints padrão do Tailwind:

| Breakpoint | Prefixo | Largura Mínima |
|------------|---------|----------------|
| Mobile     | (base)  | 0px            |
| Tablet     | `md:`   | 768px          |
| Desktop    | `lg:`   | 1024px         |
| Wide       | `xl:`   | 1280px         |

O design deve ser **Mobile-first**: escreva os estilos base para mobile e use os prefixos para adaptar ao desktop.
