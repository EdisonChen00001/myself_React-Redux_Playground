import React, { Component } from 'react';
import Demo6 from './Demo6';
import logo from './logo.svg';
import './App.css';
import Parent from './Parent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>Demo6 </div>
        <Demo6 items={['Apple', 'Banana', 'Cranberry']} />
        <Parent />
      </div>
    );
  }
}

export default App;
