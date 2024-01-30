import express from "express";
import boroughDayController from "../controllers/borough-day-controller.js";

const boroughDayRouter = express.Router();

boroughDayRouter.get("/", boroughDayController);

export default boroughDayRouter;
