import * as React from "react";
import { A11yTitleType, AlignSelfType, MarginType } from "../../utils";

export interface ChartProps {
  a11yTitle?: A11yTitleType;
  alignSelf?: AlignSelfType;
  gridArea?: string;
  margin?: MarginType;
  bounds?: number[][];
  color?: string | {color?: string,opacity?: "weak" | "medium" | "strong" | boolean};
  onClick?: ((...args: any[]) => any);
  onHover?: ((...args: any[]) => any);
  overflow?: boolean;
  round?: boolean;
  size?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "full" | {height?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "full" | string,width?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "full" | string} | string;
  thickness?: "hair" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "none" | string;
  type?: "bar" | "line" | "area";
  values: (number | number[] | {label?: string,onClick?: ((...args: any[]) => any),onHover?: ((...args: any[]) => any),value: number | number[]})[];
}

declare const Chart: React.ComponentClass<ChartProps>;

export { Chart };
