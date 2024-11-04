// seed.js
const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/supermarket');

const seedProducts = async () => {
    await Product.deleteMany({});  // Clear existing products

    const products = [
        { name: 'Apple', price: 0.5, stock: 100, barcode: '111111' },
        { name: 'Banana', price: 0.3, stock: 150, barcode: '222222' },
        { name: 'Orange', price: 0.4, stock: 120, barcode: '333333' },
        { name: 'Milk', price: 1.2, stock: 80, barcode: '444444' }
    ];

    await Product.insertMany(products);
    console.log('Database seeded with products');
    mongoose.connection.close();
};

seedProducts().catch(error => console.error(error));
