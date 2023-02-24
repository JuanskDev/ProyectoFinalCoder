import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProduct } from "../../firebase/firebase";
const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getProduct(id).then((item) => {
      setProducto(item);
    });
  }, [id]);

  return (
    <div className=" mb-3 p-4 container shadow itemDetail">
      <ItemDetail item={producto} />
    </div>
  );
};

export default ItemDetailContainer;
