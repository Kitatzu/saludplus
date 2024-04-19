import "./dashboard.css";
import { AppoimentCard } from "@/components/Dashboard/AppoimentCard/AppoimentCard";

export default function Dashboard() {
  return (
    <div className="dashboard_page">
      <AppoimentCard
        state="Atendido"
        h1="Traumatologo"
        date={"Miercoles 1 de Mayo, 19:00hs"}
      />
      <AppoimentCard
        state="Pendiente"
        h1="Traumatologo"
        date={"Miercoles 1 de Mayo, 19:00hs"}
      />
      <AppoimentCard
        state="Cancelado"
        h1="Traumatologo"
        date={"Miercoles 1 de Mayo, 19:00hs"}
      />
    </div>
  );
}
