import React from 'react';
import PropTypes from 'prop-types';

export default class PersonsItem extends React.Component {

    state = {
        name: this.props.name,
        salary: this.props.salary
    }

    render() {
        return (
            <div>
                <input className='form-control col-5 d-inline' type='text' placeholder='Name' value={this.state.name} onChange={this.handleNameChange.bind(this)}></input>
                <input className='form-control col-5 d-inline' type='number' placeholder='Salary' value={this.state.salary} onChange={this.handleSalaryChange.bind(this)}></input>

                <button className='btn' onClick={this.removePerson.bind(this)}>
                    <i className="fas fa-times-circle"></i>
                </button>
            </div>
        )
    }

    handleNameChange(e) {
        this.setState({
                name: e.target.value
            }
        );
    }

    handleSalaryChange(e) {
        let newSalary = e.target.value ? parseInt(e.target.value): 0;

        this.setState({
                salary: newSalary
            }
        );
        this.props.salaryChange(newSalary, this.props.personIdx)
    }

    removePerson() {
        this.props.removePerson(this.props.personIdx)
    }
}

PersonsItem.propTypes = {
    name: PropTypes.string.isRequired,
    salary: PropTypes.number.isRequired,
    removePerson: PropTypes.func.isRequired,
    salaryChange: PropTypes.func.isRequired
}