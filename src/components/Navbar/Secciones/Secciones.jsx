import { Link } from "react-router-dom";
import React from "react";

const Secciones = React.memo(() => {
  return (
    <>
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/">
          <button className="btn btn-dark">Blog de Artistas</button>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">
          <button className="btn btn-dark">Vender</button>
        </a>
      </li>
      <li className="nav-item">
        <Link to={"/contacto"} className="nav-link">
          <button className="btn btn-dark">Contacto</button>
        </Link>
      </li>
    </>
  );
});

export default Secciones;
