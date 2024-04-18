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
          href="/dashboard/calendar"
          className={`${pathname === "/dashboard/calendar" ? "active" : ""} `}
        >
          <p>
            <img src="/icons/Calendar.svg" alt="Calender" /> Turnos
          </p>
        </Link>
        <Link
          href="/dashboard"
          className={`${pathname === "/dashboard" ? "active" : ""} `}
        >
          <p>
            <img src="/icons/Bell.svg" alt="Bell" />
            Notificaciones
          </p>
        </Link>
        <Link
          href="/dashboard/profile"
          className={`${pathname === "/dashboard/profile" ? "active" : ""} `}
        >
          <p>
            <img src="/icons/User.svg" alt="User" />
            Perfil
          </p>
        </Link>
        <Link
          href="/dashboard/help"
          className={`${pathname === "/dashboard/help" ? "active" : ""} `}
        >
          <p>
            <img src="/icons/Help.svg" alt="Help" />
            Ayuda
          </p>
        </Link>
      </div>
    </nav>
  );
};
