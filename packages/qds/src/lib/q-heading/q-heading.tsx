import styled from 'styled-components';
import React from 'react';

import { PickOptional } from '@quirkles/type-utils';

import {
  BorderWidth,
  Color,
  Colors,
  fontStackSans,
  fontStackSerif,
  Spacers,
} from '../theme';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

/* eslint-disable-next-line */
export interface QHeadingProps {
  headingLevel?: HeadingLevel;
  headingText: string;
  color?: Color;
  serif?: boolean;
}

const defaultProps: PickOptional<QHeadingProps> = {
  headingLevel: 'h1',
  color: 'gray900',
  serif: true,
};

const StyledQHeading = styled.div<{ $color: Color; $serif: boolean }>`
  color: ${(props) => Colors[props.$color]};
  font-family: ${(props) => (props.$serif ? fontStackSerif : fontStackSans)};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
    margin-bottom: ${Spacers.xSmall};
    padding-bottom: ${Spacers.xSmall};
    border-bottom: ${BorderWidth.base} solid ${(props) => Colors[props.$color]};
  }
`;

export function QHeading(props: QHeadingProps) {
  const { color, serif, headingLevel, headingText } = {
    ...defaultProps,
    ...props,
  } as Required<QHeadingProps>;
  return (
    <StyledQHeading $serif={serif} $color={color}>
      <Tag tag={headingLevel} text={headingText} />
    </StyledQHeading>
  );
}

function Tag(props: { tag: HeadingLevel; text: string }) {
  switch (props.tag) {
    case 'h1':
      return <h1>{props.text}</h1>;
    case 'h2':
      return <h2>{props.text}</h2>;
    case 'h3':
      return <h3>{props.text}</h3>;
    case 'h4':
      return <h4>{props.text}</h4>;
    case 'h5':
      return <h5>{props.text}</h5>;
    case 'h6':
      return <h6>{props.text}</h6>;
  }
}

export default QHeading;
