import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

db.getConnection()
  .then(() => console.log("Connected to the MySQL database"))
  .catch((err) =>
    console.error("Failed to connect to the MySQL database", err)
  );

export default db;
