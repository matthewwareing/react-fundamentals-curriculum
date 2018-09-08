import React from 'react';
import ReactDOM from 'react-dom';

import '../index.css';
import './Postcode';
import Postcode from './Postcode';

export default class App extends React.Component {
  render () {
    return (
      <div className="container">
        <div><h1>Header</h1></div>
        <div className="home-container" style={{backgroundImage: "url(app/images/pattern.svg)"}}>
          <Postcode />
        </div>
      </div>
    )
  }
}
