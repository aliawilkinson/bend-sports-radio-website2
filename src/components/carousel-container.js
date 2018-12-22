
import React, { Component } from 'react';
import Slide from './carousel-slide';
import RightArrow from './carousel-left-arrow';
import LeftArrow from './carousel-right-arrow';
import '../assets/css/carousel.css';
import inTheSeats from '../assets/images/intheseats_promo.jpg';
import localRadio from '../assets/images/carousel-images/local.jpg';
import golfPromo from '../assets/images/carousel-images/golf.jpg';
import osu from '../assets/images/carousel-images/osu.jpg';
import tokyo from '../assets/images/carousel-images/tokyo.jpg';
import backyardBend from '../assets/images/carousel-images/backyard_bend.jpg';
import winCar from '../assets/images/carousel-images/win-car.png';

const pictures = [backyardBend, osu, localRadio];

class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            slideCount: 1
        }

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    autoNextSlide() {
        if (this.state.slideCount === pictures.length) {
            return 1
        } else {
            return this.state.slideCount + 1
        }
    }

    autoSlideChange() {
        this.setState({ slideCount: this.autoNextSlide() });
    }

    startSlides() {
        this.timerID = setInterval(
            () => this.autoSlideChange(),
            5000
        );
    }

    componentDidMount() {
        this.startSlides();
        this.createDots();
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    createDots() {
        var dots = pictures.map((item, index) => {
            return
            (<div className={`carousel-dot ${slideCount === i ? 'dark-dot' : ''}`}
                data="1"
                onClick={() => this.handleDotClick(i)}>
            </div>)
        })
    }

    handleDotClick(data) {
        this.setState({ slideCount: data });
    }

    nextSlide() {
        if (this.state.slideCount === pictures.length) {
            this.setState({ slideCount: 1 })
        } else {
            this.setState({ slideCount: this.state.slideCount + 1 })
        }
    }

    previousSlide() {
        if (this.state.slideCount === 1) {
            this.setState({ slideCount: pictures.length });
        } else {
            this.setState({ slideCount: this.state.slideCount - 1 })
        }
    }

    render() {
        const { slideCount } = this.state;
        return (
            <div className="carousel">
                <Slide img={pictures[this.state.slideCount - 1]} slideNum={slideCount} />

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
            </div>
        );
    }
}

export default Carousel;