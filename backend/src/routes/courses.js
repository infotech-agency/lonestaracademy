// const express = require('express');
// const { upload } = require('../config/cloudinary');
// const authMiddleware = require('../middleware/auth');
// const Course = require('../models/Course');
// const router = express.Router();

// // Public routes
// router.get('/', async (req, res) => {
//   try {
//     const courses = await Course.find().sort({ createdAt: -1 });
//     res.json(courses);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// router.get('/:id', async (req, res) => {
//   try {
//     const course = await Course.findById(req.params.id);
//     if (!course) return res.status(404).json({ error: 'Course not found' });
//     res.json(course);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Admin routes (protected)
// router.post('/', authMiddleware, upload.single('image'), async (req, res) => {
//   try {
//     const { name, price, duration, description, category, featured, seo, syllabus, highlights, tools, whoCanJoin, careerOptions, faqs } = req.body;
    
//     const courseData = {
//       name,
//       price,
//       duration,
//       description,
//       category,
//       featured: featured === 'true',
//       image: req.file ? req.file.path : null,
//       seo: seo ? JSON.parse(seo) : {},
//       syllabus: syllabus ? JSON.parse(syllabus) : [],
//       highlights: highlights ? JSON.parse(highlights) : [],
//       tools: tools ? JSON.parse(tools) : [],
//       whoCanJoin: whoCanJoin ? JSON.parse(whoCanJoin) : [],
//       careerOptions: careerOptions ? JSON.parse(careerOptions) : [],
//       faqs: faqs ? JSON.parse(faqs) : []
//     };

//     const course = new Course(courseData);
//     await course.save();
//     res.status(201).json(course);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// router.put('/:id', authMiddleware, upload.single('image'), async (req, res) => {
//   try {
//     const { name, price, duration, description, category, featured, seo, syllabus, highlights, tools, whoCanJoin, careerOptions, faqs } = req.body;
    
//     const updateData = {
//       name,
//       price,
//       duration,
//       description,
//       category,
//       featured: featured === 'true',
//       seo: seo ? JSON.parse(seo) : {},
//       syllabus: syllabus ? JSON.parse(syllabus) : [],
//       highlights: highlights ? JSON.parse(highlights) : [],
//       tools: tools ? JSON.parse(tools) : [],
//       whoCanJoin: whoCanJoin ? JSON.parse(whoCanJoin) : [],
//       careerOptions: careerOptions ? JSON.parse(careerOptions) : [],
//       faqs: faqs ? JSON.parse(faqs) : []
//     };

//     if (req.file) {
//       updateData.image = req.file.path;
//     }

//     const course = await Course.findByIdAndUpdate(req.params.id, updateData, { new: true });
//     if (!course) return res.status(404).json({ error: 'Course not found' });
    
//     res.json(course);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// router.delete('/:id', authMiddleware, async (req, res) => {
//   try {
//     const course = await Course.findByIdAndDelete(req.params.id);
//     if (!course) return res.status(404).json({ error: 'Course not found' });
//     res.json({ success: true, message: 'Course deleted' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// module.exports = router;
const express = require('express');
const { upload } = require('../config/cloudinary');
const authMiddleware = require('../middleware/auth');
const Course = require('../models/Course');
const slugify = require('slugify');
const router = express.Router();

const generateUniqueSlug = async (baseSlug, courseId = null) => {
  let slug = slugify(baseSlug, { lower: true, strict: true });
  let uniqueSlug = slug;
  let counter = 1;

  while (true) {
    const query = { slug: uniqueSlug };
    if (courseId) {
      query._id = { $ne: courseId };
    }
    const existing = await Course.findOne(query);
    if (!existing) break;
    uniqueSlug = `${slug}-${counter}`;
    counter++;
  }
  return uniqueSlug;
};

// Public routes
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:identifier', async (req, res) => {
  try {
    const { identifier } = req.params;
    let course;

    // Try finding by slug first
    course = await Course.findOne({ slug: identifier });

    // Fallback to finding by ID if not found and identifier looks like a valid ObjectId
    if (!course && identifier.match(/^[0-9a-fA-F]{24}$/)) {
      course = await Course.findById(identifier);
    }

    if (!course) return res.status(404).json({ error: 'Course not found' });
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Admin routes (protected)
router.post('/', authMiddleware, upload.single('image'), async (req, res) => {
  try {
    const { name, slug, price, duration, description, category, featured, seo, syllabus, highlights, tools, whoCanJoin, careerOptions, faqs } = req.body;
    
    // Slug Logic
    let finalSlug = slug;
    if (!finalSlug || finalSlug.trim() === '') {
      finalSlug = `${name}-course-delhi`;
    }
    finalSlug = await generateUniqueSlug(finalSlug);

    const courseData = {
      name,
      slug: finalSlug,
      price,
      duration,
      description,
      category,
      featured: featured === 'true',
      image: req.file ? req.file.path : null,
      seo: seo ? JSON.parse(seo) : {},
      syllabus: syllabus ? JSON.parse(syllabus) : [],
      highlights: highlights ? JSON.parse(highlights) : [],
      tools: tools ? JSON.parse(tools) : [],
      whoCanJoin: whoCanJoin ? JSON.parse(whoCanJoin) : [],
      careerOptions: careerOptions ? JSON.parse(careerOptions) : [],
      faqs: faqs ? JSON.parse(faqs) : []
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
    const { name, slug, price, duration, description, category, featured, seo, syllabus, highlights, tools, whoCanJoin, careerOptions, faqs } = req.body;
    
    // Slug Logic for Update
    let finalSlug = slug;
    if (!finalSlug || finalSlug.trim() === '') {
      finalSlug = `${name}-course-delhi`;
    }
    finalSlug = await generateUniqueSlug(finalSlug, req.params.id);

    const updateData = {
      name,
      slug: finalSlug,
      price,
      duration,
      description,
      category,
      featured: featured === 'true',
      seo: seo ? JSON.parse(seo) : {},
      syllabus: syllabus ? JSON.parse(syllabus) : [],
      highlights: highlights ? JSON.parse(highlights) : [],
      tools: tools ? JSON.parse(tools) : [],
      whoCanJoin: whoCanJoin ? JSON.parse(whoCanJoin) : [],
      careerOptions: careerOptions ? JSON.parse(careerOptions) : [],
      faqs: faqs ? JSON.parse(faqs) : []
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
