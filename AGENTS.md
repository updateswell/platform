# Upwell platform

The hosted product around [Upwell](https://github.com/updateswell/upwell), an update orchestrator
for React Native and Expo. This repo serves `upwell.run` today; the API (`api.`/`cdn.upwell.run`)
and the dashboard (`app.upwell.run`) are planned. **Plans live in
[`docs/plans/`](docs/plans/README.md)**; read its README for the order and status before starting
that work.

## Repos

| Repo                          | What                                                                                                    |
| ----------------------------- | ------------------------------------------------------------------------------------------------------- |
| `updateswell/upwell`          | The library: SDK (`upwell`), `@upwell/core`, `@upwell/cli`, JSON Schemas, docs site (`docs.upwell.run`) |
| `updateswell/platform` (this) | The hosted product: landing (`upwell.run`), API, dashboard                                              |

**The contract with `upwell`:** this repo depends on it only through published npm packages
(`@upwell/core`) and public URLs (`https://docs.upwell.run/schemas/*`), never by path. Changing
the policy format happens in `upwell` first (core and schemas, released to npm), then the version
is bumped here. Locally the two repos sit side by side (`~/projects/native` is `upwell`).

## Layout

```
apps/landing/           upwell.run: plain Next.js (not Fumadocs), Tailwind 4
  app/page.tsx          the landing page
  app/card/[format]/    templates for the README banners, OG image and GitHub social preview
  components/home/      landing sections (dither logo, dither band, header, copy command)
  components/reactbits/ vendored React Bits Dither (its cleanup `loseContext()` removed: it broke Strict Mode)
  lib/site.ts           names and URLs; `docs('/x')` builds a docs.upwell.run link
  public/brand/         logos, banners, social images (served at upwell.run/brand/*)
  scripts/social.sh     renders app/card/* into public/brand/ with headless Chromium
  next.config.ts        /docs/* and llms*.txt → docs.upwell.run (308); /schemas/* rewritten to docs.upwell.run
packages/               shared code for the apps, added when a second app needs it
BRAND.md                design system: monochrome, Geist Mono, logo usage
docs/plans/             plans for this repo
```

pnpm workspaces (`apps/*`, `packages/*`), no Turborepo until build orchestration is a real need.

## Commands

```sh
pnpm install
pnpm dev             # landing at http://localhost:3000
pnpm typecheck       # every app
pnpm build           # every app
pnpm format          # Prettier (CI runs format:check)
pnpm --filter @upwell-platform/landing social   # re-render brand images (site running)
```

CI (`.github/workflows/ci.yml`) runs `format:check` always and each app's typecheck and build only
when that app (or shared files) changed.

## Deploys

- **Landing:** Vercel project `upwell-site` (`prj_UPdFWKWgnJBd4AgmPzmT1YHoqycR`, team
  `team_zO1CLcZzoGnq3TtDB05U2bMn`) deploys `main` with Root Directory `apps/landing` and the ignored
  build step `git diff --quiet HEAD^ HEAD -- . ../../pnpm-lock.yaml ../../packages`. Domains:
  `upwell.run`, `www.upwell.run` → apex.
- **Docs** are not here: Vercel project `upwell-docs` deploys `updateswell/upwell` (`apps/docs`) to
  `docs.upwell.run`, which also serves the JSON Schemas that `upwell.run/schemas/*` forwards to.
- DNS for `upwell.run` is on Cloudflare; record changes are manual in the Cloudflare dashboard.

## Conventions

- Match the surrounding code: naming, comment density (comments explain why, not what), idioms.
  Prettier config is in the repo.
- Commit messages: Conventional Commits with a scope where useful (`feat(landing): …`). Small
  changes go straight to `main` and are pushed; CI must stay green.
- Design: monochrome (black, white, greys) and Geist Mono, per [`BRAND.md`](BRAND.md). Edit the
  `app/card` templates and re-render instead of editing brand PNGs.

## Product rules

- Never build App Review detection or behave differently for reviewers. Never market Upwell as
  "Apple compliant".
- Self-hosting must keep working: the platform is optional; the SDK takes any URL or custom source.
- Policy and releases documents are public (apps download them); never put secrets in them.

## Next.js

`apps/landing/AGENTS.md` is written by `next dev`; its rules apply to every Next.js app here (with
pnpm, `next` resolves inside each app: read `apps/<app>/node_modules/next/dist/docs/`):

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
