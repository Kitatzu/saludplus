import express from "express";
import {
  getMedicalSpeciality,
  updateMedicalSpeciality,
  deleteMedicalSpeciality,
  getMedicalSpecialityById,
  getDoctorsBySpeciality,
} from "../controllers/specialityController.mjs";

const router = express.Router();

router
  .get("/speciality", getMedicalSpeciality)
  .get("/speciality", getDoctorsBySpeciality)
  .put("/speciality/:id", updateMedicalSpeciality)
  .delete("/speciality/:id", deleteMedicalSpeciality)
  .get("/speciality/:id", getMedicalSpecialityById);

export default router;
