import { Link } from "react-router-dom";

const Categorias = () => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#ss"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <button className="btn btn-dark">Categorias</button>
      </a>
      <ul className="dropdown-menu">
        <li>
          <Link className="dropdown-item" to={"/category/cuadros"}>
            Cuadros
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to={"/category/ceramica"}>
            Ceramica
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to={"/category/decoracion"}>
            Decoracion
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to={"/category/dibujos"}>
            Dibujos
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default Categorias;
