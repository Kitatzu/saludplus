import express from "express";
import doctorRoutes from "../routes/doctorRoutes.mjs";
import patientRoutes from "../routes/partientRoutes.mjs";

const router = express.Router();

router.use("/", doctorRoutes);
router.use("/", patientRoutes);

export default router;
