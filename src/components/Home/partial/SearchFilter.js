import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';
import { connect } from 'react-redux';

import { handleFilter } from '../../../actions';

class SearchFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: { min: 0, max: 10000 },
    };
  }

  componentWillMount() {
    this.props.handleFilter(this.state.value);
  }

  onChange = value => {
    this.setState({ value }, () => {
      this.props.handleFilter(this.state.value);
    });
  };

  render() {
    return (
      <div className="box">
        <div className="box__card">
          <h2>Refine Flight Search</h2>
          <div className="range__slider">
            <InputRange
              step={500}
              maxValue={10000}
              minValue={0}
              value={this.state.value}
              onChange={this.onChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
SearchFilter.propTypes = {
  handleFilter: PropTypes.func,
};

// export default SearchFilter;

const mapStateToProps = state => ({ state });
export default connect(mapStateToProps, { handleFilter })(SearchFilter);
