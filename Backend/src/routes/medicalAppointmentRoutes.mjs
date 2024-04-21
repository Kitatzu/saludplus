import { Router } from "express";
import { createMedicalAppointment } from "../controllers/medicalAppointmentController.mjs";
const router = Router();

router.post("/appoiment", createMedicalAppointment);

export default router;
