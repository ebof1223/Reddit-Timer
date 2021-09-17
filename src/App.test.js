import fetchMock from 'jest-fetch-mock';
import { MemoryRouter } from 'react-router';
import mockResponse from './__mocks__/subreddit-react-js-response.json';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';
import Table from 'components/Table';
import getGridHeaderInterval from 'helpers/getGridHeaderInterval';
import { weekDays } from 'helpers/getDaysOfTheWeek';

// fetchMock.enableMocks();
describe('Header', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });
  test('should validate "How it works" links', () => {
    const name = new RegExp('how it works', 'i');
    const howItWorks = screen.getByRole('link', { name });
    userEvent.click(howItWorks);
    expect(screen.getByRole('heading', { name })).toBeInTheDocument();
  });

  test('should validate "About" links', () => {
    const name = new RegExp('about', 'i');
    const about = screen.getByRole('link', { name });
    userEvent.click(about);
    expect(screen.getByRole('heading', { name })).toBeInTheDocument();
  });

  test('should validate logo link', () => {
    const name = new RegExp('logo.svg', 'i');
    const logo = screen.getByRole('link', { name });
    userEvent.click(logo);
    expect(
      screen.getByRole('heading', {
        name: 'No reactions to your reddit posts?',
      })
    ).toBeInTheDocument();
  });
});

describe('Heatmap', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Table />
      </MemoryRouter>
    );
  });
  test('should display 2 hour interval slots on the row header ', () => {
    var twoHourIntervals = getGridHeaderInterval();

    twoHourIntervals.map((interval) => {
      screen.getByText(`${interval}`);
    });
  });

  test('should display every day of the week on the column header', () => {
    weekDays.map((day) => {
      screen.getByText(`${day}`);
    });
    // screen.debug();
  });

  //unable to locate grid cells in table
});
