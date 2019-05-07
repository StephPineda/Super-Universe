import React, { Component } from 'react'

class SingleBio extends Component {
  state = { bio: {}, image: {} }

  componentDidMount(){
    const id = this.props.match.params.id
    fetch(`/api/bio/${id}`)
      .then(response => response.json())
      .then(bio => this.setState({ bio }))
    fetch(`/api/image/${id}`)
      .then(response => response.json())
      .then(image => this.setState({ image }))
  }

  render(){
    const { bio, image } = this.state
    return(
      <>
        <h3 className='bio-name'>{bio.name || 'Loading...'}</h3>
        <img className='bio-image' src={image.url} alt="bio title" />
      </>
    )
  }
}

export default SingleBio
