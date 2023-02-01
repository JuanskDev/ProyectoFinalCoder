import React from "react";
import { Link } from "react-router-dom";
export const Item = ({ item }) => {
  return (
    <div className="shadow m-2 " style={{ width: "17rem" }}>
      <img
        src={item.img}
        className="card-img-top imgAllProd"
        alt="..."
        style={{ height: "60%" }}
      />
      <div className="card-body mx-auto py-2" style={{ width: "85%" }}>
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
