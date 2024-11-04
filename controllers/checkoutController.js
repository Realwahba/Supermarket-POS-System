
// controllers/checkoutController.js
const Product = require('../models/product');
const Discount = require('../models/discount');

// Scan Product
exports.scanProduct = async (req, res) => {
  const { barcode } = req.body;
  console.log("Received barcode for scanning:", barcode); // Debugging statement

  try {
    const product = await Product.findOne({ barcode });
    if (!product) {
      console.log("Product not found with barcode:", barcode); // Debugging statement
      return res.status(404).json({ message: 'Product not found' });
    }

    if (!req.session.cart) {
      req.session.cart = [];
    }
    req.session.cart.push(product);

    console.log("Product added to cart:", product.name); // Debugging statement
    res.json({ productName: product.name });
  } catch (error) {
    console.error("Error scanning product:", error); // Debugging statement
    res.status(500).json({ message: 'Error scanning product', error });
  }
};

// Apply Discount
exports.applyDiscount = async (req, res) => {
  const { discountCode } = req.body;
  console.log("Received discount code:", discountCode); // Debugging statement

  try {
    const discount = await Discount.findOne({ code: discountCode });
    if (!discount) {
      console.log("Discount code not found:", discountCode); // Debugging statement
      return res.status(404).json({ message: 'Discount code not found' });
    }

    req.session.discount = discount;
    console.log("Discount applied:", discount.percentage); // Debugging statement
    res.json({ discountPercentage: discount.percentage });
  } catch (error) {
    console.error("Error applying discount:", error); // Debugging statement
    res.status(500).json({ message: 'Error applying discount', error });
  }
};

// Complete Checkout
exports.calculateTotal = async (req, res) => {
  if (!req.session.cart || req.session.cart.length === 0) {
    console.log("Cart is empty at checkout"); // Debugging statement
    return res.status(400).json({ message: 'Cart is empty' });
  }

  let total = req.session.cart.reduce((sum, product) => sum + product.price, 0);

  if (req.session.discount) {
    total = total - (total * req.session.discount.percentage / 100);
  }

  console.log("Final total after discount:", total.toFixed(2)); // Debugging statement

  req.session.cart = [];  // Clear the cart after checkout
  req.session.discount = null;  // Clear discount after checkout

  res.json({ total: total.toFixed(2) });
};
