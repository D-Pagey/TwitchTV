import React, { Component } from 'react';

import './App.css';

import Header from './components/Header';
import Stream from './components/Stream';
import Footer from './components/Footer';

class App extends Component {
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
