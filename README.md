# Cyber Reliant

A complete seven-page enterprise cybersecurity marketing website, built with Astro, TypeScript and locally bundled fonts. The home page leads with Zero Trust, quantum security and software deployment, followed by attributed research and clearly provisional founder-supplied history. The home hero preserves the separate protected file fragments and key components feeding authorized reconstruction. The Technology page contains the detailed network file/key paths, Windows reconstruction responsibilities and a conceptual replacement-filter attacker path. A responsive mobile menu, four-step Fragment / Encrypt / Separate / Reconstruct walkthrough, application policy examples and a working evaluation-only demo-request endpoint are included.

## Downloads and screenshots

On GitHub, use **Code → Download ZIP** to download this repository. A separate ready-to-extract source bundle is also available in [`downloads/cyber-reliant-site.zip`](downloads/cyber-reliant-site.zip); open that file and choose **Download raw file**.

- [Desktop home-page screenshot](docs/screenshots/home-desktop-fold.png)
- [Mobile home-page screenshot](docs/screenshots/home-mobile-fold.png)
- [Network file/key paths](docs/screenshots/network-paths-1440.png)
- [Windows attacker path](docs/screenshots/attacker-path-1440.png)
- [All page screenshots](docs/screenshots)

## Run locally

Use Node.js 22 (see `.nvmrc`). From this project directory:

```sh
npm ci
npm run dev
```

Open the development address printed by Astro. The default port is 4321. For a production build:

```sh
npm run build
```

`build` runs the Astro/TypeScript check and produces Vercel Build Output API artifacts in `.vercel/output/`. The official `@astrojs/vercel` 8 adapter supports the existing Astro 5 project; `output: server` preserves on-demand rendering. Node.js 22 matches the adapter’s supported Vercel runtime. The old standalone Node adapter and `start` script have been removed. Use `npm run dev` for local editing. No credentials, remote fonts, external database or API services are needed.

The cloud onboarding window does not provide an interactive localhost preview. Screenshots are in `docs/screenshots/`. To inspect interactively on another machine, copy/download the source and run the commands above.

## Routes

- `/` — Home
- `/how-it-works` — Interactive protection sequence and application access example
- `/enterprise` — Commercial use cases, exposure scenarios and evaluation plan
- `/government` — Mission requirements and technical assurance
- `/technology` — Windows filter architecture and upcoming network/HSM design
- `/about` — Purpose and design principles
- `/request-demo` — Demo request form

Additional routes provide a non-JavaScript submission confirmation and a custom 404 page.

## Deploy with the Vercel website

1. Sign in at [Vercel](https://vercel.com/new) with GitHub. Choose **Add New → Project** if you are on the dashboard.
2. Find **derrwoods/CRCWebSite** and click **Import**. If it is missing, use **Adjust GitHub App Permissions** to give Vercel access to this repository, then return to Import.
3. Deploy the **main** branch. Keep these settings:

   | Setting | Choice |
   | --- | --- |
   | Framework Preset | **Astro** |
   | Root Directory | Repository root (`./`); do not select `src` or `downloads` |
   | Build Command | `npm run build` (the detected default) |
   | Output Directory | Leave the automatic/default setting; **Override off**. Do not enter `.vercel/output` or `dist/server`. If the UI shows `dist` as its Astro default, leave it unchanged; the adapter supplies Build Output API artifacts. |
   | Install Command | Automatic/default (`npm install`), or `npm ci` if explicitly overriding |
   | Node.js Version | **22.x** (also declared in `package.json`) |
   | Environment Variables | **None to add**; no credentials or secrets required |

4. Click **Deploy**. When the status is **Ready**, click **Visit** to open your website. Vercel supplies an HTTPS address ending in `.vercel.app`.
5. Open all seven menu pages and try the demo form using sample details. It should report that validation passed and **no request was saved or sent**. Later pushes to `main` deploy automatically.

Vercel’s automatic system environment variables must stay enabled (the default). The configuration uses `VERCEL_URL`, `VERCEL_BRANCH_URL` and `VERCEL_PROJECT_PRODUCTION_URL` to recognize the deployment, branch and primary production hostnames while keeping Astro’s origin checks enabled. **Do not create these variables yourself.** If disabled in an existing project, enable **Automatically expose System Environment Variables** in project settings and redeploy. No wildcard hostname trust or extra `vercel.json` is required. If you later add a custom domain, set it as the production domain and redeploy; additional aliases must be explicitly included in `security.allowedDomains` before form submissions through those aliases can work.

This repository is prepared for deployment; local validation does not create a Vercel project or verify the live Vercel infrastructure. After deploying, the quick browser check in step 5 is still needed.

## Demo requests

`POST /api/demo` remains server-rendered and validates fields, consent, the honeypot and request origin. A valid JSON submission returns HTTP 200 with `{ "validated": true, "saved": false, "delivery": "evaluation-only" }` and `Cache-Control: no-store`. Without JavaScript it redirects to `/request-received`, which gives the same evaluation-only explanation. Errors preserve the user’s form entries.

**This prototype does not capture leads.** It processes sample details in memory and does not write, log or forward the submitted form data. The local JSONL persistence and `DEMO_DATA_DIR` setting were removed; Vercel’s serverless filesystem is not durable storage. Existing ignored local `.data` files, if any, are neither read nor deployed. No email, CRM, database or analytics service was added. The in-memory throttle is only a per-instance evaluation safeguard, not distributed abuse protection. Durable lead storage, contact routing, retention controls and a company-approved privacy notice are future work before collecting real requests.

## Verification

```sh
npm run build
CI=true TEST_PORT=4335 npm test
```

The full Playwright suite starts a **test-only harness** that loads the compiled Vercel function and serves its generated static assets using the generated routing configuration. It does not use the removed Node adapter or substitute the Astro development server. It does not emulate Vercel’s CDN, deployment protection, cold starts or distributed limits.

Tests cover all seven pages at 1440, 768, 390 and 320 px; axe accessibility; internal links and fragments; navigation, keyboard behavior, reduced motion, diagrams, evaluation-form validation, invalid/foreign-origin submissions, no-JavaScript submission, error handling and the custom 404. Desktop/mobile screenshots are regenerated in `docs/screenshots`.

To additionally exercise a Vercel-style HTTPS hostname supplied at build time, use the same harmless fixture value for both commands:

```sh
VERCEL_URL=cyber-reliant-validation.vercel.app npm run build
VERCEL_URL=cyber-reliant-validation.vercel.app CI=true TEST_PORT=4335 npm test
```

This fixture does not create a real deployment or require a secret. On this cloud machine tests use `/usr/bin/chromium`. Elsewhere run `npx playwright install chromium`, or set `PLAYWRIGHT_CHROMIUM_EXECUTABLE` to a compatible browser executable. Install Linux system dependencies if requested by Playwright.

Official guidance checked for this migration: [Astro Vercel deployment](https://docs.astro.build/en/guides/deploy/vercel/) and [official adapter](https://docs.astro.build/en/guides/integrations-guide/vercel/), retrieved from the official [withastro/docs source](https://github.com/withastro/docs/tree/main/src/content/docs/en/guides) because the documentation website was blocked by this environment’s network policy. Adapter 8.2.11 declares Astro `^5.0.0` compatibility; no unrelated Astro major-version migration was made.

## Research and content

- `docs/STRATEGY.md` — Buyer, problem, differentiation, evidence, objections, conversion plan and page architecture established before implementation.
- `docs/RESEARCH.md` — Retrieved competitor/NIST sources, claim ledger and research access limitations.
- `docs/VALIDATION.md` — Final checks, visual review and limitations.

Product-specific statements are based on the project owner's technical brief. The commercial revision also cites the user-supplied summary of FDD TCIL’s December 2022 AIA research; the source website was blocked by the environment proxy, so its full text has not been independently checked here. Founder-supplied CSfC, combat-deployment, breach-history, patent-pending TRNG and Lloyd’s-related statements are visibly provisional and require verification before public launch. No institutional endorsement is implied. The upcoming network version is explicitly distinguished from the described Windows implementation. The site does not invent customers, benchmark numbers or release dates; provisional history and status claims are attributed to the founder-supplied brief. The geometric logo is a proposed design, not a verified official asset. Cyber Reliant's public website returned HTTP 503 during research; its existing claims and brand assets remain unverified.

## Cloud setup

If the cloud machine cannot write the default npm cache, use:

```sh
npm ci --cache /workspace/.npm-cache
```

Astro telemetry is disabled in the commands so they do not require writing a home-directory configuration. Use the existing isolated checkout at `/workspace/CRCWebSite`; no extra Git worktree is necessary. Runtime processes do not survive environment snapshots, so restart the server when needed. No secret values belong in the source or saved setup instructions.
