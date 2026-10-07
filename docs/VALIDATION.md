# Validation and visual critique

Completed 7 October 2026 against the local production build.

## Results

- Frozen installation: `npm ci --cache /workspace/.npm-cache --no-audit --no-fund` passed.
- Production/type validation: `npm run build` passed with 0 errors, 0 warnings and 0 hints.
- Browser suite: `CI=true npm test` — **21 passed**, 0 failed, 0 skipped (32.7 seconds).
- Browser: real Chromium 151, launched through Playwright.
- All seven requested pages returned HTTP 200 at 1440, 768, 390 and 320 px widths, without horizontal document overflow or browser console errors.
- Axe WCAG A/AA automated scans reported zero violations on all seven pages. Automated scanning is not a complete accessibility certification.
- All internal links and fragment targets resolved. Desktop navigation, mobile navigation, Escape handling, visible keyboard focus, skip link and reduced-motion behavior were exercised.
- The four-step diagram and both allow/block application examples were exercised, including a direct link to the distribution step.
- A real demo request returned a reference and was verified in the server's JSONL store. The form also works without JavaScript. Invalid input and foreign-origin submissions were rejected. A simulated server failure left entered data intact and displayed an error rather than a success message.
- The custom 404 returns HTTP 404 and offers a working home link.
- Captured screenshots for every page on desktop and mobile. Visually inspected representative desktop/mobile views across all seven page types.

## Issues found and corrected

- Darkened several small labels that fell just below the required contrast ratio.
- Explicitly permitted local hostnames in Astro's SSR host validation so same-origin form requests retain their correct origin; kept origin protection enabled.
- Replaced unsupported diagonal arrow glyphs with inline SVGs.
- Improved the mobile headline scale and line breaks.
- Excluded generated Playwright report files from source type checking.
- Restarted a stale Node server after rebuilding; the clean-server test run confirms current assets and form behavior.

## Visual critique

The restrained ink/ivory/lime palette and technical illustrations give the site a consistent enterprise character. Large editorial headings establish hierarchy; dark architectural sections separate detailed explanations from conversion content. The home page leads with the file, not unsupported metrics or customer logos. The interaction controls remain simple and keyboard usable. The government page uses a sober assurance/evaluation structure instead of implying unverified credentials.

On small screens, content stacks in reading order; diagrams preserve their labels; the long technical table scrolls within its own container. The form keeps large inputs and explicit local-only submission language. The small diagram captions are secondary; the same substantive explanations appear in larger body copy and accessible diagram labels.

The main remaining content limitation is evidence: there are no verified customer references, product benchmarks, official brand assets or implementation documents available in this project. The copy intentionally offers a technical evaluation rather than inventing proof. The network/HSM design is explicitly upcoming throughout.

## Scope and remaining work

Competitor and NIST sources were retrieved successfully. Cyber Reliant's public site returned HTTP 503, so its current content could not be audited. See RESEARCH.md for sources and attribution. Initial public research was blocked until the saved network-domain update took effect.

The demo endpoint is an actual local capture workflow, not an email integration. Public launch requires a configured production hostname, lead destination, durable data handling and company-approved privacy text. No live emails were sent. No production deployment, GitHub push or environment publication has been performed. Environment install/start instructions and the necessary research domains were saved to the draft; publication and fresh-task restoration have not been verified.

Only new project files were created in the previously empty checkout. Generated build output, dependencies, test reports and local demo records are ignored by Git. The source archive excludes those generated/private runtime directories.
