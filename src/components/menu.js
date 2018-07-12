import React, { Component } from 'react';
import '../assets/css/burger-menu.css';
import { Link } from 'react-router-dom';

class Menu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section>
                <div className={`menu-container ${this.props.size}`}>
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
                <div className={`expanded-menu ${this.props.background}`}>
                </div>
            </section>
        )
    }
};

export default Menu;