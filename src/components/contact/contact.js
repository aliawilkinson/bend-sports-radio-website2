import React, { Component } from 'react';
import Field from './field';
import '../../assets/css/contact.css';
import '../../assets/css/contact-error.css';
import Error from './error';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: {
                val: '',
                fieldValid: true
            },
            phone: {
                val: '',
                fieldValid: true
            },
            email: {
                val: '',
                fieldValid: true
            },
            message: {
                val: '',
                fieldValid: true
            }
        };
        var work = '';
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: {
                val: value,
                fieldValid: true
            },
        })
    }

    handleSubmit(e) {
        event.preventDefault();
        for (let key in this.state) {
            if (this.state[key].val === '') {
                this.setState({
                    [key]: {
                        val: this.state[key].val,
                        fieldValid: false
                    },
                })
            }
            if (key === 'phone' && !this.state.phone.val.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)) {
                this.setState({
                    [key]: {
                        val: this.state[key].val,
                        fieldValid: false
                    },
                })
            }
            if (key === 'email' && !this.state.email.val.match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)) {
                this.setState({
                    [key]: {
                        val: this.state[key].val,
                        fieldValid: false
                    },
                })
            }
        }
    }

    reset() {
        this.setState({
            name: {
                val: '',
                fieldValid: true
            },
            phone: {
                val: '',
                fieldValid: true
            },
            email: {
                val: '',
                fieldValid: true
            },
            message: {
                val: '',
                fieldValid: true
            }
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
                            label="name "
                            type="text"
                            value={name.val}
                            onChange={this.handleInputChange} />
                        <Error valid={name.fieldValid} field="name" fieldVal={name.val} />
                        <Field
                            name="phone"
                            label="phone"
                            type="text"
                            value={phone.val}
                            onChange={this.handleInputChange} />
                        <Error valid={phone.fieldValid} field="phone" fieldVal={phone.val} />
                        <Field
                            name="email"
                            label="email "
                            type="text"
                            value={email.val}
                            onChange={this.handleInputChange} />
                        <Error valid={email.fieldValid} field="email" fieldVal={email.val} />
                        <Field
                            name="message"
                            label="message"
                            type="textarea"
                            value={message.val}
                            onChange={this.handleInputChange} />
                        <Error valid={message.fieldValid} field="message" fieldVal={message.val} />
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
