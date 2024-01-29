const innerJoin =
  "INNER JOIN mic_address ON mics.address_id = mic_address.address_id INNER JOIN mic_cost ON mics.cost_id = mic_cost.cost_id ";

const getAllMicListing =
  "SELECT * FROM mics INNER JOIN mic_address ON mics.address_id = mic_address.address_id INNER JOIN mic_cost ON mics.cost_id = mic_cost.cost_id";

const getMicListing = "SELECT * FROM mics WHERE";

const getMicById = "SELECT * FROM mics WHERE id = $1";

const getMicListingByBorough = `SELECT * FROM mics ${innerJoin} WHERE Borough = $1`;

const getMicListingByBoroughFree =
  "SELECT * FROM mics WHERE Borough = $1 AND cost_id =1";

const getMicListingByBoroughDay =
  "SELECT * FROM mics INNER JOIN mic_address ON mics.address_id = mic_address.address_id INNER JOIN mic_cost ON mics.cost_id = mic_cost.cost_id WHERE borough = $1 AND day = $2";

const getMicListingByBoroughDayFree =
  "SELECT * FROM mics INNER JOIN mic_address ON mics.address_id = mic_address.address_id INNER JOIN mic_cost ON mics.cost_id = mic_cost.cost_id WHERE borough = $1 AND day = $2 AND cost_id =1";

export {
  getMicListing,
  getAllMicListing,
  getMicById,
  getMicListingByBorough,
  getMicListingByBoroughFree,
  getMicListingByBoroughDay,
  getMicListingByBoroughDayFree,
};
