import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        <p>This is a header</p>
        </header>
        <nav id="drawer" class="nav">
          <ul class="nav__list">
            <li class="nav__item"><a href="#">News</a></li>
            <li class="nav__item"><a href="#">Events</a></li>
            <li class="nav__item"><a href="#">Culture</a></li>
            <li class="nav__item"><a href="#">Blog</a></li>
          </ul>
        </nav>
        <Map />
      </div>
    );
  }
}

export default App;
