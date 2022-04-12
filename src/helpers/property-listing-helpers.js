// I find moment to be more intuitive, but date-fns is a much smaller, lighter package
import { format } from 'date-fns';

import states from './state-abbreviations';

/*
    given a property object, this function will return the number of baths in the unit.
*/
export const getBaths = (propertyDetails) =>
  propertyDetails.bathsFull + propertyDetails.bathsHalf * 0.5;

/*
    given a utc date, this function will return the date in MM/dd/yy form.
*/
export const getDate = (utcDate) => format(new Date(utcDate), 'MM/dd/yy');

/*
    given a natural number, this function will return a string prefixed with a '$' of the number, including commas.
*/
export const getPrice = (priceToBeFormatted) =>
  `$${Intl.NumberFormat('en-US').format(priceToBeFormatted)}`;

/*
    given an address object, this function will return a formatted address with unit number included and the state abbreviation.
*/
export const getAddress = (address) =>
  `${address.full}, ${address.city}, ${states[address.state]}`;
