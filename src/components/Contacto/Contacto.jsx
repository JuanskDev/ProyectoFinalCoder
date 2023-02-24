import React from "react";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Contacto = () => {
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    toast.success("Su consulta fue enviada");
    navigate("/");
  };

  return (
    <div className="container formDiv">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Nombre y Apellido</label>
          <input
            {...register("firstName", { required: true })}
            aria-invalid={errors.firstName ? "true" : "false"}
            className="form-control"
          />
          {errors.firstName?.type === "required" && (
            <p role="alert" className="text-danger  mt-2">
              Necesita escribir su nombre
            </p>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            id="email"
            {...register("email", {
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
            type="email"
            className="form-control"
          />
          {errors.email && (
            <p className="text-danger  mt-2" role="alert">
              Necesita escribir un email valido
            </p>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Numero telefonico</label>
          <input
            className="form-control"
            type="tel"
            placeholder="+549 351 290 234"
            {...register("number", {
              required: true,
              minLength: 6,
              maxLength: 17,
            })}
          />
          {errors.number && (
            <p className="text-danger  mt-2" role="alert">
              Necesita escribir un telefono valido
            </p>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label d-block">Consulta</label>
          <textarea
            {...register("message", { required: true })}
            rows="7"
            className="block w-100 textArea"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;
