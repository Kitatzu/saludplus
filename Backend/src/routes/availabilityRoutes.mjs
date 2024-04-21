import { Router } from "express";
import {
  getAllAvailability,
  createAvailability,
  // updateAvailability,
  // deleteAvailability,
  getAvailabilityById,
} from "../controllers/AvailabilitiesController.mjs";

const router = Router();

router
  .get("/available", getAllAvailability)
  .post("/available", createAvailability)
  // .patch("/available/:id", updateAvailability)
  // .delete("/available/:id", deleteAvailability)
  .get("/available/:id", getAvailabilityById);

export default router;
