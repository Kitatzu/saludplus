import express from "express";
import {
  deletePatient,
  getPatientById,
  getPatients,
  registerPatient,
  updatePatient,
} from "../controllers/patientsController.mjs";

const router = express.Router();

router
  .get("/patients", getPatients)
  .post("/patients/register", registerPatient)
  .get("/patients/:id", getPatientById)
  .delete("/patients/:id", deletePatient)
  .put("/patients/:id", updatePatient);

export default router;
