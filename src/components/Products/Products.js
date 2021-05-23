import React, { Component } from 'react';
import './Products.scss';

class Products extends Component {
    render() {
        const { products, addToCart } = this.props;
        return (
            <div className="products">
                <ul className="products__main">
                    {products.map(product => {
                        return(
                            <li className="products__card" key={product._id}>
                                <div className="products__card-container">
                                    <div className="products__card-link">
                                        <img className="products__pic" src={product.image} alt={product.title} />
                                        <p className="products__title">
                                            {product.title}
                                        </p>
                                    </div>
                                    <div className="products__card-details">
                                        <p className="products__price">${product.price}</p>
                                        <button
                                            className="products__cart-add"
                                            onClick={()=> addToCart(product)}
                                        >Add To Cart</button>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default Products;