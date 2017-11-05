import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../../../../store';

import SearchBreadcrumb from '../SearchBreadcrumb';

global.fetch = jest.fn(
  () =>
    new Promise(resolve => {
      process.nextTick(() => resolve({ json: () => ({}) }));
    }),
);

it('Properly rendered SearchBreadcrumb Component', () => {
  const component = renderer.create(<Provider store={store}><SearchBreadcrumb /></Provider>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
