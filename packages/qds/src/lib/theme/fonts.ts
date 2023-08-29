const fontStackSansBase = [
  'system-ui',
  '-apple-system',
  'Segoe UI',
  'Roboto',
  'Helvetica Neue',
  'Noto Sans',
  'Liberation Sans',
  'Arial',
  'sans-serif',
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
  'Noto Color Emoji',
];

const fontStackSansCustom = ['Nunito Sans'];
export const fontStackSans = `${[
  ...fontStackSansCustom,
  ...fontStackSansBase,
].join(', ')}`;

export const fontStackSerif = "'Lora', serif";

export const baseFontSizeMagnitude = 1;
export const baseFontSizeDimension = 'rem';

export const baseFontLineHeight = 1.5;

export const baseFontSize = `${baseFontSizeMagnitude}${baseFontSizeDimension}`;
