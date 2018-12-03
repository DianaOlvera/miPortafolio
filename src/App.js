import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Brand from './components/brand/brand.js'
import Navbar from './components/Nav/nav.js';
import About from './components/aboutme/aboutme.js'
import Projects from './components/projects/projects.js'
import Skills from './components/skills/skills.js'
import Contact from './components/contacto/contacto.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar/>
          <Brand/>
        </header>
          <About/>
          <Projects/>
          <Skills/>
          <Contact/>
      </div>
    );
  }
}

export default App;
