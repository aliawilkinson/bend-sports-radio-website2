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
                        <Link to="/on-air-shows">
                            <h1>
                                <i className="fas fa-music"></i>
                                <span> On Air Shows</span>
                            </h1>
                        </Link>
                        <Link to="/win-free-stuff">
                            <h1>
                                <i className="fas fa-trophy"></i>
                                <span> Win Free Stuff</span>
                            </h1>
                        </Link>
                        <Link to="/advertise">
                            <h1>
                                <i className="fas fa-bolt"></i>
                                <span> Advertise</span>
                            </h1>
                        </Link>
                        <Link to="/about">
                            <h1>
                                <i className="fas fa-users"></i>
                                <span> About Us</span>
                            </h1>
                        </Link>
                        <Link to="/">
                            <h1>
                                <i className="fas fa-home"></i>
                                <span> Home</span>
                            </h1>
                        </Link>
                        <Link to="/contact">
                            <h1>
                                <i className="fas fa-address-book"></i>
                                <span>  Contact</span>
                            </h1>
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