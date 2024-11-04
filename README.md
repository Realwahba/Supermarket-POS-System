# Supermarket POS System

A simple **Point-of-Sale (POS) system** for supermarket cashiers, built with **Node.js** and **MongoDB**. This project supports basic checkout processes, user authentication, product scanning, and discount handling.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Dependencies](#dependencies)
- [License](#license)

---

### Features

- **User Authentication**: Register and login functionality for cashiers.
- **Product Scanning**: Scan products by barcode.
- **Discount Management**: Apply discounts at checkout.
- **Receipt Generation**: Generates and stores transaction receipts.

---

### Project Structure

```bash
supermarket-pos/
│
├── app.js                  # Main application entry point
├── package.json            # Project metadata and dependencies
├── seed.js                 # Script for seeding initial product data
│
├── controllers/            # Business logic controllers
│   └── checkoutController.js
│
├── database/               # Database configuration
│   ├── db.js               # Database connection setup
│   └── products.js         # Sample product data
│
├── models/                 # Database schemas for MongoDB
│   ├── discount.js         # Schema for discount codes
│   ├── product.js          # Schema for products
│   ├── Receipt.js          # Schema for transaction receipts
│   └── user.js             # Schema for user accounts
│
├── public/                 # Frontend assets
│   ├── index.html          # Main POS interface
│   ├── login.html          # Login page
│   ├── register.html       # Registration page
│   ├── style.css           # Custom styles
│   ├── login.js            # Login form handling
│   ├── register.js         # Registration form handling
│   ├── script.js           # UI scripts
│   └── js/pos.js           # Product scanning functionality
│
└── routes/                 # API routes
    ├── auth.js             # Authentication routes
    └── checkout.js         # Checkout routes
```

1. __Installation__

Clone the repository:
git clone https://github.com/yourusername/supermarket-pos.git
cd supermarket-pos

2. __Install dependencies:__

npm install

3. Set up MongoDB: Ensure MongoDB is running and accessible on localhost:27017. The database is configured to supermarket by default.

4. __Seed the database:__

node seed.js

__The application should now be accessible at http://localhost:3000.__

__Usage__
1. Navigate to http://localhost:3000/login to log in as a cashier.
2. Register a new user if none exists via the registration page.
3. .Scan Products by entering barcodes on the main POS interface.
4. Apply Discounts as available, and finalize transactions to generate receipts.

### Screenshots

Here are some screenshots of the Supermarket POS System:

### - Main Interface
![Main Interface](https://i.imgur.com/yqtezSP.png)

### - Main Interface 2
![Main Interface 2](https://imgur.com/5kSXMIH.png)

### - Login Page
![Login Page](https://i.imgur.com/3ZVwn55.png)

### - Registration Page
![Registration Page](https://i.imgur.com/HULQha8.png)

  **Dependencies**
  
- Node.js and Express for the server.
- MongoDB and Mongoose for data storage.
- bcrypt for password hashing.
- Frontend: Basic HTML/CSS and JavaScript for POS UI and interactions.

__License__

This project is licensed under the MIT License.

Simply replace yourusername in the clone command with your GitHub username, and it’s ready to go. Let me know if you need further customization!


  ### License

© Wahba 2024. All rights reserved.

Permission is hereby granted to any person obtaining a copy of this software and associated documentation files (the "Software"), to use, copy, modify, merge, publish, and distribute copies of the Software, subject to the following conditions:

1. The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
2. The Software is provided "as is," without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, and non-infringement. In no event shall the authors or copyright holders be liable for any claim, damages, or other liability, whether in an action of contract, tort, or otherwise, arising from, out of, or in connection with the Software or the use or other dealings in the Software.

By using this software, you agree to these terms.

