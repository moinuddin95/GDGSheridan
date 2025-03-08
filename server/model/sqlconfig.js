import { createPool } from "mysql2";

const db = createPool({
  host: "gdgsheridan.com",
  user: "moin",
  password: process.env.SQL_PASSWORD,
  database: "GDGSheridanDb",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default db;
