import React from 'react';
import '../assets/css/burger-menu.css';
import { Link } from 'react-router-dom';

const Menu = (props) => {
    return (
        <section>
            <div className={`menu-container ${props.size}`}>
                <Link to="/listen-live">
                    <h1>Listen Live</h1>
                </Link>
                <Link to="/on-air-shows">
                    <h1>On Air Shows</h1>
                </Link>
                <Link to="/advertise">
                    <h1>Advertise</h1>
                </Link>
                <Link to="/about">
                    <h1>About Us</h1>
                </Link>
                <Link to="/">
                    <h1>Home</h1>
                </Link>
            </div>
            <div className={`expanded-menu ${props.background}`}>
            </div>
        </section>
    )
};

export default Menu;