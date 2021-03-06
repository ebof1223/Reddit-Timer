import React from 'react';
import { render } from '@testing-library/react';

import Home from 'pages/Home';

describe('Page content without search', () => {
  test('should display correct heading', () => {
    const { getByRole } = render(<Home />);
    const title = getByRole('heading', {
      name: /find how active your subreddit is!/i,
    });

    expect(title).toBeTruthy();
  });

  test('should display disclaimer sub-title', () => {
    const { getByText } = render(<Home />);
    const disclaimer = getByText(/disclaimer/i);

    expect(disclaimer).toBeTruthy();
  });

  test('should display button', () => {
    const { getByRole } = render(<Home />);
    const button = getByRole('button', {
      name: /Get me last week's posts/i,
    });

    expect(button).toBeTruthy();
  });

  test('should display reactj as default subreddit search', () => {
    const { getByDisplayValue } = render(<Home />);
    const defaultSearch = getByDisplayValue('reactjs');

    expect(defaultSearch).toBeTruthy();
  });
});
