import React, { Component } from "react";
import { Link } from "react-router-dom";



class Stats extends Component {
    state = { stat: [] }

    getstat = event => {
        if (event.target.value && event.target.value.trim() !== '') {
            fetch(`/stats/search/${event.target.value}`)
                .then(response => response.json())
                .then(stat => this.setState({ stat }))

        }
    }

    render() {
        return (
            <div id="bio-content">
                <input type="text" onChange={this.getstat} placeholder="Search the Universe for your hero..." />
                <div id="results">
                    {
                        this.state.stat.map((stat, index) => {
                            return (
                                <div key={index} className="bioObject">
                                    <Link to={`/stat/${stat.id}`}>
                                        <h3 className='bio-name'>{stat.name}</h3>
                                        <img className='bio-image' src={stat.image.url} alt="stat title" />
                                        <p>{'Full name: '}{stat.biography['full-name']}</p>
                                        <p>{'intelligence: '}{stat.powerstats['intelligence']}</p>
                                        <p>{'strength: '}{stat.powerstats['strength']}</p>
                                        <p>{'durability: '}{stat.powerstats['durability']}</p>
                                        <p>{'power: '}{stat.powerstats['power']}</p>
                                        <p>{'combat: '}{stat.powerstats['combat']}</p>
                                        <p className='emoji-pic'>{(stat.biography['alignment'] === 'good') ? 'GOOD' : 'BAD'}</p>
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

export default Stats
