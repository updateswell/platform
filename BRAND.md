# Upwell design system

Minimal and monochrome: toned-down black, white and warm greys, with one typeface. Color never carries meaning on
its own. Hierarchy comes from weight, size, borders and texture (grid lines, hatching, dither).

## Logo

A pixel-art arrow rising out of a stack of layers: updates rising up from the binary.

The files live in [`apps/landing/public/brand/`](apps/landing/public/brand) and are served at
`https://upwell.run/brand/<file>` (the SDK README's banners load from there).

| File                                      | Use                                                                           |
| ----------------------------------------- | ----------------------------------------------------------------------------- |
| `logo.svg`                                | Master. `fill="currentColor"`, so it takes the surrounding text color         |
| `logo-black.svg` / `logo-black.png`       | On light backgrounds (transparent)                                            |
| `logo-white.svg` / `logo-white.png`       | On dark backgrounds (transparent)                                             |
| `logo-on-white.png` / `logo-on-black.png` | 1024×1024 squares with a background: avatars, app icons, social cards         |
| `favicon.svg`                             | Square favicon that switches between black and white with the OS color scheme |
| `banner-light.png` / `banner-dark.png`    | README banner (1280×400 @2x), for GitHub's light and dark themes              |
| `og.png`                                  | Link preview for upwell.run (1200×630)                                        |
| `social-preview.png`                      | GitHub repository social preview (1280×640)                                   |

The banners and social images are rendered from `apps/landing/app/card/[format]` with
`pnpm social` in `apps/landing/` (site running), so edit the template and re-render rather than
editing the PNGs.

- The mark is pixel art: always scale it, never redraw or smooth it. Below 16 px, use the square
  variant instead of the bare mark.
- Leave clear space around the mark of at least the arrow head's width.
- Only black on light or white on dark. No colors, gradients, outlines or shadows.
- The wordmark is "Upwell" set in Geist Mono, medium weight, next to the mark.

The SVGs are traced from the original artwork (`upwell-logo.png`) with sharp corners, so they stay
crisp at any size.

## Color

Black and white, toned down: a warm off-white and a warm off-black instead of pure `#FFF` and
`#000`, with greys that lean the same way. Still monochrome, with no accent color. Light and dark
themes mirror each other.

| Token              | Light     | Dark      | Use                                                                         |
| ------------------ | --------- | --------- | --------------------------------------------------------------------------- |
| `background`       | `#F7F5F2` | `#151412` | Page                                                                        |
| `surface`          | `#FCFBF9` | `#1B1A18` | Cards, code blocks, popovers                                                |
| `foreground`       | `#1D1B19` | `#EFEDEA` | Text, primary buttons, the logo                                             |
| `muted-foreground` | `#736F69` | `#A49F98` | Secondary text                                                              |
| `border`           | `#E2DFDA` | `#302D2A` | Hairlines, grid lines                                                       |
| `accent`           | `#EDEAE6` | `#262421` | Hover, subtle fills                                                         |
| `primary`          | `#1D1B19` | `#EFEDEA` | Same as foreground: buttons are solid off-black (light) or off-white (dark) |

Neutral scale for anything else (it replaces Tailwind's `neutral-*`): `50 #FBFAF8` · `100 #F6F4F1` ·
`200 #E7E4DF` · `300 #D7D3CD` · `400 #A5A19A` · `500 #77736C` · `600 #55524D` · `700 #423F3B` ·
`800 #282623` · `900 #191816` · `950 #0F0E0C`.

## Type

**[Geist Mono](https://fonts.google.com/specimen/Geist+Mono)** for everything: headings, body, code, UI.

| Role           | Size / weight                   | Tracking |
| -------------- | ------------------------------- | -------- |
| Display        | 48–64 px / 500                  | −0.04 em |
| Heading        | 24–32 px / 500                  | −0.02 em |
| Body           | 14–16 px / 400, line height 1.6 | 0        |
| Small / labels | 12–13 px / 400, often uppercase | +0.04 em |

## Texture and shape

- **Grid frame:** content sits in a centered column bounded by 1 px vertical lines, sections are
  separated by horizontal lines, and small `+` marks sit where they cross.
- **Hatching:** 45° hairline stripes fill bands between dark sections.
- **Dither:** imagery is ordered-dithered pixels (Bayer), echoing the pixel-art logo. Shadows on
  cards are dotted, not blurred.
- **Buttons:** pills (fully rounded). Primary is solid foreground; secondary is outlined.
- **Corners:** cards and panels are square or nearly square (0–4 px). Only buttons and chips are round.
- **Motion:** slow and sparse (pixels drifting upward). Always respect `prefers-reduced-motion`.

## Where it's used

- upwell.run (`apps/landing` here): tokens in `app/global.css`, font in `app/layout.tsx`, logo in `public/`
- docs.upwell.run ([`updateswell/upwell`](https://github.com/updateswell/upwell), `apps/docs`): the same tokens as Fumadocs colors
- README banner, link previews, GitHub social preview
- `upwell` example app icon and splash (`example/assets/`)
- `upwell` UI kit defaults (`packages/upwell/src/ui/theme.tsx`): monochrome light and dark themes
