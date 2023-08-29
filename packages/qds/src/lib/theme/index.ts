export * from './colors';
export * from './borders';

const baseSpacerSize = 1;
const baseSpacerUnit = 'rem';

export const Spacers = {
  0: 0,
  1: `${baseSpacerSize * 0.25}${baseSpacerUnit}`,
  2: `${baseSpacerSize * 0.5}${baseSpacerUnit}`,
  3: `${baseSpacerSize}${baseSpacerUnit}`,
  4: `${baseSpacerSize * 1.55}${baseSpacerUnit}`,
  5: `${baseSpacerSize * 3}${baseSpacerUnit}`,
} as const;

export type Spacer = keyof typeof Spacers;
