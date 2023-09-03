const mongoose = require('mongoose')

mongoose.connect(`${process.env.dbUrl}/${process.env.dbName}`)

module.exports = mongoose
