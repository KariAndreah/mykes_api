import pool from "../../../db.js";
import { getMicListingByBoroughDayTime } from "../../mics/queries.js";

const boroughDayTimeController = async (req, res) => {
  let borough = req.query.borough.split(",");
  let day = req.query.day;
  let page = parseInt(req.query.page);
  let time = req.query.time;
  console.log(borough);
  console.log(day);
  console.log(time);
  console.log("why doesnt this work", time);

  await pool.query(
    getMicListingByBoroughDayTime,
    [borough, day, time],
    (error, results) => {
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
    }
  );
};

export default boroughDayTimeController;