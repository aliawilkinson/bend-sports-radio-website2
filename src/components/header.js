import React, { Component } from 'react';
import '../assets/css/header.css';
import logo from '../assets/images/foxlogo-fp.png';

class Header extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="header-container">
                <div className="header-logo">
                    <img src={logo} />
                </div>
            </div>
        )
    }
}

export default Header;