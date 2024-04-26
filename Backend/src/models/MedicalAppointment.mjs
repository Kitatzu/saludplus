import { DataTypes, UUIDV4 } from "sequelize";
import sequelize from "../database/startDb.mjs";
import Patient from "./Patient.mjs";
import Doctor from "./Doctor.mjs";
import MedicalSpeciality from "./MedicalSpeciality.mjs";

const MedicalAppointment = sequelize.define("medical_appointment", {
  idMedicalAppointment: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  start_time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "pending",
  },
  idDoctor: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  idPatient: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  idMedicalSpeciality: {
    type: DataTypes.UUID,
    allowNull: false, // Ajusta si la especialidad es obligatoria
  },
});

Doctor.hasMany(MedicalAppointment, {
  foreignKey: {
    name: "idDoctor",
    allowNull: false,
  },
  as: "doctor",
});

Patient.hasMany(MedicalAppointment, {
  foreignKey: {
    name: "idPatient",
    allowNull: false,
  },
  as: "patient",
});

MedicalAppointment.belongsTo(Doctor, {
  foreignKey: {
    name: "idDoctor",
    allowNull: false,
  },
  as: "doctorAppointments",
});

MedicalAppointment.belongsTo(Patient, {
  foreignKey: {
    name: "idPatient",
    allowNull: false,
  },
  as: "patientAppointments",
});

MedicalSpeciality.hasOne(MedicalAppointment, {
  foreignKey: {
    name: "idMedicalSpeciality",
    allowNull: false,
  },
  as: "specialityMedicalAppoiment",
});

MedicalAppointment.belongsTo(MedicalSpeciality, {
  foreignKey: {
    name: "idMedicalSpeciality",
    allowNull: false,
  },
  as: "medicalAppoimentSpeciality",
});

export default MedicalAppointment;
