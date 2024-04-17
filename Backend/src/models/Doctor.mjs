import { DataTypes } from "sequelize";
import sequelize from "../database/startDb.mjs";
import MedicalSpeciality from "./MedicalSpeciality.mjs";

const Doctor = sequelize.define("doctor", {
  idDoctor: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthdate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  dni: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  genre: {
    type: DataTypes.STRING,
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
  phone: {
    type: DataTypes.INTEGER,
  },
  rol: {
    type: DataTypes.STRING,
    defaultValue: "doctor",
  },
});

Doctor.belongsTo(MedicalSpeciality, {
  foreignKey: "idMedicalSpeciality",
  as: "medical_speciality",
});

export default Doctor;
