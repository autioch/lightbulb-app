// eslint-disable-next-line no-shadow
import { render, screen } from '@testing-library/react';
import React from 'react';

import { Carousel } from './Carousel';

test.skip('renders learn react link', () => {
  render(<Carousel isPaused={false} />);
  const linkElement = screen.getByText(/learn react/iu);

  expect(linkElement).toBeInTheDocument();
});
