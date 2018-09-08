import React from 'react';
import ReactDOM from 'react-dom';

import '../index.css';
import Postcode from './Postcode';

export default class App extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="navbar">
          <h1>Show me the weather!</h1>
          <Postcode direction={"row"}/>
        </div>
        <div className="home-container" style={{backgroundImage: "url(app/images/pattern.svg)"}}>
          <h3>Enter a postcode</h3>
          <Postcode direction={"column"}/>
        </div>
      </div>
    )
  }
}
