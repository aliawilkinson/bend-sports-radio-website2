import React, { Component } from 'react';
import Field from './field';
import '../../assets/css/contact.css';
import '../../assets/css/contact-error.css';
import Error from './error';
import axios from 'axios';


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
            },
            messageSent: null
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

    dataValidation() {
        let isValid = true;
        for (let key in this.state) {
            if (this.state[key]) {
                if (this.state[key].val === '') {
                    isValid = false;
                    this.setState({
                        [key]: {
                            val: this.state[key].val,
                            fieldValid: false
                        },
                    })
                }
                // debugger; //if the name or message fields come back blank, say it's invalid
                // if (key === 'name' || key === 'message' &&
                //     this.state.name.val.match(/^\s*$/)) {
                //     isValid = false;
                //     this.setState({
                //         [key]: {
                //             val: this.state[key].val,
                //             fieldValid: false
                //         },
                //     })
                // }
                if (key === 'phone' && !this.state.phone.val.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)) {
                    isValid = false;
                    this.setState({
                        [key]: {
                            val: this.state[key].val,
                            fieldValid: false
                        },
                    })
                }
                if (key === 'email' && !this.state.email.val.match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)) {
                    isValid = false;
                    this.setState({
                        [key]: {
                            val: this.state[key].val,
                            fieldValid: false
                        },
                    })
                }
            }
        }
        return isValid;
    }

    handleSubmit(e) {
        event.preventDefault();
        this.dataValidation();
        const isValid = this.dataValidation();
        if (!isValid) return;

        const { name, phone, email, message } = this.state;
        axios({
            method: "POST",
            url: "/api/send-email",
            data: {
                name: name,
                phone: phone,
                email: email,
                message: message
            }
        }).then((response) => {
            console.log('from handle submit: ', response.data.success);
            if (response.data.success === true) {
                this.setState({
                    messageSent: true
                });
                this.reset();
            } else if (response.data.success === false) {
                this.setState({
                    messageSent: false
                });
            }
        })
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
                    {this.state.messageSent === false ? <div className="send-fail">Message failed to send.</div> : null}
                    {this.state.messageSent === true ? <div className="send-success">Message sent! We will get back to you as soon as possible.</div> : null}
                    <form onSubmit={this.handleSubmit.bind(this)} id="contact" method="post">
                        <Field
                            name="name"
                            id="name"
                            label="name "
                            type="text"
                            value={name.val}
                            onChange={this.handleInputChange} />
                        <Error valid={name.fieldValid} field="name" fieldVal={name.val} />
                        <Field
                            name="phone"
                            id="phone"
                            label="phone "
                            type="text"
                            value={phone.val}
                            onChange={this.handleInputChange} />
                        <Error valid={phone.fieldValid} field="phone" fieldVal={phone.val} />
                        <Field
                            name="email"
                            id="email"
                            label="email "
                            type="text"
                            value={email.val}
                            onChange={this.handleInputChange} />
                        <Error valid={email.fieldValid} field="email" fieldVal={email.val} />
                        <Field
                            name="message"
                            id="message"
                            label="message "
                            type="textarea"
                            value={message.val}
                            onChange={this.handleInputChange} />
                        <Error valid={message.fieldValid} field="message" fieldVal={message.val} />
                    </form>
                    <button type="submit" onClick={this.handleSubmit} className="contact-button contact-pg-but">
                        Submit
                        </button>
                    <button onClick={this.reset} className="contact-button clear contact-pg-but">
                        Clear
                    </button>
                    {this.state.messageSent === false ? <div className="send-fail">Message failed to send. Please call (541)388-3300 for more info.</div> : null}
                    {this.state.messageSent === true ? <div className="send-success">Message sent! We will get back to you as soon as possible.</div> : null}
                </div>
            </div>
        )
    }
}

export default Contact;
