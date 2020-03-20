const express = require('express')
const app = express()
const path = require('path')
// const routes = express.Router();

        app.get('/', function (req, res) {
            res.render('index')
        })
        app.get('/3D-Printers', function (req, res) {
            res.render('Printers')
        })
        app.get('/3D-Printing-Services', function (req, res) {
            res.render('Printing_Services')
        })
        app.get('/Filaments', function (req, res) {
            res.render('filaments')
        })
        console.log("hey Yuvi !! I'm from indexx.js");

module.exports = app;