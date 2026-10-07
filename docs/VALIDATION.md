# Partner-presentation validation

Updated 7 October 2026. Presentation cleanup is complete; it does not resolve the underlying operational-claim diligence. The previous validation report is retained below as historical documentation.

## Current pass

- Production build passed with zero Astro errors, warnings or hints.
- Full Playwright suite: **26 passed, 0 failed, 0 skipped in 39.8 seconds**, using Node 22 and the compiled Vercel function. Accessibility scans passed on all seven pages and expanded technical/deployment disclosures.
- Desktop 1440 px, tablet 768 px and mobile 390/320 px passed without overflow or browser errors. Internal links, navigation, keyboard operation, reduced motion, walkthrough, API origin/validation, no-JavaScript form review and custom 404 remain functional.
- All government contact CTAs use Request a briefing and retain `interest=Government`, including shared navigation/footer and the government form entry point. This was checked at 1440, 768 and 390 px. Enterprise retains Request a demo.
- Every rendered HTML page, including confirmation and 404, has `noindex, nofollow` metadata. README identifies the exact shared-layout setting and removal steps. No authentication or crawl-blocking robots.txt rule was added.
- Automated body-text checks, including collapsed content, find none of the specified internal-process terms across the seven pages, government form variant, confirmation and 404.
- FDD callout and exact link remain. The destination returned HTTP 200 using browser-style request headers, and the executive summary was read. The full PDF on media.fdd.org remains proxy-blocked; see RESEARCH.md for the precise source boundary.
- Regenerated desktop/mobile screenshots; visually reviewed the shortened evidence cards, government briefing CTAs and the form. Preserved the hero, three pillars, quantum/deployment sections, typography, palette, responsive system and diagram components. Homepage copy was reduced rather than expanded.
- The form now offers Review details and accurately states that nothing is saved or sent. No service or credential was added, and no lead-delivery claim was introduced.
- Detailed source distinctions, evidence boundaries and outstanding records remain in RESEARCH.md, STRATEGY.md and this document. Prior reports below are historical, not a description of current visitor-facing labels.

## Outstanding diligence before official public launch

Company/founder-provided operational history remains unverified independently: CSfC listing scope/dates/status; combat-deployment records; protected Top Secret breach reporting scope and period; TRNG filing/status and technical evidence; Lloyd’s provider, relationship and coverage. Clean presentation is not proof of these claims. FDD research does not certify every product implementation or establish validation of the upcoming HSM network version. No institutional endorsement is established. No latency claim or benchmark was added.

Private partner review uses noindex metadata, which is not access control. Actual live Vercel behavior has not been checked here. Real lead collection still requires separately approved persistence, delivery and privacy arrangements.

---

# Previous commercial positioning validation (historical)

Updated 7 October 2026 for the Zero Trust, quantum-security and software-deployment revision.

## Scope

- Preserved the approved palette, typography, shared navigation, responsive system, form behavior and architecture components.
- Home now leads with three commercial pillars, separates external research from provisional founder statements, explains Zero Trust and quantum exposure, retains Fragment / Encrypt / Separate / Reconstruct, and adds existing-infrastructure deployment guidance.
- Technology adds data-centric protection, Zero Trust boundaries and the FDD-attributed AIA rationale before the existing Windows, attacker-path and upcoming network sections.
- Enterprise and Government translate the same pillars into buyer/mission priorities. Government adds constrained/disconnected operation as an evaluation requirement, not a validated deployment claim.
- HeroDiagram, FileDiagram, WindowsDiagram and AttackerDiagram source files are unchanged. No HSM topology, threshold mechanism, performance benchmark or institutional endorsement was introduced.
- Vercel SSR configuration and `/api/demo` are unchanged. The form remains evaluation-only with no durable lead capture.

## Checks

- Production Vercel build and Astro/TypeScript checks passed with zero errors, warnings or hints.
- Full Playwright suite: **24 passed, 0 failed, 0 skipped** in 55.0 seconds, using the compiled Vercel function in the existing local test harness (`CI=true TEST_PORT=4335 npm test`, Node 22).
- Seven pages returned HTTP 200 at 1440, 768, 390 and 320 px with no horizontal document overflow or browser errors.
- Axe WCAG 2 A/AA and 2.1 AA scans passed on all seven pages, expanded mobile technical disclosures and the new expanded deployment disclosure. Automated scanning is not a complete accessibility certification.
- Internal links and fragment targets resolve, including the new quantum, Zero Trust, deployment and evidence anchors. The exact FDD citation URL is checked in the browser suite; external network availability is not established by that check.
- Mobile navigation, Escape/focus, skip link, reduced motion, mechanism interactions and application policy examples passed.
- Demo API validation, invalid/foreign-origin rejection, HTTPS origin handling, no-JavaScript submission, simulated failure handling and the custom 404 passed.
- The additional commercial-content test checks visible provisional labeling, research attribution/certification boundaries and keyboard access to deployment/HSM qualifications.
- Regenerated all desktop/mobile page screenshots and architecture close-ups. Reviewed the home hero at both sizes, full home and Technology layouts, and mobile evidence/proof content. The first visual review found a missing external-arrow glyph in the new research callout; replacing it with the existing SVG Arrow component resolved it before the final build/test/screenshot run.

## Evidence boundaries

FDD’s source URL was blocked by the environment proxy (HTTP 403 tunnel denial). Copy uses the detailed user-supplied summary, with direct attribution and a source link. The original paper was not independently retrieved or checked in this revision. This limitation and the claim-by-claim source ledger are recorded in RESEARCH.md.

CSfC history, combat deployment, zero-known-breach history, patent-pending TRNG and Lloyd’s-related support are explicitly company/founder-supplied provisional prototype content. All require supporting records and scope/status verification before public launch. No FDD, NSA or Lloyd’s endorsement is asserted. The FDD discussion does not validate the specific upcoming HSM implementation.

The source bundle excludes dependencies, generated build output, Vercel local configuration, reports, environment files and old local demo data. Local testing does not verify a live Vercel deployment or its infrastructure. No new service, credential or analytics integration was added.
