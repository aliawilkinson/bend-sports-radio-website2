
import React from 'react';
import '../assets/css/employee-profiles.css';
import tracee from '../assets/images/tracee.jpg';


var employeeProfiles = [
    { name: 'Tracee', img: tracee, show: 'Tracee Tuesdays' },
    { name: 'Dan', img: tracee, show: 'The Dan Patrick Show' },
    { name: 'Colin', img: tracee, show: 'The Herd' }
]

const Employees = () => {

    const circularText = (txt, radius) => {
        var finalElements = [];
        txt = txt.split("");
        var deg = 100 / txt.length,
            origin = 0;

        txt.forEach((ea) => {
            var index = Math.random();
            index++;
            var style = {
                height: `${radius}px`,
                position: `absolute`,
                transform: `rotate(${origin}deg)`,
                transformOrigin: `0 100%`,
                backgroundColor: 'blue',
                zIndex: '1',
                top: '0',
                right: '50%'
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
            <div key={index} className="person-cont">
                <img src={employee['img']} />
                {circularText(employee['name'], 100)}
                {circularText(employee['show'], 100)}
            </div>
        )
    });

    return (
        <div>
            <h2>Our Team</h2>
            {employees}
        </div>
    )
}

export default Employees;