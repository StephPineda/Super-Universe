import React, { Component } from "react";
import { Link } from "react-router-dom";



class Stats extends Component {
    state = { stat: [] }

    getstat = event => {
        if (event.target.value && event.target.value.trim() !== '') {
            fetch(`/stats/search/${event.target.value}`)
                .then(response => response.json())
                // .then(stat => this.setState({ stat }))
                .then(stat => console.log(stat))
        }
    }

    render() {
        return (
            <div id="bio-content">
                <label>Search for your Hero!</label>
                <input type="text" onChange={this.getstat} />
                <div id="results">
                    {
                        this.state.stat.map((stat, index) => {
                            return (
                                <div key={index} className="bioObject">
                                    <Link to={`/stat/${stat.id}`}>
                                        <h3 className='bio-name'>{stat.name}</h3>
                                        <img className='bio-image' src={stat.image.url} alt="stat title" />
                                        <p>{'Full name: '}{stat.biography['full-name']}</p>
                                        <p>{'intelligence: '}{stat.powerstat['intelligence']}</p>
                                        <p>{'strength: '}{stat.powerstat['strength']}</p>
                                        <p>{'durability: '}{stat.powerstat['durability']}</p>
                                        <p>{'power: '}{stat.powerstat['power']}</p>
                                        <p>{'combat: '}{stat.powerstat['combat']}</p>




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
