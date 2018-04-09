import React, { Component } from 'react';

import './App.css';

import Header from './components/Header';
import Stream from './components/Stream';
import Footer from './components/Footer';
import rawData from './components/Stream/RawData.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: []
    }

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(username) {

    const url = `https://wind-bow.glitch.me/twitch-api/streams/${username}?callback=`;

    fetch(url)
      .then(resp => resp.json())
      .then(data => this.setState({
        description: data.stream.channel.status,
      }))

      .catch(function(error) {
        console.log("Something went wrong");
      })
  }

  componentDidMount() {
    console.log(rawData()[6]);
    this.fetchData(rawData()[6].username);
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
