import express from "express";
import { micController, micsController } from "../controllers/mics.controller";

const api = express.Router().use(micsController);

const mic = express.Router().use(micController);

// console.log("Routes is working -----", api);

export { api, mic };
