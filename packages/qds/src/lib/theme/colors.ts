export const Colors = {
  blue: '#00E8FC' as const,
  green: '#447604' as const,
  orange: '#F96E46' as const,
  yellow: '#F9C846' as const,
  red: '#92140C' as const,
  pink: '#FFE3E3' as const,
  purple: '#918EF4' as const,
  white: '#FEFEFE' as const,
  black: '#000' as const,

  gray: '#6c757d' as const,
  grayDark: '#343a40' as const,
  gray100: '#f8f9fa' as const,
  gray200: '#e9ecef' as const,
  gray300: '#dee2e6' as const,
  gray400: '#ced4da' as const,
  gray500: '#adb5bd' as const,
  gray600: '#6c757d' as const,
  gray700: '#495057' as const,
  gray800: '#343a40' as const,
  gray900: '#212529' as const,
} as const;

export type Color = keyof typeof Colors;
