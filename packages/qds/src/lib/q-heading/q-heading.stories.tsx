import type { Meta, StoryObj } from '@storybook/react';
import { QHeading } from './q-heading';

import { Colors } from '../theme';
import { QDsWrapper } from '../qds';

const meta: Meta<typeof QHeading> = {
  component: QHeading,
  title: 'QHeading',
  argTypes: {
    headingLevel: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' },
    },
    headingText: {
      control: {
        type: 'text',
      },
    },
    color: {
      options: Object.keys(Colors),
      control: { type: 'select' },
    },
    serif: {
      options: [true, false],
    },
  },
};
export default meta;
type Story = StoryObj<typeof QHeading>;

export const Primary: Story = {
  render: (args) => (
    <QDsWrapper>
      <QHeading
        color={args.color}
        serif={args.serif}
        headingLevel={args.headingLevel}
        headingText={args.headingText}
      ></QHeading>
    </QDsWrapper>
  ),
  args: {
    headingText: 'Watchu mean watchu mean?',
    headingLevel: 'h1',
    color: 'purple',
    serif: true,
  },
};
