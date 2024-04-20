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
  start_time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  end_time: {
    type: DataTypes.TIME,
    allowNull: false
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'generado'
  },
  idDoctor: {
    type: DataTypes.UUID,
    allowNull: false
  },
  idPatient: {
    type: DataTypes.UUID,
    allowNull: false
  }
}, {
  indexes: [{
    unique: true,
    name: 'unique_medcial_appointment',
    fields: ['idDoctor', 'idPatient', 'date', 'start_time', 'end_time']
  }]
})

Doctor.hasMany(MedicalAppointment, {
  foreignKey: {
    name: 'idDoctor',
    allowNull: false
  },
  as: 'doctor'
})

Patient.hasMany(MedicalAppointment, {
  foreignKey: {
    name: 'idPatient',
    allowNull: false
  },
  as: 'patient'
})

MedicalAppointment.belongsTo(Doctor, {
  foreignKey: {
    name: 'idDoctor',
    allowNull: false
  },
  as: 'doctorAppointments'
})

MedicalAppointment.belongsTo(Patient, {
  foreignKey: {
    name: 'idPatient',
    allowNull: false
  },
  as: 'patientAppointments'
})

export default MedicalAppointment