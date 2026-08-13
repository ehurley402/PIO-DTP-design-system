repo: ehurley402/PIO-DTP-design-system
branch: main

## Last sync
date: 2026-08-13

### Built in this project
- Initial build: standalone, unbranded patient-education design system for
  ExploreTreatmentPaths.org, from the NW013-3-Campaign brand guidelines PDF
  plus a supplied icon mark and licensed font files (PP Editorial New Italic,
  Libre Baskerville Italic). Inter pulled directly from Google Fonts
  (open-source, self-hosted).
- This is a deliberately independent system — no tokens, logos, or components
  are shared with `precision-io-brand-system` / the "Precision IO Design
  System" Claude Design project. Per the brand owner's explicit direction
  (2026-08-13), do not introduce that dependency later without a new decision
  to do so.
- v1 scope: color/type/spacing/elevation tokens, `Logo` + `DisclaimerFooter`
  components, 4 guideline specimen cards, and two starter templates
  (`patient-landing-page`, `patient-brochure`).

## Screen map
| Screen / file | Built from |
| --- | --- |
| `tokens/colors.css` | NW013-3-Campaign brand guidelines, p.1 (color swatches) |
| `tokens/typography.css`, `tokens/fonts.css` | NW013-3-Campaign brand guidelines, p.1 (type standards, fonts) |
| `assets/logos/icon.png`, `components/core/Logo.*` | supplied standalone icon image (lockups coded, not sourced — see README FLAGGED note) |
| `guidelines/*.card.html` | derived from the above + this sync's own layout assumptions |
| `templates/patient-landing-page/`, `templates/patient-brochure/` | new for this system — no equivalent in the PIO system (its templates are internal/sales-facing only) |
| `README.md`, `SKILL.md` | this sync |

## Sync history
### 2026-08-13T00:00:00Z
- Initial build and first push to GitHub.
