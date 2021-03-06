const fs = require("fs");
const path = require("path");
const dbConnection = require("./db_connection");

const sqlPath = path.join(__dirname, "build.sql");
const sql = fs.readFileSync(sqlPath).toString();
const runDbBuild = cb => {
  dbConnection.query(sql, cb);
};

runDbBuild();

module.exports = runDbBuild;
