import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { connect } from 'react-redux';

import SearchBreadcrumb from './SearchBreadcrumb';
import SearchResultCard from './SearchResultCard';

const SearchResult = ({ searchResult, range }) => {
  if (_.isEmpty(searchResult)) {
    return <div className="col col--9 no-result" />;
  }

  const resultItems = {
    returnFlight: null,
    onWardFlight: null,
  };

  _.map(searchResult, result => {
    if (result.result.type === 'return') {
      const rangeData = [];

      _.map(result.result.data, item => {
        if (item.fare > range.min && item.fare < range.max) {
          rangeData.push(item);
        }
      });

      const orderedByFare = _.orderBy(rangeData, ['fare'], ['asc']);
      resultItems.returnFlight = orderedByFare;
    }
    if (result.result.type === 'onward') {
      const rangeData = [];

      _.map(result.result.data, item => {
        if (item.fare > range.min && item.fare < range.max) {
          rangeData.push(item);
        }
      });

      const orderedByFare = _.orderBy(rangeData, ['fare'], ['asc']);
      resultItems.onWardFlight = orderedByFare;
    }
  });

  const filteredResult = [];
  _.map(resultItems.onWardFlight, (item, i) => {
    const data = {
      returnFlight: _.isEmpty(resultItems.returnFlight)
        ? null
        : resultItems.returnFlight[i],
      onWardFlight: item,
    };
    filteredResult.push(data);
  });

  const searchCard = _.map(filteredResult, (item, i) => (
    <SearchResultCard key={i} result={item} />
  ));

  return (
    <div className="col col--9">
      <div className="box">
        <SearchBreadcrumb />

        <div className="search__result">{searchCard}</div>
      </div>
    </div>
  );
};

SearchResult.propTypes = {
  searchResult: PropTypes.array,
  range: PropTypes.object,
};

const mapStateToProps = state => ({
  searchResult: state.flightSearch.searchResult,
  range: state.flightSearch.range,
});
export default connect(mapStateToProps)(SearchResult);
