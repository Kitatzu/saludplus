import "./appoiment.css";

export const AppoimentCard = ({ h1, date, state }) => {
  const getStateClass = () => {
    return state === "Pendiente"
      ? "pending"
      : state === "Atendido"
      ? "success"
      : state === "Cancelado"
      ? "canceled"
      : "";
  };

  return (
    <article className="appoiment_card">
      <div className="text_container">
        <span className={`state ${getStateClass()}`}>{state}</span>
        <h1>{h1}</h1>
        <span className="date">{date}</span>
      </div>
      <div className="icons_container">
        <button>
          <img src="/icons/Bell.svg" alt="notification" />
        </button>
        <button>
          <img src="/icons/DeleteClosed.svg" alt="Delete Appoiment" />
        </button>
      </div>
    </article>
  );
};
