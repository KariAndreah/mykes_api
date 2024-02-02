import pool from "../../../db.js";
import { getMicById } from "../../mics/queries.js";

const individualController = async (req, res) => {
  const id = parseInt(req.params.id);
  let page = parseInt(req.query.page);

  await pool.query(getMicById, [id], (error, results) => {
    const pageCount = Math.ceil(results.rows.length / 10);
    if (!page) {