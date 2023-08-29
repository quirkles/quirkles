import styled from 'styled-components';
import React, { SyntheticEvent, useState } from 'react';

import { PickOptional } from '@quirkles/type-utils';

import { Colors, Color, Spacers, borderWidth, borderRadius } from '../theme';

export const ButtonSizes = {
  small: '#small',
  medium: '#medium',
  large: '#large',
} as const;

export type ButtonSize = keyof typeof ButtonSizes;

/* eslint-disable-next-line */
export interface QButtonProps {
  buttonText: string;
  color?: Color;
  size?: ButtonSize;
  onClick?: (e?: SyntheticEvent) => void;
}

const StyledQButton = styled.button.attrs(
  (props: { $color: Color; $size: ButtonSize }) => ({
    $color: props.$color ? Colors[props.$color] : Colors.green,
    $size: props.$size || 'medium',
  }),
)<{ $color?: Color; $size?: ButtonSize }>`
  color: ${(props) => props.$color};
  border: ${borderWidth} solid ${(props) => props.$color};
  font-size: 1em;
  padding: ${(props) => getButtonPaddingFromSize(props.$size as ButtonSize)};
  border-radius: ${borderRadius};
  display: block;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  box-shadow: inset -0.1em -0.1em ${(props) => props.$color};
  &:hover {
    box-shadow: inset 0.025em 0.025em ${(props) => props.$color};
    translate: 0.05em 0.05em;
    &.is-depressed {
      box-shadow: inset 0.05em 0.05em ${(props) => props.$color};
      translate: 0.1em 0.1em;
    }
  }
`;

const defaultProps: PickOptional<QButtonProps> = {
  color: 'blue',
  size: 'medium',
  onClick: () => null,
};

export function QButton(props: QButtonProps) {
  const [isDepressed, setIsDepressed] = useState(false);
  const { color, onClick, size, buttonText } = {
    ...defaultProps,
    ...props,
  };
  const pressButton = () => setIsDepressed(true);
  const unpressButton = () => setIsDepressed(false);
  return (
    <StyledQButton
      $color={color}
      $size={size}
      className={isDepressed ? 'is-depressed' : ''}
      onClick={onClick}
      onMouseDown={pressButton}
      onMouseUp={unpressButton}
      onMouseLeave={unpressButton}
    >
      {buttonText}
    </StyledQButton>
  );
}

export default QButton;

function getButtonPaddingFromSize(buttonSize: ButtonSize): string {
  switch (buttonSize) {
    case 'large':
      return `${Spacers['4']} ${Spacers['5']}`;
    case 'medium':
      return `${Spacers['3']} ${Spacers['4']}`;
    case 'small':
      return `${Spacers['2']} ${Spacers['3']}`;
  }
}
