import pool from "../../../db.js";
import { getMicListingByBoroughDayTimeFree } from "../../mics/queries.js";

const boroughDayTimeFreeController = async (req, res) => {
  let borough = req.query.borough.split(",");
  let day = req.query.day.split(",");
  let page = parseInt(req.query.page);
  let time = req.query.time;
  console.log(borough);
  console.log(day);
  console.log(time);
  console.log("why doesnt this work", time);

  let dayQuery;
  let boroughQuery;

  if (day.includes("All")) {
    dayQuery = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  } else {
    dayQuery = day;
  }

  if (borough.includes("All")) {
    boroughQuery = [
      "Manhattan",
      "Queens",
      "Bronx",
      "Staten-Island",
      "Brooklyn",
    ];
    console.log(borough);
  } else {
    boroughQuery = borough;
    console.log(boroughQuery);
  }

  await pool.query(
    getMicListingByBoroughDayTimeFree,
    [boroughQuery, dayQuery, time],
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
        res.end();
      } else {
        res.status(404).send({ message: "No mics found" });
        res.end();
      }
    }
  );
};

export default boroughDayTimeFreeController;
