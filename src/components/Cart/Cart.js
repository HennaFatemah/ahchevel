import React, { Component } from 'react';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { Fade } from "react-awesome-reveal";
import './Cart.scss';
import {connect} from 'react-redux';
import {removeFromCart} from '../../actions/cartActions';
// import {createOrder, clearOrder} from '../../actions/orderActions';

class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            name:'',
            address:'',
            showCheckout: false,
        }
    }

    onProceed = () => {
        this.setState({showCheckout: true})
    }

    handleEmailInput = (e) => {
        this.setState({email: e.target.value})
    }

    handleNameInput = (e) => {
        this.setState({name: e.target.value})
    }

    handleAddressInput = (e) => {
        this.setState({address: e.target.value})
    }

    createOrder = (e) => {
        e.preventDefault();
        const order = {
            email: this.state.email,
            name: this.state.name,
            address: this.state.address,
            cartItems: this.props.cartItems,
        }
        this.props.createOrder(order)
    }

    render() {
        const { cartItems, removeFromCart } = this.props;
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
                <Fade direction="left">
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
                                            <button className="cart__btn" onClick={()=> removeFromCart(item)}>Remove</button>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </Fade>
                {cartItems.length !== 0 && 
                    <div className="cart__total">
                        <p className="cart__calc">Total: ${cartItems.reduce((a, b)=> a + b.price * b.count, 0)}</p>
                        <button className="cart__btn" onClick={this.onProceed}>Proceed</button>
                    </div>
                }
                {this.state.showCheckout &&
                    <CheckoutForm
                        onProceed={this.state.showCheckout}
                        createOrder={this.createOrder}
                        handleEmailInput={this.handleEmailInput}
                        handleNameInput={this.handleNameInput}
                        handleAddressInput={this.handleAddressInput}

                    />
                }
            </div>
        );
    }
}

export default connect((state) =>({
    cartItems: state.cart.cartItems
}),
    {removeFromCart}
)(Cart);