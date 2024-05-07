"use client";
import Image from "next/image";
import "./reg-style.css";
import axios from "axios";

export const DoctorsRegister = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      birthdate: formData.get("birthdate"),
      dni: formData.get("dni"),
      genre: formData.get("genre"),
      registration: formData.get("registration"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      password: formData.get("password"),
      speciality: formData.get("speciality"),
    };
    axios
      .post(`http://localhost:3001/doctors/register`, data)
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="container__register">
      <section className="register__container__doctor">
        <section className="register__container">
          <h2>Registro de profesionales</h2>

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
                <label htmlFor="genre-dropdown"> Genero </label>
                <select id="genre" name="genre">
                  <option value="masculino"> Masculino </option>
                  <option value="femenino"> Femenino </option>
                </select>
              </div>

              <div className="input__container">
                <input type="text" id="email" required />
                <span>E-mail*</span>
              </div>
              <div className="input__container">
                <input type="text" id="confirm-email" name="email" required />
                <span>Repetir E-mail*</span>
              </div>

              <div className="input__container">
                <input type="text" id="phone" name="phone" required />
                <span>Teléfono*</span>
              </div>

              <div className="input__container">
                <input type="password" id="password" required />
                <span>Contraseña*</span>
              </div>
              <div className="input__container">
                <input
                  type="password"
                  id="confirm-password"
                  name="password"
                  required
                />
                <span>Rep contraseña*</span>
              </div>

              <div className="input__container">
                <label htmlFor="specialty-dropdown">Especialidad*</label>
                <select id="speciality" name="speciality">
                  <option value="cardiologia">Cardiología</option>
                  <option value="traumatologia">Traumatologia</option>
                  <option value="clinico">Clinico</option>
                </select>
              </div>
              <div className="input__container">
                <input
                  type="text"
                  id="registration"
                  name="registration"
                  required
                />
                <span>N° de Matricula*</span>
              </div>
            </div>
            <div className="buttons__container">
              <div className="buttons__form">
                <button type="submit">Enviar</button>
                <button>Cancelar</button>
              </div>
            </div>
          </form>
        </section>
      </section>
      <section className="img__container__doctor">
        <Image
          src="/images/doctors-register.jpg"
          alt="doctor"
          width={500}
          height={500}
        />
        <div className="cape"></div>
      </section>
    </section>
  );
};
