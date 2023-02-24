import { useCarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  createOrdenCompra,
  getProduct,
  updateProduct,
} from "../../firebase/firebase";
import { useState } from "react";
import FormInput from "../FormInput/FormInput";

const Checkout = () => {
  const [values, setValues] = useState({
    nombre: "",
    email: "",
    RepEmail: "",
    telefono: "",
    direccion: "",
  });

  const { carrito, emptyCart, totalPrice } = useCarritoContext();

  const datosFormulario = React.useRef();
  let navigate = useNavigate();

  const inputs = [
    {
      id: 1,
      name: "nombre",
      type: "text",
      errorMessage: "Escribe tu nombre y apellido",
      label: "Nombre y Apellido",
      pattern: "([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      errorMessage: "Necesitas escribir un email valido",
      label: "Email",
      pattern: "[a-z0-9]+@[a-z]+.[a-z]{2,3}",
      required: true,
    },
    {
      id: 3,
      name: "RepEmail",
      type: "email",
      errorMessage: "Escribe el mismo email que el anterior",
      label: "Repetir Email",
      pattern: values.email,
      required: true,
    },
    {
      id: 4,
      name: "telefono",
      type: "text",
      errorMessage: "Necesitas escribir un telefono valido",
      label: "Telefono",
      pattern: `^[+]?[(]?[0-9]{3}[)]?[-.]?[0-9]{3}[-.]?[0-9]{4,10}$`,
      required: true,
    },
    {
      id: 5,
      name: "direccion",
      type: "text",
      errorMessage: "Debes escribir una direccion",
      label: "Direccion",
      pattern: "([A-ZÀ-z0-9-ÿ][-,a-z. ']+[ ]*)+",
      required: true,
    },
  ];

  const consultarFormulario = (e) => {
    e.preventDefault();
    const datForm = new FormData(datosFormulario.current);
    const cliente = Object.fromEntries(datForm);
    const aux = [...carrito];

    aux.forEach((prodCarrito) => {
      getProduct(prodCarrito.id).then((prodBDD) => {
        prodBDD.stock -= prodCarrito.cant;
        updateProduct(prodCarrito.id, prodBDD);
      });
    });

    createOrdenCompra(
      cliente,
      aux,
      totalPrice(),
      new Date().toISOString()
    ).then((ordenCompra) => {
      toast.success(
        `¡Muchas gracias por comprar con nosotros!, su orden de compra con el ID: ${
          ordenCompra.id
        } por un total de $ ${totalPrice()} fue realizada con exito`
      );
      emptyCart();
      e.target.reset();
      navigate("/");
    });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

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
        <div className="container formDiv">
          <form onSubmit={consultarFormulario} ref={datosFormulario}>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <button type="submit" className="btn btn-primary">
              Finalizar Compra
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Checkout;
