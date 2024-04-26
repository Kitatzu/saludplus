"use client";
import "./appoimentForm.css";
import { useDoctorsStore } from "@/utilities/store/Store";
import { tokenDecode } from "@/utilities/request/decode";
import { robotoFont } from "@/fonts/fonts";
import { addAppoiment } from "@/utilities/request/axios";
import { useEffect, useState } from "react";
import axios from "axios";

export const AppoimentForm = () => {
  const [selectSpeciality, setSelectSpeciality] = useState(null);
  const { specialities, setSpecialities, setDoctors, isLoading, doctors } =
    useDoctorsStore();

  useEffect(() => {
    setSpecialities();
    if (selectSpeciality) {
      setDoctors(selectSpeciality);
    }
  }, [selectSpeciality]);

  const handleSubmit = async (event) => {
    const authToken = localStorage.getItem("authToken");
    const token = JSON.parse(authToken);
    const decodeToken = tokenDecode(token);

    event.preventDefault();
    const formData = new FormData(event.target);

    const data = {
      idDoctor: formData.get("doctor"),
      idPatient: decodeToken.id,
      date: formData.get("date"),
      speciality: formData.get("speciality"),
      start_time: formData.get("start_time"),
    };

    await addAppoiment(data);
  };

  return (
    <form onSubmit={handleSubmit} className="appoiment_form_container">
      <h1> Turno Nuevo</h1>
      <div className="select_container">
        <select
          id="idMedicalSpeciality"
          name="speciality"
          defaultValue=""
          onChange={(e) => setSelectSpeciality(e.target.value)}
        >
          <option value="" hidden disabled>
            Especialidad
          </option>
          {isLoading ? (
            <option>Cargando especialidades...</option>
          ) : specialities.length > 0 ? (
            specialities.map((specialization) => (
              <option
                key={specialization.idMedicalSpeciality}
                value={specialization.speciality}
              >
                {specialization.speciality}
              </option>
            ))
          ) : (
            <option disabled>No hay especialidades disponibles</option>
          )}
        </select>
        <input
          type="date"
          id="date"
          name="date"
          min={new Date().toISOString().slice(0, 10)}
          max={new Date().toISOString().slice(0, 10) + 1}
        />
        <select id="hourSelector" name="start_time" defaultValue="">
          <option hidden selected value="">
            Seleccione un Horario
          </option>
          <option value="8:00:00"> 8:30 </option>
          <option value="9:00:00"> 9:00 </option>
          <option value="10:00:00"> 9:30 </option>
        </select>
      </div>
      <div className="doctors_container">
        {doctors.length > 0 ? (
          doctors.map((doctor) => (
            <li key={doctor.idDoctor}>
              <input
                type="radio"
                name="doctor"
                id={doctor.idDoctor}
                value={doctor.idDoctor}
              />
              <label htmlFor={doctor.idDoctor}>
                {doctor.first_name}, {doctor.last_name}
              </label>
            </li>
          ))
        ) : (
          <p>No hay doctores disponibles para esta especialidad.</p>
        )}
      </div>
      <div className={`btn_container`}>
        <button type="submit" className={`${robotoFont.className} submit`}>
          Enviar
        </button>
        <button className={`${robotoFont.className} cancel`}> Cancelar</button>
      </div>
    </form>
  );
};
