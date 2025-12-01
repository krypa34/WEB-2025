# Web Labs Starter (Vite + json-server)

A forkable starter for a 4-lab web course (HTML, SCSS, JS + API).
- **No UI frameworks**; SCSS with mixins & functions.
- **ES Modules**, simple class-based structure.
- **json-server** bundled for mock API.
- **ESLint** preconfigured.

[API documentation](./api/API_MAP.md)

## Quick start
```bash
npm install
npm run dev:vite
```
- App: http://localhost:5173
- API: http://localhost:5174

## Scripts Vite
- `npm run dev:vite` – starts Vite + json-server concurrently
- `npm run build:vite` – builds for production
- `npm run preview:vite` – preview build locally
- `npm run lint` – run ESLint

## Scripts Webpack
- `npm run dev:webpack` – starts Webpack + json-server concurrently
- `npm run build:webpack` – builds for production
- `npm run preview:webpack` – preview build locally
- `npm run lint` – run ESLint

## Folder structure
```
public/
src/
  assets/
  styles/        # SCSS 7–1 architecture
    abstracts/   # _variables.scss, _functions.scss, _mixins.scss
    base/        # _reset.scss, _typography.scss
    components/  # _button.scss, _card.scss ...
    layout/      # _grid.scss, _header.scss, _footer.scss
    pages/       # _home.scss, _list.scss, ...
    themes/
    vendors/
    main.scss
  js/
    api/
      http.js        # axios instance
      endpoints.js   # REST endpoints
    core/
      store.js       # minimal state/pubsub
      utils.js
    components/
      # class-based components (ListView, Paginator, etc.)
    pages/
      # controllers per route/page
    main.js
  index.html
vite.config.js
.eslintrc.cjs
DEVLOG.md
Prompts.md
```

---

## LAB 1 – Figma (Web + Mobile), 4 pages (BEGINNER-FRIENDLY)
**Goal:** build simple desktop & mobile mockups and reusable elements.

### Required (6 pts)
1) Colors: pick 3–5 main colors (background, text, accent).  
2) Fonts: define 2 text styles (Headings, Body).  
3) Components: Button (default + hover), Input (default).  
4) Grids: 12-col (desktop ≥1280px), 4-col (mobile 360–390px).  
5) Pages: Design **4 pages** in both desktop & mobile.

### Optional (to 8 pts)
6) Use Auto layout on sections (cards, lists, forms).  
7) Create a small library: buttons, inputs, cards.

### Bonus (to 10–12 pts)
8) Prototype one flow (e.g., Search → Details → Form).  
9) Basic accessibility: check color contrast, add focus state.

**Submit:** Figma view link + short description of pages and chosen colors/fonts.

---

## LAB 2 – HTML & Semantics (skeleton)
- 4 pages with semantic tags (header/nav/main/section/article/aside/footer).
- Accessible images (alt), forms with labels.  
- (+) Extra: server-side templating (EJS/Pug) for repeated parts.

## LAB 3 – SCSS & Responsive
- SCSS 7–1, BEM.
- Mixins & functions (grid, container, rem(), color helpers).
- 3 breakpoints: 360–390 / 768 / ≥1280, responsive images.

## LAB 4 – JS + API (json-server)
- axios-based API client, list + filters + search + sort.
- Pagination (buttons or infinite scroll).
- Form with validation; localStorage cache.
- (+) Optional: hash-router; debounce search; optimistic UI for likes.

---

## Academic honesty / AI usage
- Keep a weekly **DEVLOG.md** and **Prompts.md** if AI was used.
- Unique prefixes in class/selectors encouraged to reduce plagiarism.
