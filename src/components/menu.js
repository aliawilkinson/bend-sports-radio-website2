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
                    <div className="links-cont">
                        <Link to="/listen-live">
                            <h1><i className="fas fa-headphones"></i> Listen Live</h1>
                        </Link>
                        <Link to="/on-air-shows">
                            <h1><i className="fas fa-music"></i> On Air Shows</h1>
                        </Link>
                        <Link to="/advertise">
                            <h1><i className="fas fa-bolt"></i> Advertise</h1>
                        </Link>
                        <Link to="/about">
                            <h1><i className="fas fa-users"></i> About Us</h1>
                        </Link>
                        <Link to="/">
                            <h1><i className="fas fa-home"></i> Home</h1>
                        </Link>
                    </div>
                </div>
                <div className={`expanded-menu ${this.props.background}`}>
                </div>
            </section>
        )
    }
};

export default Menu;