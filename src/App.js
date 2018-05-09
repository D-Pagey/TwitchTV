import React, { Component } from 'react';

import './App.css';

import Header from './components/Header';
import StreamList from './components/Stream';
import Footer from './components/Footer';
import {streamData} from './utilities/rawData.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {...streamData};

    this.fetchData = this.fetchData.bind(this);
    this.streamUsernames = this.streamUsernames.bind(this);
  }

  fetchData(username) {
    const url = `https://wind-bow.glitch.me/twitch-api/streams/${username}?callback=`;

    return fetch(url)
      .then(resp => resp.json())
      .then(data => {
        console.log(data.stream.channel);

        
    // this.setState({ [username] : data })



      })

      .catch(function(error) {
        console.log("Something went wrong - " + error);
      })
  }

  streamUsernames() {
    const usernames = Object.keys(this.state);
    return usernames;
  }

  componentDidMount() {
    this.streamUsernames().forEach((element) => {
      this.fetchData(element);
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <StreamList streams={this.state} />
        <Footer />
      </div>
    );
  }
}

export default App;

// console warning regarding keys