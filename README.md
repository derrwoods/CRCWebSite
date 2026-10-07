# Cyber Reliant

A complete seven-page enterprise cybersecurity marketing website, built with Astro, TypeScript and locally bundled fonts. The home hero summarizes separate protected file fragments and key components feeding authorized reconstruction. The Technology page contains the detailed network file/key paths, Windows reconstruction responsibilities and a conceptual replacement-filter attacker path. A responsive mobile menu, four-step Fragment / Encrypt / Separate / Reconstruct walkthrough, application policy examples and a working local demo-request endpoint are included.

## Downloads and screenshots

On GitHub, use **Code → Download ZIP** to download this repository. A separate ready-to-extract source bundle is also available in [`downloads/cyber-reliant-site.zip`](downloads/cyber-reliant-site.zip); open that file and choose **Download raw file**.

- [Desktop home-page screenshot](docs/screenshots/home-desktop-fold.png)
- [Mobile home-page screenshot](docs/screenshots/home-mobile-fold.png)
- [Network file/key paths](docs/screenshots/network-paths-1440.png)
- [Windows attacker path](docs/screenshots/attacker-path-1440.png)
- [All page screenshots](docs/screenshots)

## Run locally

Use Node.js 24 (see `.nvmrc`). From this project directory:

```sh
npm ci
npm run dev
```

Open the development address printed by Astro. The default port is 4321. For a production build:

```sh
npm run build
npm run start
```

`build` runs the Astro/TypeScript check before producing the Node server. `start` serves the compiled website on port 4321. Stop your running development server before starting production on the same port. No credentials, remote fonts, external database or API services are needed.

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

## Demo requests

The form validates required fields in the browser and on the server. Successful submissions are appended to `.data/demo-requests.jsonl` with a reference and timestamp. This directory is ignored by Git. The optional runtime variable `DEMO_DATA_DIR` changes the storage directory. Requests remain local: **no email or CRM transmission is configured**, and the UI explicitly explains this before and after submission. Use sample data when testing. Tests append sample requests with `test@example.com`.

Same-origin form protection remains enabled. `astro.config.mjs` explicitly permits localhost and 127.0.0.1 for local validation. Before deployment, add the exact production hostname to `security.allowedDomains` and rebuild. Configure production contact routing, a durable data destination, access and retention controls, and a company-approved privacy notice before collecting live leads. The in-memory per-address throttle is for this local single-process evaluation, not a distributed anti-abuse service.

## Verification

```sh
npm run build
npm test
```

The tests automatically start the compiled server when it is not already running. To validate a fresh server on another port, use `CI=true TEST_PORT=4322 npm test`. They check all seven pages at four viewport widths; run axe accessibility checks; follow all internal links and fragment targets; exercise navigation, keyboard behavior, reduced motion, diagram interactions and real form persistence; reject invalid and foreign-origin submissions; check the custom 404; and capture desktop/mobile screenshots.

On this cloud machine tests use `/usr/bin/chromium`. On another machine run `npx playwright install chromium`, or set `PLAYWRIGHT_CHROMIUM_EXECUTABLE` to a compatible browser executable. Install Linux system dependencies if requested by Playwright.

## Research and content

- `docs/STRATEGY.md` — Buyer, problem, differentiation, evidence, objections, conversion plan and page architecture established before implementation.
- `docs/RESEARCH.md` — Retrieved competitor/NIST sources, claim ledger and research access limitations.
- `docs/VALIDATION.md` — Final checks, visual review and limitations.

Product-specific statements are based on the project owner's technical brief. The upcoming network version is explicitly distinguished from the described Windows implementation. The site does not invent customers, benchmark numbers, certifications, company history or release dates. The geometric logo is a proposed design, not a verified official asset. Cyber Reliant's public website returned HTTP 503 during research; its existing claims and brand assets remain unverified.

## Cloud setup

If the cloud machine cannot write the default npm cache, use:

```sh
npm ci --cache /workspace/.npm-cache
```

Astro telemetry is disabled in the commands so they do not require writing a home-directory configuration. Use the existing isolated checkout at `/workspace/CRCWebSite`; no extra Git worktree is necessary. Runtime processes do not survive environment snapshots, so restart the server when needed. No secret values belong in the source or saved setup instructions.
