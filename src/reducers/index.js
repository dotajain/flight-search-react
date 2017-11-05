import { combineReducers } from 'redux';

import flightSearch from './flightSearch';

const rootReducer = combineReducers({
  flightSearch,
});

export default rootReducer;
