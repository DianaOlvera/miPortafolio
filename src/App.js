import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Nav/nav.js';
import About from './components/aboutme/aboutme.js'
import Projects from './components/projects/projects.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />   */}
          
          <Navbar/>
          <About/>
          <Projects/>
        </header>
      </div>
    );
  }
}

export default App;
