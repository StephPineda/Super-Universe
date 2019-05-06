import React, { Component } from 'react'

// import Navbar from '../components/Navbar'
// import './Biography.css'

class Biography extends Component {
    state = { bios: [] }

    getbios = event => {
        fetch(`/bio/search/${event.target.value}`)
            .then(response => console.log(response))
        //.then(response => response.json())
        //.then(bios => this.setState({ bios }))
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
                <p></p>
                <input type="text" onChange={this.getbios} />
                <div id="results">
                    {
                        this.state.bios.map((bio, index) => {
                            return (
                                // <Link to={`//${movie.imdbID}`}>
                                <div key={index} className="bioObject">
                                    <h3>{bio.Title}</h3>
                                    <img src={bio.Poster} alt="bio title" />
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