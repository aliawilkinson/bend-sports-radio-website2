
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
    { name: 'Tracee Tuesday', img: tracee, show: 'The Fox Sports Report' },
    { name: 'Dan Patrick', img: dan, show: 'The Dan Patrick Show' },
    { name: 'Colin Cowherd', img: colin, show: 'The Herd with Colin Cowherd' },
    { name: 'Doug Gottlieb', img: doug, show: 'The Doug Gottlieb Show' },
    { name: 'Steve Gorman', img: steve, show: 'Steve Gorman Sports' },
    { name: 'Cody Mac and BP', img: codyBP, show: 'In The Seats with Cody Mac & BP' },
    { name: 'JT "The Brick"', img: jt, show: 'Sports with The Brick' },
    { name: 'Jason Smith', img: jason, show: 'The Jason Smith Show' },
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
                <h3>{employee['name']}</h3>
                <div className="person-cont">

                    <img src={employee['img']} />
                    {/* {circularText(employee['name'], 30)} */}
                    {/* {circularText(employee['show'], 32)} */}

                </div>
                <h3>{employee['show']}</h3>
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