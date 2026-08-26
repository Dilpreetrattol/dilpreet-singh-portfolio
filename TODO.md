# TODO before shipping

All content placeholders from the original build are resolved.

## `src/content/site.ts`
- [x] `siteUrl` — set to `https://dilpreet-singh-portfolio.vercel.app`. If a
  custom domain is added later, update this and redeploy (it feeds Open
  Graph tags and metadata).

## `src/content/projects.ts`
- [x] `esp32-air-quality` — `repoUrl` confirmed: `https://github.com/Dilpreetrattol/esp32-air-quality-monitor`.

## `public/` and icons
- [x] `public/resume/dilpreet-singh-resume.pdf` — real resume in place.
- [x] `public/og.png` — real Open Graph image in place (2400×1260).
- [x] Favicon — "Blueprint" mark (rounded-square, azure "D" on slate) picked from the supplied favicon design set and rasterized to `public/favicon.ico` (16/32/48 multi-size), `src/app/icon.png` (256, App Router convention), and `src/app/apple-icon.png` (180).

## Deployed
- [x] Pushed to `https://github.com/Dilpreetrattol/dilpreet-singh-portfolio`.
- [x] Live at `https://dilpreet-singh-portfolio.vercel.app`.
