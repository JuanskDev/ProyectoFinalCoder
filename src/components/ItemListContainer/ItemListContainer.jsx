import React from "react";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {
    if (idCategoria) {
      fetch("../json/productos.json")
        .then((response) => response.json())
        .then((productosArray) => {
          const products = productosArray.filter(
            (prod) => prod.idCategoria === idCategoria
          );
          const productsList = ItemList({ products }); //Array de productos en JS
          setProductos(productsList);
        });
    } else {
      fetch("./json/productos.json")
        .then((response) => response.json())
        .then((products) => {
          console.log(products);
          const productsList = ItemList({ products }); //Array de productos en JSX
          console.log(productsList);
          setProductos(productsList);
        });
    }
  }, [idCategoria]);
  //[] cuando se renderiza
  //[prop] cuando se renderiza y cuando se actualiza

  return <div className="row justify-content-around m-4">{productos}</div>;
};

export default ItemListContainer;
