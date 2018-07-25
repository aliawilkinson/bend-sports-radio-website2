import React, { Component } from 'react';
import pic1 from '../assets/images/intheseats_promo.png';
import '../assets/css/carousel.css';

const SlideOne = (props) => {
    return (<div className="slide">
        <img src={pic1} />
    </div>)
}

export default SlideOne;