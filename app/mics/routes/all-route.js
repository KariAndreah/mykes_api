import express from "express";
import allController from "../controllers/all-controller.js";

const allRouter = express.Router();

allRouter.get("/", allController);

export default allRouter;
