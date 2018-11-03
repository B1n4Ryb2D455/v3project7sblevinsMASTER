import React, { Component } from 'react';
import './App.css';
import Map from './Map';
import Sidebar from './Sidebar';


class App extends Component {

  state = {
    locationsArray: [],
    selectedMarkerIndex: -1,
    center: { lat: 28.5728722, lng: -80.6489808 },
    zoom: 11
  }


  handleMarkerClickEvent

  render() {
    return (
      <div className="App">
      <Sidebar />
      <Map />
      </div>
    );
  }
}

export default App;
