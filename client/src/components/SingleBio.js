import React, { Component } from 'react'

class SingleBio extends Component {
  state = { bio: {}, image: {} }

  componentDidMount() {
    const id = this.props.match.params.id
    fetch(`/api/bio/${id}`)
      .then(response => response.json())
      .then(bio => this.setState({ bio }))
    fetch(`/api/image/${id}`)
      .then(response => response.json())
      .then(image => this.setState({ image }))
  }

  render() {
    const { bio, image } = this.state
    return (
      <div id="results">
        <div className="bioObject">
            <h3 className='bio-name'>{bio.name} || Loading...</h3>
            <img className='bio-image' src={image.url} alt="bio title" />
            <p>{ 'Full name: ' }{bio['full-name']}</p>
            <p>{ 'Alter Ego: ' }{bio['alter-egos']}</p>
            <p>{ 'First Appearance: ' }{bio['first-appearance']}</p>
            <p>{ 'Place of Birth: ' }{bio['place-of-birth']}</p>
            <p>{ 'Publisher: ' }{bio['publisher']}</p>
            <p className='emoji-pic'>{ (bio['alignment'] === 'good') ? 'GOOD' : 'BAD'}</p>
        </div>
      </div>
    )
  }
}

export default SingleBio
