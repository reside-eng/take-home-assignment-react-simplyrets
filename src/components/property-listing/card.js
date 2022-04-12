
import React from 'react';
import {getBaths, getAddress, getPrice, getDate} from 'helpers/property-listing-helpers';

import styles from './property-listings.module.css';
import FavoritableImage from './favoritable-image';

const Card = ({ property }) => {
    const formattedAddress = getAddress(property.address);
    const propertySpec = `${property.property.bedrooms} BR | ${getBaths(property.property)} Bath | ${property.property.area} Sq Ft`

    return (
        <div className={styles.cardContainer}>
            <FavoritableImage photoSource={property.photos[0]} altText={formattedAddress} mlsId={property.mlsId}/>
            <span className={styles.specText}>{propertySpec}</span>
            <span className={styles.price}>{getPrice(property.listPrice)}</span>
            <span className={styles.address}>{formattedAddress}</span>
            <span className={styles.listedDate}>{`Listed: ${getDate(property.listDate)}`}</span>
        </div>
    );
};

export default Card;