import { render, fireEvent, screen } from '@testing-library/react';
import FavoriteButton from './FavoriteButton';

test('Renders Favorite Button', async () => {
  render(
    <FavoriteButton
      isFavorite
      handleOnFavoriteClick={() => console.log('favorite clicked')}
    />,
  );

  const element = screen.getByTestId('favorite');
  expect(element.getAttribute('aria-label')).toBe('Favorite Button');
});

test('Renders UnFavorite Button', async () => {
  render(
    <FavoriteButton
      isFavorite={false}
      handleOnFavoriteClick={() => console.log('favorite clicked')}
    />,
  );

  const element = screen.getByTestId('unfavorite');
  expect(element.getAttribute('aria-label')).toBe('Unfavorite Button');
});

// A test for handling clicking on the button
