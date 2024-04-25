"use client";
import Image from "next/image";
import "./reg-style.css";
import axios from "axios";

export const PatientsRegister = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      dni: formData.get("dni"),
      birthdate: formData.get("birthdate"),
      genre: formData.get("genre"),
      blood_type: formData.get("blood-type"),
      email: formData.get("email"),
      password: formData.get("password"),
      phone: formData.get("phone"),
    };

    axios
      .post(`http://localhost:3001/patients/register`, data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="container__register">
      <section className="register__container__patient">
        <div className="register__container">
          <h2>Registro de pacientes</h2>

          <form onSubmit={handleSubmit}>
            <div className="form__container">
              <div className="input__container">
                <input type="text" id="firstName" name="first_name" required />
                <span>Nombre*</span>
              </div>

              <div className="input__container">
                <input type="text" id="lastName" name="last_name" required />
                <span>Apellido*</span>
              </div>

              <div className="input__container">
                <label htmlFor="typeId">Tipo de identificación*</label>
                <select id="typeId">
                  <option value="1">DNI</option>
                  <option value="2">Carnet de Extranjería</option>
                  <option value="3">Pasaporte</option>
                </select>
              </div>
              <div className="input__container">
                <input type="text" id="identification" name="dni" required />
                <span>N° identificación</span>
              </div>

              <div className="input__container">
                <input
                  type="date"
                  id="date"
                  min="1981-01-01"
                  max="2024-04-30"
                  required
                  name="birthdate"
                />
                <span className="date">Fecha de nacimiento*</span>
              </div>

              <div className="input__container">
                <label htmlFor="genre-dropdown"> Genero </label>
                <select id="genre" name="genre">
                  <option value="masculino"> Masculino </option>
                  <option value="femenino"> Femenino </option>
                </select>
              </div>

              <div className="input__container">
                <label htmlFor="bloodType-dropdown"> Tipo de sangre* </label>
                <select id="blood-type" name="blood-type">
                  <option value="A+"> A+ </option>
                  <option value="A-"> A- </option>
                  <option value="B+"> B+ </option>
                  <option value="B-"> B- </option>
                  <option value="AB+"> AB+ </option>
                  <option value="AB-"> AB- </option>
                  <option value="O+"> O+ </option>
                  <option value="O-"> O- </option>
                </select>
              </div>

              <div className="input__container">
                <input type="text" id="email" required />
                <span>E-mail*</span>
              </div>
              <div className="input__container">
                <input type="text" id="repeat-email" name="email" required />
                <span>Repetir E-mail*</span>
              </div>

              <div className="input__container">
                <input type="password" id="password" required />
                <span>Contraseña*</span>
              </div>
              <div className="input__container">
                <input
                  type="password"
                  id="repeat-password"
                  name="password"
                  required
                />
                <span>Rep contraseña*</span>
              </div>

              <div className="input__container">
                <input type="text" id="phone" name="phone" required />
                <span>Teléfono*</span>
              </div>
            </div>
            <div className="buttons__container">
              <div className="buttons__form">
                <button type="submit">Enviar</button>
                <button>Cancelar</button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section className="img__container__patient">
        <Image
          src="/images/patients-register.jpg"
          alt="doctor"
          width={500}
          height={500}
        />
        <div className="cape"></div>
      </section>
    </section>
  );
};
