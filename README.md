# NASA Space Apps Kandy

This repository is the Next.js web application for NASA Space Apps Kandy. The previous Expo interface has been replaced by the approved launch hero, dashed frame, asymmetric card system, and footer composition.

## Local development

```sh
npm ci
npm run dev -- --port 3001
```

## Verify and preview the static build

```sh
npm run lint
npm run typecheck
npm test
npm run build:web
npm start
```

`npm start` serves `out/` at http://127.0.0.1:3001. `PORT` can override the port. Cloudflare Pages publishes `out/`; it does not run this preview server.

## Structure

- `src/app/` — Next.js App Router pages and metadata. All ten previous public routes remain; `/privacy` has been added.
- `src/components/` — shared navigation, footer, hero, page sections and accessible application forms.
- `src/styles/globals.css` — the shared visual system and responsive rules.
- `src/content/site.ts` — Kandy content, navigation, exploration themes, and form options.
- `src/lib/` — validation, form payload contracts, submission state, and Firebase integration.
- `src/i18n/` — existing English, Sinhala and Tamil interface dictionaries.
- `public/` — favicon set, web manifest, images, logos and static hosting files.
- `scripts/serve.mjs` — local preview of the production export.
- `firestore.rules` — existing create-only collection rules, preserved during migration.
- `tests/` — payload validation and submission outcome tests, with no production writes.
- `docs/DEPLOY.md` — deployment instructions.

## Backend

The website writes through the existing Firebase Lite SDK to `nasaspaceappskandy`:

| Page           | Collection                                     |
| -------------- | ---------------------------------------------- |
| `/register`    | `registrations`                                |
| `/join`        | `volunteers` (both volunteer and mentor roles) |
| `/ambassadors` | `ambassadors`                                  |
| `/contact`     | `messages`                                     |

Server timestamps, `source`, `appVersion`, and `status: new` remain in every record. Form success is only shown after a confirmed write; a timeout is reported as unconfirmed, not as a definite failure. Firebase is loaded when a form is submitted. The website does not read private submissions or pretend to send emails.

Optional App Check: set `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` in `.env.local` locally or the hosting build environment. Register the domain in Firebase App Check before enabling enforcement. No admin credentials belong in browser environment variables. Analytics is not enabled by this frontend.

## Content

The 2026 dates/theme, hybrid attendance and Kandy contact address come from the [official Kandy listing](https://www.spaceappschallenge.org/2026/local-events/kandy/). The hero timer counts down to November 14 at midnight in `Asia/Colombo`; it is not a venue-opening countdown. Event settings live in `src/content/event.ts`.

The world map uses a complete snapshot of the official 2026 location directory in `src/content/space-apps-locations.json`. Refresh it with `npm run locations:sync` (network access required), then rebuild. The script checks pagination, record counts and Kandy coordinates before replacing the snapshot. The Universal Event has no fixed physical location and is included in the event count without an invented pin. The map is a global-scale illustration, with Kandy as the only featured local event. Visitors do not need a map API key or a live third-party request to view the map.

Unconfirmed venue, prize amounts, speakers, committee names, sponsor logos and news from the old mockup have been replaced by honest pending states. The homepage and challenges page use the 14 official 2026 challenge summaries. The awards page identifies the latest published 2025 categories explicitly; no 2026 awards or local prize amounts are implied. Local applications and global NASA registration are clearly distinguished.

This is the workspace's only application. Run every command from this repository; no parent application, shared dependency folder, or external asset directory is required. The retired prototype and original migration backup are retained locally in ignored `.archive/` ZIP files, outside the build and deployment output.

## Brand and official assets

Overpass Variable and Fira Code Variable are self-hosted through Fontsource. Phosphor React icons use direct SSR/CSR imports. The fixed dark theme uses the 2026 Space Apps Deep Blue palette, darker blue base surfaces, smooth Electric Blue gradients, Neon Yellow (`#EAFE07`) calls to action, and Rocket Red location markers and map callouts. There is no theme toggle or saved theme preference.

`src/content/official-program.json` records the source URLs for every official challenge photo and award illustration, with optimized local WebP assets under `public/images/official/`. Descriptions are concise summaries, and each challenge links to its governing official brief. Awards are sourced from the currently linked 2025 edition. Review these snapshots against the official site before announcing new rules.

Official news is a saved snapshot from the public NASA Space Apps blog feed. Run `npm run news:sync` on Windows to refresh its six most recent stories, then `npm run build:web`. Article publication dates are retained; older stories are labelled as archive content. Images remain hosted by the official source.
