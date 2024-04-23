"use client";
import { useState } from "react";
import "./nav-style.css";
import Link from "next/link";
import { useUserStore } from "@/utilities/store/Store.js";
import LoginModal from "../LoginModal/loginModal";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Estado inicial: modal cerrado
  const isLogin = useUserStore((state) => state.isLogin);
  const setIsLogin = useUserStore((state) => state.setIsLogin);
  const router = useRouter();

  function handleOpenModal() {
    setIsOpen(true); // Cambia isOpen a true para abrir el modal
  }

  function onClose() {
    setIsOpen(false);
  }

  function handleLogout() {
    setIsLogin(false);
    router.push("/");
  }

  return (
    <nav className="navBar">
      <img src="/Frame.svg" className="logo" />
      {isLogin ? (
        <>
          <Link href="/">
            <p> Servicios </p>
          </Link>
          <Link href="/dashboard">
            <p> Perfil </p>
          </Link>
          <p onClick={handleLogout}>Cerrar Sesión</p>
        </>
      ) : (
        <>
          <Link href="/">
            <p> Inicio </p>
          </Link>
          <Link href="/services">
            <p> Servicios </p>
          </Link>
          <p onClick={handleOpenModal}> Ingresar </p>
          {isOpen && <LoginModal isOpen={isOpen} onClose={onClose} />}
          <Link href="/register">
            <p> Registrarse </p>
          </Link>
        </>
      )}
    </nav>
  );
}
