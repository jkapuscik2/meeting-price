import React from 'react';
import PropTypes from 'prop-types';

export default class TotalPrice extends React.Component {

    render() {
        return (
            <h1>
                <strong>{this.props.totalPrice} {this.props.currency}</strong>
            </h1>
        )
    }
}

TotalPrice.propTypes = {
    totalPrice: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
}