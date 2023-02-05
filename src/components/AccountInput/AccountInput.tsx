import React, { useRef, useState } from 'react';
import './AccountInput.css';

export function AccountInput(props: any) {
    const [account, setAccount] = useState('');
    const [key, setKey] = useState('');

    return (
        <form className="account-form">
            <img src='../images/hedera-logo.png' className="hedera-logo"></img>
            <div className='account-form-group'>
                <img className='account-form-icon' src='../images/account.svg'/>
                <input
                    type="text"
                    className="account-form-input"
                    placeholder=' '
                    value={account} onInput={(e: any) => setAccount(e.target.value)}
                ></input>
                <label
                    className="account-form-label"
                >
                    Account Identifier
                </label>
            </div>
            <div className='account-form-group'>
                <img className='account-form-icon' src='../images/pass.svg'/>
                <input
                    type="password"
                    className="account-form-input"
                    placeholder=' '
                    value={key} onInput={(e: any) => setKey(e.target.value)}
                ></input>
                <label
                    className="account-form-label"
                >
                    Account Private Key
                </label>
            </div>
            <button type='button' className="start-test-btn" onClick={props.callTests(account, key)}>Start Tests</button>
        </form>
    );
}
