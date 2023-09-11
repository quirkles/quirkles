import styled from 'styled-components';
import React from 'react';

import { Breakpoints, Spacers } from '../theme';

type Size = 'xSmall' | 'small' | 'md' | 'large' | 'xLarge' | 'default';

/* eslint-disable-next-line */
export interface QGridProps {
  size?: Size;
}

const StyledQGrid = styled.div<{ $size: Size }>`
  width: 100%;
  padding-right: ${Spacers.small}
  padding-left: ${Spacers.none};
  margin-right: auto;
  margin-left: auto;
  ${(props) =>
    ['default', 'xSmall'].includes(props.$size)
      ? `@media (min-width: ${Breakpoints.sm}) {
      max-width: 540px;
  }`
      : null}

  ${(props) =>
    ['default', 'xSmall', 'small'].includes(props.$size)
      ? `@media (min-width: ${Breakpoints.md}) {
      max-width: 720px;
  }`
      : null}

  ${(props) =>
    ['default', 'xSmall', 'small', 'md'].includes(props.$size)
      ? `@media (min-width: ${Breakpoints.lg}) {
      max-width: 960px;
  }`
      : null}

  ${(props) =>
    ['default', 'xSmall', 'small', 'md', 'large'].includes(props.$size)
      ? `@media (min-width: ${Breakpoints.xl}) {
      max-width: 1140px;
  }`
      : null}

  ${(props) =>
    ['default', 'xSmall', 'small', 'md', 'large', 'xLarge'].includes(
      props.$size,
    )
      ? `@media (min-width: ${Breakpoints.xxl}) {
      max-width: 1320px;
  }`
      : null}

`;

export function QGrid(props: React.PropsWithChildren<QGridProps>) {
  return (
    <StyledQGrid $size={props.size || 'default'}>{props.children}</StyledQGrid>
  );
}
