import React from 'react';
import { Link } from 'react-router-dom';
import golf from '../assets/images/golf_promo.jpg';
import foreigner from '../assets/images/foreignerpromo.jpg';
import tssford from '../assets/images/tssford.jpeg';
import '../assets/css/winfreestuff.css';

const WinFreeStuff = () => {
    return (
        <div className="winfreestuff">
            <h1>Win Free Stuff</h1>
            <h3>Give aways every day when you listen live to 94.9fm Sports Radio Central Oregon</h3>
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