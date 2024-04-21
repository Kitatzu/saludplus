import { Router } from "express";
import {
  cancelAppoiment,
  createMedicalAppointment,
  getMedicalAppoiments,
} from "../controllers/medicalAppointmentController.mjs";
const router = Router();

router
  .get("/appoiment/", getMedicalAppoiments)
  .post("/appoiment", createMedicalAppointment)
  .delete("/appoiment/:id", cancelAppoiment);

export default router;
