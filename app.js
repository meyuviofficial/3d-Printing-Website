const express = require('express') //initializing for express
const app = express()
const path = require('path') //initializing for path
const MongoClient = require('mongodb').MongoClient; //initializing for mongoDB
const routes = require('./routes/index'); // including routes config file
const dbConfig = require('./model/database') //including DB config file
var passport = require('passport');
app.use(passport.initialize());
app.use('/',routes);
app.set('view engine', 'ejs'); //setting the view engine 
app.set('views', path.join(__dirname, 'views'));
app.use('/static', express.static(path.join(__dirname, 'public'))); //setting the static folder for js, CSS, img (static files)
console.log("Hey Yuvi");
app.listen(3000) //server listens at 3000