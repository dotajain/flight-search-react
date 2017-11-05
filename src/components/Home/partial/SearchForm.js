import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import { connect } from 'react-redux';

import {
  handleReturnFlight,
  handleOneWayFlight,
  handleSearch,
} from '../../../actions';

import SearchFilter from './SearchFilter';
import TabButton from './TabButton';
import AutoSuggestInput from './AutoSuggestInput';

const SearchForm = ({
  handleReturnFlight,
  handleOneWayFlight,
  flightSearch,
  handleSearch,
}) => {
  const minDate = moment().format('YYYY-MM-DD');

  let returnForm;
  if (flightSearch.returnFlight) {
    returnForm = (
      <div className="form__field form__field--date">
        <label htmlFor="returnDate" className="form__label">
          Return
        </label>
        <div className="form__field--contents">
          <input type="date" name="returnDate" id="returnDate" min={minDate} />
        </div>
      </div>
    );
  }

  const onSearch = e => {
    e.preventDefault();

    const {
      origin: { value: origin },
      destination: { value: destination },
      departureDate: { value: departureDate },
      passengers: { value: passengers },
    } = e.target;

    let returnDate;
    if (e.target.returnDate) {
      returnDate = e.target.returnDate.value;
    }

    handleSearch({
      origin,
      destination,
      departureDate,
      returnDate,
      passengers,
    });
  };

  return (
    <div className="col col--3 search__form">
      <div className="box">
        <div className="tab box__tab">
          <TabButton
            onClick={handleOneWayFlight}
            label="One Way"
            active={!returnForm}
          />
          <TabButton
            onClick={handleReturnFlight}
            label="Return"
            active={!!returnForm}
          />
        </div>

        <div className="box__card box__card--tab">
          <form className="form" onSubmit={onSearch}>
            <AutoSuggestInput
              name="origin"
              id="origin"
              placeholder="Enter Origin City"
              label="Origin City"
            />

            <AutoSuggestInput
              name="destination"
              id="destination"
              placeholder="Enter Destination City"
              label="Destination City"
            />

            <div className="date__picker">
              <div className="form__field form__field--date">
                <label htmlFor="departureDate" className="form__label">
                  Departure
                </label>
                <div className="form__field--contents">
                  <input
                    type="date"
                    name="departureDate"
                    id="departureDate"
                    min={minDate}
                    defaultValue={minDate}
                  />
                </div>
              </div>
              {returnForm}
            </div>
            <div className="form__field form__field--select">
              <label htmlFor="passengers" className="form__label">
                Passangers
              </label>
              <div className="form__field--contents">
                <select name="passengers" id="passangers">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            <div className="form__btn--pannel">
              <button>Search</button>
            </div>
          </form>
        </div>
      </div>
      <SearchFilter />
    </div>
  );
};

SearchForm.propTypes = {
  handleOneWayFlight: PropTypes.func,
  handleReturnFlight: PropTypes.func,
  handleSearch: PropTypes.func,
  flightSearch: PropTypes.object,
};

const mapStateToProps = state => ({ flightSearch: state.flightSearch });
export default connect(mapStateToProps, {
  handleReturnFlight,
  handleOneWayFlight,
  handleSearch,
})(SearchForm);
