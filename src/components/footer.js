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
                </div>
                <div className="social-media-links-cont">
                    <p>
                        Follow us for Sports and Contest Updates:
                    </p>
                    <ul>
                        <li>
                            <a target="blank" href="https://twitter.com/Foxsports949">
                                <p><i className="fab fa-twitter fa-lg"></i>Twitter</p>
                            </a>
                        </li>
                        <li>
                            <a target="blank" href="https://www.facebook.com/FoxSports949/">
                                <p><i className="fab fa-facebook fa-lg"></i>Facebook</p>
                            </a>
                        </li>
                        <li>
                            <a target="blank" href="https://www.instagram.com/foxsports/?hl=en">
                                <p><i className="fab fa-instagram fa-lg"></i>Instagram</p>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="advertise-cont">
                    <a target="blank" href="">
                        <p>Advertise With Us <i className="fas fa-bolt"></i></p><br />
                        <p>See what radio can do for your business today.</p>
                    </a>
                </div>

                <div className="housekeeping-cont">
                    <ul>
                        <li>
                            <a target="blank" href="">
                                <p><i className="fas fa-address-book"></i>Contact Us</p>
                            </a>
                        </li>
                        <li>
                            <a target="blank" href="">
                                <p><i className="fas fa-trophy"></i>Contest Rules</p>
                            </a>
                        </li>
                        <li>
                            <a target="blank" href="">
                                <p><i className="fas fa-users"></i>Employment</p>
                            </a>
                        </li>
                        <li>
                            <a target="blank" href="https://publicfiles.fcc.gov/fm-profile/kice">
                                <p><i className="fas fa-file"></i>FCC Public File</p>
                            </a>
                        </li>
                    </ul>

                </div>
                <div className="offices-cont">
                    <h4>Fox Sports 94.9 Offices</h4>
                    <div>
                        <div>
                            <i className="far fa-building">
                            </i>
                        </div>
                        <p>345 SW Cyber Dr<br />
                            #101<br />
                            Bend, OR 97702
                        </p>
                    </div>
                    <div>
                        <div>
                            <i className="fas fa-phone"></i>
                        </div>
                        <p>(541) 388-3300</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;