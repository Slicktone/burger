var connection = require('../config/connection.js');

// create the methods that will execute the necessary MySQL commands in the controllers.
// `selectAll()` 
// `insertOne()` 
// `updateOne()` 

var burger = {
    selectAll: function(callback) {
        orm.selectAll('burger', function(response) {
            callback(response);
        });
    },

    insertOne: function(cols, vals, callback) {
        orm.insertOne('burger', cols, vals, function(response) {
            callback(response);
        });
    },
    
    updateOne: function(objColVals, condition, callback) {
        orm.updateOne('burger', objColVals, condition, function(response) {
            callback(response);
        });
    }
};

module.exports = burger;