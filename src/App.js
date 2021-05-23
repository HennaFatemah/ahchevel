import React, { Component } from 'react';
import Logo from './assets/logo/logo.png';
import './App.scss';
import data from './data.json';

class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <div className="grid-container__head">
          <button className="grid-container__logo"><img className="grid-container__logo-pic" src={Logo} alt="" /></button>
        </div>
        <div className="grid-container__main">
          Jewelry List
        </div>
        <div className="grid-container__foot">
          All Right Is Reserved
        </div>
      </div>
    );
  }
}

export default App;