// *** Include Modules: express, handlebars, method-override, body-parser
var express = require('express');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

// Assign app to Express
var app = express();
// Assign PORT to Heroku port or 8080
var PORT = process.env.PORT || 8080;
// Assign routes to Create routes
var routes = require('./controllers/burgers_controller')(app);

// *** Express configuration
// Static content served from /public directory
app.use(express.static('public'));
// Body parsing for URL encoded and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Routing
app.use(routes);
// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// *** Listener
app.listen(PORT, function() {
  console.log('App listening on PORT: ' + PORT);
});