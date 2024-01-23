import { render, screen } from '@testing-library/react';
import Details from './Details';

test('Render Details', async () => {
  render(
    <Details
      address={`172 North British Colony Boulevard #27`}
      listDate={'2010-04-16T07:32:41.939493Z'}
      listPrice={9014063}
      bedrooms={4}
      bathsFull={5}
      bathsHalf={5}
      area={2130}
    />,
  );

  const listingDateElement = screen.getByTestId('property-listing-date');
  expect(listingDateElement).toHaveTextContent('4/16/10');

  const addressElement = screen.getByTestId('property-address');
  expect(addressElement).toHaveTextContent(
    '172 North British Colony Boulevard #2',
  );

  const priceElement = screen.getByTestId('property-price');
  expect(priceElement).toHaveTextContent('$9,014,063');

  const dimensionElement = screen.getByTestId('property-dimension');
  expect(dimensionElement).toHaveTextContent('4 BR | 7.5 Bath | 2130 Sq F');
});
