import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Carousel from './carousel-container';

class LandingPage extends Component {
    render() {
        return (
            <div className="landing-page">
                <Header />
                <Carousel />
                <Footer />
            </div>
        )
    };
};

export default LandingPage;