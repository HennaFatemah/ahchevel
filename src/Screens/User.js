import React, { Component } from 'react';
import SortAndFilter from "../components/SortAndFilter/SortAndFilter";
import Products from "../components/Products/Products";
import Cart from "../components/Cart/Cart";

class User extends Component {
    render() {
        return (
            <div className="grid-container__content">
                <div className="grid-container__products">
                    <SortAndFilter/>
                    <Products/>
                </div>
                <div className="grid-container__cart">
                    <Cart/>
                </div>
            </div>
        );
    }
}

export default User;