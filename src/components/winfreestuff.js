import React from 'react';
import { Link } from 'react-router-dom';
import golf from '../assets/images/golf_promo.jpg';
import foreigner from '../assets/images/foreignerpromo.jpg';
import airshow18 from '../assets/images/carousel-images/airshow18.jpg';
import tssford from '../assets/images/tssford.jpeg';
import '../assets/css/winfreestuff.css';

const WinFreeStuff = () => {
    return (
        <div className="winfreestuff">
            <h1>Win Free Stuff</h1>
            <h3>Give aways every day when you listen live to 94.9fm Sports Radio Central Oregon</h3>
            <div className="promo-card">
                <img src={airshow18} />
                <p>We have your FREE TICKETS to the amazing Air Show of the Cascades August 24 & 25 in Madras.</p>

                <p>In addition to the amazing air show, classic car show, helicopter rides, wall of fire & fireworks and all the other cool attractions, new this year:</p>
                <ul>
                    <li>US Special Operations Command Black Daggers</li>

                    <li>LIVE MUSIC by Countryfied sponsored by Subaru of Bend</li>

                    <li>Immortal Red Baron Theatrical Air Show</li>

                    <li>X Games Stunt BMX Rider Justin Homan</li>

                    <li>Glider Rides</li>

                    <li>Zipline Experience</li>

                    <li>Classic Motorcycle Show</li>

                    <li>On Site Camping</li>

                    <li><a target="blank" href="https://www.cascadeairshow.com">https://www.cascadeairshow.com</a></li>
                </ul>
            </div>
            <div className="promo-card">
                <img src={tssford} />
                <p> Listen all week for your chance to win from TS & S Ford in Madras!</p>
                <p>TS&S Ford, part of the Thomas Family of Dealerships proudly serving Madras and all of Central Oregon!</p>
            </div>
            <div className="promo-card">
                <img src={golf} />
                <p>FOX Sports 949 wants to hook you up with FREE GOLF to some of Central Oregon’s best courses!</p>

                <p>Visit our <a target="blank" href="https://www.facebook.com/FoxSports949">facebook page</a> for your chance to get entered and listen to In The Seats with Cody Mac &amp; BP weekdays 4 – 5 pm to win!</p>

                <p>You could win FREE GOLF with cart for you and three friends.</p>

                <p>Plus you could also win a $100 Gift Card to Pro Golf!</p>
            </div>
        </div>
    )
}

export default WinFreeStuff;