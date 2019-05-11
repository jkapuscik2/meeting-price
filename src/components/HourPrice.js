import React from 'react';
import PropTypes from 'prop-types';

const HourPrice = ({currency, hourPrice}) => (
    <h3>
        <strong>{Math.round(hourPrice * 100) / 100} {currency} / 1h</strong>
    </h3>
);

HourPrice.propTypes = {
    currency: PropTypes.string.isRequired,
    hourPrice: PropTypes.number.isRequired
};

export default HourPrice