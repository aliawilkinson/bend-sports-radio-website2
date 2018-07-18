
import React, { Component } from 'react';
import SlideOne from './carousel-slide1';
import SlideTwo from './carousel-slide2';
import SlideThree from './carousel-slide3';
import SlideFour from './carousel-slide4';
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

    autoNextSlide() {
        if (this.state.slideCount === 4) {
            return 1
        } else {
            return this.state.slideCount + 1
        }
    }

    autoSlideChange() {
        this.setState({ slideCount: this.autoNextSlide() });
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.autoSlideChange(),
            5000
        );
    }

    handleDotClick(data) {
        this.setState({ slideCount: data });
    }

    nextSlide() {
        if (this.state.slideCount === 4) {
            this.setState({ slideCount: 1 })
        } else {
            this.setState({ slideCount: this.state.slideCount + 1 })
        }
    }

    previousSlide() {
        if (this.state.slideCount === 1) {
            this.setState({ slideCount: 4 });
        } else {
            this.setState({ slideCount: this.state.slideCount - 1 })
        }
    }

    render() {
        const { slideCount } = this.state;
        return (
            <div className="carousel">
                {slideCount === 1 ? <SlideOne /> : null}
                {slideCount === 2 ? <SlideTwo /> : null}
                {slideCount === 3 ? <SlideThree /> : null}
                {slideCount === 4 ? <SlideFour /> : null}

                <RightArrow previousSlide={this.previousSlide} />
                <LeftArrow nextSlide={this.nextSlide} />
                <div className={`carousel-dot ${slideCount === 1 ? 'dark-dot' : ''}`}
                    data="1"
                    onClick={() => this.handleDotClick(1)}>
                </div>
                <div className={`carousel-dot ${slideCount === 2 ? 'dark-dot' : ''}`}
                    data="1"
                    onClick={() => this.handleDotClick(2)}>
                </div>
                <div className={`carousel-dot ${slideCount === 3 ? 'dark-dot' : ''}`}
                    data="1"
                    onClick={() => this.handleDotClick(3)}>
                </div>
                <div className={`carousel-dot ${slideCount === 4 ? 'dark-dot' : ''}`}
                    data="1"
                    onClick={() => this.handleDotClick(4)}>
                </div>
                {/* <i class="fas fa-pause"></i> */}
            </div>
        );
    }
}