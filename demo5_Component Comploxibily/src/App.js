import React, { Component } from 'react';
import Demo5 from './Demo5';
import logo from './logo.svg';
import './App.css';
import Avatar from './Avatar';

class App extends Component {
 
  render() {
    return (
      <div className="App">

        <div>Demo5 </div>
        <Demo5 name = 'World ! '/>
        <Avatar username='pwh'/>
      </div>
    );
  }
}

export default App;
