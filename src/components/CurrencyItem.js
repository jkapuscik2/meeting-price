import React from 'react';
import PropTypes from 'prop-types';

export default class CurrencyItem extends React.Component {

    handleClick = () => {
        this.props.changeCurrency(this.props.currency)
    }

    render() {
        return (
            <button
                className={`btn btn-outline-secondary btn-lg ${this.props.currentCurrency === this.props.currency ? 'active' : ''}`}
                onClick={this.handleClick}>
                {this.props.currency}
            </button>
        )
    }
}

CurrencyItem.propTypes = {
    changeCurrency: PropTypes.func.isRequired,
    currentCurrency: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
}