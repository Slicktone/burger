var connection = require('../config/connection.js');

var orm = {
    // input the table name to be selected from
    selectAll: function(burgers, callback) {
        // use connection.query to grab the data from server
        var queryString = "SELECT * FROM " + burgers + ";";
        connection.query(queryString, function(err, result) {
            if(err) {
                throw err;
            }
            callback(result);
        });
    },
    insertOne: function(burgers, cols, vals, callback) {
        var queryString = "INSERT INTO " + burgers(burger_name, devoured); 
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";

        console.log(queryString);
        
        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    updateOne: function(devoured, condition, callback) {
        var queryString = "UPDATE " + devoured;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    }
};
// create the methods that will execute the necessary MySQL commands in the controllers.
// `selectAll()` 
// `insertOne()` 
// `updateOne()`
// make a special delete method maybe? 

module.exports = orm;