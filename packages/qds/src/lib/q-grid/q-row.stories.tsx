import type { Meta, StoryObj } from '@storybook/react';
import { QRow  } from './q-row';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';


const meta: Meta<typeof QRow> = {
  component: QRow,
  title: 'QRow', 
};
export default meta;
type Story = StoryObj<typeof QRow>;


export const Primary = {
  args: {
  },
};


export const Heading: Story = {
  args: {
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to QRow!/gi)).toBeTruthy();
  },
};

