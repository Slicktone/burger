var express = require('express');
// using the burger.js database functions
var burger = require('../models/burger.js');

// routes will be created here and exported
var router = express.Router();

router.get('/', function(request, response) {
    burger.selectAll(function(burgers) {
        // var nonDevoured = burgers.filter(function(b) {
        //     return b.devoured === false;
        // })

        // var devoured = burgers.filter(function(b) {
        //     return b.devoured === true;
        // })

        var hbsObject = {
            burger: burgers
        };
        console.log(hbsObject);
        response.render('index', hbsObject);
    });
});

router.post('/', function(request, response) {
    var col = ["burger_name"];
    var val = [req.body.burger_name];
    burger.insertOne(col, val, function() {
        response.redirect('/');
    });
});

router.put('/:id', function(request, response) {
    var condition = 'id = ' + request.params.id;
    console.log('condition', condition);
// need objects here for request.body
    burger.updateOne({
    bar: request.body.bar
    }, condition, function() {
        response.redirect('/');
    });
});



module.exports = router;
