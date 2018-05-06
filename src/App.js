import React, { Component } from 'react';

import './App.css';

import Header from './components/Header';
import StreamList from './components/Stream';
import Footer from './components/Footer';
import rawData from './utilities/RawData.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      freecodecamp: {},
      macie: {},
      roy: {},
      p4wny: {},
      viss: {},
      edberg: {},
      rainbow: {},
    }

    // this.fetchData = this.fetchData.bind(this);
    this.setInitialState = this.setInitialState.bind(this);
  }

  setInitialState() {
    let initialData = rawData();
    let freecodecamp = initialData[0];
    let macie = initialData[1];
    let roy = initialData[2];
    let p4wny = initialData[3];
    let viss = initialData[4];
    let edberg = initialData[5];
    let rainbow = initialData[6];
    this.setState({rainbow, edberg, viss, p4wny, roy, macie, freecodecamp});
  }

  // fetchData(object) {

  //   const url = `https://wind-bow.glitch.me/twitch-api/streams/${object.username}?callback=`;

  //   return fetch(url)
  //     .then(resp => resp.json())
  //     .then(data => {
  //       console.log(data);
  //       const hi = {
  //         'description': data.stream.channel.status,
  //         'key': object.key,
  //         'name': object.name,
  //         'status': 'Online',
  //         'username': data.stream.channel.name
  //       }
  //       console.log(hi);
  //       this.setState({ hi })
  //     })

  //     .catch(function(error) {
  //       console.log("Something went wrong - " + error);
  //     })
  // }

  componentDidMount() {
    this.setInitialState();
    // this.fetchData(this.state.rawData[5]);
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
