import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const heading = screen.getByRole(
    'heading',
    /Side React Take-home Assignment/i,
  );
  expect(heading).toBeInTheDocument();
});
