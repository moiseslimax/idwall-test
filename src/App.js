import './App.css';
import { useEffect, useState } from 'react';



function App() {

  const [isValidated, setIsValidated] = useState(false);

  useEffect(() => {
    const meuID = window.meuID;
    meuID.initialize({
      appId: 'ae0cc027-0ad2-4a87-83a6-3bbb95f91abe',
      onLogin: response => {
        console.log('RESPONSE APP', response)
        }
    });
    console.log("loaded");
 }, []);
  

  return (
    <div className="App">
      <header className="App-header">
        <div>{isValidated ? 'true' : 'false' }</div>
        <div
        id="meuid-login"
        data-size="medium"
        data-theme="white-borderless"
        data-label="autenticar">teste</div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
