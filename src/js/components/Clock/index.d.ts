import * as React from "react";
import { A11yTitleType, AlignSelfType, MarginType } from "../../utils";

export interface ClockProps {
  a11yTitle?: A11yTitleType;
  alignSelf?: AlignSelfType;
  gridArea?: string;
  margin?: MarginType;
  hourLimit?: "12" | "24" | "12" | "24";
  onChange?: ((...args: any[]) => any);
  precision?: "hours" | "minutes" | "seconds";
  run?: boolean | "backward" | "forward";
  size?: "small" | "medium" | "large" | "xlarge" | string;
  time?: string;
  type?: "analog" | "digital";
}

declare const Clock: React.ComponentClass<ClockProps & (JSX.IntrinsicElements['div'] | JSX.IntrinsicElements['svg'])>;

export { Clock };
