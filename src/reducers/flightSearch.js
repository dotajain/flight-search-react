import { actionTypes as types } from '../constants';

const initialState = {
  returnFlight: false,
  cities: [],
  searchResult: [],
  searchRequest: {},
  range: {},
};

const flightSearch = (state = initialState, action) => {
  switch (action.type) {
  case types.ENABLE_RETURN_FLIGHT:
    return { ...state, returnFlight: true };

  case types.DISABLE_RETURN_FLIGHT:
    return { ...state, returnFlight: false };

  case types.SEARCH_CITIES_SUCCESS:
    return { ...state, cities: action.data };

  case types.SEARCH_REQUEST:
    return { ...state, searchResult: [], searchRequest: action.data };
  case types.SEARCH_SUCCESS:
    return { ...state, searchResult: action.data };
  case types.SEARCH_FAILURE:
    return { ...state, searchResult: [] };

  case types.FILTER_RANGE:
    return { ...state, range: action.data };

  default:
    return state;
  }
};

export default flightSearch;
