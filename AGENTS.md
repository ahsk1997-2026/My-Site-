# AGENTS.md — Arman Pakhsh (visual mockup)

Static front-end design mockup for a Persian (RTL) men's footwear/socks/belt retailer.
Scope is deliberately **UI only** — there is no backend, database, cart logic or payment
integration. Interactive bits (mega menu, product tabs, newsletter validation, mobile
drawer) are client-side state only.

## Stack

- Vite 6 + React 18 (JavaScript, no TypeScript), `react-router-dom` for the two routes.
- Plain CSS: `src/styles/tokens.css` (palette/type/spacing), `src/styles/base.css`
  (resets + shared `.btn`, `.badge`, `.field`, `.section-head` primitives), and one
  CSS file next to each component.
- Font is self-hosted at `public/fonts/Vazirmatn.woff2` (variable, weight 100–900).
  Do not reintroduce a CDN font link — the sandbox preview must work offline.
- Product photography lives in `public/images/` (Unsplash-licensed). Replace with
  the client's own asset set before production.

## Routes

- `/` — homepage (hero, categories, wholesale, products, benefits, footer).
- `/style-guide` — palette, typography scale, buttons, badges, fields, product card,
  empty state. Linked from the footer bottom bar.

## Run it

```bash
docker compose -f docker-compose.base44.yml up -d
```

Only `web` (node:22) runs `npm ci && npm run dev` on port 3000 with the repo bind
mounted; dependencies live in the `node_modules` volume, so a lockfile change needs
`docker compose -f docker-compose.base44.yml up -d --force-recreate web`.

- `package-lock.json` is committed and used with `npm ci`. If you add a dependency,
  regenerate it (`docker run --rm -v "$PWD":/app -w /app node:22 npm install --package-lock-only`).
- Healthcheck hits `GET /` with Node's built-in `fetch`; there is no dedicated
  health endpoint and none should be added.

## Sandbox specifics

- `vite.config.js` extends `server.allowedHosts` with `.${BASE44_SANDBOX_HOST_DOMAIN}`
  **only** when `BASE44_PREVIEW_MODE === '1'`; otherwise Vite keeps its defaults. The
  sandbox id in that hostname rotates, so never hardcode a host.
- The app has no secrets and no `.env` file. Local infra credentials do not exist
  because there is no backend.

## Gotchas

- **Never letter-space Persian text** — it breaks glyph joining. Letter spacing is
  only used for the Latin `ARMAN PAKHSH` descriptor.
- Use logical CSS properties (`margin-inline`, `inset-inline`) so RTL stays correct.
- Format money/numbers with `Intl.NumberFormat('fa-IR')` via `src/lib/format.js`;
  never write Latin digits in customer-facing copy.
- Product model codes (`AP-SH-102`) are Latin: render them with `dir="ltr"` so they
  do not reorder inside RTL text.
- Wholesale prices are intentionally not invented — cards show
  «قیمت عمده پس از تأیید حساب فروشگاهی» until a business price list exists.
- Contact details in the footer are explicit placeholders tagged «جایگزین».

## How to verify

1. `curl -s -o /dev/null -w '%{http_code}' http://localhost:3000/` → `200`.
2. The served HTML must contain `/@vite/client` (live dev source, not a built bundle).
3. In the preview: hero image loads, mega menu opens from «محصولات», product tabs
   filter the grid (`پیشنهاد ویژه` → 2 cards), newsletter rejects an empty email and
   accepts a valid one, mobile drawer opens at 440px, and no horizontal scroll appears
   at 1440 / 768 / 390 px.
