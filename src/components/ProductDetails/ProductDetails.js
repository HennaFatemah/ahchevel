import React from 'react';
import Slider from './Slider';
import './ProductDetails.scss'

const ProductDetails = ({product}) => {
    return (
        <div className="details">
            <div className="details__window">
                <Slider 
                    className="details__part" 
                    imageMain = {product.imageMain}
                    imageOne = {product.imageOne}
                    imageTwo = {product.imageTwo}
                    imageThree = {product.imageThree}
                />
            </div>
        </div>
    );
};
export default ProductDetails;