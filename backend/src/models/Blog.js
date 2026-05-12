const mongoose = require('mongoose');

const seoSchema = new mongoose.Schema({
  title: String,
  description: String,
  keywords: String,
  ogTitle: String,
  ogDescription: String
}, { _id: false });

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  excerpt: String,
  content: { type: String, required: true },
  category: String,
  author: { type: String, default: 'Admin' },
  image: String,
  featured: { type: Boolean, default: false },
  publishedAt: { type: Date, default: Date.now },
  seo: seoSchema
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);
