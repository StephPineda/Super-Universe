import React, { Component } from "react";
import { image1, image2, image3 } from '../images';

class Carousel extends Component {
    state = { activeImage: 0, images: [image1, image2, image3] }
    componentDidMount() {
        setInterval(() => this.startCarousel(), 3000)
    }
    startCarousel = () => {
        const isLast = this.state.activeImage === this.state.images.length - 1
        const index = isLast ? 0 : this.state.activeImage + 1
        this.setState({ activeImage: index })
    }
    render() {
        const { images, activeImage } = this.state;
        return (
            <div className="slides_container">
                <img src={images[activeImage]} alt="avenger stuff" />
            </div>
        )
    }
}


export default Carousel;