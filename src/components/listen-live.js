

import React, { Component } from 'react';
import '../assets/css/listen-live.css';

class ListenLive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: false,
            icon: "fa fa-play-circle play fa-3x"
        }
    }

    playAudio() {
        this.setState({ playing: !this.state.playing });
        debugger;
        if (this.state.playing) {
            this.player.pause();
            this.setState({
                icon: "fa fa-play-circle play fa-3x"
            })
        } else {
            this.player.play();
            this.setState({
                icon: "fas fa-pause-circle fa-3x"
            })
        }
    }

    render() {
        return (
            <div className="listen-live-cont">
                <p>Listen Live</p>
                <div className="arrow-cont" onClick={this.playAudio.bind(this)}>
                    <i className={this.state.icon} aria-hidden="true"></i>
                </div>
                <div>
                    <audio ref={e => this.player = e} className="player" preload="false">
                        <source src="https://18543.live.streamtheworld.com/KCOEFMAAC_SC" />
                        Your browser does not support the audio element. Please switch to a modern browser (chrome, firefox, edge, etc.)
                    </audio>
                </div>
            </div>
        )
    }
};

export default ListenLive;