import React from 'react';
import PropTypes from 'prop-types';

const FlightSearchInfo = ({ result }) => (
  <div className="col">
    <div className="flight">
      <small className="flight__number">{`${result.airline.code} - ${result
        .airline.number}`}</small>
      <div className="flight__airport-code">{`${result.origin
        .airportCode} > ${result.destination.airportCode}`}</div>

      <div className="flight__time">
        <span className="flight__time--label">Depart:</span>
        <span className="flight__time--value">{result.origin.time}</span>
      </div>

      <div className="flight__time">
        <span className="flight__time--label">Arrive:</span>
        <span className="flight__time--value">{result.destination.time}</span>
      </div>
    </div>
  </div>
);

FlightSearchInfo.propTypes = {
  result: PropTypes.object,
};

export default FlightSearchInfo;
