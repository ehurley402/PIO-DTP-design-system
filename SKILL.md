---
name: explore-treatment-paths-design
description: Use this skill to generate unbranded, patient-facing DTP (direct-to-patient) education content for ExploreTreatmentPaths.org — a standalone identity, not a Precision IO / NeuWave / Epione sub-brand. Contains color, type, logo, and reusable components/templates for patient landing pages and brochures. This content must stay unbranded (no device name/logo/claim) and carries a sponsorship-disclosure requirement; it is not a substitute for MLR review.
user-invocable: true
---

# Explore Treatment Paths — design skill

Read **README.md** in this skill first — it carries the full brand context,
the unbranded/sponsorship-disclosure guardrails, voice, visual foundations,
and a manifest of every file.

- **Foundation:** link `styles.css` (or copy `tokens/*.css`) to pick up color,
  type, and font tokens. Fonts are self-hosted (`assets/fonts/`) — no CDN
  calls.
- **Logo:** `assets/logos/icon.png` is the only supplied source file. Use the
  `Logo` component for the coded wordmark lockup — never introduce a device
  logo or name.
- **Components:** `components/core/` — `Logo`, `DisclaimerFooter`.
- **Examples to copy from:** `templates/patient-landing-page/` and
  `templates/patient-brochure/`.

If creating visual artifacts, copy assets out and produce static HTML for the
user to view, following the templates' structure and swapping in real (or
clearly bracketed placeholder) copy.

**Always apply the guardrails:** no device name/logo/accent color anywhere in
body content — the only sponsor acknowledgment is the `DisclaimerFooter`, and
its wording is a Legal/Regulatory decision, never invented here; no PHI; no
efficacy/safety/comparative claims of any kind. Everything built from this
skill is external, patient-facing content by definition — it requires formal
MLR review before publishing, which this skill does not replace. Type scale,
spacing, radius, elevation, motion, and the logo lockups (beyond the single
supplied icon file) are conservative **assumptions** — flag them as such.

If the user invokes this skill without other guidance, ask what they want to
build, ask a few clarifying questions, and act as an expert designer who
outputs on-brand HTML artifacts as needed — always unbranded, always flagging
that final copy needs MLR sign-off.
