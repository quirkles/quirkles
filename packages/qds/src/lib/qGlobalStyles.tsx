import { createGlobalStyle } from 'styled-components';

import {
  baseFontLineHeight,
  FontSizes,
  Colors,
  fontStackSans,
  fontStackSerif,
  Spacers,
} from './theme';

export const QGlobalStyles = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;

    body {
      height: 100%;
      width: 100%;

      margin: 0;
      font-family: ${fontStackSans};
      font-size: ${FontSizes.base};
      font-weight: 400;
      line-height: ${baseFontLineHeight};
      color: ${Colors.gray900};
      background-color: ${Colors.gray100};
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    h6, h5, h4, h3, h2, h1 {
      margin-top: 0;
      margin-bottom: 0.5rem;
      font-weight: 500;
      line-height: 1.2;
      color: var(--bs-heading-color);
    }

    h1 {
      font-size: calc(1.375rem + 1.5vw);
    }
    @media (min-width: 1200px) {
      h1 {
        font-size: 2.5rem;
      }
    }

    h2 {
      font-size: calc(1.325rem + 0.9vw);
    }
    @media (min-width: 1200px) {
      h2 {
        font-size: 2rem;
      }
    }

    h3 {
      font-size: calc(1.3rem + 0.6vw);
    }
    @media (min-width: 1200px) {
      h3 {
        font-size: 1.75rem;
      }
    }

    h4 {
      font-size: calc(1.275rem + 0.3vw);
    }
    @media (min-width: 1200px) {
      h4 {
        font-size: 1.5rem;
      }
    }

    h5 {
      font-size: 1.25rem;
    }

    h6 {
      font-size: 1rem;
    }

    p {
      margin-top: 0;
      margin-bottom: ${Spacers.base};
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    * {
      margin: 0;
      padding: 0;
      border: none;
      background: none;

      &.font-serif {
        font-family: ${fontStackSerif};
      }

      ul {
        display: block;
        list-style: none;
        padding: 0;
        margin: 0;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
        padding-inline-start: 0;
      }

      ${Object.entries(Colors)
        .map(([color, hex]) => `.font-${color} { color: ${hex}; }`)
        .join('\n')}
    }
  }
`;
