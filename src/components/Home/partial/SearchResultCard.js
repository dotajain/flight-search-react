import React from 'react';
import PropTypes from 'prop-types';

import FlightSearchInfo from './FlightSearchInfo';

const SearchResultCard = ({ result }) => {
  let totalPrice = result.onWardFlight.fare;

  let renderOnwardCard;
  let renderReturnCard;

  if (result.onWardFlight) {
    renderOnwardCard = <FlightSearchInfo result={result.onWardFlight} />;
  }

  if (result.returnFlight) {
    totalPrice += result.returnFlight.fare;
    renderReturnCard = <FlightSearchInfo result={result.returnFlight} />;
  }

  const toCurrency = number =>
    Number(number)
      .toFixed(0)
      .replace(/(\d)(?=(\d{3}))/g, '$1,');

  return (
    <div className="box box__card">
      <div className="row">
        <div className="col">
          <div className="price"> Rs. {toCurrency(totalPrice)} </div>

          <div className="row">
            {renderOnwardCard}
            {renderReturnCard}
          </div>
        </div>
        <div className="col search__result--flight-logo">
          <div className="box">
            <div className="flight__logo">
              <div className="flight__logo--box">Flight Logo</div>
            </div>
            <button className="flight--btn">Book this flight</button>
          </div>
        </div>
      </div>
    </div>
  );
};

SearchResultCard.propTypes = {
  result: PropTypes.object,
};

export default SearchResultCard;
