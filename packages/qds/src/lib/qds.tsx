import { createGlobalStyle } from 'styled-components';
import { PropsWithChildren } from 'react';

import { Colors } from './theme';

/* eslint-disable-next-line */
export interface QdsProps extends PropsWithChildren{}


export const QGlobal = createGlobalStyle`
  body, html {
    height: 100%;
    width: 100%;

    * {
      margin: 0;
      padding: 0;
      border: none;
      background: none;

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

export default QGlobal;
