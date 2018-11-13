import React from 'react';
import '../assets/css/backyard-bend.css';
import avid from '../assets/images/holidayFilm/avid.jpg';
import goodys from '../assets/images/holidayFilm/goodys.jpg';
import holidayfb from '../assets/images/holidayFilm/holidayfb.jpg';
import ronald from '../assets/images/holidayFilm/ronald.jpg';
import nashelle from '../assets/images/holidayFilm/nashelle.jpg';
import tanrep from '../assets/images/holidayFilm/tanrep.jpg';
import thc from '../assets/images/holidayFilm/thc.jpg';
import tower from '../assets/images/holidayFilm/tower.jpg';
import '../assets/css/advertise.css';

const HolidayFilmSeries = () => {
    return (
        <div className="byb-master-cont">
            <div className="byb-info-radio-group">
                <div className="title-cont">
                    <a target="_blank" href="https://www.towertheatre.org/">
                        <h1>Goody's Chocolate Holiday Film Series &amp; Toy Drive at the Tower Theater</h1>
                    </a>
                    <a target="_blank" href="https://www.towertheatre.org/">
                        <img id="promo-pic" src={holidayfb}/>
                    </a>
                </div>
                <div className="byb-promo-sponsors-cont">
                    <div>
                        <strong>Goody’s Chocolate Holiday Film Series &amp; Toy Drive is back!</strong>  Join us Fridays at the <strong>Tower Theatre</strong> for:
                        <ul>
                            <li>Planes, Trains &amp;
                            Automobiles 11/23</li>
                            <li>National Lampoon’s Christmas Vacation 11/30</li>
                            <li>Love Actually 12/7</li>
                            <li>Elf 12/14</li>
                        </ul>
                        <br/>
                    </div>
                    <br />
                    <div className="contact-button">
                        Buy Tickets
                    </div>
                    <p>
                        <strong>Bring an unwrapped toy</strong> to help seriously ill children and for your chance to win cool prizes!
                        Help us fill the Ronald McDonald House Charities of Central Oregon’s Toy Chest.
                        <span><a target="_blank" href="https://www.towertheatre.org/tickets-and-events/polar-express">
                            Tower Theater Holiday Film Series</a></span> below, courtesy of our sponsors:
                    </p>

                    <div className="byb-sponsor-imgs-cont">
                        <a target="_blank" href="https://goodyschocolates.com/">
                            <img src={goodys} alt="Goody's" />
                        </a>
                        <a target="_blank" href="https://www.avidcider.com/">
                            <img src={avid} alt="Avid Cider Co" />
                        </a>
                        <a target="_blank" href="https://www.tanrepublic.com/locations/oregon/central-oregon/">
                            <img src={tanrep} alt="Tan Republic" />
                        </a>
                        <a target="_blank" href="https://nashelle.com/">
                            <img src={nashelle} alt="Nashelle" />
                        </a>
                        <a target="_blank" href="http://theherbcenter.net/">
                            <img src={thc} alt="The Herb Center" />
                        </a>
                        <h2>Benefitting:</h2>
                        <a target="_blank" href="https://rmhcoregon.org/houses/bend-house/">
                            <img src={ronald} alt="Ronald McDonald House" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HolidayFilmSeries;