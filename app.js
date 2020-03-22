const express = require('express') //initializing for express
const app = express()
const path = require('path') //initializing for path
const MongoClient = require('mongodb').MongoClient; //initializing for mongoDB
const dbConfig = require('./model/database') //including DB config file
var passport = require('passport');
var bodyParser = require('body-parser');

require('./config/passport')(passport);

app.use(passport.initialize());
app.use(bodyParser());
// app.use('/',routes);
app.set('view engine', 'ejs'); //setting the view engine 
app.set('views', path.join(__dirname, 'views'));
app.use('/static', express.static(path.join(__dirname, 'public'))); //setting the static folder for js, CSS, img (static files)
const routes = require('./routes/index')(app,passport); // including routes config file
console.log("Hey Yuvi");
app.listen(3000) //server listens at 3000