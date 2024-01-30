import pool from "../../../db.js";
import { getMicById } from "../../mics/queries.js";

const individualController = async (req, res) => {
  const id = parseInt(req.params.id);
  await pool.query(getMicById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

export default individualController;
