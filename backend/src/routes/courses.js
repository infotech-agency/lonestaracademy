const express = require('express');
const { upload } = require('../config/cloudinary');
const authMiddleware = require('../middleware/auth');
const Course = require('../models/Course');
const router = express.Router();

// Public routes
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ error: 'Course not found' });
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Admin routes (protected)
router.post('/', authMiddleware, upload.single('image'), async (req, res) => {
  try {
    const { name, price, duration, description, category, featured, seo } = req.body;
    
    const courseData = {
      name,
      price,
      duration,
      description,
      category,
      featured: featured === 'true',
      image: req.file ? req.file.path : null,
      seo: seo ? JSON.parse(seo) : {}
    };

    const course = new Course(courseData);
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id', authMiddleware, upload.single('image'), async (req, res) => {
  try {
    const { name, price, duration, description, category, featured, seo } = req.body;
    
    const updateData = {
      name,
      price,
      duration,
      description,
      category,
      featured: featured === 'true',
      seo: seo ? JSON.parse(seo) : {}
    };

    if (req.file) {
      updateData.image = req.file.path;
    }

    const course = await Course.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!course) return res.status(404).json({ error: 'Course not found' });
    
    res.json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) return res.status(404).json({ error: 'Course not found' });
    res.json({ success: true, message: 'Course deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
