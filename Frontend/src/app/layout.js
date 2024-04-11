import { Inter } from "next/font/google";
//import "./globals.css";
import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MediPlus",
  description: "App medicalCare",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={styles.header}>
          <nav className={styles.navBar}>
              <img src="/Frame.svg" className={styles.logo}/>
              <p >Inicio</p>
              <p >Servicios</p>
              <p >Ingresar</p>
              <p >Registrase</p>
              <img src="/menu.svg" className={styles.menu}/>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
