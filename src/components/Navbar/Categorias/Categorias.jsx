const Categorias = () => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <button className="btn btn-dark">Categorias</button>
      </a>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="/categorias/cuadros">
            Cuadros
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/categorias/ceramica">
            Ceramica
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/categorias/dibujos">
            Dibujos
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/categorias/otros">
            Otros
          </a>
        </li>
      </ul>
    </li>
  );
};

export default Categorias;
