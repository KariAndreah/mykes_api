import express from "express";

import {
  getMics,
  getMic,
  getMicTimes,
  getMicHost,
} from "../services/mics.service";

const router = express.Router();

const micsController = router.get("/mics", async (req, res, next) => {
  let pageNo: any = req.query.pageNo || 1;
  let pageSize: any = req.query.pageSize || 10;

  let borough: any = req.query.borough;
  var boroughArray = borough?.split(",");

  if (borough === "all") {
    boroughArray = [
      "manhattan",
      "queens",
      "staten-island",
      "bronx",
      "brooklyn",
    ];
  }
  // console.log("this is what is going to params", borough);
  let day: any = req.query.day;
  let dayArray = day?.split(",");

  console.log("HELLO KARI from mics ");

  if (day === "all") {
    dayArray = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
  }

  let params = {
    day: dayArray,
    borough: boroughArray,
    limit: Number(req.query.limit) || 10,
    offset: Number(req.query.offset) || 0,
    start_time: req.query.start_time,
    cost: req.query.free || "false",
  };

  // console.log("This is the start time: ", params.start_time);

  // console.log("This is the borough", typeof borough);
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

const micHostController = router.get("/micHost", async (req, res, next) => {
  let page: any = req.query.page;
  let id: any = req.query.id;

  // console.log("This is the Page Number: ", page);
  try {
    const mics = await getMicHost(id);

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

const micTimesController = router.get("/micTimes", async (req, res, next) => {
  let pageNo: any = req.query.pageNo || 1;
  let pageSize: any = req.query.pageSize || 10;

  let borough: any = req?.query.borough;
  var boroughArray = borough.split(",");

  if (borough === "all") {
    boroughArray = [
      "manhattan",
      "queens",
      "staten-island",
      "bronx",
      "brooklyn",
    ];
  }
  console.log("this is what is going to params", borough);
  let day: any = req.query.day;
  let dayArray = day?.split(",");

  if (day === "all") {
    dayArray = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
  }

  console.log(" This is coming from url", req.query["start-time"]);
  console.log("is this printing");
  let params = {
    day: dayArray,
    borough: boroughArray,
    limit: Number(req.query.limit) || 10,
    offset: Number(req.query.offset) || 0,
    start_time: req.query["start-time"] || "00:00:00",
    cost: req.query.free || "false",
  };

  console.log("This is the start time KARI BURT: ", params.start_time);

  console.log("This is the borough", typeof borough);
  // console.log("This is the Cost: ", params.cost);
  try {
    const { mics, count } = await getMicTimes(params);

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

// console.log("Controller is working -----", micController);

export { micController, micsController, micTimesController, micHostController };
