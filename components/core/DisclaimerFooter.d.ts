import * as React from "react";

export interface DisclaimerFooterProps extends React.HTMLAttributes<HTMLElement> {
  /** Disclaimer copy. Defaults to an obvious placeholder — do NOT ship the
   *  default to production. Get exact wording from Legal/Regulatory. */
  text?: string;
  /** Use the light-on-dark treatment for placement on --etp-navy / --etp-blue. */
  onDark?: boolean;
}

/**
 * Required on every piece of this unbranded patient-education system.
 * Not a substitute for MLR review.
 */
export function DisclaimerFooter(props: DisclaimerFooterProps): React.ReactElement;
