import express from "express";
import { micController, micsController } from "../controllers/mics.controller";

const api = express.Router().use("/api/v1/", micsController, micController);

// const mic = express.Router().use("/api/v1/", micController);

// console.log("Routes is working -----", api);

export { api };
