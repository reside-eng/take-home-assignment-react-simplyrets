import FavoriteButton from 'components/Shared/FavoriteButton';
import Details from './Details';
import Image from './Image';
import './PropertyCard.css';

const PropertyCard = ({
  photo,
  address,
  listDate,
  listPrice,
  bedrooms,
  bathsFull,
  bathsHalf,
  area,
  isFavorite,
  handleOnToggleFavorite,
}) => {
  return (
    <div className="PropertyCardContainer">
      <Image url={photo} />
      <Details
        address={address}
        listDate={listDate}
        listPrice={listPrice}
        bedrooms={bedrooms}
        bathsFull={bathsFull}
        bathsHalf={bathsHalf}
        area={area}
      />
      <div className="FavoriteSection">
        <FavoriteButton
          isFavorite={isFavorite}
          handleOnFavoriteClick={handleOnToggleFavorite}
        />
      </div>
    </div>
  );
};

export default PropertyCard;
