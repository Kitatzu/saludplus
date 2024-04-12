import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MediPlus",
  description: "App medicalCare",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className='header'>
          <nav className='navBar'>
              <img src="/Frame.svg" className='logo'/>
              <p >Inicio</p>
              <p >Servicios</p>
              <p >Ingresar</p>
              <p >Registrase</p>
              <img src="/menu.svg" className='menu'/>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
