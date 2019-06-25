var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var express = require("express");
var app = express();

mongo = require('mongodb')

app.listen(8081, () => {
	console.log("Server running on port 3000");
});

var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017';

/* List all Documents */

app.get('/', (req,res,next) => {
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
    res.json(result);
  });
}); 
});

/*
Search Document using ID
*/

app.get('/1/:listId', (req, res, next) => {
MongoClient.connect(url, function(err, db) {
  var db = db.db("mydb");
  var collection = db.collection('customers');
  
  var listId = req.params.listId;

  collection.findOne({ _id: new mongo.ObjectId(listId) }, function(err, result) {   
  res.json(result);
 });
});
});

/*
Delete Document using ID
*/

app.get('/d/:listId', (req, res, next) => {
MongoClient.connect(url, function(err, db) {
  var db = db.db("mydb");
  var collection = db.collection('customers');
  
  var listId = req.params.listId;

  collection.deleteOne({ _id: new mongo.ObjectId(listId) }, function (err, results) {   
  });
  res.json({success: listId})
});
});

/*
Create Document using ID
  
 
*/








