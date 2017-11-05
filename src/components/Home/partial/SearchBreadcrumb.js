import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import moment from 'moment';

import { connect } from 'react-redux';

const SearchBreadcrumb = ({ searchRequest }) => {
  const origin = _.split(searchRequest.origin, ' - ')[1];
  const destination = _.split(searchRequest.destination, ' - ')[1];

  let returnCity;
  let returnDate;

  if (searchRequest.returnDate) {
    returnCity = <span>{origin}</span>;
    returnDate = (
      <div className="search__dates--item">
        <span className="search__dates--label">Return:</span>{' '}
        <span className="search__dates--value">
          {moment(searchRequest.returnDate).format('DD-MMM-YYYY')}
        </span>
      </div>
    );
  }

  return (
    <div className="search__result--header">
      <div className="breadcrumbs">
        <span>{origin}</span>
        <span>{destination}</span>
        {returnCity}
      </div>
      <div className="box search__dates">
        <div className="search__dates--item">
          <span className="search__dates--label">Depart:</span>{' '}
          <span className="search__dates--value">
            {moment(searchRequest.departureDate).format('DD-MMM-YYYY')}
          </span>
        </div>
        {returnDate}
      </div>
    </div>
  );
};

SearchBreadcrumb.propTypes = {
  searchRequest: PropTypes.object,
};

const mapStateToProps = state => ({
  searchRequest: state.flightSearch.searchRequest,
});
export default connect(mapStateToProps)(SearchBreadcrumb);
