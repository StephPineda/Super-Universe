

// const Biography = () => <div>THIS IS THE BIOGRAPHY PAGE</div>;

// export default Biography;

import React, { Component } from 'react'

// import Navbar from '../components/Navbar'
// import './Biography.css'

class Biography extends Component {
    state = { bios: [] }

    getbios = event => {
        fetch(`https://superheroapi.com/api/1955038897933393/search/${event.target.value}`)
            .then(response => response.json())
            .then(bios => this.setState({ bios }))
    }



    //    const axios = require("axios")

    //    app.get("/api/demo", (request, response) => {
    //     axios.get(`https://superheroapi.com/api/1955038897933393/search/Superman`)
    //       .then(superResponse => response.json(superResponse.data || []) )
    //    })       

    render() {
        return (
            <>
                {/* <Navbar /> */}
                <h1>Hello from the MovieList</h1>
                <input type="text" onChange={this.fetchbio} />
                <div id="results">
                    {
                        this.state.bios.map(bio => {
                            return (
                                // <Link to={`//${movie.imdbID}`}>
                                <div className="movie">
                                    <h3>{bio.Title}</h3>
                                    <img src={bio.Poster} />
                                </div>
                                // { </Link> }
                            )
                        })
                    }
                </div>
            </>
        )
    }
}

export default Biography