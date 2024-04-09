import express from "express";
import {
  getMedicalSpeciality,
  createMedicalSpeciality,
  updateMedicalSpeciality,
  deleteMedicalSpeciality,
  getMedicalSpecialityById,
} from "../controllers/specialityController.mjs";

const router = express.Router();

router
  .get("/speciality", getMedicalSpeciality)
  .post("/speciality", createMedicalSpeciality)
  .put("/speciality/:id", updateMedicalSpeciality)
  .delete("/speciality/:id", deleteMedicalSpeciality)
  .get("/speciality/:id", getMedicalSpecialityById);

export default router;
