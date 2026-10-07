# Vercel deployment validation

Updated 7 October 2026. This is a deployment-only migration of the approved prototype.

## Changes

- Replaced `@astrojs/node` with official `@astrojs/vercel` 8.2.11, compatible with the existing Astro 5.18.2 installation. Kept `output: 'server'` and every page/API route.
- Removed the standalone Node start command. Pinned Node.js 22 in `.nvmrc` and package engines to match the adapter's supported Vercel runtime. The initial Node 24 build warned that the adapter would fall back to Node 22; rebuilding under Node 22 resolved that warning.
- Generated Vercel Build Output API v3 configuration, static assets and `_render` function with `nodejs22.x` runtime. The generated route table includes all seven pages, `/api/demo`, the no-JavaScript confirmation and the 404 fallback.
- Derived trusted deployment hostnames from Vercel's automatic system variables. Same-origin protection remains enabled. No credentials, custom environment variables or third-party services were added.
- Removed JSONL writes. The demo API validates sample details in memory and returns `saved: false`, `delivery: 'evaluation-only'`. Visible form and confirmation notices explain that no request is saved or sent. Existing ignored local records are not deployed.

## Results

- Frozen `npm ci` installation passed with the updated lockfile. A fresh build without the hostname fixture also passed; development startup and the compiled function’s default-host API path were smoke-tested successfully.

- `npm run build` under Node 22.23.3 passed: zero Astro/TypeScript errors, warnings or hints; Vercel build completed successfully.
- Full production-artifact Playwright suite: **23 passed, 0 failed, 0 skipped**, 58.8 seconds. Command: `VERCEL_URL=cyber-reliant-validation.vercel.app CI=true TEST_PORT=4335 npm test`, following a build with the same fixture hostname.
- Tests load the actual compiled Vercel function using a local test-only HTTP harness and generated static assets/routes. They do not use the former Node adapter or the development server.
- All seven pages returned HTTP 200 at 1440, 768, 390 and 320 px, with no horizontal document overflow or browser errors.
- Axe WCAG 2 A/AA and 2.1 AA scans reported zero violations for all seven pages and expanded mobile technical disclosures. Automated scans are not a complete accessibility certification.
- Internal links and fragment targets, mobile menu/Escape/focus, skip link, reduced motion, the four-step walkthrough and application-policy controls passed.
- The real API accepted valid sample input without claiming persistence, rejected invalid and foreign-origin requests, and returned `Cache-Control: no-store`. A Vercel-style HTTPS host passed same-origin validation while a foreign origin returned 403.
- JavaScript and no-JavaScript form flows passed. Simulated server failure preserved input and displayed an error. The custom 404 returned 404 and its home link worked.
- Regenerated all 21 desktop/mobile screenshots. Pixel-by-pixel comparison against the approved Git revision found **19 identical images**. Only the two demo-form screenshots differ, reflecting the required evaluation notices. Their dimensions are unchanged: 1440 × 1649 and 390 × 2510. Visually reviewed both updated form screenshots; typography, spacing, input layout and footer placement are preserved.
- No styles, shared components, diagrams, layouts or product/marketing claims were changed.

## Deployment boundary

Local validation does not verify Vercel's actual CDN, cold starts, deployment protection or distributed rate limiting. No live Vercel deployment was performed. Import the repository using the README instructions, then check the deployed pages and sample form once the deployment is Ready.

This remains an evaluation prototype, not durable lead capture. Real lead collection requires a separately approved persistence/delivery design and privacy/retention policy. Existing product-evidence limitations remain documented in RESEARCH.md; this migration makes no new product claims.
