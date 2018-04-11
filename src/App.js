import React, { Component } from 'react';

import './App.css';

import Header from './components/Header';
import Stream from './components/Stream';
import Footer from './components/Footer';
import rawData from './components/Stream/RawData.js';

<<<<<<< HEAD
=======
const usernames = [];

rawData().forEach(element => {
  usernames.push(element.username);
})

>>>>>>> multi-fetch
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
<<<<<<< HEAD
      isLoading: 'false',
      rawData: rawData()
=======
      description: ''
>>>>>>> multi-fetch
    }

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(username) {

    const url = `https://wind-bow.glitch.me/twitch-api/streams/${username}?callback=`;

<<<<<<< HEAD
    return fetch(url).then(resp => resp.json())
      .then(data => {
        console.log(data);
      })
=======
    fetch(url)
      .then(resp => resp.json())
      .then(data => this.setState({
        description: data.stream.channel.status,
      }))
>>>>>>> multi-fetch

      .catch(function(error) {
        console.log("Something went wrong");
      })
  }

  componentDidMount() {
<<<<<<< HEAD
    const promiseList = rawData().map((user) => this.fetchData(user));

    Promise.all(promiseList).then((resolvedData) => {
      // logic for setState
    });
  }
=======
    usernames.forEach(username => {
      console.log(username);
      this.fetchData(username);
    })
}
>>>>>>> multi-fetch

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
