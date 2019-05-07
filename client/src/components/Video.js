import React, { Component } from 'react';

class Video extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videoURL: 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4'
        }
    }

    render() {
        return (
            <div>
                <h1>Explore the Universe</h1>
            </div>,
            <video id="background-video" loop autoPlay>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        )
    }
}

export default Video;