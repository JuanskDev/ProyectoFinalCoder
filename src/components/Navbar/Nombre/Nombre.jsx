import React from "react";

import { Link } from "react-router-dom";

const Nombre = () => {
  return (
    <>
      <Link
        className="list-group-item text-white text-xl m-0 mt-1 nombre"
        to="/"
      >
        <h2>Virtual Gallery</h2>
      </Link>
    </>
  );
};

export default Nombre;
