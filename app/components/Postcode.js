import React from 'react';
import axios from 'axios';
export default class Postcode extends React.Component {

  state = {
    postcode: 'London'
  }

  handlePostcode = (e) => {
    const postcode = e.target.value
    this.setState({
      postcode
    })
  }

  handlePostcodeSubmit = async () => {
    const weather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.postcode}&type=accurate&APPID=2d24390584fd517c4b13702d278c2d61`);
    console.log(weather);
  }

  render () {
    return (
      <div className="postcode-container" style={{flexDirection: this.props.direction}}>
        <input
        className="postcode-input"
        placeholder="S0172GU"
        onChange={this.handlePostcode}
        value={this.state.postcode}
        type="text"/>

        <button
        style={{margin: 10}}
        type="button"
        className="btn btn-success"
        onClick={this.handlePostcodeSubmit}>
        Submit</button>
      </div>
    )
  }
}