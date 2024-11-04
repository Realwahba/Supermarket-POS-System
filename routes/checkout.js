
// routes/checkout.js
const express = require('express');
const router = express.Router();
const checkoutController = require('../controllers/checkoutController');

router.post('/scan', checkoutController.scanProduct);
router.post('/apply-discount', checkoutController.applyDiscount);
router.post('/total', checkoutController.calculateTotal);

module.exports = router;
