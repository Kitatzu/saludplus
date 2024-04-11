import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <h1> Autogestion
           de turnos medicos </h1>
           <div className={styles.buttons}>
           <button className={styles.button}>Inicio Sesion</button>
           <button className={styles.button}>Crear Cuenta</button>
           </div>
    </div>
  );
}
