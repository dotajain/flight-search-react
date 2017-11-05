import { actionTypes as types, urls } from '../constants';
import { get } from '../helpers';

export const handleReturnFlight = () => dispatch => {
  dispatch({ type: types.ENABLE_RETURN_FLIGHT });
};

export const handleOneWayFlight = () => dispatch => {
  dispatch({ type: types.DISABLE_RETURN_FLIGHT });
};

export const searchCities = () => dispatch => {
  dispatch({ type: types.SEARCH_CITIES_REQUEST });

  get({
    url: urls.CITIES,
    success: types.SEARCH_CITIES_SUCCESS,
    failure: types.SEARCH_CITIES_FAILURE,
    dispatch,
  });
};

export const handleSearch = ({ ...props }) => dispatch => {
  dispatch({ type: types.SEARCH_REQUEST, data: props });

  const departureDate = props.departureDate.split('-').join('');

  const origin = props.origin.split(' - ')[0];

  const destination = props.destination.split(' - ')[0];

  let url = `${urls.SEARCH}?origin=${origin}&destination=${destination}&departureDate=${departureDate}&adults=${props.passengers}&result.type=onward`;

  if (props.returnDate) {
    const returnDate = props.returnDate.split('-').join('');
    url += `&returnDate=${returnDate}&result.type=return`;
  }

  get({
    url,
    success: types.SEARCH_SUCCESS,
    failure: types.SEARCH_FAILURE,
    dispatch,
  });
};

export const handleFilter = value => dispatch => {
  dispatch({ type: types.FILTER_RANGE, data: value });
};
