import React from "react";

/**
 * Explore Treatment Paths — Logo
 *
 * Renders the canonical icon mark (assets/logos/icon.png) plus the
 * "ExploreTreatmentPaths.org" wordmark, coded as styled text in Inter rather
 * than a flattened image — scalable, recolorable for the on-dark variant,
 * and editable if the domain ever changes.
 *
 * FLAGGED: only the standalone icon file was supplied as a usable source
 * asset. The horizontal / stacked / on-dark lockups in the brand guidelines
 * exist only as a flattened preview inside the PDF, not as exported files —
 * this component reproduces those lockups in code. Swap to real vector
 * lockup files if/when they're supplied, and diff against this version.
 */
export function Logo({
  iconSrc, // required — path to assets/logos/icon.png, relative to the consuming page
  layout = "horizontal", // "horizontal" | "stacked"
  onDark = false,
  iconOnly = false,
  iconSize = 40,
  style = {},
  ...rest
}) {
  const wordmarkColor = onDark ? "var(--text-on-inverse)" : "var(--text-heading)";

  const wordmark = (
    <span
      style={{
        fontFamily: "var(--font-body)",
        fontSize: "20px",
        color: wordmarkColor,
        whiteSpace: "nowrap",
      }}
    >
      <span style={{ fontWeight: "var(--weight-regular)" }}>Explore</span>
      <span style={{ fontWeight: "var(--weight-bold)" }}>Treatment</span>
      <span style={{ fontWeight: "var(--weight-regular)" }}>Paths.org</span>
    </span>
  );

  const icon = (
    <img
      src={iconSrc}
      alt="Explore Treatment Paths"
      width={iconSize}
      height={iconSize}
      style={{ display: "block" }}
    />
  );

  const base = {
    display: "inline-flex",
    alignItems: layout === "stacked" ? "center" : "center",
    flexDirection: layout === "stacked" ? "column" : "row",
    gap: layout === "stacked" ? "10px" : "12px",
  };

  return (
    <div style={{ ...base, ...style }} {...rest}>
      {icon}
      {!iconOnly && wordmark}
    </div>
  );
}
