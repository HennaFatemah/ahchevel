import React, { Component } from 'react';
import Logo from './assets/logo/logo.png';
import './App.scss';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Admin from './Screens/Admin';
import HomeScreen from './Screens/User';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="grid-container">
            <div className="grid-container__head">
              <Link to="/" className="grid-container__logo"><img className="grid-container__logo-pic" src={Logo} alt="" /></Link>
            </div>
            <div className="grid-container__main">
              <Link to="/admin" className="grid-container__admin">Admin</Link>
            <Route path="/admin" component={Admin}/>
              <Route path="/" component={HomeScreen} exact/>
            </div>
            <div className="grid-container__foot">
              All Right Is Reserved
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;