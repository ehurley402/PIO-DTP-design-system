# Explore Treatment Paths — Design System

A standalone, **unbranded** patient-education design system for direct-to-patient
(DTP) content published under **ExploreTreatmentPaths.org**. It packages the
brand foundation — color, typography, logo, voice — into tokens, specimen
cards, reusable components, and starter templates.

> **This is not a Precision IO / NeuWave / Epione sub-brand.** It shares no
> tokens, logos, or components with the `precision-io-brand-system` /
> "Precision IO Design System" repos or Claude Design project, and it must not.
> It is its own independent visual identity, built per explicit direction from
> the brand owner (2026-08-13).

## ⚠️ Unbranded, sponsorship-disclosure-only — read before generating

This system exists specifically to stay **unbranded**. Apply these guardrails
to every output:

- ❌ **No device name, logo, or accent color** — NeuWave™, Epione®, Precision
  IO Group, or any other device/company mark must never appear in body
  content. The only acknowledgment of a sponsor is the disclaimer footer.
- ❌ **No PHI** (patient names, MRNs, DOBs, identifiable images, case
  narratives).
- ❌ **No claims of any kind** — efficacy, safety, comparative, or otherwise.
  This system carries layout and voice guidance only; it is not sourced from,
  and must not be used to imply, any specific device's cleared/CE-marked
  indications.
- ❌ **Do not author or approve disclaimer wording.** The `DisclaimerFooter`
  component's placeholder text is intentionally visible as a placeholder —
  exact required wording is a Legal/Regulatory decision, not a design-system
  default.
- ✅ **Anything external-facing requires formal MLR review.** This system and
  any AI output built from it is **not** a substitute for MLR. This is
  patient-facing content by definition — treat everything built here as
  external and flag it for review before it goes anywhere near a patient.

---

## Sources

Built from the **NW013-3-Campaign brand guidelines** (PDF, supplied 2026-08-13)
plus the standalone icon mark and licensed font files supplied alongside it —
see `uploads/` for the originals. There is no GitHub source-of-truth repo for
this brand (unlike the PIO system) — **this repository is the record.**

---

## Brand at a glance

| | |
| --- | --- |
| **Identity** | ExploreTreatmentPaths.org — unbranded patient education |
| **Core colors** | Blue `#064E85` · Navy `#052D4A` · Teal `#4DC4D1` · Green `#7DBE69` · Orange `#F15E25` (sparingly) |
| **Typeface** | **Inter** (Light/Regular/Medium/Bold) for all functional text |
| **Display accent** | Italic serif for emotive lines — **PP Editorial New Italic**, fallback **Libre Baskerville Italic** |
| **Body weight** | Inter **Medium** (per source spec — not Regular) |
| **Voice** | Warm, empathetic, hopeful, patient-empowerment — plain language, not clinical/corporate |

---

## VISUAL FOUNDATIONS

**Overall feel.** Calm and hopeful rather than clinical — warmer and rounder
than a typical corporate system (the icon mark is a flowing, organic "path,"
not a geometric shape).

**Color.** The 5 authoritative colors above are verbatim from the source
guidelines. Derived tints/hovers and all semantic aliases (`--surface-*`,
`--text-*`, `--border-*`) are **ASSUMPTIONS** — ratios and roles were not
specified — see `tokens/colors.css`.

**Typography.** Inter for everything functional; the italic display accent is
reserved for short, emotive lines (e.g. "your path forward"), not body copy.
**Type scale (px) is an ASSUMPTION** — the source shows the role hierarchy
(eyebrow/display/heading/body) at a fixed mockup size but gives no numeric
scale, unlike a fully authoritative spec. Confirm before production rollout.

**Spacing, radius, elevation, motion** *(ASSUMPTION — not defined in the
source at all)*. See `tokens/spacing.css` / `tokens/elevation.css`.

**Logo.** Only the standalone icon file was supplied as a usable source asset.
The horizontal / stacked / on-dark wordmark lockups shown in the guidelines
PDF exist only as a flattened preview, not exported files — this system
reproduces them as coded Inter text (see `components/core/Logo.jsx`). Replace
with real vector lockups if/when supplied.

**Iconography.** None delivered for this identity — no icon system ships
here. Do not substitute icons from the PIO system or any other library.

---

## CONTENT FUNDAMENTALS — how this voice differs from PIO's

This is **not** the same voice as the Precision IO corporate brand. Where PIO
is calm/clinical/factually-direct for HCPs and investors, this system speaks
directly to a patient at a difficult moment:

- **Tone:** warm, empathetic, hopeful, empowerment-oriented — helps the reader
  ask better questions, never sells a decision.
- **Language:** plain language, not clinical jargon.
- **What to avoid:** any device/brand name, any efficacy/safety/comparative
  claim, hype, fear-based framing.

**Sample copy** (verbatim from the source guidelines, used here only to
demonstrate type hierarchy — not pre-approved content):

> Education. Empowerment. *your path forward*
> Understanding your liver cancer treatment options can help bring clarity
> when it matters most.
> Every liver cancer journey is unique, and every conversation has the
> potential to reveal something new. Taking the time to learn about available
> treatment approaches can help you ask better questions, explore more
> possibilities, and move forward with greater confidence and hope.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (consumers link this one file).
- `README.md` — this guide.
- `SKILL.md` — Agent-Skills front-matter wrapper for use in Claude Code.
- `github.md` — sync record with the GitHub repo (repo/branch, last sync).

**`tokens/`** — CSS custom properties (reached from `styles.css`)
- `fonts.css` — `@font-face` for the 3 self-hosted typefaces (Inter variable,
  PP Editorial New Italic, Libre Baskerville Italic).
- `colors.css` — authoritative palette + semantic aliases (ASSUMPTION-flagged).
- `typography.css` — typeface roles (authoritative) + type scale (ASSUMPTION).
- `spacing.css`, `elevation.css` — layout/radius/shadow (ASSUMPTION).
- `base.css` — minimal opt-in element defaults (`body.etp` / `.etp`).

**`assets/`**
- `logos/icon.png` — the canonical icon mark (only source file supplied).
- `fonts/` — self-hosted font files (see Sources).

**`components/core/`** — reusable React primitives
- `Logo` — icon + coded wordmark, with `layout`/`onDark`/`iconOnly` variants.
- `DisclaimerFooter` — the required sponsorship-disclosure footer. Ships a
  visible placeholder, not real legal text.

**`guidelines/`** — foundation specimen cards (Design System tab): Colors,
Type hierarchy, Logo lockups, Voice & tone.

**`templates/`** — starter templates (consuming projects copy or follow these)
- `patient-landing-page/` — scrollable web landing page: hero, condition
  overview, treatment-options overview, FAQ, disclaimer footer.
- `patient-brochure/` — print-ready brochure (US Letter, 1–2 pages, same
  `orientation`/`density`/`showPageTwo` tweaks as the PIO system's Handout).

All body copy in both templates is bracketed placeholder text
(`[condition]`, `[Treatment category 1]`, etc.) — not real claims, and not
tied to any specific device or condition. Fill in via Claude Design, then
route through MLR before anything goes external.

---

## Assumptions to confirm with the brand owner

The source guidelines define color, typeface (+ role hierarchy), and the icon
mark as authoritative. They do **not** define a numeric type scale, spacing,
radius, shadow/elevation, motion, or gradient direction — and ship **no**
component library or icon set. Everything in `spacing.css` / `elevation.css`,
the derived color tints, the gradient direction, and **all
components/templates** are conservative derivations. They are marked as
assumptions throughout and should be confirmed before production rollout.
