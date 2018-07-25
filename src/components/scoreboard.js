import React, { Component } from 'react';
import '../assets/css/scoreboard.css';

class Scoreboard extends Component {

    componentDidMount() {
        const foxScript = document.createElement('script');
        foxScript.src = 'https://b.fssta.com/sta/bigboard/scorestrip/scorestrip-loader-v1.0.0.js';

        this.foxElement.appendChild(foxScript);
    }

    render() {
        return (
            <div>
                <div ref={e => this.foxElement = e} className="scoreboard">
                    <wis-scorestrip ismodule="true"></wis-scorestrip>
                </div>
            </div>
        )
    }
}

export default Scoreboard;
