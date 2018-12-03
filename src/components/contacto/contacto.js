import React from 'react'


const Contact = () => {
return(
    
    <section className="contact" id="contacto">
    <div className="container9">
      <h2 className="contacto1">Contacto</h2>
        <div className="row iconos">
          <a className="col-md-3 col-lg-3" href="https://github.com/DianaOlvera" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github-square"></i>
            <br></br>
           Github
          </a>
          <a className="col-md-3 col-lg-3"href="mailto:gabrielaolvsan@gmail.com">
          <i className="fas fa-envelope"></i>
          <br></br>
          Correo
          </a>
          <a className="col-md-3 col-lg-3" href="https://www.linkedin.com/in/gabriela-olvera/" target="_blank" rel="noopener noreferrer">
           <i className="fab fa-linkedin"></i>
           <br></br>
           Linkedin
          </a>
        </div>
    </div>
  </section>

)
}
export default Contact