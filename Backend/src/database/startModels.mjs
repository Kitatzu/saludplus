import Admin from "../models/Admin.mjs";
import MedicalAppointment from "../models/Medical_appointment.mjs";
import Patient from "../models/Patient.mjs";
import MedicalSpeciality from "../models/MedicalSpeciality.mjs";
import Availability from "../models/Availability.mjs";
import Doctor from "../models/Doctor.mjs";

export default function startModels() {
  Admin;
  Patient;
  MedicalAppointment;
  MedicalSpeciality;
  Availability;
  Doctor;
}
