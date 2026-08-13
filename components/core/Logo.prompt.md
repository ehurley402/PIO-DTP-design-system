The "ExploreTreatmentPaths.org" mark — icon + coded wordmark, used at the top of every page/piece.

```jsx
<Logo iconSrc="../../assets/logos/icon.png" />
<Logo iconSrc="../assets/logos/icon.png" layout="stacked" />
<Logo iconSrc="../../assets/logos/icon.png" onDark iconSize={48} />
<Logo iconSrc="../../assets/logos/icon.png" iconOnly />
```

`iconSrc` is required — pass the correct relative path to `assets/logos/icon.png` for wherever this page lives (e.g. `../../assets/logos/icon.png` from `templates/<name>/`, `../assets/logos/icon.png` from `guidelines/`). `layout`: `horizontal` (default) or `stacked`. `onDark` swaps the wordmark to white for placement on `--etp-navy` / `--etp-blue`. `iconOnly` drops the wordmark text (e.g. for a favicon-sized mark).

**FLAGGED:** only the standalone icon file was supplied. The wordmark is coded text (Inter Regular/Bold/Regular for "Explore"/"Treatment"/"Paths.org"), reproducing the lockup shown in the brand guidelines PDF — not a vector export of the real logo file. Replace with real lockup SVGs if/when supplied.

Never place the NeuWave or Epione logos, names, or accent colors anywhere near this mark — this is a standalone, unbranded identity. See README.md.
