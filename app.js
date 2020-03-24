const express = require('express') //initializing for express
const app = express()
const path = require('path') //initializing for path
const MongoClient = require('mongodb').MongoClient; //initializing for mongoDB
const dbConfig = require('./model/database') //including DB config file
const passport = require('passport');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');

mongoose.connect(dbConfig.ConnectionString);    //db connection

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(bodyParser());
app.use(cookieParser());
app.use(passport.session());
app.use(session({secret: 'ExpectationKills'}));
// app.use('/',routes);
app.set('view engine', 'ejs'); //setting the view engine 
app.set('views', path.join(__dirname, 'views'));
app.use('/static', express.static(path.join(__dirname, 'public'))); //setting the static folder for js, CSS, img (static files)
const routes = require('./routes/index')(app,passport); // including routes config file
console.log("Hey Yuvi");
app.listen(3000) //server listens at 3000