import {DataTypes} from 'sequelize'
import sequelize from '../database/startDb.mjs'

const Patient = sequelize.define('patient', {
  idPatient: {
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
  birthdate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false
  },
  blood_type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  direction: {
    type: DataTypes.STRING,
    allowNull: false
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
  },
})
export default Patient