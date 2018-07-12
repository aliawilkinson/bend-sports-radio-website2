import React, { Component } from 'react';
import pic4 from '../assets/images/carousel-images/bend.jpg';
import '../assets/css/carousel.css';

const SlideFour = (props) => {

    let background = {
        backgroundImage: `url(${pic4})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    return <div style={background} className="slide"></div>
}

export default SlideFour;