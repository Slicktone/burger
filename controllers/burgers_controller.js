var express = require('express');
// using the burger.js database functions
var burger = require('../models/burger.js');

// routes will be created here and exported
var router = express.Router();

router.get('/', function(request, response) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        response.render('index', hbsObject);
    });
});

router.post('/', function(request, response) {
    burger.insertOne([
        // need insert objects here
        "???", 
        "???"
    ], [
        request.body.???, 
        request.body.???
    ], function() {
        response.redirect('/');
    });
});

router.put('/:id', function(request, response) {
    var condition = 'id = ' + request.params.id;
    console.log('condition', condition);
// need objects here for request.body
    burger.updateOne({
    ???: request.body.???
    }, condition, function() {
        response.redirect('/');
    });
});



module.exports = router;
