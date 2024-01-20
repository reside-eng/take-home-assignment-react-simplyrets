import { getTotalBaths } from '../utils/get-total-baths';
import { getFormattedPrice } from '../utils/get-formatted-price';
import { useState } from 'react';
import type { PropertyCardProperties } from '../components/property-card';

export function usePropertyCards({
  address,
  bedrooms,
  sqft,
  bathsFull,
  bathsHalf,
  listPrice,
  listDate,
  mlsId,
}: PropertyCardProperties) {
  const totalBaths = getTotalBaths(bathsFull, bathsHalf);
  const formattedListPrice = getFormattedPrice(listPrice);
  const formattedDate = new Date(listDate).toLocaleDateString('en-US');
  const formattedAddress = `${address.full}, ${address.city}, ${address.state} ${address.postalCode}`;
  const formattedBedBathAreaInfo = `${bedrooms} BR | ${totalBaths} BATH | ${sqft} Sq Ft`;
  const [isFavorite, setIsFavorite] = useState(
    Boolean(localStorage.getItem(`${mlsId}`)),
  );
  const handleToggleFavoriteIcon = () => {
    if (isFavorite) {
      setIsFavorite(false);
      return localStorage.removeItem(`${mlsId}`);
    }
    setIsFavorite(true);
    return localStorage.setItem(`${mlsId}`, `${mlsId}`);
  };

  return {
    formattedBedBathAreaInfo,
    formattedListPrice,
    formattedDate,
    formattedAddress,
    isFavorite,
    handleToggleFavoriteIcon,
  };
}
