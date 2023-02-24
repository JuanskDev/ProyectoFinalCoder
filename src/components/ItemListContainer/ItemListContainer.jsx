import React from "react";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../../firebase/firebase";
const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {
    if (idCategoria) {
      getProducts().then((prods) => {
        const products = prods
          .filter((prod) => prod.stock > 0)
          .filter((prod) => prod.idCategoria === idCategoria);
        const productsList = (
          <ItemList products={products} componente={"item"} />
        );
        setProductos(productsList);
      });
    } else {
      getProducts().then((items) => {
        const products = items.filter((prod) => prod.stock > 0);
        const productsList = (
          <ItemList products={products} componente={"item"} />
        );
        setProductos(productsList);
      });
    }
  }, [idCategoria]);

  return <div className="row justify-content-around  m-4">{productos}</div>;
};

export default ItemListContainer;
