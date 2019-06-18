import React, { Component } from 'react';
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
            period: 'Monthly',
            package: 'Basic',
            price: null,
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
        const period = this.state.period === 'Annually' ? 'Annual' : 'Monthly';
        return (
            <div className='packageInfoText'>
                <p className='uppercase'>{this.state.package} {period} package</p>
                <p>Your free month trial will start today.<br/>From {this.formattedDate()} you will pay £{this.state.price} (inc tax). <br/> <span className='bold'>Cancel anytime</span></p>
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
            heading = 'Create Account';
            subheader = this.packageInfo();
        } else if (this.state.step === 2) {
            step = <Step2 onChange={this.handeChange} />
            heading = 'Payment Details';
            subheader = this.packageInfo();
        } else if (this.state.step === 3) {
            step = <Step3 onChange={this.handeChange} package={this.state} />
            heading = "You're in";
            subheader = this.packageInfo();
        } else if (this.state.step === 4) {
            heading = 'YOU ARE ALL SET!';
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
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                        <li>Link</li>
                    </ul>
                </footer>
            </div>
        )
    }
}

export default App;
