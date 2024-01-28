import { config } from "dotenv";
import "dotenv/config";
import pg from "pg";
const { Pool, Client } = pg;

// const pool = new Pool({
//   url: process.env.PG_URI,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

console.log(process.env);

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
  ssl: {
    rejectUnauthorized: false,
  },
});

console.log(process.env.PG_USER);
console.log(process.env.PG_HOST);
console.log(process.env.PG_DATABASE);
console.log(process.env.PG_PASSWORD);
console.log(process.env.PG_PORT);

export default pool;
