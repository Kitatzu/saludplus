import { Router } from "express";
import {
  getAllAvailability,
  createAvailability,
} from "../controllers/AvailabilitiesController.mjs";

const router = Router();

router
  .get("/available", getAllAvailability)
  .post("/available", createAvailability);

export default router;
