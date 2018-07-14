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
                <p className="blurb">Locally owned and operated radio station proudly serving our community in Central Oregon. Check out some community events, stream from our live site, or advertise with us. We'd love to meet you.</p>
                <div className="imgcont">
                    <img src={football} className="landing-icon" />
                    <img src={soccer} className="landing-icon" />
                    <img src={basketball} className="landing-icon" />
                </div>
                <Employees />
            </div>
        )
    };
};

export default LandingPage;