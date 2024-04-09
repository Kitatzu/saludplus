import { DataTypes } from 'sequelize'
import sequelize from '../database/startDb.mjs'
import MedicalSpeciality from './MedicalSpeciality.mjs'
import Availabity from './Availability.mjs'

const Doctor = sequelize.define('doctor',{
  idDoctor: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dni: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  registration: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rol: {
    type: DataTypes.STRING,
    defaultValue: "doctor",
  }
})

Doctor.belongsTo(MedicalSpeciality, {
  foreignKey: {
    name: 'idMedicalSpeciality',
    allowNull: false
  },
  as: 'medical_speciality'
})

Doctor.belongsTo(Availabity, {
  foreignKey: {
    name: 'idAvailabity',
    allowNull: false
  },
  as: 'availabity'
})

export default Doctor
