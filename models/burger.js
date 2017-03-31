var orm = require('../config/orm.js');


var burger = {
    selectAll: function(callback) {
        orm.selectAll('burgers', function(response) {
            callback(response);
        });
    },

    create: function(name, callback) {
        orm.create('burgers', [
            'burger_name', 'devoured'
        ], [
            name, false
        ], callback);
    },
    
    update: function(id, callback) {
        var condition = "id=" + id;
        orm.update("burgers", {
            devoured: true
        }, condition, callback);
    }
};

module.exports = burger;