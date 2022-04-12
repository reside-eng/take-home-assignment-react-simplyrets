
import React, { useState } from 'react';

import styles from './property-listings.module.css';
import HeartFilledIcon from '../icons/heart-filled-icon';
import HeartOutlineIcon from '../icons/heart-outline-icon';

const FavoritableImage = ({altText, photoSource, mlsId}) => {
    const currentMlsIds =  JSON.parse(localStorage.getItem('favoriteProperties'));
    const [isFavorited, setIsFavorited] = useState(currentMlsIds && currentMlsIds.find((id) => id === mlsId))

    // todo: ran out of time. Needs documented and pulled into helper file
    const updateLocalStorage = () => {
        const oldMlsIds = JSON.parse(localStorage.getItem('favoriteProperties'));
        if(isFavorited) {
            // remove from local storage
            const newMlsIds = oldMlsIds.filter((id) => id !== mlsId);
            localStorage.setItem("favoriteProperties", JSON.stringify(newMlsIds));
        } else {
            // add to local storage
            if(oldMlsIds) {
                // todo - with more time, we can check to ensure the mlsId doesn't exist before adding it here
                localStorage.setItem('favoriteProperties', JSON.stringify([...oldMlsIds, mlsId]))
            } else {
                localStorage.setItem("favoriteProperties", JSON.stringify([mlsId]));
            }
        }

        setIsFavorited(!isFavorited);
    }

    return (
        <div>
            <img className={styles.photo} src={photoSource} alt={altText}/>
            <button type='button' className={styles.favoriteButton} onClick={updateLocalStorage}>
                {isFavorited ? <HeartFilledIcon /> : <HeartOutlineIcon />}
            </button>
        </div>
    );
};

export default FavoritableImage;