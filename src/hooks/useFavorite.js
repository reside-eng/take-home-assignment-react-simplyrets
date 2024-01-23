import { useEffect, useState } from 'react';

const INITIAL_FAVORITES = {};
const useFavorite = () => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites')) ?? INITIAL_FAVORITES,
  );

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (mlsId) => {
    const updatedFavorites = { ...favorites, [mlsId]: true };
    setFavorites({ ...updatedFavorites });
  };

  const removeFavorite = (mlsId) => {
    delete favorites?.[mlsId];
    setFavorites({ ...favorites });
  };
  const getIsFavorite = (mlsId) => favorites?.[mlsId];

  const toggleFavorite = (mlsId) =>
    !!getIsFavorite(mlsId) ? removeFavorite(mlsId) : addFavorite(mlsId);

  return { favorites, toggleFavorite, getIsFavorite };
};

export default useFavorite;
