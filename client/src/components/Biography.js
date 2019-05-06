import React, { Component } from 'react'

class Biography extends Component {
    state = { bios: [] }

    getbios = event => {
        fetch(`/bio/search/${event.target.value}`)
            .then(response => response.json())
            .then(bios => this.setState({ bios }))
    }

    render() {
        return (
            <div id="bio-content">
                <input type="text" onChange={this.getbios} />
                <div id="results">
                    {
                        this.state.bios.map((bio, index) => {
                            return (
                                <div key={index} className="bioObject">
                                    <h3>{bio.name}</h3>
                                    <img src={bio.image.url} alt="bio title" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Biography
