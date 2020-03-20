const express = require('express')
const app = express()
const path = require('path')
const routes=require('./routes/index');

console.log("Hey Suvi");
app.use('/',routes);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/static', express.static(path.join(__dirname, 'public')))

console.log("Hey Yuvi");
app.listen(3000)

