export const Colors = {
  black: '#212529' as const,
  gray: '#545863' as const,
  blue: '#00E8FC' as const,
  green: '#447604' as const,
  orange: '#F96E46' as const,
  yellow: '#F9C846' as const,
  red: '#92140C' as const,
  pink: '#FFE3E3' as const,
  purple: '#918EF4' as const,
  white: '#FEFEFE' as const,
} as const;

export type Color = keyof typeof Colors;
