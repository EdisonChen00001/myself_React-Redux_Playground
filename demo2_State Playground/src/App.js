import React, { Component } from 'react';
import Demo2 from './Demo2';
import Demo3 from './Demo3';
import Demo4 from './Demo4';
import logo from './logo.svg';
import './App.css';

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
        <div><h1>Demo2 </h1>
        <Demo2 /></div>
        <div><h1>Demo3 </h1>
        <Demo3 /></div>
        <div><h1>Demo4 </h1>
        <Demo4 /></div>
      </div>
    );
  }
}

export default App;
