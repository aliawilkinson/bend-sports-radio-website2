import React, { Component } from 'react';
import pic1 from '../assets/images/carousel-images/image_1.jpg';
import '../assets/css/carousel.css';

const SlideOne = (props) => {

    let background = {
        backgroundImage: `url(${pic1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    return <div style={background} className="slide"></div>
}

export default SlideOne;