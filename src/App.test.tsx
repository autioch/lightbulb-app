// eslint-disable-next-line no-shadow
import { render, screen } from '@testing-library/react';
import React from 'react';

import { App } from './App';

test.skip('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/iu);

  expect(linkElement).toBeInTheDocument();
});
