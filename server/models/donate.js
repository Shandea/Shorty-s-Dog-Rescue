const mongoose = require('mongoose');

const DonateSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        default: "",
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

},{
    timestamps: true
});

module.exports = mongoose.model('Donate', DonateSchema);
