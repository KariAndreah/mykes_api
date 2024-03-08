import { PrismaClient } from "@prisma/client";

// import sql from "sql";

// sql.setDialect("postgres");

// var mics = sql.define({
//   name: mics,
//   columns: [
//     id,
//     borough,
//     confirmed,
//     day,
//     name,
//     start_time,
//     address_id,
//     cost_id,
//     host_id,
//     signup_id,
//     notes,
//     occurence_id,
//   ],
// });

const dayCase =
  " CASE WHEN Day = 'Sunday' THEN 1 WHEN Day = 'Monday' THEN 2 WHEN Day = 'Tuesday' THEN 3 WHEN Day = 'Wednesday' THEN 4 WHEN Day = 'Thursday' THEN 5 WHEN Day = 'Friday' THEN 6 WHEN Day = 'Saturday' THEN 7 END ASC";

const innerJoin =
  "INNER JOIN mic_address ON mics.address_id = mic_address.address_id INNER JOIN mic_cost ON mics.cost_id = mic_cost.cost_id ORDER BY borough asc, start_time asc ";

const getAllMicListing =
  "SELECT * FROM mics JOIN mic_address ON mics.address_id = mic_address.address_id JOIN mic_cost ON mics.cost_id = mic_cost.cost_id ORDER BY start_time asc";

const getAllFreeMicListing =
  "SELECT * FROM mics INNER JOIN mic_address ON mics.address_id = mic_address.address_id WHERE cost_id=1 ORDER BY start_time asc";

const getMicListing = "SELECT * FROM mics ORDER BY start_time asc";

// const getMicById =
//   "SELECT * FROM mics INNER JOIN mic_address ON mics.address_id = mic_address.address_id INNER JOIN mic_cost ON mics.cost_id = mic_cost.cost_id INNER JOIN mic_host ON mics.host_id = mic_host.host_id WHERE id = $1";

const getMicById =
  "SELECT * FROM mics INNER JOIN mic_address ON mics.address_id = mic_address.address_id INNER JOIN mic_cost ON mics.cost_id = mic_cost.cost_id INNER JOIN mic_host ON mics.host_id = mic_host.host_id INNER JOIN mic_occurrence ON mics.occurrence_id = mic_occurrence.occurrence_id INNER JOIN signup_instructions ON mics.signup_id = signup_instructions.signup_id WHERE id = $1";

// const getMicById = mics
//   .select(mic.id)
//   .from(mics)
//   .where(mics.name.equals(1))
//   .toQuery();

// console.log("this is by id", getMicById);
// const getMicById =
//   "SELECT * FROM mics JOIN mic_address ON mics.address_id = mic_address.address_id JOIN mic_cost ON mics.cost_id = mic_cost.cost_id JOIN mic_host ON mics.host_id = mic_host.host_id WHERE id = ANY($1)";

const getMicListingByBorough = `SELECT * FROM mics ${innerJoin} WHERE Borough = ANY($1) ORDER BY start_time asc`;

const getMicListingByBoroughFree =
  "SELECT * FROM mics WHERE Borough = ANY($1) AND cost_id =1 ORDER BY start_time asc";

const getMicListingByDay = `SELECT * FROM mics ${innerJoin} WHERE Day = $1 ORDER BY start_time asc`;

const getMicListingByDayFree = `SELECT * FROM mics ${innerJoin} WHERE Day = $1 ORDER BY start_time asc`;

// const getMicListingByBoroughDay =
//   "SELECT * FROM mics JOIN mic_address ON mics.address_id = mic_address.address_id JOIN mic_cost ON mics.cost_id = mic_cost.cost_id WHERE borough = ($1) AND day = $2";

const getMicListingByBoroughDay =
  "SELECT * FROM mics JOIN mic_address ON mics.address_id = mic_address.address_id JOIN mic_cost ON mics.cost_id = mic_cost.cost_id WHERE borough = ANY($1) AND day = $2 ORDER BY start_time asc";

const getMicListingByBoroughDayFree =
  "SELECT * FROM mics JOIN mic_address ON mics.address_id = mic_address.address_id WHERE borough = ANY($1) AND day = $2 AND cost_id=1 ORDER BY start_time asc";

const getMicListingByBoroughDayTime = `SELECT * FROM mics JOIN mic_address ON mics.address_id = mic_address.address_id JOIN mic_cost ON mics.cost_id = mic_cost.cost_id INNER JOIN mic_occurrence ON mics.occurrence_id = mic_occurrence.occurrence_id WHERE borough = ANY($1) AND day = ANY($2) AND start_time >= $3 ORDER BY ${dayCase}, start_time asc`;

const getMicListingByBoroughDayTimeFree = `SELECT * FROM mics JOIN mic_address ON mics.address_id = mic_address.address_id INNER JOIN mic_occurrence ON mics.occurrence_id = mic_occurrence.occurrence_id WHERE borough = ANY($1) AND day = ANY($2) AND start_time >= $3 AND cost_id=1 ORDER BY ${dayCase}, start_time asc`;

const prisma = new PrismaClient();

let allMics;

async function main() {
  // ... you will write your Prisma Client queries here
  allMics = await prisma.mics.findMany();

  // console.log("IS PRISMA WORKING: ", allMics);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

console.log("what is this kari", allMics);
export {
  allMics,
  getMicListing,
  getAllFreeMicListing,
  getAllMicListing,
  getMicById,
  getMicListingByBorough,
  getMicListingByBoroughFree,
  getMicListingByDay,
  getMicListingByDayFree,
  getMicListingByBoroughDayTime,
  getMicListingByBoroughDayTimeFree,
  getMicListingByBoroughDay,
  getMicListingByBoroughDayFree,
};
