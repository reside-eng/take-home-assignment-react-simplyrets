import { render, screen } from '@testing-library/react';
import PageHeader from './PageHeader';

test('Render PageHeader', async () => {
  render(<PageHeader headerText={'Property Listing'} />);

  const element = screen.getByTestId('page-header-text');
  expect(element).toHaveTextContent('Property Listing');
});
