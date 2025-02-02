import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SaludPlus",
  description: "App medicalCare",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="header">
          <Navbar />
        </header>
        {children}
        <img src="/Icon-chatbot.svg" className="chat-bot" />
      </body>
    </html>
  );
}
