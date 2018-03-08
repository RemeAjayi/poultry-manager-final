const path = require('path');
const express = require('express');

// create Express app
var app = express();

// setup views folder
app.set('views', path.join(__dirname, '../views'));
// setup view engine
app.set('view engine', 'ejs');

// setup static files directory
app.use(express.static(path.join(__dirname, '../public')));

// define app routes
app.use('/', require('../controllers/dashboard'));

// start Node server
app.listen(process.env.PORT || 3000, () => {
   console.log("Server is up on port 3000"); 
});