import type { Meta, StoryObj } from '@storybook/react';
import { Fragment } from 'react';

import { QSelect } from './q-select';

import { QGlobalStyles } from '../qds';
import { Colors } from '../theme';

const meta: Meta<typeof QSelect> = {
  component: QSelect,
  title: 'QSelect',
  argTypes: {
    onChange: {
      action: 'change',
    },
    color: {
      options: Object.keys(Colors),
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof QSelect>;

export const Select: Story = {
  args: {
    options: [
      { text: 'first', value: 1 },
      { text: 'second', value: 2 },
      { text: 'third', value: 3 },
      { text: 'fourth', value: 4 },
      { text: 'fifth', value: 5 },
    ],
  },
  render: (args) => (
    <Fragment>
      <QGlobalStyles></QGlobalStyles>
      <QSelect
        options={args.options}
        color={args.color}
        onChange={args.onChange}
      ></QSelect>
    </Fragment>
  ),
};
