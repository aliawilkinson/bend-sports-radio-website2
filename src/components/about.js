import React from 'react';
import photo1 from '../assets/images/in_studio1.jpg';
import '../assets/css/about.css';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about">
            <img src={photo1} />

            <div className="about-cont">
                <h1>About</h1>
                <br />
                FOX Sports 94.9 Central Oregon gives listeners the opportunity to step away from their everyday stresses of life and immerse themselves into the world of sports entertainment. FOX Sports 94.9 is THE destination for the ultimate sports fan, featuring legendary sports talk hosts and sports fan's audio nirvana in Central Oregon!
                <br />
                <br />
                We are a locally owned and operated radio station.
                <br />
                <br />
                <div className="contact-button about-but">
                    <Link to="/contact">
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default About;