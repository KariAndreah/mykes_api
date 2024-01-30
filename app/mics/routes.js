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

// These is for an individual mic

// These are the mics
router.get("/", getMics);
// router.get("/", getMicByBoroughDay);
// router.get("/", getMics);
// router.get("/", getMicByBorough);
router.get("/get-borough", getMicByBorough);
router1.get("/get-borough-day", getMicByBoroughDay);
router1.get("/get-borough-free", getMicByBoroughFree);
router.get("/get-borough-day-free", getMicByBoroughDayFree);
// router.get("/", getMicByBoroughDayFree);
router.get("/:id", getMicsById);

console.log(getMicByBoroughDay);

export { router, router1 };
