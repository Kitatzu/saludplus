"use client";

import React from "react";
import "./loginModalStyles.css";

const LoginModal = ({ isOpen, onClose }) => {
  // Función para cerrar el modal cuando se hace clic fuera de él

  const handleClickOutside = (event) => {
    if (event.target.classList.contains("modal-overlay")) {
      onClose(); // Llama a la función onClose del componente padre para cerrar el modal
    }
  };

  return (
    // Renderiza el modal solo si isOpen es true
    isOpen && (
      <div className="modal-overlay" onClick={handleClickOutside}>
        <div className="modal">
          <button className="close-button" onClick={onClose}>
            X
          </button>
          <div className="logo_container">
            <img src="/Logo.png" alt="Logo Modal" />
          </div>
          <form>
            <label>
              <input type="email" placeholder="CORREO ELECTRÓNICO" />
            </label>
            <label>
              <input type="password" placeholder="CONTRASEÑA" />
            </label>
            <button type="submit" className="login_btn">
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default LoginModal;
