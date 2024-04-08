import { DataTypes, UUIDV4 } from 'sequelize'
import sequelize from "../database/startDb.mjs"

const MedicalSpeciality = sequelize.define('medical_speciality', {
  idMedicalSpeciality: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    primaryKey: true
  },
  speciality: {
    type: DataTypes.STRING,
    allowNull:false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  }
})

export default MedicalSpeciality