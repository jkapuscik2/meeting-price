import React from 'react';
import PropTypes from 'prop-types';

export default class StartBtn extends React.Component {

    render() {
        return <h4>{this.formatTime(this.props.secondsPassed)}</h4>
    }

    formatTime(totalSeconds) {
        var sec_num = parseInt(totalSeconds, 10);
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);

        return this.formatDigit(hours) + ":" + this.formatDigit(minutes) + ":" + this.formatDigit(seconds);
    }

    formatDigit(digit) {
        return (digit < 10) ? "0" + digit : digit
    }
}

StartBtn.propTypes = {
    secondsPassed: PropTypes.number.isRequired
}