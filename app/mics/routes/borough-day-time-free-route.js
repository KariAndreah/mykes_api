import express from "express";
import boroughDayTimeFreeController from "../controllers/borough-day-time-free-controller.js";

const boroughDayTimeFreeRouter = express.Router();

boroughDayTimeFreeRouter.get("/", boroughDayTimeFreeController);

export default boroughDayTimeFreeRouter;
