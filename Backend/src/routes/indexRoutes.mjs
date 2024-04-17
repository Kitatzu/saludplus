import express from "express";
import doctorRoutes from "../routes/doctorRoutes.mjs";
import patientRoutes from "../routes/partientRoutes.mjs";
import availabilityRoutes from "../routes/availabilityRoutes.mjs";
import specialityRoutes from "../routes/specialityRoutes.mjs";
import medicalAppointmentRoutes  from "../routes/medicalAppointmentRoutes.mjs"

const router = express.Router();

router
  .use("/", doctorRoutes)
  .use("/", patientRoutes)
  .use("/", availabilityRoutes)
  .use("/", specialityRoutes)
  .use("/", medicalAppointmentRoutes)

export default router;
