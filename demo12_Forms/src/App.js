import React, { Component } from 'react';
import Demo12 from './Demo12';
import NameForm from './NameForm';
import EssayForm from './EssayForm';
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
        <div>Demo12 </div>
        <Demo12 name = 'World !'/>
        <NameForm/>
        <EssayForm/>
      </div>
    );
  }
}

export default App;
