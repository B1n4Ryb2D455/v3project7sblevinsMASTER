import React, { Component } from 'react';
import './App.css';
import Map from './Map';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="nav">Explore!
      <ul>venue one</ul>
            <ul>venue two</ul>
            <ul>venue three</ul>
            <ul>venue four</ul>
            <ul>venue five</ul>
      </div>
      <Map />
      </div>
    );
  }
}

export default App;
