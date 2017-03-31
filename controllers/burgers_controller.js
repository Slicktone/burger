var express = require('express');
// using the burger.js database functions
var burger = require('../models/burger.js');
// routes will be created here and exported
var router = express.Router();

router.get('/', function(req, res) {
    res.redirect('/burgers');
});

router.get('/burgers', function(req, resp) {
    // express callback response by calling burger.selectAll
    burger.selectAll(function(burgerData) {
// wrapper for orm.js that using MySQL query callback will return burger_data,
// render to index with handlebar
        res.render('index', { burger_data: burgerData });
    });
});
    
// post route ---> back to index
router.post('/burgers/create', function(req, res) {
    // takes the request object using it as input for burger.addBurger
    burger.create(req.body.burger_name, function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
        console.log(result);
        res.redirect("/");
    })
});

// put route ---> back to index
route.put('/burgers/update', function(req, res) {
    burger.update(req.body.burger_id, function(result) {
        // orm.js wrapper thats using SQL to update and return a console log respectively
        console.log(result);
        res.redirect("/");
    });
});



module.exports = router;
