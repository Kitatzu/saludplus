import express from "express";
import {
  getDoctors,
  registerDoctor,
  loginDoctor,
  getDoctorById,
  deleteDoctor,
  updateDoctor,
} from "../controllers/doctorsController.mjs";

const router = express.Router();

//doctors routes
router.get("/doctors", getDoctors);
router.get("/doctors/login", loginDoctor);
router.get("/doctors/:id", getDoctorById);
router.post("/doctors/register", registerDoctor);
router.delete("/doctors/:id", deleteDoctor);
router.put("/doctors/:id", updateDoctor);

export default router;
