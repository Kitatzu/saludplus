import express from "express";
import doctorRoutes from "../routes/doctorRoutes.mjs";
import patientRoutes from "../routes/partientRoutes.mjs";
import adminRoutes from "../routes/adminRoutes.mjs";
import specialityRoutes from "../routes/specialityRoutes.mjs";
import medicalAppointmentRoutes from "../routes/medicalAppointmentRoutes.mjs";

const router = express.Router();

router
  .use("/", doctorRoutes)
  .use("/", patientRoutes)
  .use("/", specialityRoutes)
  .use("/", medicalAppointmentRoutes)
  .use("/", adminRoutes);

export default router;
