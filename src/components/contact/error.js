import React, { Component } from 'react';


const Error = (props) => {
    console.log('props from error comp', props.field, props.valid);
    var num = 1;
    if (props.valid === false) {
        switch (props.field) {
            case 'name':
                return (
                    <div className="error-msg error-name">Please fill out a valid {props.field}.</div>
                )
            case 'phone':
                return (
                    <div className="error-msg error-phone">Please fill out a valid {props.field} number.</div>
                )
            case 'email':
                return (
                    <div className="error-msg error-email">Please fill out a valid {props.field}.</div>
                )
            case 'message':
                return (
                    <div className="error-msg error-message">Please write a valid {props.field} here.</div>
                )
        }
    } else {
        return null;
    }

}

export default Error;