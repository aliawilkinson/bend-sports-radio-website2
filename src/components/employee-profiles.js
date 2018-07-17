
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
        name: 'Tracee Tuesday', img: tracee, show: 'The Fox Sports Report',
        blurb: "As a multi-talented Central Oregon local and sports fan, Tracee loves to entertain listeners with the Fox Sports News Report. When she is not on air, Tracee is an active Big Sister with Big Brothers Big Sisters of Central Oregon, trying fun restaurants around town, or white water rafting. Check out Tracee on air, or you can listen to her show ",
        link: "https://www.facebook.com/pg/FoxSports949/videos/?ref=page_internals"
    },
    {
        name: 'Cody Mac and BP', img: codyBP, show: 'In The Seats with Cody Mac & BP',
        blurb: "Central Oregon's very own local talk show with sports experts Cody, BP, and sometimes Chuck. Check out more from them on 94.9's facebook page ",
        link: "https://www.facebook.com/FoxSports949/"
    },
    { name: 'Jason Smith', img: jason, show: 'The Jason Smith Show' },
    { name: 'Dan Patrick', img: dan, show: 'The Dan Patrick Show' },
    { name: 'Colin Cowherd', img: colin, show: 'The Herd with Colin Cowherd' },
    { name: 'Doug Gottlieb', img: doug, show: 'The Doug Gottlieb Show' },
    { name: 'Steve Gorman', img: steve, show: 'Steve Gorman Sports' },
    { name: 'JT "The Brick"', img: jt, show: 'Sports with The Brick' }
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