const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const client = new MongoClient(`${process.env.dbUrl}/${process.env.dbName}`)

module.exports = {
    mongodb,
    client
}