import express from "express";
import allFreeController from "../controllers/all-free-controller.js";

const allFreeRouter = express.Router();

allFreeRouter.get("/", allFreeController);

export default allFreeRouter;
