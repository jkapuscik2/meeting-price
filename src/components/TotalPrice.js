import React from 'react';


export default class TotalPrice extends React.Component {

    render() {
        return (
            <h1>
                <strong>{this.props.totalPrice} {this.props.currency}</strong>
            </h1>
        )
    }
}