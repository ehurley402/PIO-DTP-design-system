import * as React from "react";

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Path to assets/logos/icon.png, relative to the consuming page. Required
   *  — there is no safe default because this component is used from pages
   *  at different folder depths. */
  iconSrc: string;
  /** Icon-and-wordmark arrangement. */
  layout?: "horizontal" | "stacked";
  /** Use the white-on-dark wordmark color for placement on --etp-navy / --etp-blue. */
  onDark?: boolean;
  /** Render the icon mark only, no wordmark text. */
  iconOnly?: boolean;
  /** Icon size in px (square). */
  iconSize?: number;
}

/**
 * The "ExploreTreatmentPaths.org" mark — the icon image plus a coded Inter
 * wordmark (not a flattened logo file; see the FLAGGED note in Logo.jsx).
 */
export function Logo(props: LogoProps): React.ReactElement;
