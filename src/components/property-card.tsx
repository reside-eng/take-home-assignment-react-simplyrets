import React from 'react';
//@ts-ignore
import heartFill from '../assets/heart-fill.svg';
//@ts-ignore
import heartStroke from '../assets/heart-stroke.svg';
import { usePropertyCards } from '../hooks/use-property-cards';

export interface PropertyCardProperties {
  bedrooms: number;
  bathsFull: number;
  bathsHalf: number;
  sqft: number;
  listPrice: number;
  address: {
    full: string;
    city: string;
    state: string;
    postalCode: string;
  };
  listDate: Date;
  mlsId: number;
  image?: string;
}

export function PropertyCard({
  bedrooms,
  bathsFull,
  bathsHalf,
  sqft,
  listPrice,
  address,
  listDate,
  image,
  mlsId,
}: PropertyCardProperties) {
  const {
    formattedBedBathAreaInfo,
    formattedListPrice,
    formattedDate,
    formattedAddress,
    isFavorite,
    handleToggleFavoriteIcon,
  } = usePropertyCards({
    bedrooms,
    bathsFull,
    bathsHalf,
    sqft,
    listPrice,
    address,
    listDate,
    mlsId,
  });

  return (
    <li className="pb-6 md:pb-0 md:w-280">
      <div className="relative">
        <img
          className="property-card-image"
          src={image}
          alt={`The house at ${address.full}`}
        />
        <button
          onClick={handleToggleFavoriteIcon}
          className="top-2 right-2 absolute h-14 w-14 bg-black bg-opacity-50 rounded-full flex justify-center items-center"
        >
          <img
            src={isFavorite ? heartFill : heartStroke}
            className="h-10"
            alt={isFavorite ? 'favorite icon' : 'not favorite icon'}
          />
        </button>
      </div>
      <div className="grid gap-1 pt-1">
        <p>{formattedBedBathAreaInfo}</p>
        <p className="font-bold text-xl">{formattedListPrice}</p>
        <p className="font-light text-xs">{formattedAddress}</p>
        <p className="font-light text-gray-400 text-xs">{`Listed: ${formattedDate}`}</p>
      </div>
    </li>
  );
}
