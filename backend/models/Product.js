const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String },
  category: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true }, // ✅ New field
});

module.exports = mongoose.model('Product', ProductSchema);
