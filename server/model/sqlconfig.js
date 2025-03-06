import { createConnection } from "mysql2";

const db = createConnection({
  host: "gdgsheridan.com",
  user: "moin",
  password: process.env.SQL_PASSWORD,
  database: "GDGSheridanDb",
});

db.connect((err) => {
  if (err) {
    console.error("Could'nt connect to SQL server \n Error: " + err);
  }
  console.log("sql connected");
});

export default db;
