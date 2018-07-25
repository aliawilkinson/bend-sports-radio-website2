import React, { Component } from 'react';
import '../assets/css/footer.css';
import logo from '../assets/images/foxlogo-fp.png';
import { Link } from 'react-router-dom';

class Footer extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="footer-container">
                <Link to="/">
                    <div className="footer-logo">
                        <img src={logo} />
                    </div>
                </Link>
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
                            <a target="blank" href="https://www.instagram.com/sports94.9fm/">
                                <p><i className="fab fa-instagram fa-lg"></i>Instagram</p>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="advertise-cont">
                    <Link to="/advertise">
                        <p>Advertise With Us <i className="fas fa-bolt"></i></p><br />
                        <p>See what radio can do for your business today.</p>
                    </Link>
                </div>

                <div className="housekeeping-cont">
                    <ul>
                        <li>
                            <Link to="/contact">
                                <p><i className="fas fa-address-book"></i>Contact Us</p>
                            </Link>
                        </li>
                        <li>
                            <a target="blank" href="http://s3-us-west-2.amazonaws.com/bendradiocloud/wp-content/uploads/2016/09/19174303/generalcontestrules.pdf">
                                <p><i className="fas fa-trophy"></i>Contest Rules</p>
                            </a>
                        </li>
                        <li>
                            <Link to="/employment">
                                <p><i className="fas fa-users"></i>Employment</p>
                            </Link>
                        </li>
                        <li>
                            <a target="blank" href="https://publicfiles.fcc.gov/fm-profile/kice">
                                <p><i className="fas fa-file"></i>FCC Public File</p>
                            </a>
                        </li>
                        <li>
                            <a target="blank" href="https://www1.eeoc.gov/employers/upload/eeoc_self_print_poster.pdf">
                                <p><i className="fas fa-file"></i>EEOC</p>
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
                        <p>
                            <a target="blank" href="https://www.google.com/maps/place/345+SW+Cyber+Dr+%23101,+Bend,+OR+97702/@44.0468535,-121.3280864,17z/data=!3m1!4b1!4m5!3m4!1s0x54b8c7d3d2e062d1:0xb84f128570c138ac!8m2!3d44.0468497!4d-121.3258977">
                                345 SW Cyber Dr<br />
                                #101<br />
                                Bend, OR 97702
                            </a>
                        </p>
                    </div>
                    <div>
                        <div>
                            <i className="fas fa-phone"></i>
                        </div>
                        <p>
                            <a href="tel:+1-541-388-3300">(541) 388-3300</a>
                        </p>
                    </div>
                </div>
                <div className="copyright-text">
                    <h6>Copyright @ 2018 Sunriver Broadcasting, LLC. All rights reserved</h6>
                </div>
            </div>
        )
    }
}

export default Footer;