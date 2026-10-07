# Reconstruction-centered positioning revision

This revision follows the owner's expanded technical brief. It preserves the seven-page structure, original headline, palette, typography, responsive layout, form behavior and custom diagram language.

## What changed

- Home now states the architectural consequence directly: compromising storage alone does not produce a readable protected file. The mechanism is Fragment / Encrypt / Separate / Reconstruct.
- The reusable network diagram has distinct FILE PATH and KEY PATH lanes. The file lane fragments, encrypts and distributes protected fragments across logical locations. The key lane fragments/shreds cryptographic material itself and protects multiple components through the HSM architecture. Both paths enter the same authorized Cyber Reliant reconstruction node; they do not connect at the storage or HSM nodes.
- The Windows diagram identifies the filter's participation in selecting correct fragments, obtaining required cryptographic material, decrypting and reconstructing the protected file.
- The conceptual attacker illustration shows that a malicious or replacement filter may reach protected storage without automatically obtaining the information, material and protected processes required to reconstruct the file.
- Enterprise, Government, About and demo-request copy use the same reconstruction-centered positioning. The original home headline remains unchanged.
- Technical qualifications moved into secondary notes, FAQs and accessible disclosures. Network availability remains explicitly upcoming. No physical independence, irrevocable key secrecy, bypass impossibility, kernel-attack immunity, certifications, customer evidence or benchmarks are asserted.

## Compatibility and validation changes

The walkthrough's third canonical anchor is now `#separate`. The original `#distribute` deep link remains supported and selects the Separate panel. The same full browser suite is retained; an additional mobile keyboard/accessibility check exercises expanded technical disclosures. The technical comparison table is now a named, focusable scroll region for keyboard access on small screens.

Screenshot generation now refreshes all full desktop/mobile pages, both home hero screenshots, the enterprise exposure illustration and desktop/mobile details of the network and attacker diagrams. See VALIDATION.md for current results.

## Focused home-page overview refinement

The home hero now uses a separate conceptual graphic: protected file fragments and protected key components remain separate, both feed authorized Cyber Reliant reconstruction, and the output is a readable file. The figure's caption links directly to `/technology#network`. It does not include fragmentation/encryption/distribution stages or the key-shredding/HSM sequence.

The detailed network diagram remains on Technology with its existing wording and logical-versus-physical separation qualification. Desktop width and labels were modestly increased for readability. No new cryptographic mechanism or company terminology was introduced. Exact production HSM design and internal product terminology remain unverified.

The home headline, supporting copy, storage-access statements, four-part mechanism, Windows/filter diagrams, attacker-path explanation, page hierarchy, typography and color system are retained. The submitted instructions ended at “WINDOWS / FILTER ARCHITECTURE — Keep”; that content was therefore preserved.

The full browser suite remains intact. `TEST_PORT` can now select a free local port when another server occupies the default 4321, ensuring the checks run against a fresh build without disturbing an existing process.
