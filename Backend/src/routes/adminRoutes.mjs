import { Router } from "express";
import { loginController } from "../controllers/adminController.mjs";

const router = Router();

router.post("/login", loginController);

export default router;
