const express = require('express')
const app = express()
const path = require('path')
const routes=require('./routes/index');
const MongoClient = require('mongodb').MongoClient;
const ConnectionString = "mongodb+srv://Yuvi:fa2SPsJMU8SNIgZI@yuvarajclusterwebsite-8nhjd.azure.mongodb.net/YuvarajSampleDB?retryWrites=true&w=majority"
var url = "mongodb://localhost:27017/mydb";
MongoClient.connect(ConnectionString, function (err, db) {
     if (err) throw err;
     console.log("Database created!");
     var dbo = db.db("YuvarajSampleDB");
     var myobj = {
         name: "Yuvaraj Inc",
         address: "Highway 37"
     };
     dbo.collection("YuvarajSampleCollection").insertOne(myobj, function (err, res) {
                 if (err) throw err;
                 console.log("1 document inserted");
                 db.close();
     });
    });
console.log("Hey Yuvi");
app.listen(3000)

