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
                <ul>
                    <li>Listen Live <i class="fas fa-headphones"></i></li>
                    <li>On Air Shows <i class="fas fa-music"></i></li>
                    <li>Advertise <i class="fas fa-bolt"></i></li>
                    <li>About Us <i class="fas fa-users"></i></li>
                    <a href="">
                        <li>Home <i class="fas fa-home"></i></li>
                    </a>
                </ul>
                <div className="header-logo">
                    <img src={logo} />
                </div>
                <Menu size={menuSize} background={menuBackground} />
                <BurgerMenu open={menuShow} onClick={this.showExpandedMenu.bind(this)} />
            </div>
        )
    }
}

export default Header;