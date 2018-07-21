import React from 'react';

export default props => {
    if (props.type === 'textarea') {
        return (
            <div className="form-group">
                <label className="textarea-label">{props.label}</label>
                <textarea {...props} className="message" />
            </div>
        )
    } else {
        return (
            <div className="form-group">
                <label>{props.label}</label>
                <input {...props} className="form-control" />
            </div>
        )
    }
}