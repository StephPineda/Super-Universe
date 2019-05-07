import React, { Component } from 'react'
import { Link } from "react-router-dom";

class SearchBar extends Component {
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
                                    <Link to={`/${bio.id}`}>
                                        <h3 className='bio-name'>{bio.name}</h3>
                                        <img className='bio-image' src={bio.image.url} alt="bio title" />
                                        <p>{ 'Full name: ' }{bio.biography['full-name']}</p>
                                        <p>{ 'Alias: ' }{bio.biography.aliases[0]}</p>
                                        <p>{ 'Alter Ego: ' }{bio.biography['alter-egos']}</p>
                                        <p>{ 'First Appearance: ' }{bio.biography['first-appearance']}</p>
                                        <p className='emoji-pic'>{ (bio.biography['alignment'] === 'good') ? 'GOOD' : 'BAD'}</p>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SearchBar