import React, { Component } from 'react';

import './App.css';

import Header from './components/Header';
import Stream from './components/Stream';
import Footer from './components/Footer';
import rawData from './utilities/RawData.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rawData: rawData(),
    }

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(object) {

    const url = `https://wind-bow.glitch.me/twitch-api/streams/${object.username}?callback=`;

    return fetch(url)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        const test = {
          'description': data.stream.channel.status,
          'key': object.key,
          'name': object.name,
          'status': object.status,
          'username': data.stream.channel.name
        }
        console.log(test);
        this.setState({ test })
      })



      .catch(function(error) {
        console.log("Something went wrong - " + error);
      })
  }

  componentDidMount() {
    this.fetchData(this.state.rawData[2]);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Stream rawData={this.state.rawData} />
        <Footer />
      </div>
    );
  }
}

export default App;
