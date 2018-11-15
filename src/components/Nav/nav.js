import React from "react";


const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" >
    <h1>Gabriela Olvera</h1>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse navbar-right pr-5" id="navbarNavDropdown">
      <ul className="nav navbar-nav ml-auto">

        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#about">
            Sobre mí
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#projects">
            Proyectos
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#">
            Habilidades
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Contacto
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;