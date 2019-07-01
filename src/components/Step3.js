import React, { Component } from 'react';
import { SUBSCRIPTION, PAYMENT, DATE, ACTIONS } from "../constants"

class Step3 extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

    formattedDateToday(d = new Date) {
        let month = String(d.getMonth() + 1);
        let day = String(d.getDate() + 1);
        const year = String(d.getFullYear());

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return `${day}/${month}/${year}`;
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
                <p className='btn' onClick={() => this.props.onChange({step: 4})}>{ACTIONS.start_watching}</p>
                <div className='step4content'>
                    <header>
                        {SUBSCRIPTION.about}
                    </header>
                    <ul>
                        <li>{SUBSCRIPTION.starts}: <span>{this.formattedDateToday()}</span></li>
                        <li>{SUBSCRIPTION.first_payment}: <span>{this.formattedDate()}</span></li>
                        <li>{SUBSCRIPTION.trial_date}: <span>{this.formattedDatePlus()}</span></li>
                        <li>{SUBSCRIPTION.monthly_price}: <span>{this.props.package.price} 9.99 €</span></li>
                        <li>{PAYMENT.method}: <span>{PAYMENT.card}</span></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Step3;