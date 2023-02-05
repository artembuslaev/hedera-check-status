import { Client } from '@hashgraph/sdk';
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import './TestSuites.css';

interface ISuite {
    title: string;
    description: string;
    test: (client: any) => void;

}

const testSuites: ISuite[] = [{
    title: "CreateAccount",
    description: "Create Hedera Account",
    test: (client) => {
        console.log(client);
    }
}]

export const TestSuites = React.forwardRef((props, ref) => {
    const [test, setTest] = useState({} as any);
    useEffect(() => {
        console.log((window as any).electron.doThing())
        // const state: any = {};
        // for(let i=1; i< 5; i ++) {
        //     state[i]= true;
        //     let newState = Object.assign({}, state);
        //     setTimeout(() => setTest(newState), (i*1000));
        // }
    }, [])

    useImperativeHandle(ref, () => ({
        async callTests(accountId: any, key: any) {
            //const client = (window as any).versions.hederaClient.forTestnet();
            //client.setOperator(accountId, key);
            //console.log(client,1);
            // for(let suite of testSuites) {
            //     await suite.test(client);
            // }

            const state: any = {};
        for(let i=1; i< 5; i ++) {
            state[i]= true;
            let newState = Object.assign({}, state);
            setTimeout(() => setTest(newState), (i*1000));
        }
        }
    }));

    return (
        <div className="test-suites">
            {/* { testSuites.map(suite => 
                <div className="test-suite">
                    <div className="test-suite-info">
                        <h3 className="title">{suite.title}</h3>
                        <p className="desc">{suite.description}</p>
                    </div>
                </div>)
            } */}
            {test[1] ? (
                <div className="test-suite">
                    <div className="test-suite-info">
                        <h3 className="title">Create Account</h3>
                        <p className="desc">Hedera account will be created</p>
                    </div>
                </div>
            ) : (
                ''
            )}
            {test[2] ? (
                <div className="test-suite">
                    <div className="test-suite-info">
                        <h3 className="title">Create Token</h3>
                        <p className="desc">Hedera token will be created</p>
                    </div>
                </div>
            ) : (
                ''
            )}
            {test[3] ? (
                <div className="test-suite">
                    <div className="test-suite-info">
                        <h3 className="title">Transfer Token</h3>
                        <p className="desc">Token will be transfered from one account to another</p>
                    </div>
                </div>
            ) : (
                ''
            )}
            {test[4] ? (
                <div className="test-suite">
                    <div className="test-suite-info">
                        <h3 className="title">Mint Token</h3>
                        <p className="desc">Mint Token Transaction</p>
                    </div>
                </div>
            ) : (
                ''
            )}
        </div>
    );
});
