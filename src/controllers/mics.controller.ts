import express from "express";

import { getMics, getMic } from "../services/mics.service";

const router = express.Router();

const micsController = router.get("/mics", async (req, res, next) => {
  let page: any = req.query.page;
  let day: any = req.query.day;

  console.log("This is the Page Number: ", page);
  try {
    const mics = await getMics(day);

    const pageCount = Math.ceil(mics.length / 10);

    if (!page) {
      page = 1;
    }
    if (page > pageCount) {
      page = pageCount;
    }

    res.status(200).json({
      currentPage: page,
      totalPages: pageCount,
      totalMics: mics.length,
      mics: mics.slice(page * 10 - 10, page * 10),
    });
  } catch (error) {
    next(error);
  }
});

const micController = router.get("/mic", async (req, res, next) => {
  let page: any = req.query.page;
  let id: any = req.query.id;

  console.log("This is the Page Number: ", page);
  try {
    const mics = await getMic(id);

    const pageCount = Math.ceil(mics.length / 10);

    if (!page) {
      page = 1;
    }
    if (page > pageCount) {
      page = pageCount;
    }

    res.status(200).json({
      currentPage: page,
      totalPages: pageCount,
      totalMics: mics.length,
      mics: mics.slice(page * 10 - 10, page * 10),
    });
  } catch (error) {
    next(error);
  }
});

console.log("Controller is working -----", micController);

export { micController, micsController };
