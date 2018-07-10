import React, { Component } from 'react';
import '../assets/css/footer.css';
import logo from '../assets/images/foxlogo-fp.png';

class Footer extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={logo} />
                    <i className="fab fa-twitter fa-lg"></i>
                    <i className="fab fa-facebook fa-lg"></i>
                    <i className="fab fa-instagram fa-lg" aria-hidden="true"></i>
                    <h6><i className="fab fa-buysellads fa-lg"></i>Advertise With Us</h6>
                </div>
            </div>
        )
    }
}

export default Footer;