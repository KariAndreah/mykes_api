import express from "express";
import individualController from "../controllers/individual-controller.js";

const individualRouter = express.Router();

individualRouter.get("/:id", individualController);

export default individualRouter;
