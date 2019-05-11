import React from 'react';
import PersonsItem from "./PersonsItem";
import PropTypes from 'prop-types';

export default class PersonsList extends React.Component {

    render() {
        return (
            <div className='persons-list'>
                {this.props.personsPresent.map((person, idx) => (
                        <PersonsItem
                            key={`${person['name']}${idx}`}
                            salary={person["salary"]}
                            name={person["name"]}
                            removePerson={this.props.removePerson}
                            salaryChange={this.props.salaryChange}
                            personIdx={idx}/>
                    )
                )}
            </div>
        )
    }
}

PersonsList.propTypes = {
    personsPresent: PropTypes.array.isRequired,
    removePerson: PropTypes.func.isRequired,
    salaryChange: PropTypes.func.isRequired
}