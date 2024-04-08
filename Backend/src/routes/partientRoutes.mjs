import express from "express";
import {
  deletePatient,
  getPatientById,
  getPatients,
  loginPatient,
  registerPatient,
  updatePatient,
} from "../controllers/patientsController.mjs";

const router = express.Router();

router.get("/patients", getPatients);
router.post("/patients/register", registerPatient);
router.get("/patients/login", loginPatient);
router.get("/patients/:id", getPatientById);
router.delete("/patients/:id", deletePatient);
router.put("/patients/:id", updatePatient);

export default router;
