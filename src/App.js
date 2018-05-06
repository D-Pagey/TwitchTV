import React, { Component } from 'react';

import './App.css';

import Header from './components/Header';
import StreamList from './components/Stream';
import Footer from './components/Footer';
import rawData from './utilities/RawData.js';
import setInitialState from './utilities/initialState.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(username) {

    const url = `https://wind-bow.glitch.me/twitch-api/streams/${username}?callback=`;

    return fetch(url)
      .then(resp => resp.json())
      .then(data => {
        window[username] = data;
        console.log(window[username]); 
      })

      .catch(function(error) {
        console.log("Something went wrong - " + error);
      })
  }

  UNSAFE_componentWillMount() {
    this.setState(setInitialState());
  }

  componentDidMount() {
    this.fetchData('tsm_viss');
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
