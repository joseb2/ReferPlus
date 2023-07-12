import React from 'react';
import { render, act } from '@testing-library/react';
import fetchMock from 'fetch-mock';
import RegisterPage from './RegisterPage';

describe('RegisterPage', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('fetches data from Alpha Vantage API', async () => {
    const mockResponse = {
      "Meta Data": { /* ... */ },
      "Weekly Time Series": { /* ...mock time series data... */ },
    };

    fetchMock.mock(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=${apiKey}`, {
      status: 200,
      body: mockResponse,
    });

    await act(async () => {
      render(<RegisterPage />);
    });

    expect(fetchMock.called()).toBeTruthy();
  });
});
