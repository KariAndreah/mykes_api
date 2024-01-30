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

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;
