const mongoose = require('mongoose');
// require('dotenv').config()

const AdoptSchema = new mongoose.Schema({
    dogName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number
    },
    email: {
        type: String
    },

    signature:{
        type: String,
        required: true
    },
  date:{
    type: String,
    required:true
}
});

module.exports = Adopt = mongoose.model('Adopt', AdoptSchema);



