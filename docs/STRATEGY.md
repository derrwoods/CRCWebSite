# Cyber Reliant: positioning and site plan

Prepared before implementation, 7 October 2026.

## Research status and source register

Live research was attempted against the public URLs below. All five requests were denied by the environment egress proxy (HTTP 403 CONNECT). No page content was retrieved. These are research targets, not citations for verified claims. Required domains have been saved to the environment draft; live source verification remains outstanding.

- Cyber Reliant: https://cyberreliant.com — verify existing product names, commercial availability, approved language, corporate details and brand assets.
- Virtru: https://www.virtru.com — evaluate data-centric protection, access control, and external sharing positioning.
- Thales: https://cpl.thalesgroup.com/encryption/ciphertrust-data-security-platform — evaluate encryption and key-lifecycle positioning.
- Rubrik: https://www.rubrik.com — evaluate cyber resilience and recovery positioning.
- NIST SP 800-207: https://www.nist.gov/publications/zero-trust-architecture — authoritative reference to consult for zero-trust terminology.

Category hypotheses, not findings from a current competitive audit: encryption/key-management vendors emphasize control of cryptographic material; secure-sharing vendors emphasize access policies; resilience vendors emphasize continuity and recovery. Cyber Reliant should communicate its file-protection mechanism clearly without asserting superiority over any named vendor. Zero trust describes an architectural approach, not an earned certification or a blanket product guarantee.

## Primary source: user-supplied technical brief

The project owner states that Cyber Reliant fragments files, encrypts fragments, distributes them across storage locations, protects cryptographic material, and applies application-level controls. The Windows implementation uses a file-system filter architecture involved in protection, encryption/decryption and reconstruction. The upcoming network version uses an HSM-based key architecture and multiple logical storage locations. These statements are attributed to the brief; they have not been independently verified.

## Buyer and problem

Primary: enterprise CISOs and security architects responsible for sensitive unstructured files. Secondary: infrastructure teams, regulated-industry risk owners, and government technical/procurement evaluators. A storage account, endpoint or system compromise can expose sensitive files; infrastructure access should not be treated as sufficient authorization to read them.

## Value proposition and differentiation

Headline: “Your storage can be compromised. Your files shouldn’t be exposed.” Supporting copy qualifies this as a design objective and explains the mechanism. Use a sober alternative headline if independent validation does not support stronger language. Final selected headline: “Protection that stays with the file.” It makes no absolute breach-prevention promise.

The differentiating story is the combination of fragmentation, fragment encryption, distribution, cryptographic-material protection and application-level controls. Do not imply competitors all use one exposed key. Do not imply fragmentation alone is encryption or that logical locations necessarily create independent failure domains.

## Evidence and claims policy

Available proof: a transparent architectural explanation grounded in the owner's brief, an explicitly labeled upcoming network design, and a structured technical evaluation agenda. No invented statistics, customers, certifications, awards, patents, third-party tests, compliance attestations, FIPS validation, government endorsements, pricing or production deployment details. Diagrams are conceptual, not complete deployment specifications. No claims of ransomware immunity, guaranteed exfiltration prevention, guaranteed availability, quantum resistance or complete zero trust. HSM product/model, validation scope, key lifecycle, application trust enforcement, supported workloads, latency, recovery and availability remain evaluation questions.

## Objections to answer

- How does this differ from storage encryption? Explain the additional file transformation and application-access layers without disparaging alternatives.
- What happens after storage compromise? Distinguish possession of fragments from authorized reconstruction; qualify with threat model and implementation.
- Does this replace backups or EDR? No; explain their complementary roles.
- What is available now? Separate the described Windows architecture from the upcoming network/HSM version; confirm availability in a demonstration.
- How are performance, key recovery and app compatibility handled? Invite evaluation rather than inventing specifications.
- Does it satisfy a regulation or procurement standard? Make no attestation; request evidence for the actual deployment.

## Conversion and architecture

Primary CTA: Request a demo. Secondary: Explore the architecture / See how it works. Demo form gathers name, work email, organization, role, interest and optional context. Provide a real local capture endpoint with clear local-only confirmation; no claim of email delivery. Never solicit sensitive files or secrets.

1. Home: thesis, animated conceptual file-flow, risk context, mechanism, application controls, enterprise/government paths, CTA.
2. How It Works: interactive four-step fragment/encrypt/distribute/reconstruct explanation, authorized/blocked application view, FAQ.
3. Enterprise: commercial exposure scenarios, regulated-industry use cases, technical evaluation agenda, CTA.
4. Government: sensitive mission files, deployment evaluation, explicit absence of certification claims, CTA.
5. Technology: Windows filter flow, trust boundaries, upcoming HSM network architecture, technical questions.
6. About: company mission drawn from brief, design principles, evidence-first evaluation; no invented history or people.
7. Request a Demo: useful form, tailored evaluation agenda, honest submission state.

## Design and implementation decisions

Use Astro with server rendering and a Node adapter: fast multi-page marketing delivery, semantic HTML, minimal browser JavaScript and a working form endpoint. Restrained ivory/ink/acid-lime visual system, editorial typography, custom technical SVG diagrams, precise labels, generous whitespace and subtle entrance motion. Avoid stock hacker imagery, logo walls, fabricated dashboards and generic SaaS feature grids. Fonts are bundled locally. Mobile navigation, keyboard-accessible controls, visible focus states, reduced-motion support, usable form errors and custom 404 page are required.

## Validation plan

Production build and type checks; real Chromium across desktop/tablet/mobile; all navigation and footer links; interactive diagram steps and app blocking; demo validation, server persistence and honest success state; overflow and browser error checks; accessibility scan; screenshots and visual critique. No external email/CRM transmission is configured. Public-site research, vendor verification, and a production privacy/lead-retention review remain publication prerequisites.

## Research follow-up

The network policy later took effect. Virtru, Thales, Rubrik and NIST were retrieved and reviewed during implementation validation. See RESEARCH.md for sourced findings, the claim ledger and the remaining Cyber Reliant website access limitation. The original blocked-research record above is retained to make the sequence explicit.
