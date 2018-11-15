import React from "react";
//import logo from "../../assets/logo.png";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div className="navbar-header pl-lg-5">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="bold"> </span>
      </a>
    </div>
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
          <a className="nav-link js-scroll-trigger" href="#">
            Inicio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#">
            Sobre mí
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#">
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

export default Nav;