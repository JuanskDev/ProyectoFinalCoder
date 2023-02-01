import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    fetch("../json/productos.json")
      .then((response) => response.json())
      .then((products) => {
        const item = products.find((prod) => prod.id === parseInt(id));
        setProducto(item);
      });
  }, []);

  return (
    <div className=" mb-3 p-4 container shadow itemDetail">
      <ItemDetail item={producto} />
    </div>
  );
};

export default ItemDetailContainer;
