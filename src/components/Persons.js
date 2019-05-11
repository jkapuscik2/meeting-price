import React from 'react';
import PersonsForm from "./PersonsForm"
import PersonsList from "./PersonsList"
import PropTypes from 'prop-types';

export default class Persons extends React.Component {

    render() {
        return (
            <div>
                <h5 className='mb-4'>Add all present people</h5>

                <PersonsForm addPerson={this.props.addPerson}/>
                <PersonsList personsPresent={this.props.personsPresent}
                             removePerson={this.props.removePerson}
                             salaryChange={this.props.salaryChange}/>
            </div>
        )
    }
}

Persons.propTypes = {
    addPerson: PropTypes.func.isRequired,
    removePerson: PropTypes.func.isRequired,
    salaryChange: PropTypes.func.isRequired,
    personsPresent: PropTypes.array.isRequired
}

