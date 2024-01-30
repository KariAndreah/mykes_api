import pool from "../../../db.js";
import { getAllFreeMicListing } from "../../mics/queries.js";

const allFreeController = async (req, res) => {
  let page = parseInt(req.query.page);
  console.log(req.query.borough);

  console.log(req.query.page);

  await pool.query(getAllFreeMicListing, (error, results) => {
    const pageCount = Math.ceil(results.rows.length / 10);
    if (!page) {
      page = 1;
    }
    if (page > pageCount) {
      page = pageCount;
    }
    if (error) throw error;
    res.status(200).json({
      currentPage: page,
      totalPages: pageCount,
      totalMics: results.rows.length,
      mics: results.rows.slice(page * 10 - 10, page * 10),
    });
  });
};

export default allFreeController;
