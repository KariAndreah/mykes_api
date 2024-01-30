import express from "express";
import boroughController from "../controllers/borough-controller.js";

const boroughRouter = express.Router();

boroughRouter.get("/", boroughController);

export default boroughRouter;
