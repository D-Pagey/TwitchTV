import React, { Component } from 'react';

import './App.css';

import Header from './components/Header';
import Stream from './components/Stream';
import Footer from './components/Footer';
import rawData from './components/Stream/RawData.js';

const usernames = [];

rawData().forEach(element => {
  usernames.push(element.username);
})

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: ''
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
    usernames.forEach(username => {
      console.log(username);
      this.fetchData(username);
    })
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
