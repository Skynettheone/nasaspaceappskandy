# Deploying NASA Space Apps Kandy

## Build and check

Use Node 22 LTS (minimum 20.9).

```sh
npm ci
npm run lint
npm run typecheck
npm test
npm run build:web
```

Next.js exports the complete website to `out/`, with an `index.html` in every route directory and assets under `_next/static/`. No Node server, API routes, or server actions are needed in production. Browser form submissions use Firebase directly.

## Cloudflare Pages

- Build command: `npm run build:web`
- Output directory: `out`
- Root directory: the root of this repository
- Node version: `22`
- Framework preset: Next.js (Static HTML Export), or None with the above settings

The previous Expo output setting `dist` must be changed to `out`. Existing extensionless public URLs remain supported through directory index files. `public/_headers`, `robots.txt`, and `sitemap.xml` are included in the export.

Run `npm start` to inspect the exported build locally at http://127.0.0.1:3001. This preview server binds to loopback only.

## Firebase

The existing project identifiers and four Firestore collections are preserved. The collection rules are unchanged. A project owner must verify that the database exists and the intended rules are deployed before launch:

```sh
npm run deploy:rules
```

This command uses an authenticated Firebase CLI. Deploying the frontend does not deploy rules.

Optional abuse protection is wired through `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` (set in `.env.local` or the Cloudflare build environment). Register the site in Firebase App Check, configure allowed domains, supply the public reCAPTCHA v3 key, rebuild, then enable enforcement. This migration does not change project permissions, deploy rules, or enable enforcement remotely.

The tests use an injected writer; they do not write sample records to production. A live project-owner submission check is still needed to verify deployed rules and database availability. Organisers inspect submissions in their Firebase console. There is no automatic notification or confirmation-email service configured.

## Sources

- Next.js static export guide: https://nextjs.org/docs/app/guides/static-exports
- Firebase modular web setup: https://firebase.google.com/docs/web/setup
- App Check setup: https://firebase.google.com/docs/app-check/web/recaptcha-provider
