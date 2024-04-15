import './reg-style.css';

export const DoctorsRegister = () => {
  return (
    <section className='container__register'>
      <section className="register__container">
      <h2>Registro de profesionales</h2>

      <form>
        <div className='form__container__doctor'>
          <div className="input__container">
            <label htmlFor="firstName">Nombre*</label>
            <input type="text" id="firstName"/>
          </div>

          <div className="input__container">
            <label htmlFor="lastName">Apellido*</label>
            <input type="text" id="lastName" />
          </div>


          <div className="input__container">
            <label htmlFor="date">Fecha de nacimiento*</label>
            <input type="date" id="date"/>
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
            <label htmlFor="identification">Número de identificación*</label>
            <input type="text" id="identification" placeholder="Número de identificación" />
          </div>
          <div className="input__container">
            <label htmlFor="gender">Género*</label>
            <input type="text" id="gender" />
          </div>

          <div className="input__container">
            <label htmlFor="email">E-mail*</label>
            <input type="text" id="email" />
          </div>
          <div className="input__container">
            <label htmlFor="email">Repetir E-mail*</label>
            <input type="text" id="email" />
          </div>

          <div className="input__container">
            <label htmlFor="phone">Teléfono*</label>
            <input type="text" id="phone" />
          </div>

          <div className="input__container">
            <label htmlFor="password">Contraseña*</label>
            <input type="password" id="password" />
          </div>
          <div className="input__container">
            <label htmlFor="password">Repetir Contraseña*</label>
            <input type="password" id="password" />
          </div>

          
        </div>
        <div className='buttons__container'>
          <div className="buttons__form">
            <button type="submit">Enviar</button>
            <button >Cancelar</button>
          </div>
        </div>
      </form>
    </section>
    <section>
      
    </section>
    </section>
  )
}
