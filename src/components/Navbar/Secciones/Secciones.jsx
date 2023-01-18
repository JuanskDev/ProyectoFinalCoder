const Secciones = () => {
  return (
    <>
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/blog">
          <button className="btn btn-dark">Blog de Artistas</button>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/vender">
          <button className="btn btn-dark">Vender</button>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/contacto">
          <button className="btn btn-dark">Contacto</button>
        </a>
      </li>
    </>
  );
};

export default Secciones;
