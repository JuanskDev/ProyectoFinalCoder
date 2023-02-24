import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
const ItemCount = ({ stock, valorInicial, onAdd }) => {
  const [contador, setContador] = useState(1);

  const sumador = () => contador < stock && setContador(contador + 1);

  const restador = () => contador > valorInicial && setContador(contador - 1);

  const agregarCarrito = () => {
    onAdd(contador);
    contador === 1
      ? toast.success(`Agregaste  ${contador} producto a tu carro`)
      : toast.success(`Agregaste  ${contador} productos a tu carro`);
  };

  return (
    <>
      <div>
        <div className="div-item-count d-flex gap-1">
          <p className="m-0 item-cantidad my-auto">Cantidad:</p>
          <button
            className="btn btn-outline-secondary my-1 "
            onClick={() => restador()}
          >
            -
          </button>
          <p className="my-auto">{contador}</p>
          <button
            className="btn btn-outline-secondary my-1"
            onClick={() => sumador()}
          >
            +
          </button>
        </div>
        <div>
          <button
            className="btn btn-light my-2 item-count-btn"
            onClick={() => agregarCarrito()}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
