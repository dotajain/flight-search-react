import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../../../../store';

import SearchForm from '../SearchForm';

global.fetch = jest.fn(
  () =>
    new Promise(resolve => {
      process.nextTick(() => resolve({ json: () => ({}) }));
    }),
);

it('Properly rendered SearchForm Component', () => {
  const component = renderer.create(<Provider store={store}><SearchForm /></Provider>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
