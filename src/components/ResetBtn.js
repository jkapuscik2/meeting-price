import React from 'react';


export default class ResetBtn extends React.Component {
    render() {
        return <button className='btn btn-light float-right mt-4' onClick={this.props.onReset}>Reset time</button>
    }
}