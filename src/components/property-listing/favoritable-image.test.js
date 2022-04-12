
import Chance from 'chance';
import { render } from '@testing-library/react';
import FavoritableImage from "./favoritable-image";

const chance = new Chance();

describe('FavoritableImage', () => {
  let expectedProps;

  beforeEach(() => {
    expectedProps ={
      photoSource: chance.string(),
      mlsId: chance.natural(),
      altText: chance.sentence()
    }
  })

  test.skip("should render as unfavorited by default", async () => {
    render(<FavoritableImage {...expectedProps} />)
    // expect red filled icon to be visible
    // expect expectedProps.mlsId to not be in localStorage
  });

  test.skip("should show as favorited when button is clicked", async () => {
    render(<FavoritableImage {...expectedProps} />)
    // use user event to click button 
    // expect red filled icon to be visible
    // expect expectedProps.mlsId to be in localStorage
  });

  test.skip("should remove from local storage when button is clicked", async () => {
    render(<FavoritableImage {...expectedProps} />)
    // use user event to click button 
    // expect expectedProps.mlsId to be in localStorage
    // use user event to click button again
    // expect expectedProps.mlsId NOT to be in localStorage
  });
});
