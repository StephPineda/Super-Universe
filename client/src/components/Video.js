import React, { Component } from 'react';
import ReactPlayer from 'react-player'

class Video extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videoURL: ''
        }
    }

    render() {
        return (
            <div className="video">
                <ReactPlayer url='https://www.youtube.com/watch?v=X7SiuQxhAjg' playing="true" muted="true" controls="true" />
            </div>
        )
    }
}

export default Video;