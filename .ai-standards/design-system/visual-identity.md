# Identidade Visual — Globo

## 1. Sobre Este Documento

Este documento é a fonte de verdade para agentes de IA e desenvolvedores que precisam gerar protótipos, componentes visuais ou interfaces dentro do ecossistema Globo.

Todo protótipo gerado por um Agente UX DEVE obrigatoriamente utilizar os tokens listados aqui. Nenhuma cor, fonte ou espaçamento deve ser inventado.

**Referência Oficial:** [Guia de Marcas Globo](https://guiademarcas.globo/) e Livro da Marca Globo 2.0.

---

## 2. Paleta de Cores (Design Tokens)

### 2.1 Cores Primárias da Marca (Gradiente Institucional)

A identidade Globo é definida por um gradiente vibrante composto por 5 cores primárias. Estas cores representam a diversidade e a brasilidade da marca.

| Token Name          | Cor      | HEX       | RGB              |
|---------------------|----------|-----------|------------------|
| `--globo-yellow`    | Amarelo  | `#FFE22B` | `255, 226, 43`   |
| `--globo-orange`    | Laranja  | `#FFA600` | `255, 166, 0`    |
| `--globo-red`       | Vermelho | `#FF3132` | `255, 49, 50`    |
| `--globo-blue`      | Azul     | `#00B8FF` | `0, 184, 255`    |
| `--globo-green`     | Verde    | `#00C46D` | `0, 196, 109`    |

### 2.2 Cores Neutras (Interface / Dark Theme)

Padrão para interfaces de conteúdo digital (Streaming, Portais, Dashboards). Inspirado no padrão do Globoplay e Globo.com.

| Token Name              | Uso                    | HEX       | RGB              |
|--------------------------|------------------------|-----------|------------------|
| `--surface-background`   | Fundo principal        | `#121212` | `18, 18, 18`     |
| `--surface-card`         | Cards e containers     | `#1E1E1E` | `30, 30, 30`     |
| `--surface-elevated`     | Modais e popovers      | `#2A2A2A` | `42, 42, 42`     |
| `--border-subtle`        | Bordas e separadores   | `#333333` | `51, 51, 51`     |
| `--text-primary`         | Texto principal        | `#E0E0E0` | `224, 224, 224`   |
| `--text-secondary`       | Texto secundário       | `#9E9E9E` | `158, 158, 158`   |
| `--text-on-brand`        | Texto sobre cor vibrante| `#FFFFFF` | `255, 255, 255`  |

### 2.3 Cores Semânticas (Feedback ao Usuário)

| Token Name          | Uso         | HEX       |
|---------------------|-------------|-----------|
| `--status-success`  | Sucesso     | `#00C46D` |
| `--status-warning`  | Alerta      | `#FFA600` |
| `--status-error`    | Erro        | `#FF3132` |
| `--status-info`     | Informação  | `#00B8FF` |

---

## 3. Tipografia

### 3.1 Família Tipográfica Oficial: Globotipo

A fonte proprietária da Globo foi desenvolvida em parceria com Plau Design e Fabio Haag Type. É uma família geométrica (raízes de Futura/Avenir/Gotham) com adaptações para legibilidade em telas.

**Variantes disponíveis:**
- `Globotipo` — Uso geral (títulos e destaques).
- `Globotipo Text` — Otimizada para leitura em corpo de texto.
- `Globotipo Rounded` — Para aplicações informais e amigáveis.
- `Globotipo Condensed` — Para espaços reduzidos e tabelas densas.

### 3.2 Fallback (Para Protótipos e Ambientes sem a Fonte Proprietária)

Quando a fonte Globotipo NÃO estiver disponível (ex: protótipos rápidos, ambientes locais), utilizar a seguinte pilha de fallback:

```css
font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
```

**Justificativa:** A `Inter` é a fonte open-source com as proporções geométricas mais próximas da Globotipo. Ela é gratuita, amplamente disponível no Google Fonts, e possui excelente legibilidade em telas.

### 3.3 Escala Tipográfica

| Token Name          | Tamanho | Peso     | Uso                        |
|---------------------|---------|----------|----------------------------|
| `--text-display`    | 48px    | Bold     | Títulos de página          |
| `--text-heading-1`  | 32px    | Bold     | Seções principais          |
| `--text-heading-2`  | 24px    | SemiBold | Sub-seções                 |
| `--text-heading-3`  | 20px    | SemiBold | Títulos de cards           |
| `--text-body`       | 16px    | Regular  | Texto padrão               |
| `--text-body-sm`    | 14px    | Regular  | Descrições e metadata      |
| `--text-caption`    | 12px    | Regular  | Labels, badges             |

---

## 4. Espaçamento (Spacing Scale)

Baseado em uma escala de múltiplos de 4px (padrão da indústria para grids de 8-point).

| Token Name    | Valor  |
|---------------|--------|
| `--space-xs`  | 4px    |
| `--space-sm`  | 8px    |
| `--space-md`  | 16px   |
| `--space-lg`  | 24px   |
| `--space-xl`  | 32px   |
| `--space-2xl` | 48px   |
| `--space-3xl` | 64px   |

---

## 5. Bordas e Cantos (Border Radius)

| Token Name           | Valor  | Uso                              |
|----------------------|--------|----------------------------------|
| `--radius-none`      | 0px    | Elementos retos (tabelas)        |
| `--radius-sm`        | 4px    | Inputs e badges                  |
| `--radius-md`        | 8px    | Cards e containers               |
| `--radius-lg`        | 16px   | Botões grandes e modais          |
| `--radius-full`      | 9999px | Avatares e pills                 |

---

## 6. Sombras (Elevation)

| Token Name            | Valor                                  | Uso              |
|-----------------------|----------------------------------------|------------------|
| `--shadow-sm`         | `0 1px 2px rgba(0,0,0,0.3)`           | Cards sutis      |
| `--shadow-md`         | `0 4px 8px rgba(0,0,0,0.4)`           | Dropdowns        |
| `--shadow-lg`         | `0 8px 24px rgba(0,0,0,0.5)`          | Modais           |

---

## 7. Gradiente Institucional

O gradiente da marca é a assinatura visual mais reconhecível da Globo. Deve ser usado com moderação (CTAs, headers, splash screens).

```css
background: linear-gradient(135deg, #FFE22B, #FFA600, #FF3132, #00B8FF, #00C46D);
```

---

## 8. Regras de Aplicação

1. **Dark Theme como padrão** para produtos digitais (streaming, dashboards). O Light Theme é opcional para contextos editoriais (portais de notícia, gshow).
2. **Nunca usar texto puro branco (`#FFFFFF`) sobre fundo escuro** para corpo de texto; preferir `--text-primary` (`#E0E0E0`) para evitar fadiga visual.
3. **Gradientes da marca** devem ser usados apenas em elementos de destaque (botão primário, hero). Não usar em textos ou backgrounds inteiros.
4. **Acessibilidade:** Todo contraste texto/fundo deve atender WCAG AA (mínimo 4.5:1 para texto normal, 3:1 para texto grande).

## 9. Tematização de Submarcas (Multi-brand)

O ecossistema Globo possui dezenas de submarcas com identidades próprias (G1, GE, Globoplay, SporTV, Gshow, etc.). 

**Regra para Agentes UX:**
Quando o PRD especificar que a funcionalidade pertence a um produto específico, a cor primária de destaque do protótipo (botões primários, links, ícones ativos, barras de progresso) DEVE assumir a cor da submarca, substituindo o gradiente institucional padrão.

**Mapeamento de Cores de Destaque (Accent Colors):**
- **G1:** Vermelho (Utilize a base --globo-red)
- **GE (Globo Esporte):** Verde (Utilize a base --globo-green)
- **Globoplay:** Laranja/Avermelhado (Utilize a base --globo-orange / --globo-red)
- **Gshow:** Laranja (Utilize a base --globo-orange)
- **TV Globo:** Azul (Utilize a base --globo-blue)
- **SporTV / Premiere:** Tons de Azul Escuro / Roxo e Verde Escuro.

**O que NÃO muda na submarca:**
A tipografia (Globotipo), as cores neutras de fundo (surface-background) e a escala de espaçamento/bordas permanecem EXATAMENTE as mesmas definidas neste documento. Apenas a injeção de cor primária é alterada.
