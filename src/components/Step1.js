import React, { Component } from 'react';

class Step1 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className='form'>
                    <label>
                        First name
                        <input type="text"></input>
                    </label>
                    <label>
                        Last name
                        <input type="text"></input>
                    </label>
                    <label>
                        Email
                        <input type="text"></input>
                    </label>
                    <label>
                        Confirm email
                        <input type="text"></input>
                    </label>
                    <label>
                        Password
                        <input type="password"></input>
                    </label>
                    <div className='checkbox'>
                        <input type="checkbox"></input>
                        <p>Yes, please send me emails with exclusive sports, product updates and DAZN news</p>
                    </div>
                </div>
                <div className='btn' onClick={() => this.props.onChange({step: 2})}>Create account</div>
                <p className='login'>Already a member? <a href=''>Sign in</a></p>
            </div>
        )
    }
}

export default Step1;





