import React from 'react';
import '../assets/css/burger-menu.css';

const Menu = (props) => {
    return (
        <div className={`expanded-menu ${props.className}`}>
            <div className="menu-container">
            </div>
        </div>
    )
};

export default Menu;