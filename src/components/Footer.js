import React from 'react';
import PropTypes from 'prop-types';
import Currency from "./Currency";
import ResetBtn from "./ResetBtn";

export default class Footer extends React.Component {

    render() {
        return (
            <div className='row float-right'>
                <Currency currency={this.props.currency}
                          availableCurrencies={this.props.availableCurrencies}
                          changeCurrency={this.props.changeCurrency}
                />
                <ResetBtn onReset={this.props.onReset}/>
            </div>
        )
    }
}

Footer.propTypes = {
    onReset: PropTypes.func.isRequired,
    changeCurrency: PropTypes.func.isRequired,
    availableCurrencies: PropTypes.array.isRequired,
    currency: PropTypes.string.isRequired
}