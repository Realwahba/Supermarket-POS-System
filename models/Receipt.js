// models/receipt.js
const mongoose = require('mongoose');

const receiptSchema = new mongoose.Schema({
    items: [
        {
            name: String,
            pricePerUnit: Number,
            quantity: Number,
            totalPrice: Number
        }
    ],
    subtotal: Number,
    discount: {
        amount: Number,
        description: String
    },
    total: Number,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Receipt', receiptSchema);
