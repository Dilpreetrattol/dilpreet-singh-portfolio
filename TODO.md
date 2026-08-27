# TODO before shipping

All content placeholders from the original build are resolved.

## `src/content/site.ts`
- [x] `siteUrl` — set to `https://dilpreet-singh-portfolio.vercel.app`. If a
  custom domain is added later, update this and redeploy (it feeds Open
  Graph tags and metadata).

## `src/content/projects.ts`
- [x] `esp32-air-quality` — `repoUrl` confirmed: `https://github.com/Dilpreetrattol/esp32-air-quality-monitor`.
- [ ] `rfid-security` — `repoUrl` is assumed to match the slug (`https://github.com/Dilpreetrattol/rfid-security`); confirm the exact name/casing once it's pushed.

## `public/` and icons
- [x] `public/resume/dilpreet-singh-resume.pdf` — real resume in place.
- [x] `public/og.png` — real Open Graph image in place (2400×1260).
- [x] Favicon — replaced with the amber-tile "D" monogram: `src/app/icon.svg` (source of truth), `src/app/apple-icon.png` (180, 20%-rounded corners), and `public/favicon.ico` (16/32/48 multi-size, sharp square matching `icon.svg`).

## Deployed
- [x] Pushed to `https://github.com/Dilpreetrattol/dilpreet-singh-portfolio`.
- [x] Live at `https://dilpreet-singh-portfolio.vercel.app`.
