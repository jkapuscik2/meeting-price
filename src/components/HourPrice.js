import React from 'react';


export default class HourPrice extends React.Component {

    render() {
        return (
            <h3>
                <strong>{Math.round(this.props.hourPrice * 100) / 100} {this.props.currency} / 1h</strong>
            </h3>
        )
    }
}