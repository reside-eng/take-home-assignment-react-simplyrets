import React, { useEffect, useState } from 'react';
import Card from './card';
import axios from 'axios';
import styles from './property-listings.module.css';

const Grid = () => {
  const [propertyData, setPropertyData] = useState();
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem('favoriteProperties', JSON.stringify([]));

    axios
      .get(`https://api.simplyrets.com/properties`)
      .catch((error) => {
        // todo: log error to splunk/grafana/new relic/etc
        setError(error);
      })
      .then((res) => {
        setPropertyData(res?.data);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return 'Loading...'; // todo: spice up the loading state
  } else if (error) {
    return 'Oops, something went wrong. Please try again.'; // todo: spice up the error state
  }

  return (
    <div className={styles.gridContainer}>
      {
        propertyData.map((property) => (
          <Card key={property.listingId} property={property} />
        )) /* todo: implement lazy loading/pagination */
      }
    </div>
  );
};

export default Grid;
