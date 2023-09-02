export const Colors = {
  blue: '#29339B' as const,
  green: '#1B998B' as const,
  orange: '#F46036' as const,
  yellow: '#FDE74C' as const,
  red: '#D7263D' as const,
  pink: '#FFA9E7' as const,
  purple: '#3F3244' as const,
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

type ColorMagnitude = -75 | -50 | -25 | -10 | 10 | 25 | 50 | 75;
export const newShade = (
  hexColor: string,
  magnitude: ColorMagnitude,
): string => {
  hexColor = hexColor.replace(`#`, ``);
  if (hexColor.length === 6) {
    const decimalColor = parseInt(hexColor, 16);
    let r = (decimalColor >> 16) + magnitude;
    r > 255 && (r = 255);
    r < 0 && (r = 0);
    let g = (decimalColor & 0x0000ff) + magnitude;
    g > 255 && (g = 255);
    g < 0 && (g = 0);
    let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
    b > 255 && (b = 255);
    b < 0 && (b = 0);
    return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
  } else {
    return hexColor;
  }
};
