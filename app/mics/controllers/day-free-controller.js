import pool from "../../../db.js";
import { getMicListingByDayFree } from "../../mics/queries.js";

const dayFreeController = async (req, res) => {
  let day = req.query.day;
  let page = parseInt(req.query.page);

  console.log(req.query.page);
  console.log(req.query.borough);

  await pool.query(getMicListingByDayFree, [day], (error, results) => {
    const pageCount = Math.ceil(results.rows.length / 10);
    if (!page) {
      page = 1;
    }
    if (page > pageCount) {
      page = pageCount;
    }
    if (error) throw error;
    if (results.rowCount > 0) {
      res.status(200).json({
        currentPage: page,
        totalPages: pageCount,
        totalMics: results.rows.length,
        mics: results.rows.slice(page * 10 - 10, page * 10),
      });
    } else {
      res.status(404).send({ message: "No mics found" });
    }
  });
};

export default dayFreeController;