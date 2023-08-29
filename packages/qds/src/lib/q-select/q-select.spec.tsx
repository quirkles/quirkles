import { render } from '@testing-library/react';

import QSelect from './q-select';

describe('QSelect', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<QSelect />);
    expect(baseElement).toBeTruthy();
  });
});
