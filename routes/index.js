const express = require('express')
const routes = express.Router();

        routes.get('/', function (req, res) {
            res.render('index')
        })
        routes.get('/3D-Printers', function (req, res) {
            res.render('Printers')
        })
        routes.get('/3D-Printing-Services', function (req, res) {
            res.render('Printing_Services')
        })
        routes.get('/Filaments', function (req, res) {
            res.render('filaments')
        })
        console.log("hey Yuvi !! I'm from indexx.js");

module.exports = routes;