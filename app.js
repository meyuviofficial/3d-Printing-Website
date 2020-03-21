const express = require('express')
const app = express()
const path = require('path')
const routes=require('./routes/index');
const MongoClient = require('mongodb').MongoClient;
const dbConfig = require('./model/database')

app.use('/',routes);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/static', express.static(path.join(__dirname, 'public')))
console.log("Hey Yuvi");
app.listen(3000)

