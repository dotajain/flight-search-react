import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../../../../store';

import SearchFilter from '../SearchFilter';

global.fetch = jest.fn(
  () =>
    new Promise(resolve => {
      process.nextTick(() => resolve({ json: () => ({}) }));
    }),
);

it('Properly rendered SearchFilter Component', () => {
  const component = renderer.create(<Provider store={store}><SearchFilter /></Provider>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
