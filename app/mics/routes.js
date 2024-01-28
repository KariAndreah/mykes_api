import { Router } from "express";
import { getMics } from "./controller.js";

const router = Router();

router.get("/", getMics);

export default router;
