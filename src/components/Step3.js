import React, { Component } from 'react';

class Step3 extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

    formattedDate(d = new Date) {
        let month = String(d.getMonth() + 2);
        let day = String(d.getDate() + 1);
        const year = String(d.getFullYear());

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return `${day}/${month}/${year}`;
    }

    formattedDatePlus(d = new Date) {
        let month = String(d.getMonth() + 2);
        let day = String(d.getDate());
        const year = String(d.getFullYear());

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return `${day}/${month}/${year}`;
    }

    render() {
        const period = this.props.package.period === 'Annually' ? 'Annual' : 'Monthly';
        return (

            <div>
                <div className='step4content'>
                    <header>
                        <i className='logo'></i>
                        Your dazn Subscription
                    </header>
                    <ul>
                        <li>Package: <span className='bold'>{this.props.package.package} {period}</span></li>
                        <li>Subscription starts: <span>Today</span></li>
                        <li>First payment date: <span>{this.formattedDate()}</span></li>
                        <li>Free trial ends: <span>{this.formattedDatePlus()}</span></li>
                        <li>Price per month: <span>{this.props.package.price} £/month</span></li>
                        <li>Payment method: <span>Credit card</span></li>
                    </ul>
                </div>
                <p className='btn' onClick={() => this.props.onChange({step: 4})}>Start watching now</p>
            </div>
        )
    }
}

export default Step3;





