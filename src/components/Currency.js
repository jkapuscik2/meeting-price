import React from 'react';
import PropTypes from 'prop-types';
import CurrencyItem from "./CurrencyItem";

export default class Currency extends React.Component {

    render() {
        return (
            <div className='mt-4 mr-4'>
                {this.props.availableCurrencies.map((currency, idx) => (
                        <CurrencyItem key={idx}
                                      currency={currency}
                                      currentCurrency={this.props.currency}
                                      changeCurrency={this.props.changeCurrency}
                        />
                    )
                )}
            </div>
        )
    }
}

Currency.propTypes = {
    changeCurrency: PropTypes.func.isRequired,
    availableCurrencies: PropTypes.array.isRequired,
    currency: PropTypes.string.isRequired
}