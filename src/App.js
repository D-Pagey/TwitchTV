import React, { Component } from 'react';

import './App.css';

import Modal from './components/Modal';
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

        let newData = {
          key: 1,
          name: data.stream.channel.display_name,
          username: username,
          description: data.stream.channel.status.slice(0, 22) + "...",
          status: 'online',
          url: data.stream.channel.url
        }
        
        this.setState({ [username]: newData })

      })

      .catch(function(error) {
        console.log("Something went wrong - " + error);
      })
  }

  streamUsernames() {
    return Object.keys(this.state);
  }

  componentDidMount() {
    this.streamUsernames().forEach((element) => {
      this.fetchData(element);
    })
  }

  render() {
    return (
      <div className="App">
        <Modal />
        <Header />
        <StreamList streams={this.state} />
        <Footer />
      </div>
    );
  }
}

export default App;