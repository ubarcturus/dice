import React from 'react';
import logo from './logo.svg';
import './App.css';

function MyWidget(props: { text: string }) {
  return <div>{props.text}</div>;
}

function Roll(props: { dices: string }) {}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <MyWidget text="foobar" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <form action="">
          <input type="text" name="dice" id="dice" />
          <input type="button" value="Würfeln" />
        </form>
      </div>
    </div>
  );
}

export default App;
