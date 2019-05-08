import React from 'react';


export default class TriggerBtn extends React.Component {
    render() {
        if (this.props.timerStarted) {
            return <button className='btn btn-light btn-lg mb-5' onClick={this.props.stopTimer}>Pause</button>
        }else{
            return <button className='btn btn-light btn-lg mb-5' onClick={this.props.startTimer}>Start</button>
        }
    }
}