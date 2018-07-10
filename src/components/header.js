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
            menuSize: 'expanded-menu-hide'
        };
    }

    showExpandedMenu() {
        if (this.state.menuShow) {
            this.setState({
                menuShow: false,
                menuSize: 'expanded-menu-hide'
            });
        } else {
            this.setState({
                menuShow: true,
                menuSize: 'expanded-menu-show'
            });
        }
    }

    render() {
        return (
            <div className="header-container">
                <div className="header-logo">
                    <img src={logo} />
                </div>
                <Menu className={this.state.menuSize} />
                <BurgerMenu open={this.state.menuShow} onClick={this.showExpandedMenu.bind(this)} />
            </div>
        )
    }
}

export default Header;