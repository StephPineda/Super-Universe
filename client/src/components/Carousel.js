import React, { Component } from "react";
import { rain } from '../components';

class Carousel extends Component {
    state = { activeVideo: 0, video: rain.mp4, }
    componentDidMount() {
        setInterval(() => this.startCarousel(), 3000)
    }
    startCarousel = () => {
        const isLast = this.state.activeVideo === this.state.video.length - 1
        const index = isLast ? 0 : this.state.activeImage + 1
        this.setState({ activeImage: index })
    }
    render() {
        const { images, activeImage } = this.state;
        return (
            <div className="slides_container">
                <img className="images" src={images[activeImage]} alt="avenger stuff" />
            </div>
        )
    }
}

export default Carousel;