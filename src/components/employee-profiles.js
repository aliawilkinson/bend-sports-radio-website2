
import React from 'react';
import '../assets/css/employee-profiles.css';
import tracee from '../assets/images/employees/tracee.jpg';
import dan from '../assets/images/employees/dan-patrick.jpg';
import colin from '../assets/images/employees/colin-cowherd.jpg';
import doug from '../assets/images/employees/doug-gottlieb.jpg';
import steve from '../assets/images/employees/steve-gorman.jpg';
import codyBP from '../assets/images/employees/intheseats.jpg';
import jt from '../assets/images/employees/jt-thebrick.jpg';
import jason from '../assets/images/employees/jason-smith.jpg';

var employeeProfiles = [
    {
        name: 'Cody Mac and BP',
        img: codyBP,
        show: 'In The Seats with Cody Mac & BP',
        blurb: "“Your not so local, local sports show” brings local sports and and National sports with a Central Oregon view.  In the Seats is your show for Beavers, Ducks Trailblazers and all sport you care about in Oregon. Lots of giveaways and a fast pace makes this the fastest hour in sports radio.",
        link: "https://www.facebook.com/FoxSports949/"
    },
    {
        name: 'Tracee Tuesday',
        img: tracee,
        show: 'The Fox Sports Report',
        blurb: "As a Oregon local and sports fan, Tracee loves to entertain listeners with the Fox Sports News Report. A sports fan from very young age, Tracee ran track and played basketball and softball. Originally from the San Francisco Bay Area, Tracee’s favorite teams include: Oakland Raiders and Golden State Warriors. Check our her page .",
        link: "https://www.facebook.com/pg/FoxSports949/videos/?ref=page_internals"
    },
    {
        name: 'Jason Smith',
        img: jason,
        show: 'The Jason Smith Show',
        blurb: "Emmy-award winning producer and NFL Network host Jason Smith brings his extensive experience in Sports Talk entertainment to late nights on FOX Sports Radio, providing analysis on the day in sports and updates on the games in play, while engaging in entertaining conversations with listeners to close out the day and prepare for tomorrow. Check them out ",
        link: "https://foxsportsradio.iheart.com/featured/the-jason-smith-show/"
    },
    {
        name: 'Dan Patrick',
        img: dan,
        show: 'The Dan Patrick Show',
        blurb: "The Dan Patrick Show features the most extensive A-list interviews from the world of sports and offers Dan's unique perspective and dry sense of humor on the top stories and personalities of the day. Check them out ",
        link: "http://www.danpatrick.com/dan/"
    },
    {
        name: 'Colin Cowherd',
        img: colin,
        show: 'The Herd with Colin Cowherd',
        blurb: "The Herd with Colin Cowherd is opinionated and topic-driven journey through the top sports stories of the day. Colin storytelling ability entertains while making listeners think, laugh, and immediately react. Check them out ",
        link: "https://foxsportsradio.iheart.com/featured/the-herd-with-colin-cowherd/about/"
    },
    {
        name: 'Doug Gottlieb',
        img: doug,
        show: 'The Doug Gottlieb Show',
        blurb: "Doug Gottlieb is a former NCAA collegiate and professional (USBL) basketball player, as well as a basketball analyst and sports talk radio host. Check them out ",
        link: "https://en.wikipedia.org/wiki/Doug_Gottlieb"
    },
    {
        name: 'Steve Gorman',
        img: steve,
        show: 'Steve Gorman Sports',
        blurb: "Featuring The Black Crowes drummer Steve Gorman, Steve Gorman SPORTS! will deliver unique sports commentary and entertainment, including Gormans perspective on whats happening in sports, music and pop culture. For years, his secret to staying sane on the road was an obsessive devotion to watching and discussing sports, and now this sports fan wants to bring the fans into the conversation. Check them out ",
        link: "https://foxsportsradio.iheart.com/featured/steve-gorman-sports/about/"
    },
    {
        name: 'JT "The Brick"',
        img: jt,
        show: "Sports with The Brick",
        blurb: "You won't find a more fast-paced, high energy show at night than J .T. The Brick. A former stock broker, J.T. parlayed his dream of becoming a Sports Talk host into a full-time radio job after winning Jim Rome's inaugural 'Smack-Off' championship title in 1995. Using his outspoken, big, booming voice, J.T. hosts radio's most interactive show as he fields calls from listeners across the country. Joined each day by co-host Tomm Looney, their outspoken dialogue is second to none, as they bring a new attitude to nighttime sports talk radio. Check them out ",
        link: "https://foxsportsradio.iheart.com/featured/jt-the-brick/"
    }
]

const Employees = () => {

    const circularText = (txt, radius) => {
        var finalElements = [];
        txt = txt.split("");
        var deg = 60 / txt.length,
            origin = 20;

        txt.forEach((ea) => {
            var index = Math.random();
            index++;
            var style = {
                height: `${radius}vw`,
                position: `absolute`,
                transform: `rotate(${origin}deg)`,
                transformOrigin: `0 100%`,
                zIndex: '1',
                top: '-5vw',
                right: '45%',
                textShadow: '0 0 3px #FF0000, 0 0 5px #0000FF',
                fontSize: '1em'
            };

            origin += deg;
            return (
                finalElements.push(<p key={index} style={style}>{ea}</p>)
            )
            index++;
        });
        return (finalElements);
    }

    const employees = employeeProfiles.map((employee, index) => {
        return (
            <div key={index} className="employee-cont">
                <a target="blank" href={employee['link']}>
                    <h3>{employee['name']}</h3>
                    <div className="person-cont">

                        <img src={employee['img']} />
                        {/* {circularText(employee['name'], 30)} */}
                        {/* {circularText(employee['show'], 32)} */}

                    </div>
                    <h3>{employee['show']}</h3>
                    <p>{employee['blurb']}
                        <span className="link">{employee['link'] ? "here." : null}
                        </span>
                    </p>
                </a>
            </div>
        )
    });

    return (
        <div className="employees">
            <h2>Our On-Air Shows</h2>
            {employees}
        </div>
    )
}

export default Employees;