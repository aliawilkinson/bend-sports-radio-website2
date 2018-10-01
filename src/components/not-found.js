import React from 'react';
import '../assets/css/contact.css';
import '../assets/css/not-found.css';
import { Link } from 'react-router-dom';
import notfound from '../assets/images/not-found.png';

const NotFound = () => {
    return (
        <div>
            <Link to="/">
                <img className="not-found-pic" src={notfound} />
            </Link>
            <div className="not-found-text">
                <h1>Oops! That page doesn't exist.</h1>
                <h2>Please check out our home page instead.</h2>
                <button className="not-found-btn contact-button contact-pg-but">
                    <Link to="/">
                        Home
                </Link>
                </button>
            </div>
        </div>
    )
}

export default NotFound;