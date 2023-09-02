const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const dbName = 'b46wet'
const dbUrl = `mongodb+srv://Raj2710:Raj2710@raj.x3e0h.mongodb.net/${dbName}`

const client = new MongoClient(dbUrl)


module.exports = {
    mongodb,
    client,
    dbName
}