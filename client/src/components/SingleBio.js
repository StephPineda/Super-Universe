import React, { Component } from 'react'

class SingleBio extends Component {
  state = { bio: {} }

  componentDidMount(){
    const id = this.props.match.params.id
    fetch(`/${id}`)
      .then(response => response.json())
      .then(singlebio => this.setState({ singlebio }))
  }

  render(){
    // const { Title, Rated, Poster, Plot, imdbRating, Website } = this.state.bio
    return(
      <>
       <h3 className='bio-name'>{bio.name}</h3>
      <img className='bio-image' src={bio.image.url} alt="bio title" />
      {/* <a href={Website} target="_blank">External Site</a> */}
      </>
    )
  }
}

export default SingleBio