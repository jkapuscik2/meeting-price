import React from 'react';
import PropTypes from 'prop-types';

export default class ResetBtn extends React.Component {
    render() {
        return <button className='btn btn-light float-right mt-4' onClick={this.props.onReset}>Reset time</button>
    }
}

ResetBtn.propTypes = {
    onReset: PropTypes.func.isRequired
}