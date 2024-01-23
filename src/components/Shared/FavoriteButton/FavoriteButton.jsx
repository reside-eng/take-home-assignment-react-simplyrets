import heartFill from 'assets/heart-fill.svg';
import heartStroke from 'assets/heart-stroke.svg';

import './FavoriteButton.css';

const FavoriteButton = ({ isFavorite, handleOnFavoriteClick }) => {
  return (
    <div className="FavoriteButtonContainer">
      {isFavorite ? (
        <img
          onClick={handleOnFavoriteClick}
          tabIndex="0"
          aria-label="Favorite Button"
          role="button"
          src={heartFill}
          className="FavoriteButton"
          alt="favorite icon"
          data-testid="favorite"
        />
      ) : (
        <img
          onClick={handleOnFavoriteClick}
          tabIndex="0"
          aria-label="Unfavorite Button"
          role="button"
          src={heartStroke}
          className="FavoriteButton"
          alt="unfavorite icon"
          data-testid="unfavorite"
        />
      )}
    </div>
  );
};

export default FavoriteButton;
