import styled from 'styled-components';
import { PropsWithChildren } from 'react';
import { Breakpoints } from '../theme';

type ColWidth = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

/* eslint-disable-next-line */
export interface QColProps {
  widthDefault?: ColWidth;
  offsetDefault?: ColWidth;
  widthSm?: ColWidth;
  offsetSm?: ColWidth;
  widthMd?: ColWidth;
  offsetMd?: ColWidth;
  widthLg?: ColWidth;
  offsetLg?: ColWidth;
  widthXl?: ColWidth;
  offsetXl?: ColWidth;
  widthXxl?: ColWidth;
  offsetXxl?: ColWidth;
}

const StyledQColumn = styled.div.attrs(
  (props: QColProps): Required<QColProps> => {
    const { widthDefault = 12, offsetDefault = 0 } = props;
    let {
      widthSm,
      offsetSm,
      widthMd,
      offsetMd,
      widthLg,
      offsetLg,
      widthXl,
      offsetXl,
      widthXxl,
      offsetXxl,
    } = props;
    widthSm = widthSm || widthDefault;
    offsetSm = offsetSm || offsetDefault;
    widthMd = widthMd || widthSm;
    offsetMd = offsetMd || offsetSm;
    widthLg = widthLg || widthMd;
    offsetLg = offsetLg || offsetMd;
    widthXl = widthXl || widthLg;
    offsetXl = offsetXl || offsetLg;
    widthXxl = widthXxl || widthXl;
    offsetXxl = offsetXxl || offsetXl;
    return {
      widthDefault,
      offsetDefault,
      widthSm,
      offsetSm,
      widthMd,
      offsetMd,
      widthLg,
      offsetLg,
      widthXl,
      offsetXl,
      widthXxl,
      offsetXxl,
    };
  },
)<Required<QColProps>>`
  flex: 0 0 auto;
  width: ${(props) => (props.widthDefault / 12) * 100}%;
  margin-left: ${(props) => (props.offsetDefault / 12) * 100}%;
  @media (min-width: ${Breakpoints.sm}) {
    flex: 0 0 auto;
    width: ${(props) => (props.widthSm / 12) * 100}%;
    margin-left: ${(props) => (props.offsetSm / 12) * 100}%;
  }
  @media (min-width: ${Breakpoints.md}) {
    flex: 0 0 auto;
    width: ${(props) => (props.widthMd / 12) * 100}%;
    margin-left: ${(props) => (props.offsetMd / 12) * 100}%;
  }
  @media (min-width: ${Breakpoints.lg}) {
    flex: 0 0 auto;
    width: ${(props) => (props.widthLg / 12) * 100}%;
    margin-left: ${(props) => (props.offsetLg / 12) * 100}%;
  }
  @media (min-width: ${Breakpoints.xl}) {
    flex: 0 0 auto;
    width: ${(props) => (props.widthXl / 12) * 100}%;
    margin-left: ${(props) => (props.offsetXl / 12) * 100}%;
  }
  @media (min-width: ${Breakpoints.xxl}) {
    flex: 0 0 auto;
    width: ${(props) => (props.widthXxl / 12) * 100}%;
    margin-left: ${(props) => (props.offsetXxl / 12) * 100}%;
  }
`;

export function QColumn(props: PropsWithChildren<QColProps>) {
  return <StyledQColumn {...props}>{props.children}</StyledQColumn>;
}
