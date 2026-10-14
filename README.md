# Josh 3D Lab

Sitio de **Josh 3D Lab**: modelos impresos en 3D bajo pedido. Built with [Astro 5](https://astro.build) and deployed to GitHub Pages at [josh-3d-lab.github.io](https://josh-3d-lab.github.io).

- `/` — home page.
- `/catalogo/` — catalog of models synced from MakerWorld. Customers request a model via WhatsApp or email; there are no prices or checkout.

## Stack

- **Astro 5, static output**, TypeScript strict (`astro check` is the CI gate) + Prettier.
- **No client framework** — the only JS is the catalog's vanilla `<script>` (modal, deep links, section highlighting).
- **Vanilla CSS design system** — tokens in [`src/styles/tokens.css`](src/styles/tokens.css): ivory surfaces, purple accent, a single light theme.
- All user-facing text is Spanish (Mexico); code and docs are English.

## Commands

| Command                | Action                           |
| ---------------------- | -------------------------------- |
| `npm install`          | Install dependencies             |
| `npm run dev`          | Dev server at `localhost:4321`   |
| `npm run build`        | Production build to `./dist/`    |
| `npm run preview`      | Preview the production build     |
| `npm run check`        | Type-check (`astro check`)       |
| `npm run format`       | Format with Prettier             |
| `npm run catalog:sync` | Sync the catalog from MakerWorld |

## Catalog

Edit `catalog/config.yml` (collections, model lists, overrides, contact details and message templates) and run the sync. Full guide: [CATALOG.md](CATALOG.md).

## Deployment

Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml): type-check → build → deploy to GitHub Pages. Work happens on `sandbox`; merge it into `main` to publish.

One-time repo setting: **Settings → Pages → Source → "GitHub Actions"**.
