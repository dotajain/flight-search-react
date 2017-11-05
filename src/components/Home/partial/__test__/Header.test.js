import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../Header';

global.fetch = jest.fn(
  () =>
    new Promise(resolve => {
      process.nextTick(() => resolve({ json: () => ({}) }));
    }),
);

it('Properly rendered Header Component', () => {
  const component = renderer.create(<Header />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
