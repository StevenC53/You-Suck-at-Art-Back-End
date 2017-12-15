const mongoose = require('mongoose')
const boolean = require('boolean')

mongoose.connect('mongodb://localhost/telestrations_db', {useMongoClient: true})

module.exports = mongoose
