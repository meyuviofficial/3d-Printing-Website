//initializing for express
const express = require('express')
const app = express()
//initializing for path
const path = require('path')
//initializing for mongoDB
const MongoClient = require('mongodb').MongoClient;
// including routes config file
const routes=require('./routes/index');
//including DB config file
const dbConfig = require('./model/database')

app.use('/',routes);

//setting the view engine 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//setting the static folder for js, CSS, img (static files)
app.use('/static', express.static(path.join(__dirname, 'public')));
console.log("Hey Yuvi");
//server listens at 3000
app.listen(3000)

