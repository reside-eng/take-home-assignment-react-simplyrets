import dayjs from 'dayjs';
import { USDollar } from 'utils/currency';
import './Details.css';

const Details = ({
  address,
  listDate,
  listPrice,
  bedrooms,
  bathsFull,
  bathsHalf,
  area,
}) => {
  const formatListDate = dayjs(listDate).format('M/D/YY');
  const formatPrice = listPrice ? USDollar.format(listPrice) : 'No Price Data';
  const baths = bathsFull + bathsHalf / 2;

  return (
    <div className="PropertyCardDetailsContainer" tabIndex={0}>
      <div
        className="Dimension"
        aria-label="Property Dimension"
        data-testid="property-dimension"
      >
        {`${bedrooms} BR | \
        ${baths} Bath | \
        ${area} Sq Ft`}
      </div>
      <div
        className="Price"
        aria-label="Property price"
        data-testid="property-price"
      >
        {formatPrice}
      </div>
      <div
        className="Address"
        aria-label="Property address"
        data-testid="property-address"
      >
        {address}
      </div>
      <div
        className="ListDate"
        data-testid="property-listing-date"
        aria-label="Property listing date"
      >{`Listed: ${formatListDate}`}</div>
    </div>
  );
};

export default Details;
