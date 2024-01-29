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
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;
