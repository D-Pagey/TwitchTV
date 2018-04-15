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
      test: ''
    }

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(username) {

    const url = `https://wind-bow.glitch.me/twitch-api/streams/${username}?callback=`;

    return fetch(url).then(resp => resp.json())

      .catch(function(error) {
        console.log("Something went wrong");
      })
  }

  componentDidMount() {
    const promiseList = rawData().map((user) => this.fetchData(user.username));
    const component = this;

    Promise.all(promiseList).then((resolvedData) => {
      resolvedData.forEach(function (element, index) {
        if (element.stream) {
          console.log(element.stream.channel.status, index);
          component.setState(prevState => ({
            rawData: [...prevState.rawData, 55555]
        }))
        }
      });
    });
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
