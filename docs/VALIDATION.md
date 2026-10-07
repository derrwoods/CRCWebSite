# Validation and visual critique

Updated 7 October 2026 for the reconstruction-centered positioning revision, against a fresh local production server.

## Results

- Frozen installation: `npm ci --cache /workspace/.npm-cache --no-audit --no-fund` passed.
- Production/type validation: `npm run build` passed with 0 errors, 0 warnings and 0 hints.
- Browser suite: `CI=true npm test` — **22 passed**, 0 failed, 0 skipped (56.8 seconds).
- Browser: real Chromium 151, launched through Playwright.
- All seven requested pages returned HTTP 200 at 1440, 768, 390 and 320 px widths, without horizontal document overflow or browser console errors.
- Axe WCAG A/AA automated scans reported zero violations on all seven pages. Automated scanning is not a complete accessibility certification.
- All internal links and fragment targets resolved. Desktop navigation, mobile navigation, Escape handling, visible keyboard focus, skip link and reduced-motion behavior were exercised.
- The revised Fragment / Encrypt / Separate / Reconstruct walkthrough and both allow/block application examples were exercised. The legacy `#distribute` deep link still selects Separate.
- A new mobile test opens the Windows threat-model and network evaluation disclosures by keyboard and runs an accessibility scan with their contents expanded. The technical table is keyboard-scrollable through a named, focusable region.
- A real demo request returned a reference and was verified in the server's JSONL store. The form also works without JavaScript. Invalid input and foreign-origin submissions were rejected. A simulated server failure left entered data intact and displayed an error rather than a success message.
- The custom 404 returns HTTP 404 and offers a working home link.
- Regenerated full screenshots for every page on desktop and mobile, both home hero views, the enterprise exposure illustration, and close-ups of the new network and attacker diagrams. Visually reviewed home, network, Windows reconstruction and attacker-path layouts on desktop/mobile.

## Revision issues found and corrected

- Darkened the attacker diagram’s “May reach” label to pass contrast requirements.
- Made the technical comparison table a named, keyboard-focusable scrolling region.
- Kept the two network diagram paths separate until they enter authorized reconstruction.

## Initial build issues found and corrected

- Darkened several small labels that fell just below the required contrast ratio.
- Explicitly permitted local hostnames in Astro's SSR host validation so same-origin form requests retain their correct origin; kept origin protection enabled.
- Replaced unsupported diagonal arrow glyphs with inline SVGs.
- Improved the mobile headline scale and line breaks.
- Excluded generated Playwright report files from source type checking.
- Restarted a stale Node server after rebuilding; the clean-server test run confirms current assets and form behavior.

## Visual critique

The restrained ink/ivory/lime palette and technical illustrations give the site a consistent enterprise character. Large editorial headings establish hierarchy; dark architectural sections separate detailed explanations from conversion content. The home page leads with the file, not unsupported metrics or customer logos. The interaction controls remain simple and keyboard usable. The government page uses a sober assurance/evaluation structure instead of implying unverified credentials.

On small screens, content stacks in reading order; diagrams preserve their labels; the long technical table scrolls within its own container. The form keeps large inputs and explicit local-only submission language. The small diagram captions are secondary; the same substantive explanations appear in larger body copy and accessible diagram labels.

The revision makes file/key separation and authorized reconstruction prominent. The file path and key path remain distinct visually; the Windows filter responsibilities are stated explicitly. Attacker storage reach is shown separately from the information, cryptographic material and processes needed for reconstruction. Detailed limitations are available in secondary copy and expandable sections.

The main remaining content limitation is evidence: there are no verified customer references, product benchmarks, official brand assets or implementation documents available in this project. The copy intentionally offers a technical evaluation rather than inventing proof. The network/HSM design is explicitly upcoming throughout.

## Scope and remaining work

Competitor and NIST sources were retrieved successfully. Cyber Reliant's public site returned HTTP 503, so its current content could not be audited. See RESEARCH.md for sources and attribution. Initial public research was blocked until the saved network-domain update took effect.

The demo endpoint is an actual local capture workflow, not an email integration. Public launch requires a configured production hostname, lead destination, durable data handling and company-approved privacy text. No live emails were sent. The first version was pushed to GitHub, and this revision is prepared for the same repository with an updated source ZIP. No production deployment or environment publication has been performed. Environment install/start instructions and the necessary research domains were saved to the draft; publication and fresh-task restoration have not been verified.

The first build initialized the previously empty checkout. This revision updates the existing site and adds the two new architecture components. Generated build output, dependencies, test reports and local demo records are ignored by Git. The source archive excludes those generated/private runtime directories.
