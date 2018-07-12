import React from 'react';
import '../assets/css/scoreboard.css';


const Scoreboard = () => {
    return (
        <div className="scoreboard">
            <wis-scorestrip ismodule="true"></wis-scorestrip>
            <h1>scoreboard</h1>
            <script src="https://b.fssta.com/sta/bigboard/scorestrip/scorestrip-loader-v1.0.0.js"></script>
        </div>
    );
}

export default Scoreboard;