import React, { Component } from 'react';
import { SUCCESS, ACTIONS } from "../constants"

class Step4 extends Component {
    constructor(props) {
        super(props)
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
        return (
            <div className='allSet'>
                <p>{SUCCESS.subtitle1} {this.formattedDatePlus()} {SUCCESS.subtitle2}</p>
                <button className='btn'>{ACTIONS.get_app}</button>
                <button className='btn secondary'>{ACTIONS.done}</button>
            </div>
        )
    }
}

export default Step4;
