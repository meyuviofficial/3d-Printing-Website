const express = require('express')
const app = express()
const path = require('path')

app.set('view engine','ejs');

app.get('/', function (req, res) {
    res.render(path.join(__dirname+'/views/index'))
})
app.get('/3D-Printers', function(req,res) {
    res.render(path.join(__dirname+'/views/Printers'))
})
app.get('/3D-Printing-Services',function(req,res)
{
    res.render(path.join(__dirname+'/views/Printing_Services'))
})
app.get('/Filaments', function (req, res) {
    res.render(path.join(__dirname + '/views/filaments'))
})
app.listen(3000)