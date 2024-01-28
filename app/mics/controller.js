import pool from "../../db.js";

const micListingSQL =
  "SELECT * FROM mics INNER JOIN mic_address ON mics.address_id = mic_address.address_id INNER JOIN mic_cost ON mics.cost_id = mic_cost.cost_id";

const selectAllMicListingSQL = "SELECT * FROM mics";

const getMics = async (req, res) => {
  await pool.query(micListingSQL, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
  console.log(await pool.query("SELECT NOW()"));
};

const getSomeMics = (req, res) => {
  console.log("getting some mics");
};

export { getMics, getSomeMics };
