import styled from 'styled-components';
import {
  baseBorderRadiusMagnitude,
  borderRadius,
  BorderWidth,
  Color,
  Colors,
  Spacers,
} from '../theme';
import QButton, { ButtonSize, QButtonProps } from '../q-button/q-button';
import QHeading from '../q-heading/q-heading';

/* eslint-disable-next-line */
export interface QCardProps {
  img?: {
    src: string;
    alt: string;
  };
  color?: Color;
  title?: string;
  bodyText?: string;
  button?: QButtonProps;
}

const cardSpacerY = Spacers.large;
const cardSpacerX = Spacers.large;
const cardTitleSpacerY = Spacers.base;
const cardBorderWidth = BorderWidth.none;
const cardBorderColor = BorderWidth.none;
const cardBorderRadius = borderRadius;
const cardInnerBorderRadius = baseBorderRadiusMagnitude - BorderWidth.none;
const cardBg = Colors.white;

const StyledQCard = styled.div.attrs((props: { $color: Color }) => ({
  $color: props.$color ? Colors[props.$color] : Colors.black,
}))<{ $color?: Color }>`
  -webkit-box-shadow: var(--ct-box-shadow-sm);
  box-shadow: var(--ct-box-shadow-sm);
  margin-bottom: 24px;

  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: ${cardBg};
  background-clip: border-box;
  border: ${cardBorderWidth} solid ${cardBorderColor};
  border-radius: ${cardBorderRadius};
  > img {
    border-top-left-radius: ${cardInnerBorderRadius};
    border-top-right-radius: ${cardInnerBorderRadius};
    width: 100%;
    max-width: 100%;
    height: auto;
  }
  > div {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: ${cardSpacerY} ${cardSpacerX};
    color: ${(props) => props.$color};
    h5 {
      margin-top: 0;
      margin-bottom: ${cardTitleSpacerY};
      color: ${(props) => props.$color};
    }
  }
`;

export function QCard(props: QCardProps) {
  const { img, title, bodyText, button } = props;
  return (
    <StyledQCard $color={props.color || Colors.black}>
      {img ? <img src={img.src} alt={img.alt} /> : null}
      <div>
        {title ? <QHeading headingLevel="h5" headingText={title} /> : null}
        {bodyText ? <p>{bodyText}</p> : null}
        {button ? (
          <QButton {...(props.button as QButtonProps)}></QButton>
        ) : null}
      </div>
    </StyledQCard>
  );
}

export default QCard;
