import express from "express";
import PatientController from "../controllers/patients.mjs";
import DoctorController from "../controllers/doctors.mjs";

const router = express.Router();

router.use("/patients", PatientController);
router.use("/doctors", DoctorController);

export default router;
