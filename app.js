'use strict';

const app = require('express')();
const MongoHelper = require('./mongo-helper');

app.get('/', function (req, res, next) {
  let db;
  MongoHelper.connect()
    .then((connectResult) => {
      db = connectResult;
      return MongoHelper.insertUserAgent(db, req.get('user-agent'));
    }).then((insertResult) => {
      return MongoHelper.getUserAgent(db);
    }).then((getResult) => {
      return res.json(getResult);
    }).catch((err) => {
      next(err);
    });
});

app.listen(3000, function () {
  console.log('Listing to http://localhost:3000')
});
