# Barstronaut

Marketing site for Barstronaut / $BARSTRO. Four routes, pending launch details, and the supplied production artwork. Trading is not live.

## Commands

```sh
npm install
npm run dev -- --host 0.0.0.0
npm run build
npm run lint
npm run typecheck
npm run preview -- --host 0.0.0.0
```

`npm run build` typechecks, optimizes PNG masters into WebP/AVIF, and writes `dist/`. `npm run dev` refreshes those derivatives first when they are missing or older than the masters. Lint uses Oxlint, the linter shipped with this Vite scaffold.

## Routes

- `/` Home
- `/story` Rescue story
- `/buy` Ethereum buying guide
- `/community` Mission control
- Any other path shows a small not-found view with a Home link

## Assets

Extracted design source lives in `design-source/barstro/`. Reference specs stay there. Production files from `branding/`, `website/`, and `social/` are copied to `public/assets/` with the same relative paths. Runtime URLs go through `assetUrl()` and `import.meta.env.BASE_URL`.

Preview boards and the split `.rar` archive are local only. They are not published.

## Configure launch facts

Edit `src/config/project.ts`. `null` means unconfirmed. The site prints Pending, Contract address pending, Copy unavailable, Swap link pending, Chart link pending, X link pending, or Telegram link pending. It does not invent addresses, taxes, or links.

- Address copy turns on only when `launchConfirmed` is true and `contractAddress` is a `0x` plus 40 hex characters. That check is syntax only, not an on-chain verification.
- The swap button turns on only when launch is confirmed, the address is valid, and `officialSwapUrl` is an HTTPS URL. Checklist boxes never enable it.
- X and Telegram can be linked before launch when their HTTPS URLs are set.
- Chart and explorer links need their own HTTPS URLs.
- `siteUrl` is `https://barstro.space`. Canonical and social URLs use it. The default tags in `index.html` should stay in sync with that value. Client-side route titles do not create separate static social previews; the home share image remains the default.

Fredoka is bundled from `@fontsource/fredoka` (Latin 600 and 700). Its SIL Open Font License is in `licenses/Fredoka-OFL.txt`.

## Hosting

Production host is GitHub Pages for the custom domain `barstro.space`.

- Build command: `npm run build`
- Publish directory: `dist`
- `public/CNAME` contains `barstro.space`
- Vite copies `dist/index.html` to `dist/404.html` so deep links such as `/story` load the app
- `.github/workflows/pages.yml` deploys on every push to `main`

The workflow must be allowed to publish: in the GitHub repo, set Pages to deploy from GitHub Actions. HTTPS for `barstro.space` is configured on the custom domain in the repository settings.

These hosts are not configured in this repo:

- Netlify can publish `dist` with `/* /index.html 200` in `public/_redirects`.
- Vercel can rewrite `/story`, `/buy`, and `/community`, including an optional trailing slash, to `/index.html`.
- AWS Amplify can use `dist` as the artifact directory and needs console SPA rewrites for those routes. The build spec alone does not create them.
- A generic static host should serve real files first and fall back to `index.html` for application routes.

A local preview does not prove that a host refreshes deep links. GitHub Pages uses the `404.html` fallback above.
