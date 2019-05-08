import React, { Component } from 'react'

class Singlestats extends Component {
    state = { stats: {} }

    componentDidMount() {
        const id = this.props.match.params.id
        fetch(`/${id}`)
            .then(response => response.json())
            .then(singlestats => this.setState({ singlestats }))
    }

    render() {
        // const {  } = this.state.stats
        return (
            <>
                <h3 className='stats-name'>{stats.name}</h3>
                <img className='stats-image' src={stats.image.url} alt="stats title" />
                {/* <a href={Website} target="_blank">External Site</a> */}
            </>
        )
    }
}

export default Singlestats