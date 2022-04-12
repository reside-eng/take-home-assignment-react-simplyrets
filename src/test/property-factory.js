import Chance from 'chance';

const chance = new Chance();

//todo: with more time, I would pull address and property into their own factories.

// creates a property object with fake data
export const createProperty = (defaults = {}) => ({
  mlsId: chance.natural(),
  listDate: chance.date(),
  photos: [chance.string()],
  listPrice: chance.natural(),
  address: {
    full: chance.address(),
    state: chance.state({ full: true }),
    city: chance.city(),
  },
  property: {
    area: chance.natural(),
    bathsFull: chance.d4(),
    bathsHalf: chance.d4(),
    bedrooms: chance.d8(),
  },
  ...defaults,
});
