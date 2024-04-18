"use client";
import { useState } from "react";
import "./nav-style.css";
import Link from "next/link";
import LoginModal from "../LoginModal/loginModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Estado inicial: modal cerrado

  function handleOpenModal() {
    setIsOpen(true); // Cambia isOpen a true para abrir el modal
  }

  function onClose() {
    setIsOpen(false);
  }

  return (
    <nav className="navBar">
      <img src="/Frame.svg" className="logo" />
      <Link href="/">
        <p> Inicio </p>
      </Link>
      <Link href="/">
        <p> Servicios </p>
      </Link>
      <p onClick={handleOpenModal}> Ingresar </p>
      {isOpen && <LoginModal isOpen={isOpen} onClose={onClose} />}
      <Link href="/register">
        <p> Registrarse </p>
      </Link>
    </nav>
  );
}
