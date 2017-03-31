var connection = require('../config/connection.js');


function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push('?');
    }
    return arr.toString();
}

function objectToSql(obj) {
    var arr = [];

    for (var key in obj) {
        arr.push(key + '=' + obj[key]);
    }
    return arr.toString();
}


var orm = {
    // input the table name to be selected from
    selectAll: function(burgerInput, callback) {
        // use connection.query to grab the data from server
        var queryString = "SELECT * FROM " + burgerInput + ";";
        connection.query(queryString, function(err, result) {
            if(err) {
                throw err;
            }
            callback(result);
        });
    },
    create: function(burgers, cols, vals, callback) {
        var queryString = "INSERT INTO " + burgers; 
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);
        
        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },

// objColVals is the columns and values that you want to update
  // an example{name: panther, sleepy: true}
    updateOne: function(devoured, objColVals, condition, callback) {
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


module.exports = orm;