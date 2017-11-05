import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Autosuggest from 'react-autosuggest';

import { searchCities } from '../../../actions';

class AutoSuggestInput extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      suggestions: [],
      cities: [],
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({ value: newValue }, () => {
      if (this.state.value.length >= 2) {
        this.props.searchCities();
      }
    });
  };

  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0
      ? []
      : this.state.cities.filter(
          city =>
            city.cityName.toLowerCase().slice(0, inputLength) === inputValue,
        );
  };

  onSuggestionsFetchRequested = ({ value }) => {
    if (this.state.cities) {
      this.setState({ suggestions: this.getSuggestions(value) });
    }
  };

  onSuggestionsClearRequested = () => {
    this.setState({ suggestions: [] });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.flightSearch.cities) {
      this.setState({ cities: nextProps.flightSearch.cities });
    }
  }

  renderSuggestion = suggestion => (
    <div className="react-autosuggest__result">
      <div className="airport-code">{suggestion.airportCode}</div>
      <div className="text-cntr">
        <div className="city">{`${suggestion.cityName}, ${suggestion.countryName}`}</div>
        <div className="airport">{suggestion.airportName}</div>
      </div>
    </div>
  );

  render() {
    const { value, suggestions } = this.state;
    const { placeholder, id, name, label } = this.props;

    const inputProps = {
      placeholder,
      value,
      onChange: this.onChange,
      id,
      name,
    };

    const getSuggestionValue = suggestion =>
      `${suggestion.airportCode} - ${suggestion.cityName}`;

    return (
      <div className="form__field form__field--text">
        <label htmlFor={name} className="form__label">
          {label}
        </label>
        <div className="form__field--contents">
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            inputProps={inputProps}
          />
        </div>
      </div>
    );
  }
}

AutoSuggestInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  searchCities: PropTypes.func,
  flightSearch: PropTypes.object,
  placeholder: PropTypes.string,
  label: PropTypes.string,
};

const mapStateToProps = state => ({ flightSearch: state.flightSearch });
export default connect(mapStateToProps, { searchCities })(AutoSuggestInput);
