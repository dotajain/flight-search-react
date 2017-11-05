import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../../../../store';

import AutoSuggestInput from '../AutoSuggestInput';

global.fetch = jest.fn(
  () =>
    new Promise(resolve => {
      process.nextTick(() => resolve({ json: () => ({}) }));
    }),
);

it('Properly rendered AutoSuggestInput Component', () => {
  const component = renderer.create(<Provider store={store}><AutoSuggestInput /></Provider>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
