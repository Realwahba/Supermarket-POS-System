// models/discount.js
const mongoose = require('mongoose');

const discountSchema = new mongoose.Schema({
    code: { type: String, required: true, unique: true },
    type: { type: String, enum: ['percentage', 'flat'], required: true },
    amount: { type: Number, required: true },
    minPurchase: { type: Number, default: 0 }  // Minimum purchase required to apply
});

module.exports = mongoose.model('Discount', discountSchema);
