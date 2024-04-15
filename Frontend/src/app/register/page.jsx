import "./page.css";
import { RegisterCard } from "@/components/register/RegisterCard";

export default function Register() {
  return (
    <div className="container">
      <div>
        <RegisterCard
          img={"/images/Patient.png"}
          alt={"Patient Image"}
          h1={"Paciente"}
          url={"patient"}
        />
        <RegisterCard
          img={"/images/Doctor.png"}
          alt={"Doctor Image"}
          h1={"Doctor"}
          url={"doctor"}
        />
      </div>

      <div>
        <p>
          ¿Ya estas registrado?
          <a href="">
            <strong> Iniciar Sesión</strong>
          </a>
        </p>
      </div>
    </div>
  );
}
