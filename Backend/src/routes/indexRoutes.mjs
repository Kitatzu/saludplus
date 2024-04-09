import express from "express";
import doctorRoutes from "../routes/doctorRoutes.mjs";
import patientRoutes from "../routes/partientRoutes.mjs";
import availabilityRoutes from '../routes/availabilityRoutes.mjs'

const router = express.Router()

router.use("/", doctorRoutes)
router.use("/", patientRoutes)
router.use("/", availabilityRoutes)

export default router;
