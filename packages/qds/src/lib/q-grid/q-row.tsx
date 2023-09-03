import styled from 'styled-components';
import React from 'react';
import { Spacers } from '../theme';

/* eslint-disable-next-line */
export interface QRowProps {
}


const StyledQRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * ${Spacers.none});
  margin-right: calc(-0.5 * ${Spacers.large});
  margin-left: calc(-0.5 * ${Spacers.large});
  > * {
    box-sizing: border-box;
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(${Spacers.large} * 0.5);
    padding-left: calc(${Spacers.large} * 0.5);
    margin-top: var(${Spacers.none});
`;

export function QRow(props: React.PropsWithChildren<QRowProps>) {
  return <StyledQRow>{props.children}</StyledQRow>;
}
