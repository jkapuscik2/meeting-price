import React, {Component} from 'react';
import './App.css';
import TriggerBtn from "./components/TriggerBtn"
import Timer from "./components/Timer"
import Persons from "./components/Persons";
import TotalPrice from "./components/TotalPrice";
import HourPrice from "./components/HourPrice";
import Footer from "./components/Footer";


// Assuming full time and 8h/day work
const SEC_IN_MONTH = 60 * 60 * 8 * 20;
const HOUR_IN_MONTH = 8 * 20;

export default class App extends Component {

    state = {
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
    timerInterval = null;
    AVAILABLE_CURRENCIES = ["PLN", "USD", "EUR"];

    startTimer = () => {
        clearInterval(this.timerInterval);
        this.setState({
            timerStarted: true
        });
        this.timerInterval = setInterval(() => {
            let secondsPassed = this.state.secondsPassed + 1;
            this.setState({
                secondsPassed: secondsPassed,
                meetingPrice: parseFloat((parseFloat(this.state.meetingPrice) + this.countSecPrice()).toFixed(2))
            })
        }, 1000);
    }

    stopTimer = () => {
        this.setState({
            timerStarted: false
        });
        clearInterval(this.timerInterval);
    }

    resetTimer = () => {
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

    countSecPrice = () => {
        return this.getMonthlyPrice() / SEC_IN_MONTH
    }

    countHourPrice = () => {
        return this.getMonthlyPrice() / HOUR_IN_MONTH
    }

    addPerson = (name, salary) => {
        this.setState(
            {
                personsPresent: [{name: name, salary: parseFloat(salary)}, ...this.state.personsPresent]
            }
        )
    }

    salaryChange = (newSalary, personIdx) => {
        let personsPresent = [...this.state.personsPresent];

        personsPresent[personIdx] = {
            name: personsPresent[personIdx].name,
            salary: newSalary
        }

        this.setState({
            personsPresent: personsPresent
        })
    }

    removePerson = (personIdx) => {
        let personsPresent = [...this.state.personsPresent];

        personsPresent.splice(personIdx, 1)

        this.setState({
            personsPresent: personsPresent
        })
    }

    changeCurrency = (newCurrency) => {
        this.setState({
            'currency': newCurrency
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row app">
                    <h1 className='col-12 text-center mt-5 pt-xl-5 mb-3'>How much does your meeting cost?</h1>
                    <div className="app-header col-12 col-xl-7">
                        <div>
                            <TriggerBtn timerStarted={this.state.timerStarted}
                                        stopTimer={this.stopTimer}
                                        startTimer={this.startTimer}/>
                            <Timer secondsPassed={this.state.secondsPassed}/>
                            <TotalPrice totalPrice={this.state.meetingPrice} currency={this.state.currency}/>
                            <HourPrice hourPrice={this.countHourPrice()} currency={this.state.currency}/>
                        </div>
                    </div>

                    <div className="side-form col-12 col-xl-5">
                        <Persons
                            personsPresent={this.state.personsPresent}
                            addPerson={this.addPerson}
                            removePerson={this.removePerson}
                            salaryChange={this.salaryChange}
                        />
                    </div>
                </div>
                <Footer onReset={this.resetTimer}
                        currency={this.state.currency}
                        availableCurrencies={this.AVAILABLE_CURRENCIES}
                        changeCurrency={this.changeCurrency}
                />
            </div>
        );
    }
}