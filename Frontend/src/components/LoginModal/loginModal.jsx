'use client'

import React from 'react';
import './loginModalStyles.css';

const LoginModal = ({ isOpen, onClose }) => {
  // Función para cerrar el modal cuando se hace clic fuera de él
  const handleClickOutside = (event) => {
    if (event.target.classList.contains('modal-overlay')) {
      onClose(); // Llama a la función onClose del componente padre para cerrar el modal
    }
  };

  return (
    // Renderiza el modal solo si isOpen es true
    isOpen && (
      <div className="modal-overlay" onClick={handleClickOutside}>
        <div className="modal">
          <h2>Iniciar Sesión</h2>
          <form>
            <label>
              Usuario:
              <input type="text" />
            </label>
            <label>
              Contraseña:
              <input type="password" />
            </label>
            <button type="submit">Iniciar Sesión</button>
          </form>
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
      </div>
    )
  );
};

export default LoginModal;