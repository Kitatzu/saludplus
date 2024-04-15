import "./card.css";
import Link from "next/link";

export const RegisterCard = ({ img, alt, h1, url }) => {
  const getArticleClass = () => {
    switch (h1) {
      case "Paciente":
        return "container_patient";
      case "Doctor":
        return "container_doctor";
      default:
        // Handle unexpected h1 values gracefully (optional)
        console.warn(`Unexpected h1 value: ${h1}`);
        return ""; // Or return a default class if needed
    }
  };

  return (
    <article className={getArticleClass()}>
      <div>
        <img src={img} alt={alt} />
      </div>
      <div>
        <h1> {h1 === "Paciente" ? "Paciente" : "Doctor"}</h1>
        <Link href={`/register/${url}`}>
          <button> Crear Usuario </button>
        </Link>
      </div>
    </article>
  );
};
