"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./side.css";

export const SideNav = () => {
  const pathname = usePathname();

  return (
    <nav className="side_container">
      <div>
        <img src="/Avatar.png" className="Profile Logo" />
        <span>
          <strong> Usuario</strong>
        </span>
      </div>
      <div>
        <Link
          href="/Calendar"
          className={`link-nav ${
            pathname === "/dashboard/calendar" ? "active" : ""
          } `}
        >
          <img src="/icons/Calendar.svg" alt="Calender" /> Turnos
        </Link>
        <Link
          href="/dashboard"
          className={`link-nav ${pathname === "/dashboard" ? "active" : ""} `}
        >
          <img src="/icons/Bell.svg" alt="Bell" />
          Notificaciones
        </Link>
        <Link
          href="/dashboard/profile"
          className={`link-nav ${
            pathname === "/dashboard/profile" ? "active" : ""
          } `}
        >
          <img src="/icons/User.svg" alt="User" />
          Perfil
        </Link>
        <Link
          href="/dashboard/help"
          className={`link-nav ${
            pathname === "/dashboard/help" ? "active" : ""
          } `}
        >
          <img src="/icons/Help.svg" alt="Help" />
          Ayuda
        </Link>
      </div>
    </nav>
  );
};
