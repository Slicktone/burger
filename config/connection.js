// set up SQL and make connection here
var mysql = require('mysql');

var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "password",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("Something happened while connecting: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

// exporting connection for the ORM
module.exports = connection;