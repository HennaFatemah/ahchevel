import React from 'react';
import './Cart.scss';

const Cart = ({ cartItems }) => {
    return (
        <div className="cart">
            <div className="cart__items">
                {cartItems.length === 0 ? 
                    <div className="cart__head">Cart is empty</div>:
                    cartItems.length === 1 ? 
                    <div className="cart__head">You have {cartItems.length} item in the cart</div> :
                    <div className="cart__head">You have {cartItems.length} items in the cart</div>
                }
            </div>
            <ul className="cart__items">
                {cartItems.map(item => {
                    return(
                        <li className="cart__card" key={item.id}>
                            <div className="cart__left">
                                <img className="cart__pic" src={item.image} alt={item.title} />
                            </div>
                            <div className="cart__right">
                                <p className="cart__title">{item.title}</p>
                                <div className="cart__bottom">
                                    <p className="cart__title">{item.count} x ${item.price}</p>
                                    <button className="cart__remove" onClick={()=>this.props.removeFromCart(item)}>Remove</button>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Cart;