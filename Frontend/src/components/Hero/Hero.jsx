import './hero-style.css';

export const Hero = () => {
  return (
    <div className="main">
      <h1>Autogestion de turnos medicos</h1>

      <div className="buttons">
        <button className="button">Inicio Sesion</button>
        <button className="button">Crear Cuenta</button>
      </div>
    </div>
  );
};
