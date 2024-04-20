"use client";
import axios from "axios";
import React from "react";
import { useRouter } from "next/navigation";
import "./loginModalStyles.css";

const LoginModal = ({ onClose }) => {
  const router = useRouter();
  // Función para cerrar el modal cuando se hace clic fuera de él
  const handleClickOutside = (event) => {
    if (event.target.classList.contains("modal-overlay")) {
      onClose(); // Llama a la función onClose del componente padre para cerrar el modal
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    await axios
      .post("http://localhost:3001/login", data)
      .then((response) => {
        router.push("/dashboard");
        onClose();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    // Renderiza el modal solo si isOpen es true
    <div className="modal-overlay" onClick={handleClickOutside}>
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <div className="logo_container">
          <img src="/Logo.png" alt="Logo Modal" />
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            <input type="text" id="email" name="email" required />
            <span>Correo Electronico</span>
          </label>
          <label>
            <input type="password" id="password" name="password" required />
            <span>Contraseña</span>
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
