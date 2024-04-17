import { Router } from "express"
import { createMedicalAppointment } from "../controllers/medicalAppointmentController.mjs"
const router = Router()

router
  .post("/medicalAppointment", createMedicalAppointment)

export default router