import React, { Component } from 'react';
import Field from './field.js';
import '../../assets/css/contact.css';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            message: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
    }
    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit() {
        event.preventDefault();
        this.props.add(this.state);
    }

    reset() {
        this.setState({
            name: '',
            phone: '',
            email: '',
            message: ''
        })
    }
    render() {
        const { name, phone, email, message } = this.state;
        return (
            <div className="contact">
                <h1>Contact Us</h1>
                <h2>Drop us a line, and we will get back to you promptly.</h2>
                <div className="form-cont">
                    <form onSubmit={this.handleSubmit}>
                        <Field
                            name="name"
                            label="name"
                            type="text"
                            value={name}
                            onChange={this.handleInputChange} />
                        <Field
                            name="phone"
                            label="phone"
                            type="text"
                            value={phone}
                            onChange={this.handleInputChange} />
                        <Field
                            name="email"
                            label="email"
                            type="text"
                            value={email}
                            onChange={this.handleInputChange} />
                        <Field
                            name="message"
                            label="message"
                            type="textarea"
                            value={message}
                            onChange={this.handleInputChange} />
                        <div onClick={this.handleSubmit} className="contact-button contact-pg-but">
                            Submit
                        </div>
                        <div onClick={this.reset} className="contact-button clear contact-pg-but">
                            Clear
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;
