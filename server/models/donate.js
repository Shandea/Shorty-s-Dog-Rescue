const mongoose = require('mongoose');
// require('dotenv').config()

const AdoptSchema = new mongoose.Schema({
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
    creditCardNumber:{
        type: Number,
        required: true
    },
   expirationDate:{
    type:Number,
    required: true
   },
   securityCode:{
    type: String,
    required: true
   },
   zipeCode:{
    type: Number,
    required: true
   },

});

module.exports = Donate = mongoose.model('donate', DonateSchema);
   





