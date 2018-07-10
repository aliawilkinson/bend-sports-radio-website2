import React, { Component } from 'react';
import pic2 from '../assets/images/carousel-images/image_2.jpg';
import '../assets/css/carousel.css';

const SlideTwo = (props) => {

    let background = {
        backgroundImage: `url(${pic2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return <div style={background} className="slide"></div>
}

export default SlideTwo;