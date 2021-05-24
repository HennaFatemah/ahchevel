import './SlideFour.scss'
import React from 'react';

const SlideFour = (props) => {
    return (
        <div className="slide-four">
            <img className="slide-four__details-image"  src={props.imageThree} alt='product'/>
        </div>
    );
};

export default SlideFour;