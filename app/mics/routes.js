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
const router2 = express.Router();
const router3 = express.Router();
const router4 = express.Router();
const router5 = express.Router();

// These is for an individual mic
router.get("/:id", getMicsById);

// These are the mics
router1.get("/", getMics);
// router.get("/", getMicByBoroughDay);
// router.get("/", getMics);
// router.get("/", getMicByBorough);
router2.get("/get-borough", getMicByBorough);
router3.get("/get-borough-day", getMicByBoroughDay);
router4.get("/get-borough-free", getMicByBoroughFree);
router5.get("/get-borough-day-free", getMicByBoroughDayFree);
// router.get("/", getMicByBoroughDayFree);

console.log(getMicByBoroughDay);

export { router, router1, router2, router3, router4, router5 };
