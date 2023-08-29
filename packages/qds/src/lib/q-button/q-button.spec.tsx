import { render } from '@testing-library/react';

import QButton from './q-button';

describe('QButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<QButton />);
    expect(baseElement).toBeTruthy();
  });
});
