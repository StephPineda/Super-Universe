import React, { Component } from 'react'

class Singlestats extends Component {
    state = { stat: {}, image: {} }

    componentDidMount() {
        const id = this.props.match.params.id
        fetch(`/api/stat/${id}`)
            .then(response => response.json())
            .then(stat => this.setState({ stat }))
        fetch(`/api/image/${id}`)
            .then(response => response.json())
            .then(image => this.setState({ image }))
    }

    render() {
        const { stat, image } = this.state

        return (
            <>
                <h3 className='stat-name'>{stat.name}</h3>
                <img className='stat-image' src={image.url} alt="stat title" />
                {/* <h3 {stat.powerstat}</h3> */}
                {/* <a href={Website} target="_blank">External Site</a> */}
            </>
        )
    }
}

export default Singlestats