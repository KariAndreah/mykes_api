import express from "express";
import dayFreeController from "../controllers/day-free-controller.js";

const dayFreeRouter = express.Router();

dayFreeRouter.get("/", dayFreeController);

export default dayFreeRouter;
