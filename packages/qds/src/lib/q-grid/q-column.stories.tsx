import type { Meta, StoryObj } from '@storybook/react';
import { QColumn  } from './q-column';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';


const meta: Meta<typeof QColumn> = {
  component: QColumn,
  title: 'QColumn', 
};
export default meta;
type Story = StoryObj<typeof QColumn>;


export const Primary = {
  args: {
  },
};


export const Heading: Story = {
  args: {
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to QColumn!/gi)).toBeTruthy();
  },
};

