import React, { Component } from 'react';
import '../assets/css/carousel.css';

const Slide = (props) => {
    return (<div className="slide">
        <img src={props.img} />
    </div>)
}

export default Slide;