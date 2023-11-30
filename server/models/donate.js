const mongoose = require('mongoose');
// require('dotenv').config()

const DonateSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    amountToDonate: {
        type: Number,
    },
    creditCardNumber: {
        type: Number,
        required: true
    },
    expirationDate: {
        type: String,
        required: true
    },
    securityCode: {
        type: String,
        required: true
    },
    zipCode: {
        type: Number,
        required: true
    },

});

module.exports = mongoose.model('Donate', DonateSchema);






