import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProperties } from '../queries/get-properties';
import { PropertyCard } from '../components/property-card';
export function PropertyCards() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['todos'],
    queryFn: getProperties,
  });

  if (isPending) return <p>...Loading</p>;
  if (isError)
    return <p>{`Sorry there has been an error: ${error.message}`}</p>;

  return (
    <ul className="p-6 md:p-10 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-10">
      {data?.map((data: Record<string, any>) => (
        <PropertyCard
          key={data.address.full}
          bedrooms={data.property.bedrooms}
          bathsFull={data.property.bathsFull}
          bathsHalf={data.property.bathsHalf}
          sqft={data.property.area}
          listPrice={data.listPrice}
          address={data.address}
          listDate={data.listDate}
          image={data.photos[0]}
          mlsId={data.mlsId}
        />
      ))}
    </ul>
  );
}
