

import React, { Component } from 'react';
import '../assets/css/listen-live.css';

class ListenLive extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="audio_div">
                <h2>
                    <p>Listen Live</p>
                    <div className="arrow-cont">
                        <i class="fa fa-play-circle play fa-3x" aria-hidden="true"></i>
                    </div>
                </h2>
                <div className="audio-ojb-wrap">
                    <audio controls="play" className="player" preload="false">
                        <source src="https://18543.live.streamtheworld.com/KCOEFMAAC_SC" />
                        Your browser does not support the audio element. Please switch to a modern browser (chrome, firefox, edge, etc.)
                    </audio>
                </div>
            </div>
        )
    }
};

export default ListenLive;