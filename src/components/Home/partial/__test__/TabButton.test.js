import React from 'react';
import renderer from 'react-test-renderer';

import TabButton from '../TabButton';

global.fetch = jest.fn(
  () =>
    new Promise(resolve => {
      process.nextTick(() => resolve({ json: () => ({}) }));
    }),
);

it('Properly Rendered TabButton Component', () => {
  const component = renderer.create(<TabButton />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
