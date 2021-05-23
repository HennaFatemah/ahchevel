import React, { Component } from 'react';
import Logo from './assets/logo/logo.png';
import './App.scss';
import data from './data.json';
import Products from './components/Products/Products';
import SortAndFilter from './components/SortAndFilter/SortAndFilter';

class App extends Component {
  constructor(){
    super()
    this.state = {
      products: data.products,
      size: '',
      sort: '',
    }
  }
  render() {
    return (
      <div className="grid-container">
        <div className="grid-container__head">
          <button className="grid-container__logo"><img className="grid-container__logo-pic" src={Logo} alt="" /></button>
        </div>
        <div className="grid-container__main">
          <div className="grid-container__content">
            <div className="grid-container__products">
              <SortAndFilter
                count={this.state.products.length}
              />
              <Products
                products={this.state.products}
              />
            </div>
            <div className="grid-container__cart">Cart Items</div>
          </div>
        </div>
        <div className="grid-container__foot">
          All Right Is Reserved
        </div>
      </div>
    );
  }
}

export default App;