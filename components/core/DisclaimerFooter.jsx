import React from "react";

/**
 * Explore Treatment Paths — DisclaimerFooter
 *
 * The one element every piece of this unbranded patient-education content
 * MUST carry: a sponsorship disclaimer. This component does NOT ship real
 * legal copy — `text` defaults to an obvious placeholder. Exact required
 * wording (who is named, what triggers disclosure) is a legal/regulatory
 * call, not a design-system default — confirm with Legal/Regulatory and
 * MLR before anything using this component goes external.
 */
export function DisclaimerFooter({
  text = "[Sponsorship disclaimer — exact wording pending Legal/Regulatory confirmation]",
  onDark = false,
  style = {},
  ...rest
}) {
  const color = onDark ? "rgba(255,255,255,0.72)" : "var(--text-muted)";
  const borderColor = onDark ? "rgba(255,255,255,0.24)" : "var(--border-default)";

  return (
    <footer
      style={{
        borderTop: `1px solid ${borderColor}`,
        padding: "16px 0",
        fontFamily: "var(--font-body)",
        fontSize: "12px",
        lineHeight: 1.5,
        color,
        ...style,
      }}
      {...rest}
    >
      {text}
    </footer>
  );
}
