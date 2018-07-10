
import React, { Component } from 'react';
import SlideOne from './carousel-slide1';
import SlideTwo from './carousel-slide2';
import SlideThree from './carousel-slide3';
import RightArrow from './carousel-left-arrow';
import LeftArrow from './carousel-right-arrow';
import '../assets/css/carousel.css';

export default class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            slideCount: 1
        }

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    render() {
        const { slideCount } = this.state;
        return (
            <div className="carousel">

                {this.state.slideCount === 1 ? <SlideOne /> : null}
                {this.state.slideCount === 2 ? <SlideTwo /> : null}
                {this.state.slideCount === 3 ? <SlideThree /> : null}

                <RightArrow previousSlide={this.previousSlide} />
                <LeftArrow nextSlide={this.nextSlide} />

            </div>
        );
    }
    nextSlide() {
        if (this.state.slideCount === 3) {
            this.setState({ slideCount: 1 })
        } else {
            this.setState({ slideCount: this.state.slideCount + 1 })
        }
    }

    previousSlide() {
        if (this.state.slideCount === 1) {
            this.setState({ slideCount: 3 });
        } else {
            this.setState({ slideCount: this.state.slideCount - 1 })
        }
    }
}