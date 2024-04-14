import "./hero-style.css";
import Link from "next/link";

export const Hero = () => {
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
          <button className="button button-1">Inicio Sesión</button>
        </Link>
        <Link href="/register">
          <button className="button button-2">Crear Cuenta</button>
        </Link>
      </div>
    </div>
  );
};
