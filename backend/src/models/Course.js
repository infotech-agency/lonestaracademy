const mongoose = require('mongoose');

const seoSchema = new mongoose.Schema({
  title: String,
  description: String,
  keywords: String,
  ogTitle: String,
  ogDescription: String
}, { _id: false });

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: String,
  duration: String,
  description: String,
  category: String,
  image: String,
  featured: { type: Boolean, default: false },
  seo: seoSchema
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);
