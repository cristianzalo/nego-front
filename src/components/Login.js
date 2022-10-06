import React, { useState } from "react";

import '../css/login.css'



export default function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function validateForm() {

    return email.length > 0 && password.length > 0;

  }


  return (

    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Correo</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Ingresa el correo"
            />
          </div>
          <div className="form-group mt-3">
            <label>Contrseña</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Ingresa la contraseña"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Ingresar
            </button>
          </div>
        </div>
      </form>
    </div>
  );

}