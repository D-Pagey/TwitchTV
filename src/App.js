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
      isLoading: 'false',
      rawData: rawData()
    }

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(username) {

    const url = `https://wind-bow.glitch.me/twitch-api/streams/${username}?callback=`;

    return fetch(url).then(resp => resp.json())
      .then(data => {
        console.log(data);
      })

      .catch(function(error) {
        console.log("Something went wrong");
      })
  }

  componentDidMount() {
    const promiseList = rawData().map((user) => this.fetchData(user));

    Promise.all(promiseList).then((resolvedData) => {
      // logic for setState
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Stream rawData={this.state.rawData}/>
        <Footer />
      </div>
    );
  }
}

export default App;
