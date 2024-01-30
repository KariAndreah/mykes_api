const innerJoin =
  "INNER JOIN mic_address ON mics.address_id = mic_address.address_id INNER JOIN mic_cost ON mics.cost_id = mic_cost.cost_id ";

const getAllMicListing =
  "SELECT * FROM mics INNER JOIN mic_address ON mics.address_id = mic_address.address_id INNER JOIN mic_cost ON mics.cost_id = mic_cost.cost_id";

const getAllFreeMicListing =
  "SELECT * FROM mics INNER JOIN mic_address ON mics.address_id = mic_address.address_id WHERE cost_id=1";

const getMicListing = "SELECT * FROM mics WHERE";

const getMicById = "SELECT * FROM mics WHERE id = $1";

const getMicListingByBorough = `SELECT * FROM mics ${innerJoin} WHERE Borough = ANY($1)`;

const getMicListingByBoroughFree =
  "SELECT * FROM mics WHERE Borough = ANY($1) AND cost_id =1";

const getMicListingByDay = `SELECT * FROM mics ${innerJoin} WHERE Day = $1`;

const getMicListingByDayFree = `SELECT * FROM mics ${innerJoin} WHERE Day = $1`;

// const getMicListingByBoroughDay =
//   "SELECT * FROM mics JOIN mic_address ON mics.address_id = mic_address.address_id JOIN mic_cost ON mics.cost_id = mic_cost.cost_id WHERE borough = ($1) AND day = $2";

const getMicListingByBoroughDay =
  "SELECT * FROM mics JOIN mic_address ON mics.address_id = mic_address.address_id JOIN mic_cost ON mics.cost_id = mic_cost.cost_id WHERE borough = ANY($1) AND day = $2";

const getMicListingByBoroughDayFree =
  "SELECT * FROM mics JOIN mic_address ON mics.address_id = mic_address.address_id WHERE borough = ANY($1) AND day = $2 AND cost_id=1";

export {
  getMicListing,
  getAllFreeMicListing,
  getAllMicListing,
  getMicById,
  getMicListingByBorough,
  getMicListingByBoroughFree,
  getMicListingByDay,
  getMicListingByDayFree,
  getMicListingByBoroughDay,
  getMicListingByBoroughDayFree,
};
