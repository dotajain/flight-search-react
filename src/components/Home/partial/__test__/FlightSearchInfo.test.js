import React from 'react';
import renderer from 'react-test-renderer';
import FlightSearchInfo from '../FlightSearchInfo';

global.fetch = jest.fn(
  () =>
    new Promise(resolve => {
      process.nextTick(() => resolve({ json: () => ({}) }));
    }),
);

it('Properly rendered FlightSearchInfo Component', () => {
  const component = renderer.create(<FlightSearchInfo result={result}/>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


const result = {
  'airline': {
    'name': 'Vistara',
    'code': '993',
    'number': 'UK',
  },
  'origin': {
    'airportCode': 'DEL',
    'terminal': '3',
    'time': '12:50',
  },
  'destination': {
    'airportCode': 'BOM',
    'time': '14:55',
  },
  'bookingclass': 'E',
  'depdate': '2017-09-15t1250',
  'arrdate': '2017-09-15t1455',
  'travelTime': '2h 5m',
  'fare': 2986,
};