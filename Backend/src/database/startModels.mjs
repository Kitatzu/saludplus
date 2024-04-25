import Admin from "../models/Admin.mjs";
import MedicalAppointment from "../models/MedicalAppointment.mjs";
import Patient from "../models/Patient.mjs";
import MedicalSpeciality from "../models/MedicalSpeciality.mjs";

export const startModels = () => {
  Admin;
  Patient;
  MedicalAppointment;
  MedicalSpeciality;
};
