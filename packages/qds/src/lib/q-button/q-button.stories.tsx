import { Fragment } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ButtonSizes, QButton } from './q-button';

import {QDSWrapper, QGlobalStyles} from '../qds';
import { Colors } from '../theme';

const meta: Meta<typeof QButton> = {
  component: QButton,
  title: 'QButton',
  argTypes: {
    onClick: {
      action: 'clicked',
    },
    buttonText: {
      control: {
        type: 'text',
      },
    },
    color: {
      options: Object.keys(Colors),
      control: { type: 'select' },
    },
    size: {
      options: Object.keys(ButtonSizes),
      control: { type: 'select' },
    },
  },
};
export default meta;
type Story = StoryObj<typeof QButton>;

export const Button: Story = {
  render: (args) => (
    <QDSWrapper>
      <QButton
        buttonText={args.buttonText}
        size={args.size}
        color={args.color}
        onClick={args.onClick}
      ></QButton>
    </QDSWrapper>
  ),
  args: {
    buttonText: 'Click me!',
  },
};
