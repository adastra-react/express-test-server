const mongoose = require('mongoose');

const User = mongoose.Schema({
    name: {
        type: String
    },
    pin: {
        type: String
    },
    igc: {
        type: String
    },
    _id: {
        type: String
    }
})

module.exports = mongoose.model('User', User);