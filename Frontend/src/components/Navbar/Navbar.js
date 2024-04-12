import "./nav-style.css";

export default function Navbar() {
  return (
    <nav className="navBar">
      <img src="/Frame.svg" className="logo" />
      <p>Inicio</p>
      <p>Servicios</p>
      <p>Ingresar</p>
      <p>Registrase</p>
      <img src="/menu.svg" className="menu" />
    </nav>
  );
}
