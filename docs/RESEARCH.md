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

Verify the company site and official brand assets when accessible. Obtain owner approval of architecture language, implementation evidence, product release status and a company-approved privacy/contact process. No competitor comparison appears as a superiority claim on the public pages. The local demo endpoint saves evaluation requests on disk and does not send them to Cyber Reliant.
