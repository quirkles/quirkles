export * from './colors';
export * from './borders';
export * from './fonts';

const baseSpacerMagnitude = 1;
const baseSpacerDimension = 'rem';

export const Spacers = {
  none: 0,
  xSmall: `${baseSpacerMagnitude * 0.25}${baseSpacerDimension}`,
  small: `${baseSpacerMagnitude * 0.5}${baseSpacerDimension}`,
  base: `${baseSpacerMagnitude}${baseSpacerDimension}`,
  large: `${baseSpacerMagnitude * 1.5}${baseSpacerDimension}`,
  xLarge: `${baseSpacerMagnitude * 3}${baseSpacerDimension}`,
} as const;

export const boxShadow = '0px 0px 35px 0px rgba(154, 161, 171, 0.15)';
export const boxShadowSm = '0 0.75rem 6rem rgba(56, 65, 74, 0.03)';
export const boxShadowLg = '0 0 45px 0 rgba(0, 0, 0, 0.12)';
export const boxShadowInset = 'inset 0 1px 2px rgba(0, 0, 0, 0.075)';

export type Spacer = keyof typeof Spacers;
