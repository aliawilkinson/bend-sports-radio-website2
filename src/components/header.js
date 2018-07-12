import React, { Component } from 'react';
import '../assets/css/header.css';
import logo from '../assets/images/foxlogo-fp.png';
import BurgerMenu from './burger-menu';
import Menu from './menu';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor() {
        super();

        this.state = {
            menuShow: false,
            menuSize: 'expanded-menu-hide',
            menuBackground: 'hide'
        };
    }

    showExpandedMenu() {
        if (this.state.menuShow) {
            this.setState({
                menuShow: false,
                menuSize: 'expanded-menu-hide',
                menuBackground: 'hide'
            });
        } else {
            this.setState({
                menuShow: true,
                menuSize: 'expanded-menu-show',
                menuBackground: 'show'
            });
        }
    }

    render() {
        const { menuSize, menuBackground, menuShow } = this.state;
        return (
            <div className="header-container">
                <ul>
                    <li>Listen Live <i className="fas fa-headphones"></i></li>
                    <Link to="./on-air-shows">
                        <li>On Air Shows <i className="fas fa-music"></i></li>
                    </Link>
                    <Link to="./advertise">
                        <li>Advertise <i className="fas fa-bolt"></i></li>
                    </Link>
                    <Link to="/about">
                        <li>About Us <i className="fas fa-users"></i></li>
                    </Link>
                    <Link to="/">
                        <li>Home <i className="fas fa-home"></i></li>
                    </Link>
                </ul>
                <Link to="/">
                    <div className="header-logo">
                        <img src={logo} />
                    </div>
                </Link>
                <Menu size={menuSize} background={menuBackground} />
                <BurgerMenu open={menuShow} onClick={this.showExpandedMenu.bind(this)} />
            </div>
        )
    }
}

export default Header;