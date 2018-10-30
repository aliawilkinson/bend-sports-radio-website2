

import React, { Component } from 'react';
import '../assets/css/listen-live.css';
import radioWave from '../assets/images/radio_wave.gif';

class ListenLive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: false,
            icon: "fa fa-play-circle play fa-4x",
            show: props.show
        }

        this.playAudio = this.playAudio.bind(this);
    }

    playAudio() {
        if (this.state.playing) {
            this.player.pause();
            this.setState({
                icon: "fa fa-play-circle play fa-4x",
                playing: false
            })
        } else {
            this.player.play();
            this.setState({
                icon: "fas fa-pause-circle fa-4x pause",
                playing: true
            })
        }
    }

    handleKeyPress(e) {
        if (e.keyCode == 32) {
            console.log("pressed");
            this.playAudio();
        }
    }

    render() {
        return (
            <div className={`listen-live-cont ${this.props.show}`} onClick={this.playAudio.bind(this)}>
                <h2 className="listen-child listen-text">Listen Live</h2>
                <div className="listen-child radio-wave">
                    <img src={radioWave} />
                </div>
                <div className="listen-child arrow-cont">
                    <i className={this.state.icon} aria-hidden="true"></i>
                </div>
                <input type="text" />

                <div>
                    <audio ref={e => this.player = e} className="player" preload="auto" onKeyDown={document.body.onkeyup = this.handleKeyPress.bind(this)}>
                        <source src="https://18543.live.streamtheworld.com/KCOEFMAAC.aac" />
                        Your browser does not support the audio element. Please switch to a modern browser (chrome, firefox, edge, etc.)
                    </audio>
                </div>
            </div >
        )
    }
};

export default ListenLive;