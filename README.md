# 🛒 Supermarket POS System

Hey there! Welcome to my Supermarket POS System - where checking out groceries meets the 21st century. No more clunky cash registers from the 90s! 

This bad boy is built with Node.js and MongoDB, because who doesn't love a tech stack that actually works? It handles everything from scanning products to printing receipts, and yes, it even remembers those discount codes your customers found on Facebook.

## ✨ What's Cool About It?

- **Cashier Authentication** - Because we can't have random people playing cashier (sorry, kids!)
- **Lightning-Fast Scanning** - Beep those barcodes faster than you can say "unexpected item in bagging area"
- **Smart Discount System** - Apply those sweet, sweet discounts without needing a PhD in mathematics
- **Digital Receipts** - Save some trees while keeping track of every penny

## 🚀 Project Structure

```bash
supermarket-pos/
│
├── app.js                  # Where the magic begins
├── package.json            # The usual suspects (dependencies)
├── seed.js                # Because every database needs some starter data
│
├── controllers/           # Business logic (the brainy stuff)
├── database/             # Where data goes to hang out
├── models/               # Keeping our MongoDB schemas neat and tidy
├── public/               # All the pretty stuff users see
└── routes/               # Traffic control for our API
```

## 🛠️ Getting Started

1. **Clone this bad boy:**
   ```bash
   git clone https://github.com/Realwahba/supermarket-pos-system.git
   cd supermarket-pos
   ```

2. **Install the goodies:**
   ```bash
   npm install
   ```

3. **Fire up MongoDB** on localhost:27017 (default supermarket database)

4. **Feed the database:**
   ```bash
   node seed.js
   ```

5. **Launch this rocket:**
   ```bash
   npm start
   ```

Visit `http://localhost:3000` and witness the magic! ✨

## 🎯 How to Use It

1. Head to `http://localhost:3000/login`
2. Create your cashier account (unless you're already one of the cool kids)
3. Start scanning products like a pro
4. Watch those transactions flow smoother than your morning coffee

## 📸 See It in Action

Take a peek at what you're getting into:

### 🏪 Main POS Interface
![Main Interface](https://i.imgur.com/yqtezSP.png)
*Where the magic happens - sleek, clean, and ready for action!*

### 🎯 Transaction View
![Main Interface 2](https://imgur.com/5kSXMIH.png)
*Watch those items add up (in a good way)*

### 🔐 Login Portal
![Login Page](https://i.imgur.com/3ZVwn55.png)
*Fort Knox-level security meets user-friendly design*

### ✍️ Registration Page
![Registration Page](https://i.imgur.com/HULQha8.png)
*Join the club - it's where all the cool cashiers hang out*

## 🤝 Tech Stack Buddies

- Node.js & Express (The dynamic duo)
- MongoDB & Mongoose (Because data needs a comfy home)
- bcrypt (Keeping those passwords safer than Fort Knox)
- Good ol' HTML/CSS/JS (Sometimes the classics are the best)

## 📜 License

MIT Licensed. In human speak: Go nuts, just keep the copyright notice! 

---

Built with ❤️ and probably too much coffee by Wahba

Got questions? Found a bug? Just want to say hi? Drop me a line! After all, this POS system won't improve itself (yet).
