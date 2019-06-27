import React, { Component } from 'react';
import { PAYMENT, ACTIONS } from "../constants"

class Step2 extends Component {
    constructor(props) {
        super(props)
    }

    formattedDate(d = new Date) {
        let month = String(d.getMonth() + 1);
        let day = String(d.getDate());
        const year = String(d.getFullYear());

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return `${day}/${month}/${year}`;
    }

    render() {
        return (
            <div>
                <div className='cards'>
                    <div className='card-item'>
                        <i className='icon-chevron-thin-right'></i>
                        <i className='icon-credit-card right'></i>
                        <span>{PAYMENT.card}</span>
                    </div>
                    <div className='card-item'>
                        <i className='icon-chevron-thin-right'></i>
                        <i className='icon-library right'></i>
                        <span>{PAYMENT.bank}</span>
                    </div>
                    <div className='card-item'>
                        <i className='icon-chevron-thin-right'></i>
                        <i className='icon-paypal right'></i>
                        <span>{PAYMENT.paypal}</span>
                    </div>

                    <div className='card-item'>
                        <i className='icon-chevron-thin-right'></i>
                        <i className='logo right'></i>
                        <span>{PAYMENT.gift_code}</span>
                    </div>

                </div>
                <div className='btn' onClick={() => this.props.onChange({step: 3})}>{ACTIONS.start_subscription}</div>
            </div>
        )
    }
}

export default Step2;