import React, { Component } from 'react'

class Connect extends Component {
    state = { bios: [] }

    getbios = event => {
        if(event.target.value && event.target.value.trim() !== ''){
            fetch(`/bio/search/${event.target.value}`)
                .then(response => response.json())
                .then(bios => this.setState({ bios }))
        }
    }

    render() {
        return (
            <div id="bio-content">
            <label>Search for your Hero!</label>
                <input type="text" onChange={this.getbios} />
                <div id="results">
                    {
                        this.state.bios.map((bio, index) => {
                            return (
                            <div key={index} className="bioObject"> 
                                <h3 className='bio-name'>{bio.name}</h3>
                                <img className='bio-image' src={bio.image.url} alt="bio title" />
                                <p>{ 'Full name: ' }{bio.biography['full-name']}</p>
                                <p>{ 'Connections - ' }</p>
                                <p>{ 'Group Affiliations: ' }{bio.connections['group-affiliation']}</p>
                                <p>{ 'Relatives: ' }{bio.connections['relatives']}</p>
                                <p className='emoji-pic'>{ (bio.biography['alignment'] === 'good') ? 'GOOD' : 'BAD'}</p>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Connect