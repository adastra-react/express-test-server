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
    }
},{
    collection: "users"
})

module.exports = mongoose.model('User', User);