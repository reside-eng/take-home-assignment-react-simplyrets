import Loading from 'components/Shared/Loading/Loading';
import useProperties from 'hooks/useProperties';
import { withErrorBoundary } from 'react-error-boundary';
import { logError } from 'utils/logError';

import StickyHeaderLayout from 'components/Layout/StickyHeaderLayout';
import PropertyCard from 'components/PropertyCard';
import useFavorite from 'hooks/useFavorite';
import './property-listings.css';

const PropertyListings = () => {
  const { loading, properties } = useProperties();
  const { toggleFavorite, getIsFavorite } = useFavorite();

  return (
    <StickyHeaderLayout headerText={'Property Listings'}>
      <div className="PropertyListingsContainer container-fluid">
        {loading ? (
          <Loading>Fetching Property Listings...</Loading>
        ) : (
          <>
            {properties &&
              properties?.map((p) => (
                <PropertyCard
                  key={`mls-${p?.mlsId}`}
                  photo={p?.photos?.[0]}
                  address={p?.address?.full}
                  listDate={p?.listDate}
                  listPrice={p?.listPrice}
                  bedrooms={p?.property?.bedrooms}
                  bathsFull={p?.property?.bathsFull}
                  bathsHalf={p?.property?.bathsHalf}
                  area={p?.property?.area}
                  handleOnToggleFavorite={() => toggleFavorite(p?.mlsId)}
                  isFavorite={getIsFavorite(p?.mlsId)}
                />
              ))}
          </>
        )}
      </div>
    </StickyHeaderLayout>
  );
};

const PropertyListingsErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="PropertyListingsErrorFallbackContainer" role="alert">
    <p>An error occured while retrieving Property Listings</p>
    <pre>{error.message}</pre>
    <button onClick={resetErrorBoundary}>Try again</button>
  </div>
);

export default withErrorBoundary(PropertyListings, {
  fallback: PropertyListingsErrorFallback,
  onError: logError,
});
