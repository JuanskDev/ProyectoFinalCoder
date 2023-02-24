import React from "react";
import { Link } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { useCarritoContext } from "../../context/CarritoContext";

const Cart = () => {
  const { carrito, totalPrice, emptyCart } = useCarritoContext();

  return (
    <>
      {carrito.length === 0 ? (
        <div className="container text-center mt-5">
          <p className="">No hay productos en el carrito</p>
          <Link to={"/"}>
            <button className="btn btn-dark">Ver mas productos</button>
          </Link>
        </div>
      ) : (
        <div className="container mt-5 z">
          <ItemList products={carrito} plantilla={"itemCart"} />
          <div className="divButtons">
            <p>
              Resumen de la compra:{" "}
              {new Intl.NumberFormat("de-DE").format(totalPrice())}
            </p>
            <button className="btn btn-danger mb-1" onClick={() => emptyCart()}>
              Vaciar carrito
            </button>
            <Link className="nav-link" to={"/"}>
              <button className="btn btn-dark mb-1">Continuar Comprando</button>
            </Link>
            <Link className="nav-link" to={"/checkout"}>
              <button className="btn btn-dark mb-2">Finalizar compra</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
