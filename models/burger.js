var orm = require('../config/orm.js');


var burger = {
    selectAll: function(callback) {
        orm.selectAll('burgers', function(response) {
            callback(response);
        });
    },

    insertOne: function(cols, vals, callback) {
        orm.insertOne('burgers', cols, vals, function(response) {
            callback(response);
        });
    },
    
    updateOne: function(objColVals, condition, callback) {
        orm.updateOne('burgers', objColVals, condition, function(response) {
            callback(response);
        });
    }
};

module.exports = burger;