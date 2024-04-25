"use client";
import LoginModal from "../LoginModal/loginModal";
import "./hero-style.css";
import Link from "next/link";
import { useState } from "react";

export const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="main">
      <video autoPlay muted loop>
        <source src="video/video-home.mp4" type="video/mp4"></source>
      </video>
      <div className="overlay"></div>
      <div className="main-content">
        <h1>
          <span className="upper">
            <strong>Autogestión</strong>
          </span>
          <span className="lower">de turnos médicos</span>
        </h1>
      </div>
      <div className="buttons">
        <Link href="/">
          <button className="button button-1" onClick={openModal}>
            Inicio Sesión
          </button>
          {isOpen && <LoginModal isOpen={isOpen} onClose={onClose} />}
        </Link>
        <Link href="/register">
          <button className="button button-2">Crear Cuenta</button>
        </Link>
      </div>
    </div>
  );
};
