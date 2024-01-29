import express from "express";

import {
  getMics,
  getMicByBorough,
  getMicByBoroughFree,
  getMicsById,
  getMicByBoroughDay,
  getMicByBoroughDayFree,
} from "./controller.js";

// const router = Router();
const router = express.Router();
const router1 = express.Router();
const app = express();

// These is for an individual mic
router.get("/:id", getMicsById);

// These are the mics
router1.get("/", getMics);
// router.get("/", getMicByBoroughDay);
// router.get("/", getMics);
// router.get("/", getMicByBorough);
router1.get("/get-borough", getMicByBorough);
router1.get("/get-borough-day", getMicByBoroughDay);
router1.get("/get-borough-free", getMicByBoroughFree);
router1.get("/get-borough-day-free", getMicByBoroughDayFree);
// router.get("/", getMicByBoroughDayFree);

console.log(getMicByBoroughDay);

export { router, router1 };