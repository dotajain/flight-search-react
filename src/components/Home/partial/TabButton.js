import React from 'react';
import PropTypes from 'prop-types';

const TabButton = ({ ...props }) => (
  <button
    className={`tab__nav ${props.active ? 'tab__nav--active' : ''}`}
    type="button"
    onClick={props.onClick}
  >
    {props.label}
  </button>
);

TabButton.propTypes = {
  onClick: PropTypes.func,
  active: PropTypes.bool,
  label: PropTypes.string,
};
export default TabButton;
