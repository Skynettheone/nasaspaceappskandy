# NASA Space Apps Kandy development

This repository is now a Next.js web application. The previous Expo UI has been replaced. Preserve the Firebase collection contracts and do not write test submissions to the production project.

- Read the installed Next.js guides in `node_modules/next/dist/docs/` before changing framework code.
- Pages: `src/app/`. Shared UI: `src/components/`. Content: `src/content/`. Form contracts and Firebase: `src/lib/`.
- Keep the approved dark space design, responsive launch hero, dashed structural rails, and original footer composition.
- Do not invent event dates, sponsors, prizes, people, or attendance figures.
- Run `npm run lint`, `npm run typecheck`, `npm test`, and `npm run build:web` before finishing changes.
- Keep the static export compatible with Cloudflare Pages (`out/`).

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
