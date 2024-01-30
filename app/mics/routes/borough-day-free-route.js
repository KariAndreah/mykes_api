import express from "express";
import boroughDayFreeController from "../controllers/borough-day-free-controller.js";

const boroughDayFreeRouter = express.Router();

boroughDayFreeRouter.get("/", boroughDayFreeController);

export default boroughDayFreeRouter;
