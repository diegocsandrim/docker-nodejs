'use strict';

const app = require('express')();
const MongoHelper = require('./mongo-helper');

app.get('/', function (req, res) {
  let db;
  MongoHelper.connect()
    .then((result)=>{
      db = result;
      return MongoHelper.insertUserAgent(db, req.get('user-agent'));
    }).then((result)=>{
      return MongoHelper.getUserAgent(db);
    }).then((result)=>{
      return res.json(result);
    }).catch((err) => {
      next(err);
    });
});

app.listen(3000, function () {
  console.log('Listing to http://localhost:3000')
});
