const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/telestrations_db', {useMongoClient: true})

module.exports = mongoose
