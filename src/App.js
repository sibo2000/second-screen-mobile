import React, { Component } from 'react';
import { HEADING, PACKAGE, ACTIONS, FOOTER } from "./constants"
import './App.css';

import * as firebase from 'firebase';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAy63WT125rGnTQWr9l6-K5muztkeNKDhM",
    authDomain: "second-screen-signup.firebaseapp.com",
    databaseURL: "https://second-screen-signup.firebaseio.com",
    projectId: "second-screen-signup",
    storageBucket: "",
    messagingSenderId: "772461571571",
    appId: "1:772461571571:web:40d4c4a781736e0c"
};
firebase.initializeApp(firebaseConfig);
const dbStep = firebase.database().ref().child('step')

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 1,
            permonth: null,
        }
        this.handeChange = this.handeChange.bind(this);
        this.back = this.back.bind(this);
        this.scrollTo = this.scrollTo.bind(this);
    }

    handeChange(data) {
        if (data.step === 4) {
            dbStep.set(5)
        }
        this.setState(data)
        window.scrollTo(0, 0)
    }

    componentDidMount() {
        dbStep.set(4)
    }

    formattedDate(d = new Date) {
        let month = String(d.getMonth() + 2);
        let day = String(d.getDate());
        const year = String(d.getFullYear());

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return `${day}/${month}/${year}`;
    }

    packageInfo() {
        return (
            <div className='packageInfoText'>
                <p className='uppercase'>{PACKAGE.title}</p>
                <p>{PACKAGE.subtitle1} {this.formattedDate()} {PACKAGE.subtitle2}<br/> <span className='bold'>{ACTIONS.cancel_anytime}</span></p>
            </div>
        )
    }

    back() {
        return this.setState({step: this.state.step - 1 })
    }

    scrollTo() {
        window.scrollTo(0, 850)
    }

    render() {

        let step,
            heading,
            subheader,
            steps;

        const stepClass = `step${this.state.step}`;

        steps = <div>
                    <p className="steps">Step {this.state.step} of 3</p>
                    <i className='icon-chevron-thin-left'onClick={this.back}></i>
                </div>

        if (this.state.step === 1) {
            step = <Step1 onChange={this.handeChange} />
            heading = HEADING.create_account;
            subheader = this.packageInfo();
        } else if (this.state.step === 2) {
            step = <Step2 onChange={this.handeChange} />
            heading = HEADING.payment_details;
            subheader = this.packageInfo();
        } else if (this.state.step === 3) {
            step = <Step3 onChange={this.handeChange} package={this.state} />
            heading = HEADING.you_are_in;
            subheader = this.packageInfo();
        } else if (this.state.step === 4) {
            heading = HEADING.all_set;
            step = <Step4 onChange={this.handeChange} package={this.state} />
            steps = <p className="steps"></p>
        }

        return (
            <div className={stepClass}>
                <header className="app-header">
                    {steps}
                    <h1>{heading}</h1>
                    {subheader}
                </header>
                {step}

                <footer>
                    <ul>
                        <li>{FOOTER.terms}</li>
                        <li>{FOOTER.privacy}</li>
                        <li>{FOOTER.link}</li>
                    </ul>
                </footer>
            </div>
        )
    }
}

export default App;
