const mongoose = require('mongoose');

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
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    signature: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Adopt', AdoptSchema);
