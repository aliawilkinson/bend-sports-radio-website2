import React from 'react';
import '../assets/css/app.css';
import Header from './header';
import Footer from './footer';
import Carousel from './carousel-container';

const App = () => {
    return (
        <div>
            <div className="app">
                <Header />
                <Carousel />
                <Footer />
            </div>
        </div>

    )
};

module.exports = App;
