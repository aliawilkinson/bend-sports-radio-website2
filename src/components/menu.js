import React from 'react';
import '../assets/css/burger-menu.css';

const Menu = (props) => {
    console.log(props);
    return (
        <section>
            <div className={`menu-container ${props.size}`}>
            </div>
            <div className={`expanded-menu ${props.background}`}>
            </div>
        </section>
    )
};

export default Menu;