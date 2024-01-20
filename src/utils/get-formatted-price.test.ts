import { getFormattedPrice } from './get-formatted-price';

describe('getFormattedPrice', () => {
  describe('When a number is passed', () => {
    it('Returns a currency formatted version of that number', () => {
      expect(getFormattedPrice(8675309)).toEqual('$8,675,309');
    });
  });
});
