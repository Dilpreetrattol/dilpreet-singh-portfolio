# TODO before shipping

Content placeholders that still need real values. Search the codebase for
`TODO` to find these in context.

## `src/content/site.ts`
- [ ] `siteUrl` — set to the final production domain (Vercel URL or custom domain) once deployed; used for OG tags and metadata.

## `src/content/projects.ts`
- [x] `esp32-air-quality` — `repoUrl` confirmed: `https://github.com/Dilpreetrattol/esp32-air-quality-monitor`.

## `public/` and icons
- [x] `public/resume/dilpreet-singh-resume.pdf` — real resume in place.
- [x] `public/og.png` — real Open Graph image in place (2400×1260).
- [x] Favicon — "Blueprint" mark (rounded-square, azure "D" on slate) picked from the supplied favicon design set and rasterized to `public/favicon.ico` (16/32/48 multi-size), `src/app/icon.png` (256, App Router convention), and `src/app/apple-icon.png` (180).
