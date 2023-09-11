import React, { SyntheticEvent } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Colors } from '../theme';
import { QDSWrapper } from '../qds';

import { QCard } from './q-card';
import { QButtonProps } from '../q-button/q-button';

type CardPropsAndCustomArgs = React.ComponentProps<typeof QCard> & {
  buttonClickHandler?: (e?: SyntheticEvent) => void;
};

const meta: Meta<CardPropsAndCustomArgs> = {
  component: QCard,
  title: 'QCard',
  argTypes: {
    color: {
      options: Object.keys(Colors),
      control: { type: 'select' },
    },
    buttonClickHandler: { action: 'clicked' },
  },
};
export default meta;
type Story = StoryObj<CardPropsAndCustomArgs>;

export const Primary: Story = {
  render: (args) => (
    <QDSWrapper>
      <div style={{ maxWidth: '400px' }}>
        <QCard
          title={args.title}
          bodyText={args.bodyText}
          color={args.color}
          img={args.img}
          button={{
            ...(args.button as QButtonProps),
            onClick: args.buttonClickHandler,
          }}
        ></QCard>
      </div>
    </QDSWrapper>
  ),
  args: {
    img: {
      src: 'https://images.pexels.com/photos/18195228/pexels-photo-18195228/free-photo-of-man-people-art-festival.jpeg',
      alt: 'Masks',
    },
    title: 'I am a card',
    button: {
      buttonText: 'Click me',
      size: 'small',
    },
    bodyText:
      "Some quick example text to build on the card title and make up the bulk of the card's content. With supporting text below as a natural lead-in to additional content.",
  },
};
