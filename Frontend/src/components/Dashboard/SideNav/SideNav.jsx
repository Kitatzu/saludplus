"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./side.css";

export const SideNav = () => {
  const pathname = usePathname();
  const links = [
    {
      href: "/dashboard/calendar",
      text: "Turnos",
      iconSrc: "/icons/Calendar.svg",
    },
    { href: "/dashboard", text: "Notificaciones", iconSrc: "/icons/Bell.svg" },
    { href: "/dashboard/profile", text: "Perfil", iconSrc: "/icons/User.svg" },
    { href: "/dashboard/help", text: "Ayuda", iconSrc: "/icons/Help.svg" },
  ];

  return (
    <nav className="side_container">
      <div className="side_img_container">
        <img src="/Avatar.png" className="Profile Logo" />
        <span>
          <strong> Usuario</strong>
        </span>
      </div>
      <div className="side_link_container">
        {/* Utilizar map para renderizar todos los enlaces */}
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`link_nav ${pathname === link.href ? "active" : ""}`}
          >
            <img src={link.iconSrc} alt={link.text} />
            {link.text}
          </Link>
        ))}
      </div>
    </nav>
  );
};
