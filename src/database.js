const mongoose = require('mongoose');

const { database } = require('./keys');

mongoose.connect(database.URI, {
    useNewUrlParser : true
})
    .then(db=>console.log("DB is connected"))
    .catch(error=>console.log("Error arise please check the BD connection". error));