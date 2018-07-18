
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
        name: 'Tracee Tuesday',
        img: tracee,
        show: 'The Fox Sports Report',
        blurb: "As a multi-talented Central Oregon local and sports fan, Tracee loves to entertain listeners with the Fox Sports News Report. When she is not on air, Tracee is an active Big Sister with Big Brothers Big Sisters of Central Oregon, trying fun restaurants around town, or white water rafting. A sports fan from very young, Tracee was recruited to play flag football in elementary school because of her speed on the field and, was recruited as the only ‘girl’ on the team. Tracee also ran track, played basketball, dodge ball and softball. Originally from the San Francisco Bay Area, Tracee’s favorite teams include: Oakland Raiders, Golden State Warriors, San Jose Sharks and Manchester United F.C.Check out Tracee on air, or you can listen to her show ",
        link: "https://www.facebook.com/pg/FoxSports949/videos/?ref=page_internals"
    },
    {
        name: 'Cody Mac and BP',
        img: codyBP,
        show: 'In The Seats with Cody Mac & BP',
        blurb: "Central Oregon's very own local talk show with sports experts Cody, BP, and sometimes Chuck. Check out more from them on 94.9's facebook page ",
        link: "https://www.facebook.com/FoxSports949/"
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
        blurb: "Dan is a senior writer for Sports Illustrated and hosts Football Night in America (on NBC). He also hosts Sports Jeopardy!, distributed by Crackle. Dan may be best known as an anchor on ESPN's SportsCenter, where he hosted the show with Keith Olberman, Stuart Scott and Rich Eisen from 1989-2006. He hosted The Dan Patrick Show on ESPN Radio from 1999-2007. The Dan Patrick Show also airs on NBCSN and AT&T's Regional ROOT SPORTS channels. Check them out ",
        link: "http://www.danpatrick.com/dan/"
    },
    {
        name: 'Colin Cowherd',
        img: colin,
        show: 'The Herd with Colin Cowherd',
        blurb: "	The Herd with Colin Cowherd is a thought-provoking, opinionated, and topic-driven journey through the top sports stories of the day. Colins unique take on the sports world and unprecedented storytelling ability entertains audiences around the country while making them think, laugh, and immediately react. Check them out ",
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