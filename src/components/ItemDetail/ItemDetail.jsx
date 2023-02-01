import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  return (
    <div className="row g-0 m-18">
      <div className="col-md-4">
        <img
          src={`../img/${item.img}`}
          className="img-fluid rounded-start imgDetail"
          alt={`Imagen de ${item.nombre}`}
        />
      </div>
      <div className="card col-md-7 mx-auto ">
        <div className="card-body caja-item">
          <h5 className="card-title mb-3 item-name ">{item.nombre}</h5>
          <p className="card-text item-price">
            Precio: ${new Intl.NumberFormat("de-DE").format(item.precio)}
          </p>
          <p className="card-text item-stock">Disponibles: {item.stock}</p>
          <ItemCount valorInicial={1} stock={item.stock} />
          <button className="btn btn-secondary item-btn">
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
