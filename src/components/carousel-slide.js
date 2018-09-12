import React, { Component } from 'react';
import '../assets/css/carousel.css';

const Slide = (props) => {
    return (
        <a target="blank" href={props.slideNum === 1 ? "https://backyardbend.com/" : null}>
            <div className="slide">
                <img src={props.img} />
            </div>
        </a>)
}

export default Slide;