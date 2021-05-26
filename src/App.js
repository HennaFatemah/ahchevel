import React, { Component } from 'react';
import Logo from './assets/logo/logo.png';
import './App.scss';
import Products from './components/Products/Products';
import SortAndFilter from './components/SortAndFilter/SortAndFilter';
import Cart from './components/Cart/Cart';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';

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
            <Route path="/admin" component={Admin}/>
              <Route path="/" component={HomeScreen} exact/>
              <div className="grid-container__content">
                <div className="grid-container__products">
                  <SortAndFilter/>
                  <Products/>
                </div>
                <div className="grid-container__cart">
                  <Cart/>
                </div>
              </div>
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