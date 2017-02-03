'use strict';

var express = require('express');
var router = express.Router();
var MongoHelper = require('../mongo-helper');

/* GET users listing. */
router.get('/', function(req, res, next) {
  let db;
  MongoHelper.connect()
    .then((result)=>{
      db = result;
      return MongoHelper.insertUserAgent(db, req.get('user-agent'));
    }).then((result)=>{
      return MongoHelper.getUserAgent(db);
    }).then((result)=>{
      console.log(result);
      return res.json(result);
    }).catch((err) => {
      next(err);
    });
});

module.exports = router;
