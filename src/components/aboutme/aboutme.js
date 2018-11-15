import React from 'react';
import me from '../../assets/Gabriela-perfil.jpg';

const About = () => {
  return (
    <section className="container" id="about">
      <span id="about-anchor" className="fix-nav-height"> &nbsp; </span>
      
      <div className="row">
        <div className="aboutImage col-lg-6">
            <img  class= "rounded-circle "src={me} alt="Gabriela"  height="50%" width="50%"/>
            <h1 class="white-text "><span class="yellow-text">&#60; </span>Front-End Developer <span class="yellow-text">&#62; </span></h1>
        </div>
        <div className="about-text col-lg-6">
          <h2>Sobre mí</h2>
          <hr/>
          <p>Soy Gabriela Olvera. Front End Developer egresada de Laboratoria e Ingeniería en sistemas computacionales.
          </p>
          <p>Apasionada por la tecnología, trabajo con metodologías ágiles en el desarrollo de proyectos. 
          </p>
          <p> Soy una persona asertiva con facilidad para el trabajo en equipo por disposición y habilidades de comunicación. 
          </p>
          <div className="button-container">
          <a target="_blank" rel="noopener noreferrer" className="cv" href="https://drive.google.com/file/d/1bvxcl4wX-Q3sdEmQ_XCTfUqv0KVsLnKS/view?usp=sharing">Ver CV</a>
          </div>
        </div>
        
      </div>
    </section>
   );
}

export default About;