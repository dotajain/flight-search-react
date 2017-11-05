import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../../../../store';

import SearchResult from '../SearchResult';

global.fetch = jest.fn(
  () =>
    new Promise(resolve => {
      process.nextTick(() => resolve({ json: () => ({}) }));
    }),
);

it('Properly rendered SearchResult Component', () => {
  const component = renderer.create(<Provider store={store}><SearchResult /></Provider>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
