import React, { Component } from 'react';
import Logo from './assets/logo/logo.png';
import './App.scss';
import data from './data.json';
import Products from './components/Products/Products';
import SortAndFilter from './components/SortAndFilter/SortAndFilter';
import Cart from './components/Cart/Cart';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  constructor(){
    super()
    this.state = {
      products: data.products,
      cartItems: [],
      category: '',
      sort: '',
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

  sortProducts = (e) => {
    const sort = e.target.value;
    this.setState({
      sort: sort,
      products: Array
        .from(this.state.products)
        .sort((a, b) => 
          sort === 'lowest' ?
            a.price - b.price :
          sort === 'highest' ?
            b.price - a.price :
          a.id - b.id
        )
    })
  }

  filterProducts = (e) => {
    const category = e.target.value;
    this.setState(
      category.length > 0 ?
      {
        category: category,
        products: data.products.filter(filteredProducts => filteredProducts.category === category)
      }
      :
      {
        category: category,
        products: data.products
      }
    )
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
                <SortAndFilter
                  count={this.state.products.length}
                  sort={this.state.sort}
                  category={this.state.category}
                  filterProducts={this.filterProducts}
                  sortProducts={this.sortProducts}
                />
                <Products
                  products={this.state.products}
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