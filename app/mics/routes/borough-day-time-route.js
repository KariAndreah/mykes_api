import express from "express";
import boroughDayTimeController from "../controllers/borough-day-time-controller.js";

const boroughDayTimeRouter = express.Router();

boroughDayTimeRouter.get("/", boroughDayTimeController);

export default boroughDayTimeRouter;
