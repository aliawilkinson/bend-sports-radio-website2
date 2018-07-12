import React, { Component } from 'react';
import '../assets/css/header.css';
import logo from '../assets/images/foxlogo-fp.png';
import BurgerMenu from './burger-menu';
import Menu from './menu';

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
                <div className="header-logo">
                    <img src={logo} />
                </div>
                <ul>
                    <li>Listen Live</li>
                    <li>On Air Shows</li>
                    <li>Advertise</li>
                    <li>About Us</li>
                    <li>Home</li>
                </ul>
                <Menu size={menuSize} background={menuBackground} />
                <BurgerMenu open={menuShow} onClick={this.showExpandedMenu.bind(this)} />
            </div>
        )
    }
}

export default Header;