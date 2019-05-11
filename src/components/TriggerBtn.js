import React from 'react';
import PropTypes from 'prop-types';

const TriggerBtn = ({timerStarted, startTimer, stopTimer}) =>
    <button className='btn btn-light btn-lg mb-5'
            onClick={timerStarted ? stopTimer : startTimer}>{timerStarted ? 'Pause' : 'Start'}</button>


TriggerBtn.propTypes = {
    timerStarted: PropTypes.bool.isRequired,
    startTimer: PropTypes.func.isRequired,
    stopTimer: PropTypes.func.isRequired
}

export default TriggerBtn