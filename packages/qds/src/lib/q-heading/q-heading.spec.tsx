import { render } from '@testing-library/react';

import QHeading from './q-heading';

describe('QHeading', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<QHeading headingText={'test'} />);
    expect(baseElement).toBeTruthy();
  });
});
