import { DataTypes, UUIDV4 } from 'sequelize'
import sequelize from "../database/startDb.mjs"
import Patient from './Patient.mjs'
import Doctor from './Doctor.mjs'

const MedicalAppointment = sequelize.define('medical_appointment', {
  idMedicalAppointment: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    primaryKey: true
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  start_date: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  end_time: {
    type: DataTypes.TIME,
    allowNull: false
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

Doctor.hasMany(MedicalAppointment, {
  foreignKey: 'idDoctor',
  as: 'doctor'
})

Patient.hasMany(MedicalAppointment, {
  foreignKey: 'idPatient',
  as: 'patient'
})

MedicalAppointment.belongsTo(Doctor, {
  foreignKey: 'idDoctor',
  as: 'doctorAppointments'
})

MedicalAppointment.belongsTo(Patient, {
  foreignKey: 'idPatient',
  as: 'patientAppointments'
})

export default MedicalAppointment