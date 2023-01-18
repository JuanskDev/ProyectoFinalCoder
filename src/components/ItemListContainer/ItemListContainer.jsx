import React from "react";
import "./ItemListContainer.css";

const ItemListContainer = ({ image, title, price }) => {
  return (
    <>
      <li className="li-items">
        <img src={image} className="img-item me-auto mb-2 mb-lg-0" alt="..." />
        <p>{title}</p>
        <p>Precio: {price}</p>
      </li>
    </>
  );
};

export default ItemListContainer;
