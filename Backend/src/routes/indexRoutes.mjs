import express from "express";
import doctorRoutes from "../routes/doctorRoutes.mjs";
import patientRoutes from "../routes/partientRoutes.mjs";
import availabilityRoutes from "../routes/availabilityRoutes.mjs";
import specialityRoutes from "./specialityRoutes.mjs";

const router = express.Router();

router
  .use("/", doctorRoutes)
  .use("/", patientRoutes)
  .use("/", availabilityRoutes)
  .use("/", specialityRoutes);

export default router;
