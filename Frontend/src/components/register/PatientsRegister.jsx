import Image from 'next/image';
import './reg-style.css';

export const PatientsRegister = () => {
  const handleClick = (event) => {
    event.preventDefault();
  }

  return (
    <section className='container__register'>
      <section className="register__container__patient">
        <div className='register__container'>
        <h2>Registro de pacientes</h2>

        <form>
          <div className='form__container'>
            <div className="input__container">
              <input type="text" id="firstName" required/>
              <span>Nombre*</span>
            </div>

            <div className="input__container">
              <input type="text" id="lastName" required/>
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
              <input type="text" id="identification" required/>
              <span>N° identificación</span>
            </div>

            <div className="input__container">
              <label htmlFor="date">Fecha de nacimiento*</label>
              <input type="date" id="date" required/>
            </div>

            <div className="input__container">
              <input type="text" id="gender" required/>
              <span>Género*</span>
            </div>

            <div className="input__container">
              <input type="text" id="email" required/>
              <span>E-mail*</span>
            </div>
            <div className="input__container">
              <input type="text" id="email" required/>
              <span>Repetir E-mail*</span>
            </div>

            <div className="input__container">
              <input type="password" id="password" required/>
              <span>Contraseña*</span>
            </div>
            <div className="input__container">
              <input type="password" id="password" required/>
              <span>Rep contraseña*</span>
            </div>

            <div className="input__container">
              <input type="text" id="phone" required/>
              <span>Teléfono*</span>
            </div>
          </div>
          <div className='buttons__container'>
            <div className="buttons__form">
              <button type="submit">Enviar</button>
              <button >Cancelar</button>
            </div>
          </div>
        </form>
        </div>
      </section>
      <section className="img__container">
        <Image src="/images/patients-register.jpg" alt="doctor" width={500} height={500} />
        <div className="cape"></div>
      </section>
    
    </section>
  );
};
