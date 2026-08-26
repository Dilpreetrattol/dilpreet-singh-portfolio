# Dilpreet Singh — Portfolio

Next.js (App Router) + TypeScript + Tailwind CSS portfolio. Static-export
friendly, no CMS/database/auth — all content lives in typed files under
`src/content/`.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Adding or editing a project

Edit `src/content/projects.ts` — it exports a single typed array. Each entry:

- `slug` — used for the URL (`/projects/<slug>`) if it has a `details` block.
- `tags` — one or more of `"Algorithms" | "ML / AI" | "Web" | "Embedded / IoT"`.
- `featured` — optional; featured projects sort first and render larger.
- `repoUrl` — omit and use `repoNote` instead if there's no repo yet.
- `team` — set `{ size: N }` for group projects to show a "Team of N" badge
  on the card and detail page.
- `details` — omit entirely for a GitHub-only card with no detail page.
  When present, fill in `problem`, `approach`, `challenges`, `outcome`, and
  optionally `contribution` — when set, it renders as a distinct "My
  contribution" section on the detail page (useful for group projects, to
  spell out what was individually owned).

The shape is defined in `src/content/types.ts` — TypeScript will flag a
missing field at build time.

To change contact info, the resume link, or GitHub/LinkedIn URLs, edit
`src/content/site.ts`. Skills live in `src/content/skills.ts`.

## Deploying to Vercel

1. Push this repo to GitHub.
2. In Vercel, "New Project" → import the repo. No environment variables or
   build configuration are needed — the defaults work.
3. After the first deploy, update `siteUrl` in `src/content/site.ts` to the
   real deployed domain (used for Open Graph metadata), then redeploy.

See `TODO.md` for what's still outstanding — currently just `siteUrl`,
set once the production domain is known.
