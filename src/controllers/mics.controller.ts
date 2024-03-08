import express from "express";

import getMics from "../services/mics.service";

const router = express.Router();

const micController = router.get("/api", async (req, res, next) => {
  let page: any = req.query.page;
  console.log("This is the Page Number: ", page);
  try {
    const mics = await getMics();

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

export default micController;
