import React, { Component } from 'react';
import Carousel from './carousel-container';
import '../assets/css/landingpage.css';
import football from '../assets/images/football.png';
import soccer from '../assets/images/soccer.png';
import basketball from '../assets/images/basketball.jpg';
import Employees from './employee-profiles';
import Scoreboard from './scoreboard';
import ListenLive from './listen-live';

class LandingPage extends Component {
    render() {
        return (
            <div className="landing-page">
                <Carousel />
                <p className="blurb">Your locally owned and operated radio station. Proudly delivering sports to our Central Oregon community.</p>
                <div className="imgcont">
                    {/* <img src={football} className="landing-icon" />
                    <img src={soccer} className="landing-icon" />
                    <img src={basketball} className="landing-icon" /> */}
                    <hr />
                    <hr />
                </div>
                <Employees />
            </div>
        )
    };
};

export default LandingPage;