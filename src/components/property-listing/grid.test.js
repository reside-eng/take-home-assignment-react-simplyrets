import axios from 'axios';
import Chance from 'chance';
import { render, screen, waitFor } from '@testing-library/react';
import Grid from './grid';
import { createProperty } from 'test/property-factory';

jest.mock('axios');

const chance = new Chance();

describe('Grid', () => {
  describe('when get request returns an error', () => {
    test('should return error state', async () => {
      axios.get.mockRejectedValueOnce(new Error(chance.string()));
      render(<Grid />);

      expect(axios.get).toHaveBeenCalledWith(
        'https://api.simplyrets.com/properties',
      );
      await waitFor(() => {
        expect(
          screen.getByText('Oops, something went wrong. Please try again.'),
        ).toBeVisible();
      });
    });
  });

  describe('when get request is loading', () => {
    test.todo('should return loading state');
  });

  describe('when get request succeeds', () => {
    let expectedResponse, numProperties;

    beforeEach(() => {
      numProperties = chance.d10() + 5; // a number between 6 - 16
      expectedResponse = {
        data: chance.n(createProperty, numProperties),
      };
      axios.get.mockResolvedValue(expectedResponse);
    });

    test('should render as many properties as are listed in the response object', async () => {
      render(<Grid />);

      await waitFor(() => {
        const propertyCards = screen.getAllByRole('img');
        expect(propertyCards.length).toStrictEqual(numProperties);
      });
    });

    // todo - use a test.each for a more thorough test
    test('should render information for property', async () => {
      render(<Grid />);
      const propertyData = expectedResponse.data[0];
      await waitFor(() => {
        expect(
          screen.getByText(propertyData.address.full, { exact: false }),
        ).toBeVisible();
      });
    });
  });

  describe.skip("favorite a few cards, ensure they make it to local storage. unfavorite some cards and make sure they're removed", () => {});
});
