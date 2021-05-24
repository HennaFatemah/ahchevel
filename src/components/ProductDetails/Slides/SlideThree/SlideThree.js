import './SlideThree.scss'
import React from 'react';

const SlideThree = (props) => {
    return (
        <div className="slide-three">
            <img className="slide-three__details-image"  src={props.imageTwo} alt='product'/>
        </div>
    );
};

export default SlideThree;