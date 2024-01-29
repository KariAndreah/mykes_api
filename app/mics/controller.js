import pool from "../../db.js";
import {
  getMicListing,
  getAllMicListing,
  getMicById,
  getMicListingByBorough,
  getMicListingByBoroughFree,
  getMicListingByBoroughDay,
  getMicListingByBoroughDayFree,
} from "./queries.js";

// const getMics = async (req, res) => {
//   await pool.query(getAllMicListing, (error, results) => {
//     if (error) throw error;
//     res.status(200).json(results.rows);
//   });
// };

const getMicsById = async (req, res) => {
  const id = parseInt(req.params.id);
  await pool.query(getMicById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getMics = async (req, res) => {
  let page = parseInt(req.query.page);
  console.log(req.query.borough);

  console.log(req.query.page);

  await pool.query(getAllMicListing, (error, results) => {
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

const getMicByBorough = async (req, res) => {
  let borough = req.query.borough;
  let page = parseInt(req.query.page);

  console.log(req.query.page);
  console.log(req.query.borough);

  await pool.query(getMicListingByBorough, [borough], (error, results) => {
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

const getMicByBoroughFree = async (req, res) => {
  let borough = req.query.borough;
  let page = parseInt(req.query.page);

  console.log(req.query.page);
  console.log(req.query.borough);

  await pool.query(getMicListingByBoroughFree, [borough], (error, results) => {
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

const getMicByBoroughDay = async (req, res) => {
  let borough = req.query.borough;
  let day = req.query.day;
  let page = parseInt(req.query.page);
  console.log(req.query.page);
  console.log(req.query.borough);
  console.log(req.query.day);

  await pool.query(
    getMicListingByBoroughDay,
    [borough, day],
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

const getMicByBoroughDayFree = async (req, res) => {
  let borough = req.query.borough;
  let day = req.query.day;
  // let cost = parseInt(req.query.cost);
  let page = parseInt(req.query.page);

  console.log(req.query.borough);
  console.log(req.query.day);
  await pool.query(
    getMicListingByBoroughDayFree,
    [borough, day],
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

const getSomeMics = (req, res) => {
  console.log("getting some mics");
};

export {
  getMics,
  getMicsById,
  getMicByBorough,
  getMicByBoroughFree,
  getMicByBoroughDay,
  getMicByBoroughDayFree,
};
