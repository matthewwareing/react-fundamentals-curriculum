import React from 'react';
import PropTypes from 'prop-types';

// postcode
// as a user I can enter a postcode to search a api

export default class Postcode extends React.Component {

  state = {
    postcode: 'S0172GU'
  }

  handlePostcode = (e) => {
    const postcode = e.target.value
    this.setState({
      postcode
    })
  }

  handlePostcodeSubmit = () => {
    
  }

  render () {
    return (
      <div className="postcode-container">
        <input
        className="postcode-input"
        placeholder="S0172GU"
        onChange={this.handlePostcode}
        value={this.state.postcode}
        type="text"/>
      </div>
    )
  }
}