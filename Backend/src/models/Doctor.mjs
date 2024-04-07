import { DataTypes } from 'sequelize'
import sequelize from '../database/startDb.mjs'

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
  },
})

export default Doctor
