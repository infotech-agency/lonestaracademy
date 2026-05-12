const express = require('express');
const { upload } = require('../config/cloudinary');
const authMiddleware = require('../middleware/auth');
const Blog = require('../models/Blog');
const router = express.Router();

// Public routes
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ publishedAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:slugOrId', async (req, res) => {
  try {
    let blog;
    // Check if valid ObjectId
    if (req.params.slugOrId.match(/^[0-9a-fA-F]{24}$/)) {
      blog = await Blog.findById(req.params.slugOrId);
    } else {
      blog = await Blog.findOne({ slug: req.params.slugOrId });
    }
    
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Admin routes (protected)
router.post('/', authMiddleware, upload.single('image'), async (req, res) => {
  try {
    const { title, slug, excerpt, content, category, author, featured, publishedAt, seo } = req.body;
    
    let imageUrl = null;
    if (req.file) {
      imageUrl = req.file.path.startsWith('http') ? req.file.path : `/uploads/${req.file.filename}`;
    }

    const blogData = {
      title,
      slug: slug || title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''),
      excerpt,
      content,
      category,
      author,
      featured: featured === 'true',
      publishedAt: publishedAt || Date.now(),
      image: imageUrl,
      seo: seo ? JSON.parse(seo) : {}
    };

    const blog = new Blog(blogData);
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id', authMiddleware, upload.single('image'), async (req, res) => {
  try {
    const { title, slug, excerpt, content, category, author, featured, publishedAt, seo } = req.body;
    
    const updateData = {
      title,
      slug,
      excerpt,
      content,
      category,
      author,
      featured: featured === 'true',
      publishedAt,
      seo: seo ? JSON.parse(seo) : {}
    };

    if (req.file) {
      updateData.image = req.file.path.startsWith('http') ? req.file.path : `/uploads/${req.file.filename}`;
    }

    const blog = await Blog.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    
    res.json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    res.json({ success: true, message: 'Blog deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
