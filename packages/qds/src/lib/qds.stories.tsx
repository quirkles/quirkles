import type { Meta, StoryObj } from '@storybook/react';
import { QGlobal } from './qds';

const meta: Meta<typeof QGlobal> = {
  component: QGlobal,
  title: 'Qds',
};
export default meta;
type Story = StoryObj<typeof QGlobal>;

export const Primary: Story = {
  args: {},
};
