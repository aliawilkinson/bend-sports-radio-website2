

import React, { Component } from 'react';
import '../assets/css/listen-live.css';

class ListenLive extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="audio_div">
                Listen Live <i className="fas fa-headphones"></i>
                <audio controls className="player" preload="false">
                    <source src="https://18543.live.streamtheworld.com/KCOEFMAAC_SC" />
                </audio>
            </div>
        )
    }
};

export default ListenLive;