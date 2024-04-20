import express from "express";
import {
  getDoctors,
  registerDoctor,
  getDoctorById,
  deleteDoctor,
  updateDoctor,
} from "../controllers/doctorsController.mjs";

const router = express.Router();

//doctors routes
router
  .get("/doctors", getDoctors)
  .get("/doctors/:id", getDoctorById)
  .post("/doctors/register", registerDoctor)
  .delete("/doctors/:id", deleteDoctor)
  .put("/doctors/:id", updateDoctor);

export default router;
