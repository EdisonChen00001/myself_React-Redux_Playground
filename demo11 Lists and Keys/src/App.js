import React, { Component } from 'react';
import Demo11 from './Demo11';
import logo from './logo.svg';
import './App.css';
import { NumberList } from './NumberList';
import { NameList } from './NameList';

class App extends Component {
  render() {
    const numbers = [1,2,3,4,5];
    const namelist = ['Tom','Jerry','Timmy', 'David'];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>Demo11 </div>
        <Demo11 name = 'World ! '/>
        <NumberList numbers={numbers}/>
        <NameList namelist = {namelist}/>
      </div>
    );
  }
}

export default App;
