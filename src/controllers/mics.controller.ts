import express from "express";

import { getMics, getMic } from "../services/mics.service";

const router = express.Router();

const micsController = router.get("/mics", async (req, res, next) => {
  let pageNo: any = req.query.pageNo || 1;
  let pageSize: any = req.query.pageSize || 10;

  let borough: any = req.query.borough || "";
  var boroughArray = borough.split(",");

  let params = {
    day: req.query.day,
    borough: boroughArray,
    limit: Number(req.query.limit),
    offset: Number(req.query.offset),
    // start_time: req.query.time,
    cost: req.query.free,
  };

  console.log("This is the borough", typeof borough);
  // console.log("This is the Cost: ", params.cost);
  try {
    const { mics, count } = await getMics(params);

    const pageCount = Math.ceil(mics.length / 10);

    if (!pageNo) {
      pageNo = 1;
    }
    if (pageNo > pageCount) {
      pageNo = pageCount;
    }

    res.status(200).json({
      totalMics: count,
      offset: params.offset,
      limit: params.limit,
      mics: mics,
    });
  } catch (error) {
    next(error);
  }
});

const micController = router.get("/mic", async (req, res, next) => {
  let page: any = req.query.page;
  let id: any = req.query.id;

  // console.log("This is the Page Number: ", page);
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
      mic: mics,
    });
  } catch (error) {
    next(error);
  }
});

// console.log("Controller is working -----", micController);

export { micController, micsController };
