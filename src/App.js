import React, { Component } from 'react';

import './App.css';

import Header from './components/Header';
import Stream from './components/Stream';
import Footer from './components/Footer';
import rawData from './components/Stream/RawData.js';

console.log(rawData()[6].username);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: 'false'
    }

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(element) {

    const url = `https://wind-bow.glitch.me/twitch-api/streams/${element.username}?callback=`;

    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
      })

      .catch(function(error) {
        console.log("Something went wrong");
      })
  }

  componentDidMount() {
    this.fetchData(rawData()[6]);
  }

  render() {
    return (
      <div className="App">
        <Header />  
        <Stream />
        <Footer />
      </div>
    );
  }
}

export default App;
