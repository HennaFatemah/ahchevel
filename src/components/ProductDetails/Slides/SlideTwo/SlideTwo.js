import './SlideTwo.scss'
import React from 'react';

const SlideTwo = (props) => {
    return (
        <div className="slide-two">
            <img className="slide-two__details-image" src={props.imageOne} alt='product'/>
        </div>
    );
};

export default SlideTwo;