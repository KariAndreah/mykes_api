import express from "express";
import boroughFreeController from "../controllers/borough-free-controller.js";

const boroughFreeRouter = express.Router();

boroughFreeRouter.get("/", boroughFreeController);

export default boroughFreeRouter;
