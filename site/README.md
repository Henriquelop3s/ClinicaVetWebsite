## Clínica Veterinária — Site Institucional (Next.js 14) - Lisboa, Portugal

Stack: Next.js 14 (App Router), React, TypeScript, Tailwind CSS, Framer Motion, shadcn-style UI (custom), sem backend.

### Rodando localmente
1. Instale dependências:
```bash
npm install
```
2. Execute em desenvolvimento:
```bash
npm run dev
```
3. Acesse `http://localhost:3000`.

### Personalização rápida
- Substitua placeholders em `src/components/Header.tsx`, `Footer.tsx`, `src/app/layout.tsx` e páginas:
  - `[NOME DA EMPRESA]`, `[CIDADE/PAÍS]`, `[CÓDIGO_PAÍS+TELEFONE]`, `[MENSAGEM]`, `[dominio]`.
- **Configurado para Portugal:** Lisboa, telefone +351 912 345 678, domínio .pt
- Paleta de cores: ajuste em `tailwind.config.ts` em `theme.extend.colors`.
- Tipografia: edite `fontFamily` em `tailwind.config.ts` e carregue fontes adicionais se desejar.

### Estrutura
- `src/app` — rotas e layout
- `src/components` — Header, Footer, UI Button, WhatsAppFab
- `src/styles/globals.css` — Tailwind base

### Produção
```bash
npm run build && npm start
```

### SEO básico
- Metadados em `src/app/layout.tsx` (`export const metadata`).

### Licença
Uso livre para o projeto do cliente.

