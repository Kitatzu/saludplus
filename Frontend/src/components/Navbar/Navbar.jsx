import "./nav-style.css";
import Link from "next/link";

export default function Navbar() {
  const link = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/" },
    { name: "Ingresar", href: "#" },
    { name: "Registrarse", href: "/register" },
  ];

  const handle = () => {
    console.log(link);
  };

  return (
    <nav className="navBar">
      <img src="/Frame.svg" className="logo" />
      <Link href="/">
        <p> Inicio </p>
      </Link>
      <Link href="/">
        <p> Servicios </p>
      </Link>
      <Link href="/">
        <p> Ingresar </p>
      </Link>
      <Link href="/register">
        <p> Registrarse </p>
      </Link>
    </nav>
  );
}
