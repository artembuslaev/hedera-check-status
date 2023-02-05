import React, { useRef } from 'react';
import './App.css';
import { AccountInput } from './components/AccountInput/AccountInput';
import { TestSuites } from './components/TestSuites/TestSuites';

function App() {
  const testSuites = useRef<any>();
  //const callTests = () => testSuites.current.callTests;
  const callTests = (accountId: any, key: any) => {
    return function () {
      if (testSuites.current) {
        testSuites.current.callTests(accountId, key);
      }
    }    
  }
  return (
    <div className="App">
      <AccountInput callTests={callTests}></AccountInput>
      <TestSuites ref={testSuites}></TestSuites>
    </div>
  );
}

export default App;
