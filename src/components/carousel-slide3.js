import React, { Component } from 'react';
import pic3 from '../assets/images/carousel-images/image_3.jpeg';
import '../assets/css/carousel.css';

const SlideThree = (props) => {

    let background = {
        backgroundImage: `url(${pic3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return <div style={background} className="slide"></div>
}

export default SlideThree;