import React from "react";
import { Link } from "react-router-dom";
const Item = ({ item }) => {
  return (
    <div className="shadow m-4  col-sm-4  col-lg-2 rounded divProducto ">
      <img
        src={item.img}
        className="card-img-top imageSize"
        alt={item.nombre}
      />
      <div className="card-body pb-3 mb-sm-5 divSize ">
        <h5 className="card-title ">{item.nombre}</h5>
        <p className="my-2 fw-normal fs-4">
          ${new Intl.NumberFormat("de-DE").format(item.precio)}
        </p>
        <button className="btn btn-light">
          <Link className="nav-link" to={`/item/${item.id}`}>
            Ver Producto
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Item;
