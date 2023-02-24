import React from "react";
import Item from "../Item/Item";
import ItemCart from "../ItemCart/ItemCart";

const ItemList = ({ products, componente }) => {
  return (
    <>
      {componente === "item"
        ? products.map((producto) => <Item item={producto} key={producto.id} />)
        : products.map((producto) => (
            <ItemCart item={producto} key={producto.nombre} />
          ))}
    </>
  );
};

export default ItemList;
