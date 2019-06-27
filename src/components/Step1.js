import React, { Component } from 'react';
import { FORM, ACTIONS } from "../constants"

class Step1 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className='form'>
                    <label>
                        {FORM.first_name}
                        <input type="text"></input>
                    </label>
                    <label>
                        {FORM.last_name}
                        <input type="text"></input>
                    </label>
                    <label>
                        {FORM.email}
                        <input type="text"></input>
                    </label>
                    <label>
                        {FORM.confirm_email}
                        <input type="text"></input>
                    </label>
                    <label>
                        {FORM.password}
                        <input type="password"></input>
                    </label>
                    <div className='checkbox'>
                        <input type="checkbox"></input>
                        <p>{FORM.news_agreement}...</p>
                    </div>
                </div>
                <div className='btn' onClick={() => this.props.onChange({step: 2})}>{ACTIONS.create_account}</div>
                <p className='login'>{ACTIONS.already_member} <a href=''>{ACTIONS.sign_in}</a></p>
            </div>
        )
    }
}

export default Step1;