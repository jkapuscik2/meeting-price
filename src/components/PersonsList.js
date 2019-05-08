import React from 'react';
import PersonsItem from "./PersonsItem";


export default class PersonsList extends React.Component {

    render() {
        return (
            <div className='persons-list'>
                {this.props.personsPresent.map((person, idx) => {
                    return (
                        <PersonsItem
                            key={person["name"] + idx}
                            salary={person["salary"]}
                            name={person["name"]}
                            removePerson={this.props.removePerson}
                            salaryChange={this.props.salaryChange}
                            personIdx={idx}/>
                    )
                })}
            </div>
        )
    }
}