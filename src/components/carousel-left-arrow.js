import React, { Component } from 'react';
import '../assets/css/carousel.css';

const LeftArrow = (props) => {
  return (
    <div onClick={props.previousSlide} className="back-arrow">
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
    </div>
  );
}

export default LeftArrow;