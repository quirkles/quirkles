import styled from 'styled-components';
import React, { SyntheticEvent, useState } from 'react';

import { PickOptional } from '@quirkles/type-utils';

import { Colors, Color, Spacers, BorderWidth, borderRadius } from '../theme';

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
  border: ${BorderWidth.base} solid ${(props) => props.$color};
  font-size: 1em;
  padding: ${(props) => getButtonPaddingFromSize(props.$size as ButtonSize)};
  border-radius: ${borderRadius};
  display: block;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  box-shadow: inset 1px -1px 1px 0px ${(props) => props.$color};
  &:hover {
    box-shadow: inset 0.5px -0.5px 0.5px 0px ${(props) => props.$color};
    translate: 1px 1px;
    &.is-depressed {
      box-shadow: none;
      translate: 2px 2px;
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
      return `${Spacers.large} ${Spacers.xLarge}`;
    case 'medium':
      return `${Spacers.base} ${Spacers.large}`;
    case 'small':
      return `${Spacers.small} ${Spacers.base}`;
  }
}
