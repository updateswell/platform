# 03 · `platform` repo and the landing page

> **Done 2026-10-22**, in one session. Moved here from `upwell/docs/plans/` at the end.

**Goal:** a new public monorepo, `updateswell/platform`, exists and serves `upwell.run`. The
landing page, social images and brand assets move there. `upwell`'s docs app becomes docs-only,
on `docs.upwell.run`. Later plans add `apps/api` (04) and `apps/dashboard` (09) to the same repo.

**Why now:** the API (plan 04) needs the repo, and the landing is the smallest thing to move into
it first, which sets up the repo, CI and deploys before any backend work.

## What moves

Today one Fumadocs app serves both sites, switched by `NEXT_PUBLIC_UPWELL_SITE` (`site` or
`docs`) with path rewriting in `proxy.ts`. After plan 01 it lives in `upwell/apps/docs`.

| Moves to `platform/apps/landing`                             | Stays in `upwell/apps/docs`                                       |
| ------------------------------------------------------------ | ----------------------------------------------------------------- |
| `app/(home)/` (landing page and layout)                      | `app/docs/`, `app/api/search/`, `app/og/docs/`, `app/llms*`       |
| `components/home/*`, `components/reactbits/Dither.tsx`       | `components/mdx*`, `lib/source.ts`, content                       |
| `app/card/[format]/` and `scripts/social.sh` (social images) | its own OG image route                                            |
| `assets/brand/*` (repo root of `upwell`) → `public/brand/`   | `public/logo*.svg`, icons (copy what the landing needs)           |
| `assets/brand/README.md` → `BRAND.md`                        | —                                                                 |
| `/docs/*` → `docs.upwell.run/*` redirect                     | the old `/docs/x` → `/x` redirect on docs.upwell.run              |
| Serving `/schemas/*` on `upwell.run`                         | the schemas copy (now also served at `docs.upwell.run/schemas/*`) |

Vercel: `upwell-site` (`prj_UPdFWKWgnJBd4AgmPzmT1YHoqycR`, `upwell.run`) moves to the
`platform` repo with Root Directory `apps/landing`. `upwell-docs`
(`prj_uZKm3v65zyFUkNJhXzJLostqih0G`, `docs.upwell.run`) stays on `upwell`, Root Directory
`apps/docs`.

## Decisions

- **No history for the landing.** It's a few files; copy them with a commit message that names
  the source commit in `upwell`. (Use `git filter-repo` only if history turns out to matter.)
- **`upwell.run/schemas/*` keeps working** for `$schema` URLs in users' files: the landing app
  forwards it to `https://docs.upwell.run/schemas/*` with a Next.js rewrite (transparent, no
  redirect), so the schemas have one source: `upwell`.
- **The landing is plain Next.js**, not Fumadocs: it's a marketing page. It keeps the design
  system (monochrome, Geist Mono, dither/grid style).
- **pnpm workspaces** in `platform`; Turborepo only if build orchestration becomes a
  real need.
- **Plans for `platform`** (03, 04, 07, 08, 09) live in `platform/docs/plans/`; the README in
  `upwell/docs/plans/` keeps a pointer.
- **MIT license** for `platform`, like the SDK (decided 2026-10-22).
- **No docs search on the landing.** Fumadocs' search dialog needs `/api/search` from the docs
  app; the header keeps the docs, GitHub, npm and theme buttons. Everything else is unchanged.
- **Ignored build step** for `upwell-site` is `git diff --quiet HEAD^ HEAD -- .
../../pnpm-lock.yaml ../../packages`, so dependency and shared-package changes also deploy.
- `/llms.txt` and `/llms-full.txt` on `upwell.run` redirect to the docs too (they were served
  there before, from the shared app).

## Session 1 · Create the repo

- [x] Create `updateswell/platform` (public). Root: `package.json` (private, pnpm workspaces
      `apps/*`, `packages/*`), `.gitignore`, `LICENSE` (decide: MIT like the SDK, or something
      else for the hosted product), `README.md` (what the platform is, apps, links).
- [x] `apps/landing`: a Next.js app with the same Next.js/React/Tailwind versions as
      `upwell/apps/docs`, Geist Mono, the global styles and tokens the landing uses.
- [x] CI: install, typecheck, build per app (path filters so apps build only when they change).
- [x] `AGENTS.md` (repo map, apps, commands, deploys, the contract with `upwell`: only npm
      packages and public URLs) and `CLAUDE.md` (`@AGENTS.md`). Copy the Next.js agent block that
      `next dev` writes.

## Session 2 · Move the landing

- [x] Copy the landing files listed above into `apps/landing`, and `assets/brand/*` into
      `public/brand/` with `BRAND.md` at the repo root.
- [x] Replace the `siteMode` logic with plain routes: `/` is the landing; `next.config` adds a
      redirect `/docs/:path*` → `https://docs.upwell.run/:path*` (308) and a rewrite
      `/schemas/:file` → `https://docs.upwell.run/schemas/:file`.
- [x] Links from the landing to docs become absolute (`https://docs.upwell.run/...`).
- [x] `scripts/social.sh` writes into `public/brand/`; regenerate once to check it works.
- [x] Metadata: title, description, OG image (`/brand/og.png` or the existing `public/og.png`),
      icons.
- [x] Locally: the landing renders like production, `/schemas/policy.schema.json` returns the
      schema, `/docs/quick-start` redirects.

## Session 3 · Switch `upwell.run`

- [x] Vercel `upwell-site`: connect `updateswell/platform`, Root Directory `apps/landing`,
      remove `NEXT_PUBLIC_UPWELL_SITE`, ignored build step `git diff --quiet HEAD^ HEAD -- .`.
      Deploy.
- [x] Check: `upwell.run`, `www.upwell.run` → apex, `upwell.run/brand/banner-dark.png`,
      `upwell.run/schemas/policy.schema.json` (content and `Content-Type: application/json`),
      `upwell.run/docs/quick-start` → `docs.upwell.run/quick-start`, OG previews (e.g. with a
      link preview tool).

## Session 4 · Make `upwell/apps/docs` docs-only

- [x] Remove the landing files, `siteMode`, the `site` branch in `proxy.ts` and `docsHref()`'s
      cross-site case. Docs are served at the root; keep the `/docs/x` → `/x` redirect for old
      links. Content links may stay authored as `/docs/...` (mapped by `docsHref`) to avoid
      touching every page; simplifying that is optional.
- [x] `public/schemas/*` keeps being copied at build (served at `docs.upwell.run/schemas/*`, which
      the landing forwards to). Make sure the docs proxy doesn't rewrite `/schemas/*`.
- [x] Remove `assets/brand/` from `upwell` and change the SDK README banners to
      `https://upwell.run/brand/banner-{dark,light}.png` (patch changeset: the README is
      published). Check the README on GitHub, and on npm after the next release.
- [x] Vercel `upwell-docs`: remove `NEXT_PUBLIC_UPWELL_SITE`. Deploy and check
      `docs.upwell.run`, a page, search, the changelog, OG images, `llms.txt`,
      `docs.upwell.run/schemas/policy.schema.json`.
- [x] Update `AGENTS.md` in both repos and the Claude memory notes `upwell-docs-site` and
      `upwell-design-system` (brand assets and `BRAND.md` now live in `platform`).
- [x] Move the `platform` plans (this file from session 3 on, 04, 07, 08, 09) to
      `platform/docs/plans/`, leaving a pointer in `upwell/docs/plans/README.md`.

## Notes from the session

- The Vercel CLI's project changes (`vercel api … -X PATCH/DELETE`, `vercel git connect`) are
  blocked for the agent in auto mode; the user ran them (`DELETE` needs
  `--dangerously-skip-permissions` in non-interactive mode). The first production deploy from
  `platform` was a CLI deploy (`vercel deploy --prod` from the repo root); later pushes deploy
  through the Git integration.
- The npm README check waits for the next `upwell` release (the changeset is in).

## Definition of done

- `upwell.run` deploys from `platform/apps/landing`; `docs.upwell.run` from `upwell/apps/docs`;
  neither looks different to visitors.
- `upwell.run/schemas/*` and `upwell.run/brand/*` keep working.
- `upwell` contains no landing or brand code.

## Open questions

None left: the license is MIT (see decisions).
