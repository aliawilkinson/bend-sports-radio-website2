import React, { Component } from 'react';
import '../assets/css/employment.css';

class Employment extends Component {
    constructor(props) {
        super(props);

        this.state = { emailClicked: false };
        this.displayEmail = this.displayEmail.bind(this);
    }

    displayEmail() {
        const emailClicked = this.state;
        const holdClick = emailClicked;
        if (holdClick.emailClicked === true) {
            this.setState({
                emailClicked: false
            })
        } else {
            this.setState({
                emailClicked: true
            })
        }
    }

    render() {
        return (
            <div className="employment">
                <h1>Employment Opportunities</h1>
                <h2>Bend Radio Group is hiring!</h2>
                <div className="job-opportunity">
                    <h3>Entry Level Account Executive</h3>
                    <h4>Responsibilities include: </h4>
                    <ul>
                        <li>Growing business with existing clients as well as developing new business. </li>
                        <li> Successful candidate must be able to demonstrate an ability to overcome objections and solve problems through strategic and creative thinking. </li>
                        <li>Will be responsible for lead generation through cold calling, direct selling and networking.</li>
                    </ul>
                    <h4>Traits Necessary: </h4>
                    <ul>
                        <li>Candidate must have a competitive nature and the ability to quickly build trust through client focused selling.</li>
                        <li>A college degree and/or Outside Sales experience is a plus.</li>
                        <li>Must be a team player with excellent communication skills</li>
                        <li>Strong selling and closing skills</li>
                        <li>A positive attitude</li>
                        <li>outgoing personality</li>
                        <li>computer skills</li>
                        <li>reliable transportation with valid Oregon Driver’s License or ability to obtain Oregon Driver’s License within 30 days of hire.</li>
                    </ul>
                    <h4>Benefits</h4>
                    <p>The Bend Radio Group offers competitive commissions, paid time off and partial company paid medical insurance.  All inquiries will be kept confidential.</p>
                    <h4>Application</h4>
                    <p>Qualified candidates with a strong desire to control their income are encouraged to forward resume and cover letter to:</p>

                    <p>Human Resources at humanresources@bendradiogroup.com or mail to 345 SW Cyber Dr. #101-103 Bend OR 97702.  NO PHONE CALLS PLEASE.</p>
                    <p>The Bend Radio Group is an Equal Opportunity Employer. (EEOC)</p>



                    <h4>EXPERIENCE REQUIRED:</h4>

                    <p>None</p>

                    <h4>EDUCATION OR TRAINING:</h4>

                    <p>College degree but not required</p>

                    <h4>Contact:</h4>

                    <div>

                        {this.state.emailClicked === false ?
                            <div onClick={this.displayEmail} className="contact-button emp-but">
                                Display Email
                            </div>
                            :
                            <a className="mail-link" href="mailto:humanresources@bendradiogroup.com">
                                <div>humanresources@bendradiogroup.com</div>
                            </a>}
                    </div>
                </div>
            </div>
        )
    }
}

export default Employment;