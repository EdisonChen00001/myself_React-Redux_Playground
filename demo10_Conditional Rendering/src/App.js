import React, { Component } from 'react';
import Demo10 from './Demo10';
import logo from './logo.svg';
import './App.css';
import { Greeting } from './Greeting';
import LoginControl from './LoginControl';
import {Mailbox} from './Mailbox';
import Page from './Page';

class App extends Component {
  render() {
    const messages = ['react','redux','axios','Webpack'];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>Demo10 </div>
        <Demo10 name = 'World ! '/>
        <Greeting isLoggedIn = {false}/>

        <LoginControl />

        <Mailbox unreadMessages={messages}/>
        <Page/>
      </div>
    );
  }
}

export default App;
