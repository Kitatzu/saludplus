"use client";
import axios from "axios";
import React from "react";
import "./loginModalStyles.css";

const LoginModal = ({ onClose }) => {
  // Función para cerrar el modal cuando se hace clic fuera de él

  const handleClickOutside = (event) => {
    if (event.target.classList.contains("modal-overlay")) {
      onClose(); // Llama a la función onClose del componente padre para cerrar el modal
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    axios
      .get("http://localhost:3001/doctors/login", {
        params: {
          email: data.email,
          password: data.password,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    // Renderiza el modal solo si isOpen es true
    <div className="modal-overlay" onClick={handleClickOutside}>
      <div className="modal">
        <button className="close-button">X</button>
        <div className="logo_container">
          <img src="/Logo.png" alt="Logo Modal" />
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              id="email"
              placeholder="CORREO ELECTRÓNICO"
              name="email"
            />
          </label>
          <label>
            <input
              type="password"
              id="password"
              placeholder="CONTRASEÑA"
              name="password"
            />
          </label>
          <button type="submit" className="login_btn">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
