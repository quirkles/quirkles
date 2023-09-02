export const baseBorderRadiusMagnitude = 2;
export const baseBorderRadiusDimension = 'px';
export const borderRadius = `${baseBorderRadiusMagnitude}${baseBorderRadiusDimension}`;

const baseBorderWidthMagnitude = 2;
const baseBorderWidthDimension = 'px';

export const BorderWidth = {
  none: 0,
  xSmall: `${baseBorderWidthMagnitude * 0.25}${baseBorderWidthDimension}`,
  small: `${baseBorderWidthMagnitude * 0.5}${baseBorderWidthDimension}`,
  base: `${baseBorderWidthMagnitude}${baseBorderWidthDimension}`,
  large: `${baseBorderWidthMagnitude * 1.5}${baseBorderWidthDimension}`,
  xLarge: `${baseBorderWidthMagnitude * 3}${baseBorderWidthDimension}`,
} as const;
