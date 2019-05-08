import React from 'react';
import TriggerBtn from "./components/TriggerBtn"
import Timer from "./components/Timer"
import './App.css';
import Persons from "./components/Persons";
import TotalPrice from "./components/TotalPrice";
import ResetBtn from "./components/ResetBtn";
import HourPrice from "./components/HourPrice";

// Assuming full time and 8h/day work
const SEC_IN_MONTH = 60 * 60 * 8 * 20;
const HOUR_IN_MONTH = 8 * 20;

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            timerStarted: false,
            meetingPrice: 0,
            secondsPassed: 0,
            currency: "PLN",
            personsPresent: [
                {
                    "name": "Jon",
                    "salary": 20000
                },
                {
                    "name": "Johan",
                    "salary": 20000
                }
            ]
        };
        this.timerInterval = null;
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row app">
                    <h1 className='col-12 text-center mt-5 pt-xl-5'>How much does your meeting cost?</h1>
                    <div className="app-header col-12 col-xl-7">
                        <div>
                            <TriggerBtn timerStarted={this.state.timerStarted}
                                        stopTimer={this.stopTimer.bind(this)}
                                        startTimer={this.startTimer.bind(this)}/>
                            <Timer secondsPassed={this.state.secondsPassed}/>
                            <TotalPrice totalPrice={this.state.meetingPrice} currency={this.state.currency}/>
                            <HourPrice hourPrice={this.countHourPrice()} currency={this.state.currency}/>
                        </div>
                    </div>

                    <div className="side-form col-12 col-xl-5">
                        <Persons
                            personsPresent={this.state.personsPresent}
                            addPerson={this.addPerson.bind(this)}
                            removePerson={this.removePerson.bind(this)}
                            salaryChange={this.salaryChange.bind(this)}
                        />
                    </div>
                </div>
                <ResetBtn onReset={this.resetTimer.bind(this)}/>
            </div>
        );
    }

    startTimer() {
        clearInterval(this.timerInterval);
        this.setState({
            timerStarted: true
        });
        this.timerInterval = setInterval(() => {
            let secondsPassed = this.state.secondsPassed + 1;
            this.setState({
                secondsPassed: secondsPassed,
                meetingPrice: (parseFloat(this.state.meetingPrice) + this.countSecPrice()).toFixed(2)
            })
        }, 1000);
    }

    stopTimer() {
        this.setState({
            timerStarted: false
        });
        clearInterval(this.timerInterval);
    }

    resetTimer() {
        this.setState({
            timerStarted: false,
            secondsPassed: 0,
            meetingPrice: 0
        });
        clearInterval(this.timerInterval);
    }

    getMonthlyPrice = () => {
        let total = 0;
        for (let person in this.state.personsPresent) {
            total += parseFloat(this.state.personsPresent[person]["salary"])
        }
        return total;
    }

    countSecPrice() {
        return this.getMonthlyPrice() / SEC_IN_MONTH
    }

    countHourPrice() {
        return this.getMonthlyPrice() / HOUR_IN_MONTH
    }

    addPerson(name, salary) {
        this.setState(
            {
                personsPresent: [{name: name, salary: salary}, ...this.state.personsPresent]
            }
        )
    }

    salaryChange(newSalary, personIdx) {
        let personsPresent = [...this.state.personsPresent];

        personsPresent[personIdx] = {
            name: personsPresent[personIdx].name,
            salary: newSalary
        }

        this.setState({
            personsPresent: personsPresent
        })
    }

    removePerson(personIdx) {
        let personsPresent = [...this.state.personsPresent];

        personsPresent.splice(personIdx, 1)

        this.setState({
            personsPresent: personsPresent
        })
    }

}