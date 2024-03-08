import express from "express";
import micController from "../controllers/mics.controller";

const api = express.Router().use(micController);

console.log("Routes is working -----", api);

export default api;
