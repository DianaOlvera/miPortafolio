import React from 'react';
import './projects.css';
import Registro from '../../assets/registro.PNG';
import UX from '../../assets/uxcom.PNG';
import Tic from '../../assets/tic.png'


const Projects = () => {
  return (
    <section className="projects" id="projects">
      <span id="work-anchor" className="fix-nav-height"></span>
      <h2>Proyectos</h2>
      <div className="container">
        <hr/>
        <div className="row">
          <div className="col-md-5 col-lg-3 card">
               <img src={Registro} alt="portada proyecto burger queen" className="image"/> 
              <div className="row">
                <a className="link col-10 col-md-5" target="_blank" rel="noopener noreferrer" href="https://dianaolvera.github.io/Access-web/src/index.html">Demo</a>
                <a className="link col-10 col-md-5" target="_blank" rel="noopener noreferrer" href="https://github.com/DianaOlvera/Access-web">GitHub</a>
              </div>
              <div className="project-info">
                <p className="project-title">Registro Visitantes</p>
              </div>
          </div>
          <div className="col-md-5 col-lg-3 card">
            <img src={UX} alt="portada proyecto lux" className="image" width="600" height="400"/>
            <div className="row">
              <a className="link col-10 col-md-5" target="_blank" rel="noopener noreferrer" href="https://dianaolvera.github.io/cdmx-social-network-frameworks/">Demo</a>
              <a className="link col-10 col-md-5" target="_blank" rel="noopener noreferrer" href="https://github.com/DianaOlvera/cdmx-social-network-frameworks">GitHub</a>
            </div>
            <div className="project-info">
              <p className="project-title">Red Social</p>
            </div>
          </div>
          <div className="col-md-5 col-lg-3 card">
            <img src={Tic} alt="portada proyecto tictac" className="image" width="600" height="400"/> 
            <div className="row">
              <a className="link col-10 col-md-5" target="_blank" rel="noopener noreferrer" href="https://expo.io/@dianaol/tictoe">Demo</a>
              <a className="link col-10 col-md-5" target="_blank" rel="noopener noreferrer" href="https://github.com/DianaOlvera/TicTacToe">GitHub</a>
            </div>
            <div className="project-info">
              <p className="project-title">TicTacToe</p>
            </div>
          </div>
        </div>
      </div>
    </section>
   );
}

export default Projects;