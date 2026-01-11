const express = require('express');
const PORT = process.env.PORT || 5000;

import dotenv from 'dotenv';
dotenv.config();
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const multer = require('multer');
const bodyParser = require('body-parser');
const Product = require('./models/Product');
const path = require('path');
const cors = require('cors');
const session = require('express-session'); // 👈 Added session

const app = express();

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("✅ Connected to DB:", mongoose.connection.name);
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });


// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:3000",
  credentials: true
}));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files
app.use('/uploads', express.static('uploads'));

// Session Middleware
app.use(session({
  secret: 'foreverSecretKey', 
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Secure true only if HTTPS
}));

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// ✅ Middleware to check if logged in
function isAuthenticated(req, res, next) {
  if (req.session && req.session.user) {
    return next();
  } else {
    return res.redirect('/login-form');
  }
}

// ✅ Render Insert Form Page (only for logged-in)
app.get("/insert-product", isAuthenticated, async (req, res) => {
  res.render("insert-product");
});

// ✅ POST Route: Upload Product
app.post('/api/product', isAuthenticated, upload.single('image'), async (req, res) => {
  try {
    const { title, price, category, type, description } = req.body;
    const image = req.file ? req.file.path : '';

    const product = new Product({ title, price, image, category, type, description });
    await product.save();

    res.redirect("/manage-product");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET API: Fetch all products (JSON)
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET View: Render products as HTML table (protected)
app.get('/manage-product', isAuthenticated, async (req, res) => {
  try {
    const products = await Product.find();
    res.render('manage-product', { products });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Render Edit Form (protected)
app.get('/edit-product/:id', isAuthenticated, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.render('edit-product', { product });
  } catch (err) {
    res.status(500).send('Error loading product');
  }
});

// ✅ Handle Update (with optional image upload) (protected)
app.post('/update-product/:id', isAuthenticated, upload.single('image'), async (req, res) => {
  try {
    const { title, price, category, type, description } = req.body;
    const product = await Product.findById(req.params.id);

    product.title = title;
    product.price = price;
    product.category = category;
    product.type = type;
    product.description = description;

    if (req.file) {
      product.image = req.file.path;
    }

    await product.save();
    res.redirect('/manage-product');
  } catch (err) {
    res.status(500).send('Update failed');
  }
});

// ✅ Delete Product (protected)
app.post('/delete-product/:id', isAuthenticated, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/manage-product');
  } catch (err) {
    res.status(500).send('Failed to delete product');
  }
});

// ✅ Fetch Single Product (API)
app.get("/api/products/:id", async (req, res) => {
  try {
      const product = await Product.findById(req.params.id);
      if (!product) {
          return res.status(404).json({ message: "Product not found" });
      }
      res.json(product);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});

// ✅ Render Login Page
app.get("/login-form", (req, res) => {
  res.render("login", { error: null });
});

// ✅ Handle Login Form Submission
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const dummyEmail = "admin@example.com";
  const dummyPassword = "123456";

  if (email === dummyEmail && password === dummyPassword) {
    req.session.user = email; // Store user session
    res.redirect("/manage-product");
  } else {
    res.render("login", { error: "Invalid email or password!" });
  }
});

// ✅ Logout Route
app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.send('Logout failed');
    }
    res.redirect('/login-form');
  });
});

// ✅ Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
