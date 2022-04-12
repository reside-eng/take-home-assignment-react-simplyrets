import { render, screen } from '@testing-library/react';
import PropertyListingsPage from './property-listings';

jest.mock('../components/property-listing/grid', () => () => (
  <div>{'grid'}</div>
));

describe('PropertyListingsPage', () => {
  test('renders header', () => {
    render(<PropertyListingsPage />);
    const heading = screen.getByRole('heading', /Property Listings/i);
    expect(heading).toBeVisible();
  });

  test.todo('renders grid');
});
