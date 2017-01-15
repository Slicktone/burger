var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var orm = require('./config/orm.js');

var port = 3000;

var app = express();

// ORM data selection

// Static content from app to the 'public' folder
app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

// Override DELETE Post
app.use(methodOverride('_method'));

// Handlebars Setup
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Routes for server access
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

app.listen(port);