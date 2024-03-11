import express from "express";

import { getMics, getMic } from "../services/mics.service";

const router = express.Router();

const micsController = router.get("/mics", async (req, res, next) => {
  let pageNo: any = req.query.pageNo || 1;
  let pageSize: any = req.query.pageSize || 10;

  let params = {
    day: req.query.day,
    borough: req.query.borough,
    // start_time: req.query.time,
    cost: req.query.free,
  };

  console.log("This is the Cost: ", params.cost);
  try {
    const mics = await getMics(params);

    const pageCount = Math.ceil(mics.length / 10);

    if (!pageNo) {
      pageNo = 1;
    }
    if (pageNo > pageCount) {
      pageNo = pageCount;
    }

    res.status(200).json({
      pageNo: pageNo,
      pageSize: pageSize,
      totalPages: pageCount,
      totalMics: mics.length,
      mics: mics.slice(pageNo * pageSize - pageSize, pageNo * pageSize),
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

    // const pageCount = Math.ceil(mics.length / 10);

    // if (!page) {
    //   page = 1;
    // }
    // if (page > pageCount) {
    //   page = pageCount;
    // }

    res.status(200).json({
      currentPage: page,
      totalPages: 1,
      totalMics: 1,
      mics: mics,
    });
  } catch (error) {
    next(error);
  }
});

console.log("Controller is working -----", micController);

export { micController, micsController };
