import { render } from '@testing-library/react';

import QCard from './q-card';

describe('QCard', () => {
  
  it('should render successfully', () => {
    const { baseElement } = render(<QCard />);
    expect(baseElement).toBeTruthy();
  });
  
});
