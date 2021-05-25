import React, { Component } from 'react';
import Logo from './assets/logo/logo.png';
import './App.scss';
import Products from './components/Products/Products';
import SortAndFilter from './components/SortAndFilter/SortAndFilter';
import Cart from './components/Cart/Cart';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  constructor(){
    super()
    this.state = {
      cartItems: [],
    }
  }

  createOrder = (order) => {
    alert("Need to save order for" + order.name)
  }

  removeFromCart = (product) => {
    const cartItems = Array.from(this.state.cartItems);
    this.setState(
      { cartItems: cartItems.filter(item => item.id !== product.id) }
    );
  }

  addToCart = (product) => {
    const cartItems = Array.from(this.state.cartItems);
    let alreadyInCart = false;
    cartItems.forEach(item => {
      if(item.id === product.id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if(!alreadyInCart){
      cartItems.push({ ...product, count: 1})
    }
    this.setState({ cartItems });
  }

  render() {
    return (
      <Provider store={store}>
        <div className="grid-container">
          <div className="grid-container__head">
            <button className="grid-container__logo"><img className="grid-container__logo-pic" src={Logo} alt="" /></button>
          </div>
          <div className="grid-container__main">
            <div className="grid-container__content">
              <div className="grid-container__products">
                <SortAndFilter/>
                <Products
                  addToCart={this.addToCart} 
                />
              </div>
              <div className="grid-container__cart">
                <Cart
                  cartItems={this.state.cartItems}
                  removeFromCart={this.removeFromCart}
                  createOrder={this.createOrder}
                />
              </div>
            </div>
          </div>
          <div className="grid-container__foot">
            All Right Is Reserved
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;