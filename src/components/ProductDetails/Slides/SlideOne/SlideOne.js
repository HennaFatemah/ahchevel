import './SlideOne.scss'
import React from 'react';

const SlideOne = (props) => {
    return (
        <div className="slide-one">
            <img className="slide-one__details-image" src={props.imageMain} alt='product'/>
        </div>
    );
};

export default SlideOne;