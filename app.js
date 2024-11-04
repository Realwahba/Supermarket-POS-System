const express = require('express');
const session = require('express-session');
const checkoutRoutes = require('./routes/checkout');
const authRoutes = require('./routes/auth');
const Product = require('./models/product'); // Assuming you have a Product model
const db = require('./database/db');

const app = express();
app.use(express.json());

// Configure session middleware
app.use(session({
    secret: 'supermarket_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true for HTTPS
}));

// Serve static files from 'public' folder
app.use(express.static('public'));

// Authentication routes
app.use('/auth', authRoutes);

// Restrict access to /checkout routes for logged-in users only
app.use('/checkout', (req, res, next) => {
    if (!req.session.userId) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
}, checkoutRoutes);

// Get all products (new route)
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products' });
    }
});

// Add a new product (new route)
app.post('/products', async (req, res) => {
    const { name, price, stock, barcode } = req.body;
    try {
        const newProduct = new Product({ name, price, stock, barcode });
        await newProduct.save();
        res.status(201).json({ message: 'Product added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error adding product' });
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
