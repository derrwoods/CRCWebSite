# Research and claim substantiation

Research date: 7 October 2026. These are observations of public marketing pages, not independent validation of the vendors' security claims.

## Access and sequence

Initial research requests were denied by the environment proxy. Positioning was established from the supplied product brief before implementation, with unverified category hypotheses labeled as such in STRATEGY.md. After the network-domain draft took effect, the sources below were retrieved and read; their findings were used to review the copy. Cyber Reliant's own public website remained unavailable: both https://cyberreliant.com and https://www.cyberreliant.com returned HTTP 503. No existing Cyber Reliant branding, corporate history, customers, product names or certifications could be verified from that site. The original geometric mark in this prototype is a design proposal, not an authenticated corporate asset.

## Sources read

| Source | Observed message | Implication for this site |
| --- | --- | --- |
| [Virtru homepage](https://www.virtru.com), HTTP 200 | “Easily control access to sensitive data shared via email, files, and apps”; granular policy/access control, workflow integration and private-key location choices. | Data-centric protection and key control are established category themes. Cyber Reliant should explain its mechanism, not claim sole ownership of those concepts. |
| [Thales data security](https://cpl.thalesgroup.com/data-security), HTTP 200 | CipherTrust integrates encryption, key management and access controls. Separate HSM and key-lifecycle messaging. | Distinguish the storage layer from key protection. Do not suggest other vendors universally leave a single key exposed. Explain the upcoming HSM architecture without inventing supported models or certifications. |
| [Rubrik homepage](https://www.rubrik.com), HTTP 200 | Cyber resilience framed around data, identity, clean recovery points and restoration of operations. | Separate confidentiality/exfiltration questions from recovery/availability. Do not imply Cyber Reliant replaces backups or guarantees ransomware recovery. |
| [NIST SP 800-207 publication page](https://www.nist.gov/publications/zero-trust-architecture), HTTP 200 | Zero trust grants no implicit trust based only on location or ownership; authentication and authorization precede access to a resource. | Discuss explicit application-access decisions as one part of a broader strategy. Avoid calling a file-protection product a complete zero-trust architecture or implying NIST endorsement. |

The initially attempted Thales CipherTrust URL returned 404; the authoritative data-security overview above was successfully retrieved instead. Competitor performance statistics and testimonials were not copied into this site.

## Claim ledger

| Published concept | Basis | Qualification |
| --- | --- | --- |
| Files are fragmented; fragments are encrypted and distributed | Owner's technical brief | No algorithm, threshold, erasure-coding or storage-provider claims |
| Cryptographic material is protected | Owner's technical brief | No claim that keys can never be exposed, or that plaintext cannot reach memory |
| Application-level controls govern access | Owner's technical brief | Illustrative allow/block examples; enforcement and identity checks require evaluation |
| Windows file-system filter participates in protection/decryption/reconstruction | Owner's technical brief | Conceptual component relationships; no exact driver/API sequence asserted |
| Network design uses HSM architecture and multiple logical storage locations | Owner's technical brief | Always labeled upcoming; no asserted general availability, HSM vendor, certification or physical independence |
| File protection may contribute to ransomware/exfiltration defenses | Qualified architectural positioning | No immunity, total exfiltration prevention, recovery guarantee or backup replacement |
| Zero-trust relationship | NIST framing plus the described application controls | One contribution to a broader architecture, not a certification |

## Publication follow-up

Verify the company site and official brand assets when accessible. Obtain owner approval of architecture language, implementation evidence, product release status and a company-approved privacy/contact process. No competitor comparison appears as a superiority claim on the public pages. The evaluation-only demo endpoint validates sample submissions without saving or delivering them.


## Revision: reconstruction-centered positioning

The owner's subsequent technical brief is the source for the following additional product statements. These have not been independently verified through a public vendor source; competitor messaging is not evidence for them.

| Revised claim | Source and boundary |
| --- | --- |
| Storage compromise alone does not produce a readable protected file | Owner's revised brief: reconstruction requires the authorized Cyber Reliant path and protected cryptographic material. This is not an assertion that every possible attack is prevented. |
| The upcoming network architecture fragments/shreds cryptographic material itself | Owner's revised brief: multiple key components are protected through the HSM architecture. Do not collapse this into a single key in an HSM. No threshold, quorum, algorithm, HSM count or key-recovery guarantee has been invented. |
| Separate file and key paths converge at authorized reconstruction | Owner's revised brief: file fragmentation → fragment encryption → logical distribution; cryptographic material → fragmentation/shredding → HSM component protection. Counts and connections in diagrams are conceptual. Logical locations need not be physically independent failure domains. |
| Windows filter participates in fragment identification, obtaining material, decryption and reconstruction | Owner's revised brief. Diagram depicts responsibilities and inputs rather than an exact driver-call sequence. |
| A malicious/replacement filter may reach storage without automatically reproducing reconstruction | Owner's revised brief. No claim that bypass is impossible, that a kernel-level attacker cannot succeed, or that readable data in memory is unexposable. |

The primary marketing copy is now concise and declarative. Implementation boundaries remain available in figure captions, FAQs, evaluation notes and keyboard-accessible technical disclosures. The revised design preserves the original page hierarchy, palette, typography, forms and responsive behavior.


## October 2026 commercial-positioning revision

### FDD source and retrieval status

User-supplied source: [Protecting and Securing Data from the Quantum Threat](https://www.fdd.org/analysis/2022/12/16/protecting-and-securing-data-from-the-quantum-threat/), FDD, December 16, 2022.

The user supplied a detailed summary of this research as the source for this revision. Direct retrieval failed with a network-proxy HTTP 403 (tunnel denied), including after adding `www.fdd.org` and `fdd.org` to the saved environment network draft. Saving the draft does not apply/publish the setting. The paper's full text was **not independently retrieved or checked** in this revision. Site statements paraphrase the supplied summary and link directly to the paper; they are not presented as verbatim quotations. Verify the original text before public launch.

The supplied summary describes FDD TCIL research/pilot work with Cyber Reliant, the term Augmented Improbability of Access (AIA), information-theoretic principles, fragmentation of both data and key material, distribution of required components, harvest-now/decrypt-later mitigation and a recommendation to pursue AIA solutions. It also describes a vendor/service-provider-agnostic and customizable architecture. AIA is attributed to the research, not adopted as new primary product naming.

Boundaries: research/pilot work is not FDD product certification, company endorsement or validation of every implementation. Information-theoretic security depends on its model's assumptions; unlimited-compute language does not establish operational immunity. The 2022 paper is not evidence that FDD evaluated the upcoming HSM-based network architecture. No threshold, quorum, M-of-N or secret-sharing mechanism is inferred.

### Founder-supplied prototype claims

The user explicitly requested the following statements as provisional content. They appear together under a visible company/founder-supplied label and a pre-publication verification notice, separate from the FDD research callout.

| Supplied claim | Treatment and required evidence |
| --- | --- |
| 11+ years associated with NSA CSfC certification/listing | Reported CSfC history; verify exact product/listing, scope, dates and current status. No NSA endorsement. |
| Combat deployed since 2018 | Attributed founder-supplied history; verify scope and records. No agency, mission or contract inferred. |
| Zero known breaches of protected Top Secret data | Founder report only; reporting period, scope and evidence pending. No immunity guarantee or approval for classified use inferred. |
| Patent-pending software-based true random number generation | Verify filing, ownership, status and technical evidence. No issued patent or randomness certification asserted. |
| Security/insurance support associated with Lloyd's of London | Verify provider, relationship, coverage and scope. No endorsement or unqualified coverage guarantee. |

These are not independently validated operational proof. They must be checked before public launch. No founder-supported performance evidence was supplied, so the site adds neither “near-zero latency” nor benchmark claims.

### Deployment claims

Software deployment is framed as an approach designed to preserve existing infrastructure, with compatibility and integrations subject to evaluation. Hybrid, cloud, edge, distributed and constrained environments are evaluation targets, not a list of validated integrations. The core software approach is distinguished from the upcoming network version's HSM dependency. Disconnected operation, availability and recovery must be verified for the mission.
