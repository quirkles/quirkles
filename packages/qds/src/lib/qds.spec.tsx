import { render } from '@testing-library/react';

import Qds from './qds';

describe('Qds', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Qds />);
    expect(baseElement).toBeTruthy();
  });
});
