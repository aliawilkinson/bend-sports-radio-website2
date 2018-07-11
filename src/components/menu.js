import React from 'react';
import '../assets/css/burger-menu.css';

const Menu = (props) => {
    return (
        <section>
            <div className={`menu-container ${props.size}`}>
                <h1>Home</h1>
                <h1>On Air Shows</h1>
                <h1>Listen Live</h1>
                <h1>Advertise</h1>
                <h1>About Us</h1>
            </div>
            <div className={`expanded-menu ${props.background}`}>
            </div>
        </section>
    )
};

export default Menu;