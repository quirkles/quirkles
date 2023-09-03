import { render } from '@testing-library/react';

import QGrid from './q-grid';

describe('QGrid', () => {
  
  it('should render successfully', () => {
    const { baseElement } = render(<QGrid />);
    expect(baseElement).toBeTruthy();
  });
  
});
