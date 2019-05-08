import React from 'react';

export default class PersonsForm extends React.Component {

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input className='form-control col-5 d-inline' autoFocus type='text' name='name' required placeholder='Name' ></input>
                <input className='form-control col-5 d-inline' type='number' name='salary' required placeholder='Monthly salary'></input>

                <button className='btn' type='submit'><i className="fas fa-plus-circle"></i></button>
            </form>
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);

        e.target.reset();

        this.props.addPerson(data.get("name"), data.get("salary"));
    }
}