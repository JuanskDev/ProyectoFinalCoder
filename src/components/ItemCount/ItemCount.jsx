import React from "react";
import { useState } from "react";
const ItemCount = ({ stock, valorInicial }) => {
  const [contador, setContador] = useState(1);

  const sumador = () => contador < stock && setContador(contador + 1);

  const restador = () => contador > valorInicial && setContador(contador - 1);

  return (
    <>
      <div>
        <div className="">
          <p className="m-0">Cantidad:</p>
          <button
            className="btn btn-outline-secondary my-1 "
            onClick={() => restador()}
          >
            -
          </button>
          {contador}
          <button
            className="btn btn-outline-secondary my-1"
            onClick={() => sumador()}
          >
            +
          </button>
        </div>
        <div>
          <button className="btn btn-light my-2">Agregar al carrito</button>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
