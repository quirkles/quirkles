import type { Meta, StoryObj } from '@storybook/react';
import { QGrid } from './q-grid';

import { QDsWrapper } from '../qds';
import { QRow } from './q-row';
import { QColumn } from './q-column';
import { Colors } from '../theme';

const meta: Meta<typeof QGrid> = {
  component: QGrid,
  title: 'QGrid',
};
export default meta;
type Story = StoryObj<typeof QGrid>;

export const Primary = {
  args: {},
  render: () => {
    return (
      <QDsWrapper>
        <QGrid>
          <QRow>
            <QColumn
              widthDefault={12}
              widthSm={6}
              widthLg={4}
              widthXl={3}
              widthXxl={2}
            >
              <div style={{ backgroundColor: Colors.gray500 }}>
                <p>column</p>
              </div>
            </QColumn>
          </QRow>
        </QGrid>
      </QDsWrapper>
    );
  },
};
