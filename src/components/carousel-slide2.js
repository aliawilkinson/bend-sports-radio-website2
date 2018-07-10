import React, { Component } from 'react';
import pic2 from '../assets/images/carousel-images/image_2.jpeg';

const SlideTwo = (props) => {

    let background = {
        backgroundImage: `url(${pic2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return <div style={background} className="slide"></div>
}

export default SlideTwo;