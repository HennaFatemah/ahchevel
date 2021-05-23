import React from 'react';
import Logo from './assets/logo/logo.png';
import './App.scss';

const App = () => {
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
};

export default App;