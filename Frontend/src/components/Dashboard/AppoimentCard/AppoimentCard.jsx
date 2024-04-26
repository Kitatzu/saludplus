"use client";
import { fetchAppoiments } from "@/utilities/request/axios";
import { useEffect, useState } from "react";
import "./appoiment.css";

export const AppoimentCard = () => {
  const getStateClass = (state) => {
    console.log(state);
    return state == "sucess"
      ? "success"
      : state == "pending"
      ? "pending"
      : state == "canceled"
      ? "canceled"
      : "";
  };

  const [fetchedAppointments, setFetchedAppointments] = useState([]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
    return formattedDate;
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    const getAppointments = async () => {
      const authToken = localStorage.getItem("authToken");
      const token = JSON.parse(authToken);
      const response = await fetchAppoiments(token);
      if (!response) {
        throw console.error("Peticion no realizada");
      }
      setFetchedAppointments(response.data);
    };

    getAppointments();
  }, []);

  return (
    <>
      {fetchedAppointments.length > 0 ? (
        fetchedAppointments.map((appointment) => (
          <article
            key={appointment.idMedicalAppointment}
            className="appoiment_card"
          >
            <div className="text_container">
              <span className={`state ${getStateClass(appointment.state)}`}>
                {appointment.state}
              </span>
              <h1>
                {capitalizeFirstLetter(
                  appointment.medicalAppoimentSpeciality.speciality
                )}
              </h1>
              <span className="date">
                {formatDate(appointment.date)}, {appointment.start_time}
              </span>
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
        ))
      ) : (
        <p>No hay citas médicas disponibles en este momento.</p>
      )}
    </>
  );
};
