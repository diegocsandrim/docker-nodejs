'use strict';

const MongoClient = require('mongodb').MongoClient;


class MongoHelper{
    static connect(){
        return new Promise((resolve, reject) => {
            let mongoEndpoint = process.env['MONGO_DB'] || 'my-mongo';

            return MongoClient.connect(`mongodb://${mongoEndpoint}:27017/nodejs`, function(err, db) {
                if(err){
                    return reject(err);
                }
                return resolve(db);
            });    
        });
    }
    
    static migrate(db){
        return new Promise((resolve, reject) => {
            db.createCollection('useragent', function(err, collection) {
                if(err){
                    return reject(err);
                }
                return resolve(collection);
            });
        });
    }

    static insertUserAgent(db, userAgent){
        return new Promise((resolve, reject) => {
            let collection = db.collection('useragent');
            return collection.insert({name: userAgent}, {w:1}, function(err, result) {
                if(err){
                    return reject(err);
                }

                return resolve(result);
            });
        });
    }

    static getUserAgent(db){
        return new Promise((resolve, reject) => {
            let collection = db.collection('useragent');
            return collection.find({}).toArray(function(err, result) {
                if(err){
                    return reject(err);
                }

                return resolve(result);
            });
        });
    }
}

module.exports = MongoHelper;
