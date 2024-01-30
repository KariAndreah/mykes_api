import express from "express";
import dayController from "../controllers/day-controller.js";

const dayRouter = express.Router();

dayRouter.get("/", dayController);

export default dayRouter;
