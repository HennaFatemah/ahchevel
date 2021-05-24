import React from 'react';
import Slider from './Slider';
import './ProductDetails.scss'

const ProductDetails = ({ product, addToCart, closeWindow }) => {
    return (
        <div className="details">
            <div className="details__window">
                <button className="details__btn" onClick={()=>closeWindow()}>x</button>
                <Slider 
                    className="details__part" 
                    imageMain = {product.image}
                    imageOne = {product.imageOne}
                    imageTwo = {product.imageTwo}
                    imageThree = {product.imageThree}
                />
                <div>
                    <p>{product.title}</p>
                    <p>{product.category}</p>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <button
                        className="details__btn"
                        onClick={()=>{
                        addToCart(product)
                        closeWindow()
                        }}
                    >Add To Cart</button>
                </div>

            </div>
        </div>
    );
};
export default ProductDetails;