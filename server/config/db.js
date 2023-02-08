const mysql = require('mysql2');


const db = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "a31b41c8",
    database: "login_reg"
});
  
module.exports = db;